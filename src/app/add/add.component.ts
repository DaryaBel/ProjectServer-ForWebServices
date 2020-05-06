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
  loading=false;
  flag=true;
  succes=false;
  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required]),
      'artikul': new FormControl('', [Validators.required]),
      'price': new FormControl('', [Validators.required]),
      'weight': new FormControl('', [Validators.required]),
      'description': new FormControl('', [Validators.required]),
      'number': new FormControl('', [Validators.required]),
      'ingredients': new FormControl('', [Validators.required]),
      })
  }

  async onAdd(){   
    if ((this.form.value.name=="")||(this.form.value.artikul=="")||(this.form.value.price=="")||(this.form.value.weight=="")||(this.form.value.description=="")||(this.form.value.num=="")||(this.form.value.ingredients=="")) {
      this.flag=false;
    } else
    {
      this.loading=true;
      this.flag=true;
      let product = {
        name: this.form.value.name,
        filename: 'assets/1.jpg',
        artikul: this.form.value.artikul,
        number: this.form.value.number,
        price: this.form.value.price,
        weight: this.form.value.weight,
        description: this.form.value.description,
        ingredients: this.form.value.ingredients
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

  onSucces(){
    this.succes=false;
    this.flag=true;
  }

}
