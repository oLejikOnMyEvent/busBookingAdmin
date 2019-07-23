import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddNewRouteService } from '../service/add-new-route.service'




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {



  time = { hour: 7, minute: 0, second: 0 };
  model;

  obj: any;
  corporationObj: any;
  allStatins: any;

  allSelectStations: string[] = [];

  check: any;
  testObj = [
    [{ id: 1, title: 'Москва' },
    { id: 2, title: 'Воронеж' },
    { id: 3, title: 'Елец' },
    { id: 4, title: 'Краснодар' },
    { id: 5, title: 'Кропоткин' },
    { id: 6, title: 'Новочеркасск' },
    { id: 7, title: 'Волгодонск' },
    { id: 8, title: 'Элиста' },
    { id: 9, title: 'Тамбов' },
    { id: 10, title: 'Волгоград' },
    { id: 11, title: 'Махачкала' }],

    [{ id: 1, title: 'Москва' },
    { id: 2, title: 'Воронеж' },
    { id: 3, title: 'Елец' },
    { id: 4, title: 'Краснодар' },
    { id: 5, title: 'Кропоткин' },
    { id: 6, title: 'Новочеркасск' },
    { id: 7, title: 'Волгодонск' },
    { id: 8, title: 'Элиста' },
    { id: 9, title: 'Тамбов' },
    { id: 10, title: 'Волгоград' },
    { id: 11, title: 'Махачкала' }],

    [{ id: 1, title: 'Москва' },
    { id: 2, title: 'Воронеж' },
    { id: 3, title: 'Елец' },
    { id: 4, title: 'Краснодар' },
    { id: 5, title: 'Кропоткин' },
    { id: 6, title: 'Новочеркасск' },
    { id: 7, title: 'Волгодонск' },
    { id: 8, title: 'Элиста' },
    { id: 9, title: 'Тамбов' },
    { id: 10, title: 'Волгоград' },
    { id: 11, title: 'Махачкала' }]

  ]

  selectStationsValue: string[] = [];





  constructor(private AddNewRouteService: AddNewRouteService) { }

  ngOnInit() {
    this.AddNewRouteService.getAllStations()
      .subscribe(
        (response) => {
          console.log(response),
            this.allStatins = response;
        },
        error => console.log(error)
      )

  }

  addNewStations() {

    this.allSelectStations.push(this.allStatins)

  }



  CheckOptions(a, b) {

    console.log(a, b)
  }
  DeleteItem(index) {

    // console.log(this.allSelectStations = this.allSelectStations.slice(index, 1));


    return this.allSelectStations = this.allSelectStations.slice(0, index).concat(this.allSelectStations.slice(index + 1))



  }
  public onChange(event): void {
    let newStr;
    const newVal = event.target.value;

    newStr = newVal.slice(1)

    let newArr = []

  let newObj ={
    id: newVal[0],
    title: newStr
  }

  console.log(newObj);
  
    }

    CreateNewRoute() {
      console.log('ты отправил', this.obj);

    }

    ShowData() {
      console.log("privet");
    }
  }

