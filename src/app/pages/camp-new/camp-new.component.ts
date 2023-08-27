import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampsService } from 'src/app/services/camps.service';

import { Camp } from 'src/app/camp';


@Component({
  selector: 'app-camp-new',
  templateUrl: './camp-new.component.html',
  styleUrls: ['./camp-new.component.scss']
})
export class CampNewComponent implements OnInit {

  newCamp: any;
  userName:string="";

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CampsService: CampsService
  ) { }

  ngOnInit() {
    this.newCamp = {
      id: 0,
      name: '',
      image: '',
      price: 0,
      description: '',
      devise:"$",
      location: '',
      submitter: '',
      created_at: new Date(),
      updated_at: new Date(),
    };
  }

  onSubmit(){

  }
}
