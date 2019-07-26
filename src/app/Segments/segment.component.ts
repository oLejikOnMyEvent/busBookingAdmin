import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbTimeStruct } from '@ng-bootstrap/ng-bootstrap';
import { AddSegmentsService } from '../service/add-segments.service'
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';



@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.scss']
})
export class SegmentComponent implements OnInit {

  time = { hour: 7, minute: 0, second: 0 };
  model;
  constructor(private AddSegmentsService: AddSegmentsService) { }


  route: any;


  segmentSelect: any;

  minutes: any;

  hours: any;

  data;

  busSelector: any;

  busId: any;


  segmentSelectId: any;



  HHtimeDeparture = "";
  MMtimeDeparture = "";
  dataDeparture = '';
  timeDeparture = "timeDeparture";
  timeDepatruteValue =`${this.dataDeparture} ${this.HHtimeDeparture}:${this.MMtimeDeparture}`




  HHtimeArrival: "";
  MMtimeArrival: "";
  dataArrival: '';
  timeArrival = "timeArrival";
  timeArrivalValue =`${this.dataArrival} ${this.HHtimeArrival}:${this.MMtimeArrival}`


  // DynamicForm: FormGroup;
  segmentPriceName = "segmentPrice";
  segmentPriceValue = ''
  tripNumber = "tripNumber"
  tripNumberValue = ""
  routeSegmentId = "routeSegmentId"

  busIdName = "busId"
  busIdValue: number;
  test = 'privet';


  DynamicForm = new FormGroup({
    [this.tripNumber]: new FormControl(this.tripNumberValue),
    [this.routeSegmentId]: new FormControl(null),
    [this.timeDeparture]: new FormControl(this.timeDepatruteValue),
    [this.segmentPriceName]: new FormControl(this.segmentSelect),
    [this.timeArrival]: new FormControl(this.timeArrivalValue),
    [this.busIdName]: new FormControl(this.busIdValue)
  })

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

  }

  createNewTrips() {
    console.log(this.DynamicForm.value);


    // this.AddSegmentsService.createNewTrip()
    //   .subscribe(
    //     response => console.log(response),
    //     error => console.log(error)
    //   )
  }
}
