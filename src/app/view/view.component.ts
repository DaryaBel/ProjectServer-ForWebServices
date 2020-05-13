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
  // Логическая переменная, определяющая наличие или отсутсвие прелоадера
  loading=false;
  // Лoгическая переменная, определяющая наличие или отсутствие кнопок "Изменить" и "Удалить"
  hide=true;
  // Лoгическая переменная, определяющая режим чтения или редактирования включен
  editOrNot=true;
  res;
  hasOrNot = 'в наличии';
  form: FormGroup;
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
// Получение параметра роута id
  constructor(private router: Router, private activateRouter: ActivatedRoute, private mainService: MainService) {
    this.activateRouter.params.subscribe(param => {
      this.item.id = +param.id;
   });
  }

  async ngOnInit() {   
    this.loading=true;
    // Отправка на сервер запроса для получения карточки товара по id
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
       // Инициализация FormGroup, создание FormControl, и назанчение Validators
      this.form = new FormGroup({
        'price': new FormControl(`${this.product.price}`, [Validators.required]),
        'number': new FormControl(`${this.product.number}`, [Validators.required])
        })
     }
  }

  // Хук жизненного цикла по изменению
  // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет
  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
     this.hide=false;
    } else this.hide=true; 
  }
  // Отправляет запрос удаления карточки на сервер
  async onDelete(){
    try {
      let result = await this.mainService.delete(`/delete/${this.product.id}`);
    } catch (error) {
      console.log(error);   
    }
    this.del.emit(this.product.id);
    this.router.navigate(['/']);
  }
// Оправляет запрос изменения информации в карточки на сервер или включает редим редактирования
  async onChange(){
    if (!this.editOrNot) {
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
       this.editOrNot=!this.editOrNot 
  }
}
