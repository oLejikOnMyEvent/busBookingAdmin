import { map } from 'rxjs/operators';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddSegmentsService } from '../service/add-segments.service'
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { isNgTemplate } from '@angular/compiler';
import { disableDebugTools } from '@angular/platform-browser';

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

 
  }

  route: any;

  segmentSelect: any;

  busSelector: any;

  busId: any;

  segmentSelectId: any;





  ngOnInit() {
    this.AddSegmentsService.getRouteNumber()
      .subscribe(
        (response) => {
          this.route = response
            // console.log(this.route)
        },
        error => console.log(error)
      )



    this.AddSegmentsService.getBusList()
      .subscribe(
        (response) => {
          this.busSelector = response
        
        },
        error => console.log(error)
      )
  }

  ShowTable() {
    this.fields = this.getFields();
  }

  onChange(event): void {

    const newVal: string = event.target.value;

    this.AddSegmentsService.getAdminRoute(newVal)
      .subscribe(
        (response) => {

          this.model.stationsNumbers = response
          console.log(this.model.stationsNumbers);

  

        },
        (error) => console.log(error)
      )

    return this.model.stationsNumbers
  }




  options: FormlyFormOptions = {};

  // tslint:disable-next-line: member-ordering

  getFields() {

    const fields: FormlyFieldConfig[] =
      [ 
        {
        key: 'tripNumOne',
        type: 'input',
        templateOptions: {
          label: 'Номер Рейса',
        },
      },
      {
        key: 'busIdOne',
        type: 'select',
        className: 'col-lg-2',
        templateOptions: {
          label: 'Id автобуса',
          options:[

            {label: "60 мест", value:1},
            {label: "40 мест", value:2}
         
          ]
        
        }
      },
        
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
                key: 'segmentDto.title',
                type: 'input',
                className: 'col-lg-2',
                templateOptions: {
                  label: 'Название Сегмента',
                  disabled: true
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

                key: 'segmentDto.price',
                type: 'input',
                className: 'col-lg-2',
                templateOptions: {
                  label: 'Цена сегмента '
                }
              },
           
              {

                key: 'id',
                type: 'input',
                className: 'col-lg-1',
                templateOptions: {
                  label: 'Номер Сегмента',
                  disabled:true
                },
                 
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

   let imputsObj: {
      tripNumber: '',
      routeSegmentId: '',
      timeDeparture: '',
      timeArrival: '',
      segmentPrice: '',
      busId: ''
    }

    let objModel = this.model

    let objModelBusID = this.model.busIdOne
    let objModelTripNumOne  = this.model.tripNumOne
      let objModelStationsNumbers =  this.model.stationsNumbers

      for( let i in objModelStationsNumbers ){
       objModelStationsNumbers[i].routeSegmentId =objModelStationsNumbers[i].id 
      delete objModelStationsNumbers[i].id 
          delete objModelStationsNumbers[i].routeDto
         delete   objModelStationsNumbers[i].segmentDto
      }


    console.log(objModel, objModelBusID, objModelTripNumOne, objModelStationsNumbers)


    // this.AddSegmentsService.createNewTrip(objData)
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   )
  }





}


// busIdOne: 1
// stationsNumbers: Array(2)
// 0:
// id: 336
// routeDto:
// id: 33
// title: " 111"
// vector: "==1==2==3=="
// segmentDto:
// id: 299
// price: "500"
// stationFinish:
// id: 2
// title: "Воронеж"
// stationStart:
// id: 1
// title: "Москва"

// title: "Москва-Воронеж"

// timeArrival: "2019-08-01 18:11"
// timeDeparture: "2019-08-01 18:10"
// 1: {id: 337, routeDto: {…}, segmentDto: {…}, timeDeparture: "2019-08-01 18:12", timeArrival: "2019-08-01 18:13"}
// length: 2
// __proto__: Array(0)
// tripNumOne: "1488"