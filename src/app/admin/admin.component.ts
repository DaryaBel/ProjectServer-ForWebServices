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
  datasets = [];
  labels = [];
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
    let result;
    try {
      result = await this.mainService.get(`/statistic/favor`);
      console.log(result);
      for (const one of result) {
        this.datasets.push(one.favourcount);
        this.labels.push(one.name);
      }
    } catch (error) {
      console.log(error);
    }

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
            data: this.datasets,
            backgroundColor: this.shuffle(this.colors),
            label: "",
          },
        ],
        labels: this.labels,
      },
    });
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
}
