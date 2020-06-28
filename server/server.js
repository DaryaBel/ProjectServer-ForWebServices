const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const dbConfig = require("./db.config.js");
const fileUpload =  require("express-fileupload");
const path = require("path");
const uniqueFilename = require("unique-filename");
const serveStatic = require("serve-static");
const app = express();
const history = require('connect-history-api-fallback');
const port = process.env.PORT || 3001

// Обработка статических файлов
app.use("/", serveStatic(path.join(__dirname, "../dist/project")));

// История
app.use(history());

// Загрузка файлов
app.use(fileUpload({
  createParentPath: true
}));

// Парсинг json
app.use(bodyParser.json());

// Парсинг запросов по типу: application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Настройка CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, PUT, POST, DELETE, OPTIONS"
  );
  next();
});
let connection;
if (process.env.NODE_ENV === 'production') {
connection = mysql.createPool({
  host: dbConfig.PROD.HOST,
  user: dbConfig.PROD.USER,
  password: dbConfig.PROD.PASSWORD,
  database: dbConfig.PROD.DB,
  charset: 'utf8_general_ci',
  connectionLimit: 10
});
} else { 
connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
  charset: 'utf8_general_ci',
  connectionLimit: 10
});
}
// Создание соединения с базой данных

connection.getConnection((err, connect) => {
  if (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.error("Database connection was closed.");
    }
    if (err.code === "ER_CON_COUNT_ERROR") {
      console.error("Database has too many connections.");
    }
    if (err.code === "ECONNREFUSED") {
      console.error("Database connection was refused.");
    }
  } else {
    connect.query('SET NAMES "utf8"');
    connect.query('SET CHARACTER SET "utf8"');
    connect.query('SET SESSION collation_connection = "utf8_general_ci"');
    console.log("Успешно соединено с БД");
  }
  if (connect) connect.release();
});


//Обработка входа
app.post("/api/login", (req, res) => {
  if (!req.body) return res.sendStatus(400).send("Данные не пришли");
  console.log('Пришёл POST запрос для входа:');
  console.log(req.body);
  connection.query(`SELECT * FROM users WHERE (login="${req.body.login}") AND (password="${req.body.password}")`,
    function (err, results) {
      if (err) {
        res.status(500).send('Ошибка сервера при получении пользователя по логину')
        console.log(err);
      }
      console.log('Результаты проверки существования пользователя:');
      if (results !== undefined) {
        console.log(results[0]);
        if (results[0] === undefined) {
          res.json("not exist");
        } else {
          res.json(results);
        }
      }
    });
})


// Регистрация пользователя
app.post("/api/registration", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для пользователей:');
  console.log(req.body);
  connection.query(`SELECT * FROM users WHERE login='${req.body.login}'`, function (error, results) {
    if (error) {
      res.status(500).send('Ошибка сервера при получении пользователей с таким же логином')
      console.log(error);
    }
    console.log('Результаты проверки существования логина:');
    console.log(results[0]);
    if (results[0] === undefined) {
      connection.query('INSERT INTO `users` (`id`, `login`, `password`, `name`, `role`) VALUES (NULL, ?, ?, ?, ?)',
        [req.body.login, req.body.password, req.body.name, req.body.role],
        function () {
          console.log('Запрос на проверку существоавания созданной записи в БД');
          connection.query(`SELECT * FROM users WHERE login="${req.body.login}"`,
            function (err, result) {
              if (err) {
                res.status(500).send('Ошибка сервера при получении пользователя по логину')
                console.log(err);
              } else {
                console.log(result);
                res.json(result);
              }
            });
        })
    } else {
      res.json("exist");
    }
  });

})


//Обработка получения списка товаров
app.get('/api/products', function (req, res) {
  try {
    connection.query('SELECT * FROM `products`', function (error, results) {
      if (error) {
        res.status(500).send('Ошибка сервера при получении названия товаров')
        console.log(error);
      }
      console.log('Результаты получения товаров');
      console.log(results);
      res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
});

//Обработка получения архива товаров
app.get("/api/archive", function (req, res) {
  try {
    connection.query("SELECT * FROM `archive`", function (error, results) {
      if (error) {
        res.status(500).send("Ошибка сервера при архива товаров");
        console.log(error);
      }
      console.log("Результаты получения архива товаров");
      console.log(results);
      res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
});


// Обработка удаления товара
app.delete("/api/delete/:id", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл DELETE запрос для удаления карточки:');
  console.log(req.body);
  connection.query(`DELETE FROM products WHERE id=${req.params.id}`,
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при удалении карточки по id')
        console.log(err);
      }
      console.log('Удаление прошло успешно');
      res.json("delete");
    });
  
})

// Обработка удаления архивного товара
app.delete("/api/archive/:id", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log("Пришёл DELETE запрос для удаления карточки из архива:");
  console.log(req.body);
  connection.query(`DELETE FROM archive WHERE id=${req.params.id}`, function (
    err
  ) {
    if (err) {
      res.status(500).send("Ошибка сервера при удалении карточки archive");
      console.log(err);
    }
    console.log("Удаление прошло успешно");
    res.json("delete");
  });
});


// Обработка создания карточки
app.post("/api/add", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для создания карточки:');
  console.log(req.body);
  connection.query(`INSERT INTO products (filename, name, artikul, number, price, weight, description, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
  [req.body.filename, req.body.name, req.body.artikul, req.body.number, req.body.price, req.body.weight, req.body.description, req.body.ingredients],
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при cоздании карточки')
        console.log(err);
      }
      console.log('Создание прошло успешно');
      connection.query(`SELECT * FROM products ORDER BY id DESC LIMIT 1`,
        function (e, r) {
          if (e) {
            res.status(500).send('Ошибка сервера при созданной карточки')
            console.log(e);
          } else {
            console.log(r[0].id);
            res.json(r[0].id);
          }
        });
      // res.json("create");
    });
})

// Обработка создания в архиве карточки
app.post("/api/archive", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log("Пришёл POST запрос для создания карточки в архиве:");
  console.log(req.body);
  connection.query(
    `INSERT INTO archive (filename, name, artikul, number, price, weight, description, ingredients) VALUES (?, ?, ?, ?, ?, ?, ?, ?);`,
    [
      req.body.filename,
      req.body.name,
      req.body.artikul,
      req.body.number,
      req.body.price,
      req.body.weight,
      req.body.description,
      req.body.ingredients
    ],
    function (err) {
      if (err) {
        res.status(500).send("Ошибка сервера при cоздании карточки в архиве");
        console.log(err);
      }
      console.log("Создание в архиве прошло успешно");
      res.json("create");
    }
  );
})

// Обработка получения информации об одном товаре
app.post("/api/onecard", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для загрузки страницы о товаре:');
  console.log(req.body);
  connection.query('SELECT * FROM products WHERE id=?;',
  [req.body.id],
    function (err, results) {
      if (err) {
        res.status(500).send('Ошибка сервера при поиске карточки по id ')
        console.log(err);
      }
      console.log('Товар найден успешно');
      console.log('Результаты:');
      console.log(results);
      res.json(results);
    });
})

// Обработка изменения информации о об одном товаре
app.put('/api/products/:id', function (req, res) {
  console.log('PUT /', );
  console.log(req.body);
  try {
    connection.query('UPDATE `products` SET `filename` = ?, `name` = ?, `artikul` = ?, `number` = ?, `price` = ?, `weight` = ?, `description` = ?, `ingredients` = ? WHERE id = ?',
      [req.body.filename, req.body.name, req.body.artikul, req.body.number, req.body.price, req.body.weight, req.body.description, req.body.ingredients, req.params.id],
      function (error) {
        if (error) {
          res.status(500).send('Ошибка сервера при изменении карточки товарар')
          console.log(error);
        }
        res.json("change");
      });
  } catch (error) {
    console.log(error);
  }
})

// Обработка добавления истории изменения количества
app.post("/api/history", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для добавления истории изменения количества:');
  console.log(req.body);
  connection.query(`INSERT INTO historychange (idproduct, operation, different) VALUES (?, ?, ?);`,
    [req.body.idproduct, req.body.operation, req.body.different],
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при добавлении истории изменения количества')
        console.log(err);
      }
      console.log('Добавление истории изменения количества прошло успешно');
      res.json("create");
    });
})

// Получение списка сотрудников
app.get('/api/users', function (req, res) {
  try {
    connection.query('SELECT * FROM `users` WHERE role<>3', function (error, results) {
      if (error) {
        res.status(500).send('Ошибка сервера при получении сотрудников')
        console.log(error);
      }
      console.log('Результаты получения сотрудников');
      console.log(results);
      res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
});


// Получение списка пользователя по id
app.get('/api/user/:id', function (req, res) {
  try {
    connection.query('SELECT * FROM `users` WHERE id=?',
      [req.params.id],
      function (error, results) {
      if (error) {
        res.status(500).send('Ошибка сервера при получении пользователя')
        console.log(error);
      }
      console.log('Результаты получения пользователя');
      console.log(results);
      res.json(results);
    });
  } catch (error) {
    console.log(error);
  }
});


// Обработка удаления сотрудников
app.delete("/api/users/:id", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл DELETE запрос для удаления сотрудников:');
  connection.query(`DELETE FROM users WHERE id=${req.params.id}`,
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при удалении сотрудника по id')
        console.log(err);
      }
      console.log('Удаление прошло успешно');
      res.json("delete");
    });
})


//Обработка получения списка избранных товаров
app.get('/api/favour/:id', function (req, res) {
  console.log(req.params.id);
  try {
    connection.query('SELECT * FROM `favour` INNER JOIN `products` ON products.id = favour.idproduct WHERE iduser=?',
      [req.params.id],
      function (error, results) {
        if (error) {
          res.status(500).send('Ошибка сервера при получении избранных товаров')
          console.log(error);
        }
        console.log('Результаты получения избранных товаров');
        console.log(results);
        res.json(results);
      });
  } catch (error) {
    console.log(error);
  }
});


// Обработка удаления товара из избранного
app.delete("/api/favour/:iduser/:idproduct", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл DELETE запрос для удаления избранного:');
  console.log(req.body);
  connection.query('DELETE FROM `favour` WHERE (idproduct=?) AND (iduser=?)',
    [req.params.idproduct, req.params.iduser],
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при удалении избранного')
        console.log(err);
      }
      console.log('Удаление прошло успешно');
      res.json("delete");
    });
})
// Обработка добавления товара в избранное
app.post("/api/favour", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log('Пришёл POST запрос для добавления избранного:');
  console.log(req.body);
  connection.query('INSERT INTO `favour` (iduser, idproduct) VALUES (?, ?)',
    [req.body.iduser, req.body.idproduct],
    function (err) {
      if (err) {
        res.status(500).send('Ошибка сервера при добавлении избранного')
        console.log(err);
      }
      console.log('Добавление прошло успешно');
      res.json("create");
    });
})

//Обработка получения списка всех комментариев
app.get('/api/all-comments', function (req, res) {
  try {
    connection.query(
      "SELECT * FROM `comment` INNER JOIN `products` ON products.id = comment.idproduct ORDER BY `comment`.`datetime` DESC",
      function (error, results) {
        if (error) {
          res
            .status(500)
            .send("Ошибка сервера при получении полного списка комментариев");
          console.log(error);
        }
        console.log("Результаты получения всех комментариев");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  } 
});


//Обработка получения списка комментариев
app.get('/api/comments/:id', function (req, res) {
  try {
    connection.query(
      "SELECT * FROM `comment` INNER JOIN `users` ON users.id = comment.iduser WHERE idproduct=? ORDER BY `comment`.`datetime` DESC",
      [req.params.id],
      function (error, results) {
        if (error) {
          res
            .status(500)
            .send("Ошибка сервера при получении списка комментариев");
          console.log(error);
        }
        console.log("Результаты получения комментариев");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});


// Обработка удаления комментариев
app.delete("/api/comments/:id", (req, res) => {
  console.log("Пришёл DELETE запрос для удаления комментариев c id = :", req.params.id);
  connection.query(
    "DELETE FROM `comment` WHERE idcomment=?",
    [req.params.id],
    function (err) {
      if (err) {
        res.status(500).send("Ошибка сервера при удалении комментариев");
        console.log(err);
      }
      console.log("Удаление прошло успешно");
      res.json("delete");
    }
  );
});

// Обработка добавления комментариев
app.post("/api/comments", (req, res) => {
  if (!req.body) return res.sendStatus(400);
  console.log("Пришёл POST запрос для добавления комментариев:");
  console.log(req.body);
  connection.query(
    "INSERT INTO `comment` (iduser, idproduct, text) VALUES (?, ?, ?)",
    [req.body.iduser, req.body.idproduct, req.body.text],
    function (err) {
      if (err) {
        res.status(500).send("Ошибка сервера при добавлении комментариев");
        console.log(err);
      }
      console.log("Добавление комментариев успешно");
      connection.query(
        "SELECT * FROM `comment` INNER JOIN `users` ON users.id = comment.iduser WHERE idproduct=? ORDER BY `comment`.`datetime` DESC LIMIT 1",
        [req.body.idproduct],
        function (error, results) {
          if (error) {
            res
              .status(500)
              .send("Ошибка сервера при получении добавленного комментария");
            console.log(error);
          }
          console.log("Результаты получения комментариев");
          console.log(results);
          res.json(results);
        }
      );
    }
  );
})

// Обработка статистики избранного
app.get("/api/statistic/favor", function (req, res) {
  try {
    connection.query(
      "SELECT count(*) AS favourcount, products.name FROM `favour` INNER JOIN `products` ON products.id = favour.idproduct GROUP BY favour.idproduct",
      function (error, results) {
        if (error) {
          res
            .status(500)
            .send("Ошибка сервера при получении статистики избранного");
          console.log(error);
        }
        console.log("Результаты получения статистики избранного");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});


// Обработка статистики комментариев за неделю
app.get("/api/statistic/comments", function (req, res) {
  try {
    connection.query(
      "SELECT count(*) AS commentcount, products.name FROM `comment` INNER JOIN `products` ON products.id = comment.idproduct WHERE  year(datetime) = year(now()) and week(datetime, 1) = week(now(), 1) GROUP BY comment.idproduct",
      function (error, results) {
        if (error) {
          res
            .status(500)
            .send("Ошибка сервера при получении статистики комментариев за неделю");
          console.log(error);
        }
        console.log("Результаты получения статистики комментариев за неделю");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});

// Обработка статистики продаж и выпечки продукции за месяц
app.get("/api/statistic/sales", function (req, res) {
  try {
    connection.query(
       "SELECT products.id, sum(different) AS sum, products.name, operation FROM `historychange` INNER JOIN `products` ON products.id = historychange.idproduct WHERE  year(datetime) = year(now()) and week(datetime, 1) = week(now(), 1) GROUP BY historychange.idproduct, historychange.operation",
       function (error, results) {
        if (error) {
          res
            .status(500)
            .send("Ошибка сервера при получении статистики продаж и выпечки продукции за месяц");
          console.log(error);
        }
        console.log("Результаты получения статистики продаж и выпечки продукции за месяц");
        console.log(results);
        res.json(results);
      }
    );
  } catch (error) {
    console.log(error);
  }
});


// Получение файла и загрузка его в папку uploads
app.post('/upload-photo/', async (req, res) => {
  console.log('Пришёл POST запрос для загрузки файла:');
  console.log('Файл: ', req.files)
  try {
      if(!req.files) {
          res.send({
              status: false,
              message: 'No file uploaded'
          });
      } else {
          let photo = req.files.file0;
          let name = uniqueFilename("")+"."+photo.name.split(".")[1]
          photo.mv('./server/uploads/' + name);
          res.send({
              status: true,
              message: 'File is uploaded',
              filename: name
          });
      }
  } catch (err) {
    console.log("Ошибка ", err);
    res.status(500).send(err);
  }
});

//Получение полного пути файла
app.get("/api/photo/:filename", (req, res) => {
  console.log(path.join(__dirname, "uploads", req.params.filename));
  res.sendFile(path.join(__dirname, "uploads", req.params.filename))
})

// Информирование о запуске сервера и его порте
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
