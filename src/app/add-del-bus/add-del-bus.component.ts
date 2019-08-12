import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AddDelBusService} from '../service/add-del-bus.service';

@Component({
  selector: 'app-add-del-bus',
  templateUrl: './add-del-bus.component.html',
  styleUrls: ['./add-del-bus.component.scss']
})
export class AddDelBusComponent implements OnInit {

  constructor(private fb:FormBuilder, private AddDelBusService: AddDelBusService ) { }

  buses = this.fb.group({
    title: this.fb.control(''),
    seatsCount: this.fb.control('')
  })


  allBuses;

  selectBus = this.fb.group({
    choiseBus : this.fb.control('')
  })
  
  ngOnInit() {
  }

addBus(){
  let objOfBus = this.buses.value

  console.log(objOfBus)
     this.AddDelBusService.addBus(objOfBus)
     .subscribe(
       res=> console.log(res),
       err => console.log(err) 
     )
}

ShowBus(){
  this.AddDelBusService.getBus()
     .subscribe(
       res=> {this.allBuses = res; console.log(this.allBuses)},
       err => console.log(err) 
     )
    //  { res = this.allBuses; console.log(this.allBuses)},
}


onChange(event){
const newState = event.target.value

      console.log(newState)
}


DeleteBus(){
  this.AddDelBusService.delBus(this.selectBus.value.choiseBus)
    // .subscribe(
    //   res => console.log(res),
    //   err => console.log(err)
      
      
    // )
    alert(` Вы удалили автобус c id${this.selectBus.value.choiseBus}`)
    this.allBuses = null;
  
}

}
