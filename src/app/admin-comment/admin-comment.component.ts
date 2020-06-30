import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import * as moment from 'moment';
import { Router } from '@angular/router';

@Component({
  selector: "app-admin-comment",
  templateUrl: "./admin-comment.component.html",
  styleUrls: ["./admin-comment.component.css"],
})
export class AdminCommentComponent implements OnInit {
  loading = false;
  notfound = false;
  comments = [];
  constructor(private mainService: MainService, private router: Router) {}

  async ngOnInit() {
    moment.locale("ru");
    // Получение списка всех комментариев,  имеющихся в БД
    this.loading = true;
    try {
      let result = await this.mainService.get("/all-comments");
       if (Object.keys(result).length == 0) {
        //  console.log("пуст");
         result = undefined;
       }
      if (typeof result !== "undefined") {
        this.notfound = false;
        // console.log(result);
        for (const one in result) {
          let time = `${moment(result[one].datetime).format("LL")}`;
          let result1 = await this.mainService.get(
            `/user/${result[one].iduser}`
          );
          let comment = {
            idcomment: result[one].idcomment,
            date: time,
            idproduct: result[one].id,
            name: result1[0].name,
            text: result[one].text,
            nameproduct: result[one].name,
          };
          this.comments.push(comment);
        }
      } else {
        this.notfound = true;
       }

    } catch (error) {
      console.log(error);
    }
    this.loading = false;
  }

  onLink(id) {
    this.router.navigate(["/products", id]);
  }

  async onDelete(id) {
    // console.log(id);
    
    try {
      let result = await this.mainService.delete(`/comments/${id}`);
    } catch (error) {
      console.log(error);
    }
    let index = this.comments.findIndex((el) => {
      return el.idcomment == id;
    });
    this.comments.splice(index, 1);
    if (this.comments.length == 0) {
      this.notfound = true;
    }
  }
}
