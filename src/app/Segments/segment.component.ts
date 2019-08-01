import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddSegmentsService } from '../service/add-segments.service'
import { FormControl, FormGroup, Validators, FormArray, FormBuilder } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

export interface inputs {
  value?: string;
  validator: string;
}

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  time = { hour: 7, minute: 0, second: 0 };
  // model;

  StationsFormArray: FormArray


  constructor(private AddSegmentsService: AddSegmentsService, private fb: FormBuilder) {

    this.StationsFormArray = this.fb.array([
      this.fb.group({
        tripNumber: [''],
        routeSegmentId: [''],
        timeDeparture: [''],
        timeArrival: [''],
        segmentPrice: [''],
        busId: ['']
      })
    ])
  }



  // inputsArray: {
  //   tripNumber: '',
  //   routeSegmentId: '',
  //   timeDeparture: '',
  //   timeArrival: '',
  //   segmentPrice: '',
  //   busId: ''
  // }

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



  // HHtimeDeparture = "";
  // MMtimeDeparture = "";
  // dataDeparture = '';
  // timeDeparture = "timeDeparture";
  // timeDepatruteValue = `${this.dataDeparture} ${this.HHtimeDeparture}:${this.MMtimeDeparture}`




  // HHtimeArrival: "";
  // MMtimeArrival: "";
  // dataArrival: '';
  // timeArrival = "timeArrival";
  // timeArrivalValue = `${this.dataArrival} ${this.HHtimeArrival}:${this.MMtimeArrival}`


  // DynamicForm: FormGroup;
  // segmentPriceName = "segmentPrice";
  // segmentPriceValue = ''
  // tripNumber = "tripNumber"
  // tripNumberValue = ""
  // routeSegmentId = "routeSegmentId"

  busIdName = "busId"
  busIdValue: number;
  test = 'privet';



  FormValue = new FormArray([

  ])


  form = new FormGroup({});
  model = {
    tripNumber: '',
    routeSegmentId: '',
    timeDeparture: '',
    timeArrival: '',
    segmentPrice: '',
    busId: this.busId
  }
  fields: FormlyFieldConfig[] = [{
    key: 'email',
    type: 'input',   
    templateOptions: {
      label: 'Email address',
      placeholder: 'Enter email',
    }
  },
    {
      key: 'timeDeparture',
      type: 'input',
      templateOptions: {
        label: 'Enter time departure'
      }

    }
];


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
          this.busSelector = response, console.log(this.busSelector);
        },
        error => console.log(error)
      )
  }

  public onChange(event): void {

    const newVal: string = event.target.value;

    this.AddSegmentsService.getAdminRoute(newVal)
      .subscribe(
        (response) => {

          this.segmentSelect = response
          console.log(this.segmentSelect, this.segmentSelect.length);

          // this.segmentSelectId = this.segmentSelect.map(item => item.id),
          // console.log(this.segmentSelectId, "segment select")

        },
        (error) => console.log(error)
      )


  }
  busSelect(event): void {
    const newVal: string = event.target.value;
    this.busId = newVal;
    console.log(this.busId);

  }

  createNewTrips() {



    // this.AddSegmentsService.createNewTrip()
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   )
  }
}
