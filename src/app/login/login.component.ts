import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MainService } from '../shared/services/main.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  flag=true;
  flag2=true;
  form :FormGroup;
  admin = {
    id: 1,
    login: "",
    password: "",
    role: ""
  }
  constructor(private api: MainService, private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      'login': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required]) 
    });
  }

 async onLogin() {
    if ((this.form.value.login=="")||(this.form.value.password=="")) {
      this.flag2=false;
    } else
    {
      this.flag2=true;
      let infoAboutUser;
    infoAboutUser = {
      login: this.form.value.login,
      password: this.form.value.password,
    }
    console.log(infoAboutUser);
    try {
      let ExistOrNot = await this.api.post(JSON.stringify(infoAboutUser), "/login");
      this.form.reset();  
      if (ExistOrNot != "not exist") {
        this.admin.id = +ExistOrNot[0].id;
        this.admin.login = ExistOrNot[0].login;
        this.admin.password = ExistOrNot[0].password;
        this.admin.role = ExistOrNot[0].role; 
        console.log(this.admin);       
        this.flag = true;
        localStorage.setItem('role', this.admin.role);
        this.router.navigate(['/']);
        
      } else {
        this.flag = false;
        console.log("Неверный логин или пароль");
      } 
    } catch (error) {
      console.log(error);
    }
    }
    
   }
   onFlag(){
     this.flag=true;  
     this.flag2=true;
   }
   
  }

