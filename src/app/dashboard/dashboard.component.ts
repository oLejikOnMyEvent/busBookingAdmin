import { FormControl, FormGroup, FormArray, FormBuilder, FormControlName } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddNewRouteService } from '../service/add-new-route.service'


export interface Stations1488 {
  id: number;
  title: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  stationForm: number;
  stationValues = new FormControl('');

  items: any;

  time = { hour: 7, minute: 0, second: 0 };
  model;

  obj: any;
  corporationObj: any;


  allSelectStations: string[] = [];

  check: any;

  testObjOne = [{ id: 1, title: 'Москва' },
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

  selectStationsValue: string[] = [];


  allStatins: any;
  routeName: string = ' '
  selectedObj: string[] = []


  routesList = this.fb.group({
    selectRoute: this.fb.control('')
  })

  public stationsSendObj: FormGroup;




  constructor(private AddNewRouteService: AddNewRouteService, private fb: FormBuilder) {
    this.stationsSendObj = this.fb.group({
      routeTitle: (''),
      stations: this.fb.array([
        this.fb.control('')
      ]),
    })
  }

  ngOnInit() {
    this.AddNewRouteService.getAllStations()
      .subscribe(
        (response) => {
          this.allStatins = response;
          console.log(response)
        },
        error => console.log(error)
      )

  }







  addNewStationsTest() {
    console.log('tipa new statiosn', this.stationsSendObj.value);


    const fa = this.stationsSendObj.controls['stations'] as FormArray;


    fa.push(this.newSelectGroup());

  }


  newSelectGroup() {
    return new FormControl(' ')

  }

  DeleteItemFormArray(idx) {
    const fa = this.stationsSendObj.controls['stations'] as FormArray;
    fa.removeAt(idx)
  }



  CreateNewRoute() {
    // console.log();
    this.AddNewRouteService.postAllStations(this.stationsSendObj.value)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )


  }

  ShowData() {
    alert('Вы добавили новый маршрут' + this.routeName)
  }


  routesArr
  ShowDeleteSection() {
    this.AddNewRouteService.getAllRoutes()
      .subscribe(
        res => this.routesArr = res,
        err => console.log(err)
      )


  }

  deleteRoute() {
    console.log(this.routesList.value.selectRoute)
    this.AddNewRouteService.deleteRoutes(this.routesList.value.selectRoute)
      .subscribe(
        res => console.log(res),
        err => console.log(err)


      )


    alert(`вы удалили маршрут с id: ${this.routesList.value.selectRoute}`)
    this.routesArr = null
  }
}

