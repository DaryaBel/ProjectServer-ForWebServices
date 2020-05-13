import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  form: FormGroup;
  // Логическая переменная, определяющая наличие или отсутсвие прелоадера
  loading=false;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения о незаполненных обязательных полях 
  isEmpty=true;
  // Логическая переменная, определяющая наличие или отсутсвие сообщения об успешном добавлении товара
  succes=false;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    // Инициализация FormGroup, создание FormControl, и назанчение Validators
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'artikul': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'number': new FormControl('', [Validators.required]),
      'ingredients': new FormControl('', [Validators.required])
      // 'photo': new FormControl('', [Validators.required]),
      })
  }

  // Функция добавления информации о товаре, полученной с формы, в базу данных
  async onAdd(){   
    if ((this.form.value.name=="")||(this.form.value.artikul=="")||(this.form.value.price=="")||(this.form.value.weight=="")||(this.form.value.description=="")||(this.form.value.num=="")||(this.form.value.ingredients=="")) {
      this.isEmpty=false;
    } else {
      this.loading=true;
      this.isEmpty=true;
      let product = {
        name: this.form.value.name,
        filename: 'assets/1.jpg',
        artikul: this.form.value.artikul,
        number: this.form.value.number,
        price: this.form.value.price,
        weight: this.form.value.weight,
        description: this.form.value.description,
        ingredients: this.form.value.ingredients,
        // photo: this.form.value.photo
      }
      console.log(product);
      try {;
        let result = await this.mainService.post(JSON.stringify(product), "/add");
      } catch (err) {
        console.log(err);
      }
      this.form.reset();
      this.loading=false;
      this.succes=true;
    }   
  }
// Функция, скрывающая сообщения о незаполненности полей и успешном добавлении товара (вызвается при фокусировке на одном из полей формы)
  onSucces(){
    this.succes=false;
    this.isEmpty=true;
  }

}
