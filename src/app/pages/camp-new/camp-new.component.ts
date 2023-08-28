import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampsService } from 'src/app/services/camps.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Camp } from 'src/app/camp';


@Component({
  selector: 'app-camp-new',
  templateUrl: './camp-new.component.html',
  styleUrls: ['./camp-new.component.scss']
})
export class CampNewComponent implements OnInit {

  newCamp: any;
  userName:string="";

  campForm: FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required, Validators.minLength(3)]),
    price: new FormControl('',[Validators.required]),
    Image: new FormControl('',[Validators.required]),
    Description: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(110)]),
  });

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
