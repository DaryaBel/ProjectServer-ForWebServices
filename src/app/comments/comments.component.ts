import { Component, OnInit } from '@angular/core';
import { MainService } from '../shared/services/main.service';
import { Comm } from '../shared/models/comm.model';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment'; 
@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit {
  form: FormGroup;
  hide1 = true;
  hide2 = true;
  hide3 = true;
  warning = "Авторизируйтесь, чтобы оставить комментарий";
  hideOnly3 = true;
  notfound = false;
  isEmpty = false;
  comments: Comm[] = [];
  id;
  iduser;
  success = false;
  constructor(
    private router: Router,
    private activateRouter: ActivatedRoute,
    private mainService: MainService
  ) {
    this.activateRouter.params.subscribe((param) => {
      this.id = +param.id;
    });
  }

  async ngOnInit() {
    this.iduser = localStorage.getItem("id");
    moment.locale("ru");
    this.form = new FormGroup({
      comment: new FormControl("", [Validators.required]),
    });
    try {
      let result = await this.mainService.get(`/comments/${this.id}`);
      console.log(result[0]);
      if (typeof result[0] !== "undefined") {
        this.notfound = false;
        console.log(result);
        for (const one in result) {
          let name = result[one].name;
          if (localStorage.getItem("id") == result[one].iduser) {
            name = `${result[one].name} (Вы)`;
          }
          // console.log(result[one].datetime);

          let time = `${moment(result[one].datetime).format("LL")}`;
          // console.log("hello world", time);
          this.comments.push(
            new Comm(
              result[one].idcomment,
              result[one].iduser,
              name,
              result[one].idproduct,
              result[one].text,
              time
            )
          );
        }
        console.log(this.comments);
      } else {
        this.notfound = true;
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngDoCheck() {
    this.iduser = localStorage.getItem("id");
    this.hide1 = true;
    this.hide2 = true;
    this.hide3 = true;
    if (localStorage.getItem("role") == "1") {
      this.hide1 = false;
      this.hide2 = false;
      this.hide3 = false;
      this.hideOnly3 = true;
      this.warning = "Комментарии могут оставлять только клиенты пекарни!";
    }
    if (localStorage.getItem("role") == "2") {
      this.hide1 = true;
      this.hide2 = false;
      this.hide3 = false;
      this.hideOnly3 = true;
      this.warning = "Комментарии могут оставлять только клиенты пекарни!";
    }
    if (localStorage.getItem("role") == "3") {
      this.hide1 = true;
      this.hide2 = true;
      this.hide3 = false;
      this.hideOnly3 = false;
    }
  }

  async onAdd() {
    this.success = true;
    console.log("id ", this.id);
    if (this.form.value.comment == "") {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
      let comment = {
        iduser: localStorage.getItem("id"),
        idproduct: this.id,
        text: this.form.value.comment,
      };
      console.log(comment);
      try {
        let result = await this.mainService.post(
          JSON.stringify(comment),
          "/comments"
        );
        console.log(result);

        let name = result[0].name;
        if (localStorage.getItem("id") == result[0].iduser) {
          name = `${result[0].name} (Вы)`;
        }
        let time = `${moment(result[0].datetime).format("LL")}`;
        // console.log("hello world", time);
        this.comments.unshift(
          new Comm(
            result[0].idcomment,
            result[0].iduser,
            name,
            result[0].idproduct,
            result[0].text,
            time
          )
        );
        this.notfound = false;
      } catch (err) {
        console.log(err);
      }
      this.form.reset();
    }
  }

  async onDelete(id) {
    try {
      let result = await this.mainService.delete(`/comments/${id}`);
    } catch (error) {
      console.log(error);
    }
    let index = this.comments.findIndex((el) => {
      return el.id == id;
    });
    this.comments.splice(index, 1);
    if (this.comments.length == 0) { 
      this.notfound = true;
    }
  }
}
