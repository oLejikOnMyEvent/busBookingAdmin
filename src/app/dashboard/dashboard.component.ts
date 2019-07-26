import { FormControl, FormGroup, FormArray } from '@angular/forms';
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
  constructor(private AddNewRouteService: AddNewRouteService) { }

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


  stationsSelectors: FormGroup = new FormGroup({
    stations: new FormArray([
      new FormControl(this.allStatins),

    ])
  })


  stationSelectTest() {
    let otherStat = [{
      id: 1,
      title: "Moscow"
    },
    {
      id: 2,
      title: "Rostov"
    },
    {
      id: 3,
      title: "Rostov"
    },
    ]
  }

  get stations(): FormArray { return this.stationsSelectors.get('stations') as FormArray; }


  addNewStationsTest() {
    this.stations.push(new FormControl(this.testObjOne))
  }

  DeleteItemFormArray(idx) {
    this.stations.removeAt(idx);
  }


  public addStationSelector() {

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
    let newStr: string ;
    const newVal: string = event.target.value;

    newStr = newVal.slice(1)

        let newObj = {
      id: parseInt(newVal[0]),
      title: newStr
    }
    // this.selectedObj.push(newObj)
    console.log(newObj, typeof newObj);
    console.log(this.selectedObj, typeof this.selectedObj);

  }

  CreateNewRoute() {
    this.AddNewRouteService.postAllStations(this.routeName, this.selectedObj)
      .subscribe(
        response => console.log(response),
        error => console.log(error)
      )
   
    
  }

  ShowData() {
    alert('Вы добавили новый маршрут' + this.routeName)
  }
}

// 0:
// id: 14
// routeDto:
// id: 1
// title: "Мск-Тмбв-Мхч"
// vector: "==1==9==10==8==11=="
// __proto__: Object
// segmentDto: {id: 3, title: "Москва-Тамбов", stationStart: {…}, stationFinish: {…}, price: 1200}
// __proto__: Object

// segmentDto:
// id: 3
// price: 1200
// stationFinish: {id: 9, title: "Тамбов"}
// stationStart: {id: 1, title: "Москва"}
// title: "Москва-Тамбов"