import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  // Логическая переменная определяющая наличие или отсуствие кнопки Удалить в карточке
  hide = true;
  demonstrate = true;
  hasOrNot; 
  @Input() item;
  @Output() del = new EventEmitter<number>();

  constructor(private router: Router, private mainService: MainService) { }

  async ngOnInit() {
    if (this.item==undefined) {
      this.demonstrate  = false;
    } {
      // Определение фразы о наличии товара 
    if (this.item.number ==0){
      this.hasOrNot="Отсутствует в продаже"
    } else {
     this.hasOrNot=`${this.item.number} в наличии`
    }
    } 
  }

  // Хук жизненного цикла по изменению
  // Проверяет наличие в LocalStorage элемента роли, чтобы понять авторизирован пользователь или нет
  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
     this.hide=false;
    } else this.hide=true; 
  }

  // Функция, которая переводит на страницу карточки выбранного товара по клику
  onLink(id){
    this.router.navigate(['/products', id]);
  }

  // Функция удаления товара из БД 
  async onDelete(id){
    try {
      let result = await this.mainService.delete(`/delete/${id}`);
    } catch (error) {
      console.log(error);   
    }
    this.del.emit(id);
  }

}
