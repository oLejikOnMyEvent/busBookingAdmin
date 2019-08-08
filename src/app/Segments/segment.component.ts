import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddSegmentsService } from '../service/add-segments.service'
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { isNgTemplate } from '@angular/compiler';

// export interface inputs {
//   value?: string;
//   validator: string;
// }

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  time = { hour: 7, minute: 0, second: 0 };
  // model;

  StationsFormArray: FormGroup


  constructor(private AddSegmentsService: AddSegmentsService, private fb: FormBuilder, ) {

    this.StationsFormArray = this.fb.group({
      segment: fb.array([
        this.fb.group({
          tripNumber: [''],
          routeSegmentId: [''],
          timeDeparture: [''],
          timeArrival: [''],
          segmentPrice: [''],
          busId: ['']
        })
      ])
    })

// this.onChange(event)
  }



  imputsObj: {
    tripNumber: '',
    routeSegmentId: '',
    timeDeparture: '',
    timeArrival: '',
    segmentPrice: '',
    busId: ''
  }

  inputsArray = {

  }


  submit(model) {
    console.log(model);
  }

  fromSelectsArray: FormGroup;



  route: any;


  segmentSelect: any;

  minutes: any;

  hours: any;

  data;

  busSelector: any;





  busId: any;


  segmentSelectId: any;


  busIdName = "busId"
  busIdValue: number;
  test = 'privet';



  FormValue = new FormArray([

  ])




  ngOnInit() {
    this.AddSegmentsService.getRouteNumber()
      .subscribe(
        (response) => {
         this.route = response,
            console.log(this.route)
        },
        error => console.log(error)
      )



    this.AddSegmentsService.getBusList()
      .subscribe(
        (response) => {
          this.busSelector = response,
            console.log(this.busSelector, "this.bus");
        },
        error => console.log(error)
      )
  }

  ShowTable(){
    this.fields = this.getFields();
  }

  onChange(event): void {

    const newVal: string = event.target.value;

    this.AddSegmentsService.getAdminRoute(newVal)
      .subscribe(
        (response) => {

          this.model.stationsNumbers = response
          console.log(this.model.stationsNumbers);

          // this.segmentSelectId = this.segmentSelect.map(item => item.id),
          // console.log(this.segmentSelectId, "segment select")

        },
        (error) => console.log(error)
      )

  return this.model.stationsNumbers
  }




  options: FormlyFormOptions = {};

  // tslint:disable-next-line: member-ordering

  getFields(){
  const fields: FormlyFieldConfig[] =
    [
      {
        key: 'stationsNumbers',
        type: 'repeat',
        templateOptions: {
          addText: 'Add another investment',
        },
        fieldArray: {
          fieldGroupClassName: 'row',
          fieldGroup: [
            {

              key: 'tripnumber',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Номер Рейса'
              }
            },
            {

              key: 'routeSegmentId',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Номер Сегмента'
              }
            },
            {

              key: 'timeDeparture',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Дата и Время отправления "2019-08-01 18:10"'
              }
            },
            {

              key: 'timeArrival',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Дата и Время прибытия в формате "2019-08-02 02:00"'
              }
            },
            {

              key: 'segmentPrice',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Цена сегмента '
              }
            },
            {

              key: 'busId',
              type: 'input',
              className: 'col-lg-2',
              templateOptions: {
                label: 'Id автобуса'
              }
            }
          ]

        }
      }
    ]

    return fields
  }

    form = new FormGroup({});
    model: any = {
  
    }
    fields: FormlyFieldConfig[] = []
   
  busSelect(event): void {
    const newVal: string = event.target.value;
    this.busId = newVal;
  }


  showFileds() {
    console.log(this.model)
  }
  createNewTrips() {



    // this.AddSegmentsService.createNewTrip()
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   )
  }




  //   0: {id: 1, title: "Hyundai", seatsCount: 60}
  // 1: {id: 2, title: "Mercedes", seatsCount: 80}



}
