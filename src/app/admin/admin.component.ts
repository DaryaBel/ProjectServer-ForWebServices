import { Component, OnInit } from "@angular/core";
import * as Chart from "chart.js";
import { MainService } from "../shared/services/main.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnInit {
  chart1;
  chart2;
  chart3;
  notfound1 = false;
  notfound2 = false;
  notfound3 = false;
  datasetsFavor = [];
  labelsFavor = [];
  datasetsComment = [];
  labelsComment = [];
  datasetsSalesAdd = [];
  datasetsSalesSubtract = [];
  labelsSales = [];
  idSales = [];
  colors = [
    "#cd84f1",
    "#ffcccc",
    "#ff4d4d",
    "#ffaf40",
    "#fffa65",
    "#32ff7e",
    "#7efff5",
    "#18dcff",
    "#7d5fff",
    "#c56cf0",
    "#ffb8b8",
    "#ff3838",
    "#ff9f1a",
    "#fff200",
    "#3ae374",
    "#67e6dc",
    "#17c0eb",
    "#7158e2",
  ];
  constructor(private mainService: MainService) {}

  async ngOnInit() {
    let resultFavor;
    let resultComment;
    let resultSales;
    try {
      resultFavor = await this.mainService.get(`/statistic/favor`);
      console.log(resultFavor);
      for (const one of resultFavor) {
        this.datasetsFavor.push(one.favourcount);
        this.labelsFavor.push(one.name);
      }
      //
      resultComment = await this.mainService.get(`/statistic/comments`);
      console.log(resultComment);
      for (const one of resultComment) {
        this.datasetsComment.push(one.commentcount);
        this.labelsComment.push(one.name);
      }

      resultSales = await this.mainService.get(`/statistic/sales`);
      console.log(resultSales);
      for (const one in resultSales) {
        // console.log(this.idSales);

        let index = this.idSales.findIndex((el) => {
          return el == resultSales[one].id;
        });
        // console.log(index);
        if (index == -1) {
          this.idSales.push(resultSales[one].id);
          this.labelsSales.push(resultSales[one].name);
          if (resultSales[one].operation == "+") {
            this.datasetsSalesAdd.push(resultSales[one].sum);
            this.datasetsSalesSubtract.push(0);
          } else if (resultSales[one].operation == "-") {
            this.datasetsSalesSubtract.push(resultSales[one].sum);
            this.datasetsSalesAdd.push(0);
          }
        } else {
          if (resultSales[one].operation == "+") {
            this.datasetsSalesAdd[index] = resultSales[one].sum;
          } else if (resultSales[one].operation == "-") {
            this.datasetsSalesSubtract[index] = resultSales[one].sum;
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
    console.log(this.idSales);
    console.log(this.labelsSales);
    console.log(this.datasetsSalesAdd);
    console.log(this.datasetsSalesSubtract);

    if (Object.keys(this.labelsFavor).length == 0) {
      console.log("пуст1");
      this.notfound1 = true;
    } else this.notfound1 = false;
    if (Object.keys(this.labelsComment).length == 0) {
      console.log("пуст2");
      this.notfound2 = true;
    } else this.notfound2 = false;
    if (Object.keys(this.labelsSales).length == 0) {
      console.log("пуст3");
      this.notfound3 = true;
    } else this.notfound3 = false;

    this.chart1 = new Chart("pie", {
      type: "pie",
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Сколько пользователей добавили товар в избранное?",
        },
        legend: {
          position: "top",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
      },
      data: {
        datasets: [
          {
            data: this.datasetsFavor,
            backgroundColor: this.colors,
            label: "",
          },
        ],
        labels: this.labelsFavor,
      },
    });

    //

    this.chart2 = new Chart("bar", {
      type: "bar",
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Количество комментариев к товарам за текущую неделю",
        },
        legend: {
          position: "top",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 20,
              },
            },
          ],
        },
      },
      data: {
        labels: this.labelsComment,
        datasets: [
          {
            type: "bar",
            label: "Количество комментариев",
            data: this.datasetsComment,
            maxBarThickness: 30,
            backgroundColor: "rgba(255,0,255,0.4)",
            borderColor: "rgba(255,0,255,0.4)",
            fill: false,
          },
        ],
      },
    });

    this.chart3 = new Chart("barHorizontal", {
      type: "horizontalBar",
      data: {
        labels: this.labelsSales,
        datasets: [
          {
            label: "Продано",
            data: this.datasetsSalesSubtract,
            fill: false,
            backgroundColor: "rgba(255,0,255,0.4)",
            borderColor: "rgba(255,0,255,0.4)",
            borderWidth: 1,
            maxBarThickness: 30,
          },
          {
            label: "Изготовлено",
            data: this.datasetsSalesAdd,
            fill: false,
            backgroundColor: "rgba(0,255,255,0.4)",
            borderColor: "rgba(0,255,255,0.4)",
            borderWidth: 1,
            maxBarThickness: 30,
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: "Статистика продажи и производства товаров за текущий месяц",
        },
        legend: {
          position: "top",
        },
        animation: {
          animateScale: true,
          animateRotate: true,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                suggestedMax: 100,
              },
            },
          ],
        },
      },
    });
  }
}
