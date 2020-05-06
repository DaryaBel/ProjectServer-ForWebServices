import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logOut = true;
  name="";
  constructor(private router: Router) { }

  ngOnInit() {
  }
  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
      this.name = localStorage.getItem('role');
      console.log('Роль: ', this.name);
      this.logOut=false;; 
    }
    }
  onLogOut(){
    this.logOut=true;  
    localStorage.clear();
    this.router.navigate(['/']);
  }

}
