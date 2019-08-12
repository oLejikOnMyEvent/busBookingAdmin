import { Component, OnInit } from '@angular/core';
import { AddDelStationService} from '../service/add-del-station.service'
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-del-station',
  templateUrl: './add-del-station.component.html',
  styleUrls: ['./add-del-station.component.scss']
})
export class AddDelStationComponent implements OnInit {

  constructor(private AddDelStationService: AddDelStationService, private fb: FormBuilder) { }

  ngOnInit() {
  }

  newStationGroup = this.fb.group({
    newStation: this.fb.control('')
  })

  selectStationGroup = this.fb.group({
    selectStation: this.fb.control('')
  })


  stationsArr
  addNewStation(){
    console.log(this.newStationGroup.value.newStation)

    let sendObj ={
      title: this.newStationGroup.value.newStation
    }
    this.AddDelStationService.addNewStation(sendObj)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
              )
    alert(`Вы добавили станцию ${this.newStationGroup.value.newStation}`)
      }

  showStations(){
   this.AddDelStationService.getStations()
      .subscribe(
        res => this.stationsArr = res,
        err => console.log(err)
        
      )
      console.log(this.stationsArr); 
  }

  deteStation(){
    console.log(this.selectStationGroup.value.selectStation);
    
   this.AddDelStationService.deleteStations(this.selectStationGroup.value.selectStation)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
            
      )
   alert(`Вы удалили станцию ${this.selectStationGroup.value.selectStation}`)
   this.stationsArr = null
  }
 

}
