import { Component, OnInit } from '@angular/core';
import { AllBookingRoutesService } from '../service/all-booking-routes.service'
import { AllTripsNumbersService } from '../service/all-trips-numbers.service'
import { AllUsersService } from '../service/all-users.service'



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private AllBookingRoutesService: AllBookingRoutesService, private AllTripsNumbersService: AllTripsNumbersService, private AllUsersService: AllUsersService) { }

  buyedTickets
  ngOnInit() {
    this.AllBookingRoutesService.buyedTickets()
      .subscribe(
        (res) => {
          console.log(res, 'buyedTickets'),
            this.buyedTickets = res
        },
        err => console.log(err)
      )

      }
    }
    //       0:
    // arrival: "2019-07-11T18:40:00"
    // bookingDate: "2019-07-26T16:59:14.541"
    // departure: "2019-07-10T09:00:00"
    // price: 4900
    // seatNum: 14
    // tripNumber: 17
    // tripTitle: "Москва - Махачкала"
    // userFullname: "Rafael Mendes"
    // userName: "rafa"


    // this.AllTripsNumbersService.getTripsNumber()
    //   .subscribe(
    //     res => console.log(res, 'getTripsNumber' ),
    //     err => console.log(err)
    //   ),


    //         609
    // 1: 25
    // 2: 111
    // 3: 100
    // 4: 110
    // 5: 15
    // 6: 17
    // 7: 20
    // 8: 600
    // this.AllTripsNumbersService.getFullTrip(25)
    //   .subscribe(
    //     res => console.log(res," getFullTrip (25)" ),
    //     err => console.log(err)
    //   ),


    //         0:
    // busDto:
    // id: 1
    // seatsCount: 60
    // title: "Hyundai"
    // id: 123
    // routeSegmentDto:
    // id: 8
    // routeDto:
    // id: 5
    // title: "Мхч-Врнж-Елец-Мск"
    // vector: "==11==4==5==6==2==3==1=="

    // segmentDto:
    // id: 14
    // price: 1500
    // stationFinish:
    // id: 4
    // title: "Краснодар"

    // stationStart:
    // id: 11
    // title: "Махачкала"

    // title: "Махачкала-Краснодар"

    // timeArrival: "2019-07-15T22:10:00"
    // timeDeparture: "2019-07-15T10:00:00"
    // tripNum: 25


    //     this.AllUsersService.getAllUsers()
    //       .subscribe(
    //         res => console.log(res, 'getAllUsers'),
    //         err => console.log(err)
    //       )
    // }

    //   0:
    // userFullName: "Rafael Mendes"
    // userName: "rafa"

  
