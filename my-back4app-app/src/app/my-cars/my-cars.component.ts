import { Component, OnInit } from '@angular/core';
import { MyCarsService } from './my-cars.service';

@Component({
  selector: 'app-my-cars',
  templateUrl: './my-cars.component.html',
  styleUrls: ['./my-cars.component.scss']
})
export class MyCarsComponent implements OnInit {

  results = []

  colors = [
    {id: 1, name: "red"},
    {id: 2, name: "yellow"},
    {id: 3, name: "blue"},
    {id: 4, name: "black"}
  ];

  onChange(newValue) {
    this.showQueryCars(newValue);
  }
  constructor(private myCarsService: MyCarsService) { }

  showAllCars(){
    this.myCarsService.getShowAllCars().subscribe(result =>{
      this.results = result;
    });
  }

  showQueryCars(color){
    this.myCarsService.getQuery(color.name).subscribe(result =>{
      this.results = result;
    });
  }
  ngOnInit() {
    this.showAllCars();
  }

}
