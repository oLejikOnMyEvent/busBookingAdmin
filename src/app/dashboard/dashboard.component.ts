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


  public stationsSendObj: FormGroup;



  // get stations() {
  //   return this.stationsSendObj.get('stations') as FormArray;
  // }


  constructor(private AddNewRouteService: AddNewRouteService, private fb: FormBuilder) {
    this.stationsSendObj = this.fb.group({
      routeTitle: (''),
      stations: this.fb.array([
        this.fb.group({
          id: [''],
          title: ['']
        })
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


  // onSelectSelect(id: number, title:number,  formIndex : number): void{

  //   this.stationsSendObj.get('stations').controls[formIndex].patchValue({id:id, title:title});
  // }

  newSelectGroup(){
    return new FormGroup({
      id: new FormControl(),
      title: new FormControl(' ')
    })
  }

  // stationsSelectors: FormGroup = new FormGroup({
  //   stations: new FormArray([
  //     new FormControl(this.allStatins),

  //   ])
  // })




  // addStationFromGroup(): FormGroup{
  //  return this.fb.group({
  //    stationsWithObj: new FormControl(this.allStatins)
  //  })
  // }






  // stationSelectTest() {
  //   let otherStat = [{
  //     id: 1,
  //     title: "Moscow"
  //   },
  //   {
  //     id: 2,
  //     title: "Rostov"
  //   },
  //   {
  //     id: 3,
  //     title: "Rostov"
  //   },
  //   ]
  // }




  addNewStationsTest() {
    console.log('tipa new statiosn', this.stationsSendObj.value);
  

    const fa = this.stationsSendObj.controls['stations'] as FormArray;


    fa.push(this.newSelectGroup());
   
  }

  DeleteItemFormArray(idx) {
    const fa = this.stationsSendObj.controls['stations'] as FormArray;
    fa.removeAt(idx)
  }


  onChange(event){
      const newVal = event.target.value
      console.log(newVal)
  }
  // public addStationSelector() {

  // }


  // addNewStations() {


  //   this.allSelectStations.push(this.allStatins)



  // }



  // CheckOptions(a, b) {

  //   console.log(a, b)
  // }
  // DeleteItem(index) {

    // console.log(this.allSelectStations = this.allSelectStations.slice(index, 1));


    //

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