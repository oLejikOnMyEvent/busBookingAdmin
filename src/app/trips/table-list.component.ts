import { Component, OnInit } from '@angular/core';
import { AllTripsNumbersService } from '../service/all-trips-numbers.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor(private AllTripsNumbersService: AllTripsNumbersService) { }

  arrOfTrips

  ngOnInit() {
    this.AllTripsNumbersService.getTripsNumber()
      .subscribe(
        (res) => {
          this.arrOfTrips = res;
          console.log(res, 'getTripsNumber')
        },
        err => console.log(err)
      )
  }


  fullTrip
  deleteItemId
  onChange(event) {
    const newVal: string = event.target.value;
    this.deleteItemId = newVal;
    this.AllTripsNumbersService.getFullTrip(this.deleteItemId)
      .subscribe(
        (res) => {
          this.fullTrip = res
          console.log(res)
        },
        err => console.log(err)
      )
  }

  deleteItem() {
    this.AllTripsNumbersService.deleteTrip(this.deleteItemId)

  }
}
