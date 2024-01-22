import { ChangeDetectorRef, Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  xyz: any = [1, 2, 3, 4];
  abc: any = []
  parentData: any;
  Data: any;
  constructor( private cdref: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

  onClick() {
    this.abc = [5, 6, 7]
    this.parentData = this.xyz.concat(this.abc);
    console.log("... this.parentData.....", this.parentData)
  }

  getChildData(e:any) {
    console.log("eeeeeee", e)
    this.Data = e.target.value;
    console.log("....this.Data...67777..", this.Data)
  }






}
