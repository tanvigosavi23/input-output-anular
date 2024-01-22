import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData: any;
  data: any;
  @Output() childData = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {


  }

  ngOnChanges() {
    this.data = this.parentData;
    console.log(".....this.data......", this.data)
    var sum = 0;
    for (var i = 0; i < this.data.length; i++) {
      sum += this.data[i]
    }
    this.data = sum;
    console.log("......this.childData........", this.data)
  }


  sentData(){
    this.childData.emit(this.data)
  }




}
