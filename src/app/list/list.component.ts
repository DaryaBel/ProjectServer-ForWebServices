import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Product } from '../shared/models/product.model';
import { isEmptyExpression } from '@angular/compiler';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  loading=false;
  hide=true;
  notfound=false;
  products: Product[] = [];
  constructor(private mainService: MainService) { }

  async ngOnInit() {
    this.loading=true;
    try {
      let result = await this.mainService.get("/products");
      if (Object.keys(result).length == 0) {
        console.log('пуст');
        result=undefined;
      }
      if (typeof result !== 'undefined'){
          this.notfound=false;
          console.log(result);
          for (const one in result){
          this.products.push(new Product(result[one].id, result[one].name, result[one].filename, result[one].artikul, result[one].number, result[one].price, result[one].weight, result[one].description, result[one].ingredients));
        }
      } else {
        this.notfound=true;
      }
    } catch (error) {
      console.log(error);
      
    }
    this.loading=false;
  }

  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
     this.hide=false;
    } else this.hide=true; 
  }
  

  onDelete(id) {
    let index = this.products.findIndex((el)=>{
      return el.id==id
    })
    this.products.splice(index, 1);
    if (this.products.length==0) {
        this.notfound=true;
      }
     }
  
}
