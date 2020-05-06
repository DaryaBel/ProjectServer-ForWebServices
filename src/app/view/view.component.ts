import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../shared/services/main.service';
import { Product } from '../shared/models/product.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  @Output() del = new EventEmitter<number>();
  loading=false;
  res;
  hasOrNot = 'в наличии';
  form: FormGroup;
  hide=true;
  flag=true;
  product: any = {
    id: '',
    name: '',
    filename: '',  
    artikul: '',
    price: '',
    weight: '',
    description: '', 
    ingredients: ''
  };
  item = {
    id: 0
  }
  constructor(private router: Router, private activateRouter: ActivatedRoute, private mainService: MainService) {
    this.activateRouter.params.subscribe(param => {
      this.item.id = +param.id;
   });
  }
  async ngOnInit() {   
    this.loading=true;
      try {
        this.res = await this.mainService.post(JSON.stringify(this.item), "/onecard"); 
     } catch (error) {
       console.log(error);
     }
     this.product=this.res[0];
     if (this.product.number ==0){
       this.hasOrNot="Отсутствует в продаже"
     } else {
      this.hasOrNot=`${this.product.number} в наличии`
     }
     console.log(this.product);
     this.loading=false;
     if (this.product.id!=''){
      this.form = new FormGroup({
        'price': new FormControl(`${this.product.price}`, [Validators.required]),
        'number': new FormControl(`${this.product.number}`, [Validators.required])
        })
     }
  }

  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
     this.hide=false;
    } else this.hide=true; 
  }
  async onDelete(){
    try {
      let result = await this.mainService.delete(`/delete/${this.product.id}`);
    } catch (error) {
      console.log(error);   
    }
    this.del.emit(this.product.id);
    this.router.navigate(['/']);
  }

  async onChange(){
    if (!this.flag) {
          let newProduct = new Product(this.product.id, this.product.name, this.product.filename, this.product.artikul, this.form.value.number, this.form.value.price, this.product.weight, this.product.description, this.product.ingredients);
          try {
            let res = await this.mainService.put(JSON.stringify(newProduct), `/products/${this.product.id}`);
          } catch (error) {
            console.log(error);
          }
          this.product.price = this.form.value.price;
          this.product.number = this.form.value.number;
          if (this.product.number ==0){
            this.hasOrNot="Отсутствует в продаже"
          } else {
           this.hasOrNot=`${this.product.number} в наличии`
          }
        }
       this.flag=!this.flag 
  }
}
