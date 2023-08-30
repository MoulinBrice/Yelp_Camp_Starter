import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-campcard',
  templateUrl: './campcard.component.html',
  styleUrls: ['./campcard.component.scss']
})
export class CampcardComponent implements OnInit {

  @Input() camp: any;

  ngOnInit() {
    // console.table(this.camp);
  }

}
