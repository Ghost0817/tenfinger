import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'x-grid',
  templateUrl: './x-grid.component.html',
  styleUrls: ['./x-grid.component.scss']
})
export class XGridComponent implements OnInit {

  @Input() stateEvents: any;
  @Input() stateful!: boolean | true;
  @Input() width!: string|'auto';
  @Input() height!: string|'auto';
  @Input() autoHeight!: boolean| true;
  @Input() minHeight!: string;
  @Input() frame!: boolean| true;
  @Input() pageSize!: string;
  @Input() sortInfo: any;
  @Input() columnDefs: any;
  @Input() rowData: any;
  @Input() isSort!: boolean | false ;

  //faAngleDown = faAngleDown;

  constructor() { }

  ngOnInit(): void {
  }

}
