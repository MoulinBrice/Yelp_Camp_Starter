import { Component, OnInit } from '@angular/core';
import { CampsService } from 'src/app/services/camps.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  searchForm: FormGroup = new FormGroup({
    searchCamp: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.campsService.getCamps().subscribe((camps: Camp[]|void) => {return this.campList = camps})
    // console.table(this.campList);
  }

  searchCamp(term: string) {
    this.campsService.searchCamp(term).subscribe((camps: Camp[]|void) => {return this.campList = camps})
  }

    get searchCampControl() {
    return this.searchForm.get('searchCamp');}

    onSubmit() {
    this.searchCamp(this.searchCampControl?.value);}


}
