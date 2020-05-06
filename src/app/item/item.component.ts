import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MainService } from '../shared/services/main.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  hide = true; 
  @Input() item;
  hasOrNot;
  @Output() del = new EventEmitter<number>();
  constructor(private router: Router, private mainService: MainService) { }

  ngOnInit() {
    if (this.item.number ==0){
      this.hasOrNot="Отсутствует в продаже"
    } else {
     this.hasOrNot=`${this.item.number} в наличии`
    }
  }

  ngDoCheck(){
    if (localStorage.getItem('role') !== null) {
     this.hide=false;
    } else this.hide=true; 
  }

  onLink(id){
    this.router.navigate(['/products', id]);
  }
  async onDelete(id){
    try {
      let result = await this.mainService.delete(`/delete/${id}`);
    } catch (error) {
      console.log(error);   
    }
    this.del.emit(id);
  }

}
