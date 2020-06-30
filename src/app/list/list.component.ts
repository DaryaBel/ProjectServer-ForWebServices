import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Product } from '../shared/models/product.model';
import { isEmptyExpression } from '@angular/compiler';
import { isNullOrUndefined } from 'util';

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnInit {
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях
  loading = false;
  // Логическая переменная, определяющая наличие или отсутсвие ссылки на страницу добавления нового товара
  hide1 = true;
  hide2 = true;
  hide3 = true;
  searchString = "";
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о ненайденных товарах
  notfound = false;
  products: Product[] = [];
  constructor(private mainService: MainService) {}

  async ngOnInit() {
    // Получение списка всех товаров,  имеющихся в БД
    this.loading = true;
    try {
      let result = await this.mainService.get("/products");

      if (typeof result[0] !== "undefined") {
        this.notfound = false;
        // console.log(result);
        for (const one in result) {
          this.products.push(
            new Product(
              result[one].id,
              result[one].name,
              result[one].filename,
              result[one].artikul,
              result[one].number,
              result[one].price,
              result[one].weight,
              result[one].description,
              result[one].ingredients
            )
          );
        }
      } else {
        this.notfound = true;
      }
    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }
  // Хук жизненного цикла по изменению
  // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет
  ngDoCheck() {
    this.search(this.products, this.searchString);
     if (
       Object.keys(this.search(this.products, this.searchString)).length == 0
     ) {
      //  console.log("пуст");
       this.notfound = true;
     } else this.notfound = false;
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    if (localStorage.getItem("role") == "1") {
      this.hide1 = false;
      this.hide2 = false;
      this.hide3 = false;
    }
    if (localStorage.getItem("role") == "2") {
      this.hide1 = true;
      this.hide2 = false;
      this.hide3 = false;
    }
    if (localStorage.getItem("role") == "3") {
      this.hide1 = true;
      this.hide2 = true;
      this.hide3 = false;
    }
  }

  // Удаление из локального массива товаров определенного товара по id
  onDelete(id) {
    let index = this.products.findIndex((el) => {
      return el.id == id;
    });
    this.products.splice(index, 1);
    if (this.products.length == 0) {
      this.notfound = true;
    }
  }
  search(items, searchString) {
    if (!isNullOrUndefined(items) && searchString.trim().length > 0) {
      let newArr = items.filter(
        (item) =>
          item.name.toLowerCase().indexOf(searchString.toLowerCase()) === 0 ||
          item.artikul.toLowerCase().indexOf(searchString.toLowerCase()) === 0
      );
      return newArr;
    }  else {
      return items;
    }
  }
}
