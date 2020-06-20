import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  addMenu = false
  constructor() { }

  ngOnInit() {
  }
  openMenu() {
    this.addMenu = !this.addMenu;
    console.log(this.addMenu);
    
  }

}
