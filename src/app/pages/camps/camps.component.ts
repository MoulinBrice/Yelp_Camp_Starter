import { Component, OnInit } from '@angular/core';
import { CampsService } from 'src/app/services/camps.service';

import { Camp } from 'src/app/camp';

@Component({
  selector: 'app-camps',
  templateUrl: './camps.component.html',
  styleUrls: ['./camps.component.scss'],
  providers: [CampsService]
})
export class CampsComponent implements OnInit{

  campList: Camp[]|any = [];

  constructor(private campsService: CampsService) { };

  ngOnInit() {
    this.campsService.getCamps().subscribe((camps: Camp[]|void) => {console.table(camps); return this.campList = camps})
    console.table(this.campList);
  }

}
