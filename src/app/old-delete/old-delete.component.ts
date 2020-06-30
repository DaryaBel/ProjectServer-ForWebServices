import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import { Product } from '../shared/models/product.model';
import { environment } from "../../environments/environment";

@Component({
  selector: "app-old-delete",
  templateUrl: "./old-delete.component.html",
  styleUrls: ["./old-delete.component.css"],
})
export class OldDeleteComponent implements OnInit {
  demonstrate = true;
  url = environment.baseUrl;
  loading = false;
  notfound = false;
  products: Product[] = [];
  constructor(private router: Router, private mainService: MainService) {}

  async ngOnInit() {
    // Получение списка всех товаров,  имеющихся в БД
    this.loading = true;
    try {
      let result = await this.mainService.get("/archive");
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
              "0",
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

  // Функция, которая переводит на страницу карточки выбранного товара по клику
  onLink(id) {
    this.router.navigate(["/products", id]);
  }

  // Функция удаления товара из БД
  async onDelete(id) {
    try {
      let result = await this.mainService.delete(`/archive/${id}`);
    } catch (error) {
      console.log(error);
    }
    let index = this.products.findIndex((el) => {
      return el.id == id;
    });
    this.products.splice(index, 1);
    if (this.products.length == 0) {
      this.notfound = true;
    }
  }
  async onAdd(product) {
    try {
      let result = await this.mainService.post(JSON.stringify(product), "/add");
    } catch (err) {
      console.log(err);
    }
    this.onDelete(product.id);
  }
}

