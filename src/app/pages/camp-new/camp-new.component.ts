import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { CampsService } from 'src/app/services/camps.service';
import { UsersService } from 'src/app/services/users.service';
import { Camp } from 'src/app/camp';


@Component({
  selector: 'app-camp-new',
  templateUrl: './camp-new.component.html',
  styleUrls: ['./camp-new.component.scss']
})
export class CampNewComponent implements OnInit {

  newCamp: any;
  userName:string="";
  messageFlash:string="";
  isConnect:boolean=false;

  newcampForm: FormGroup = new FormGroup({
    campName: new FormControl('',[Validators.minLength(3),Validators.required]),
    campPrice: new FormControl('',[Validators.required]),
    campImage: new FormControl('',[Validators.required]),
    campDescription: new FormControl('',[Validators.required, Validators.minLength(6), Validators.maxLength(110)])
  });

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private CampsService: CampsService,
    private UsersService: UsersService
  ) { }

  ngOnInit() {
    this.newCamp = {
      id: 0,
      name: '',
      image: '',
      price: 0,
      description: '',
      devise:"$",
      localisation: '',
      submitter: '',
      created_at: new Date(),
      updated_at: new Date(),
    };
    //on vérifie que l'utilisateur est connecté
    this.isConnect = this.UsersService.isLogedInLocalStorage();
    if(this.isConnect) {
      this.userName = this.UsersService.getUserInLocalStorage().name;
    } else {
      this.router.navigate(['/signin']);
    }
  }


  get campNameControl() {
    console.log(this.newcampForm.get('campName'));
    return this.newcampForm.get('campName');
  }
  get campPriceControl() {
    return this.newcampForm.get('campPrice');
  }
  get campImageControl() {
    return this.newcampForm.get('campImage');
  }
  get campDescriptionControl() {
    return this.newcampForm.get('campDescription');
  }

  onSubmit(){
    this.newCamp.name = this.newcampForm.value.campName;
    this.newCamp.price = this.newcampForm.value.campPrice;
    this.newCamp.image = this.newcampForm.value.campImage;
    this.newCamp.description = this.newcampForm.value.campDescription;
    this.newCamp.submitter = this.userName;
    this.newCamp.localisation = "/assets/martinique.png";
    this.newCamp.devise = "$";
    this.newCamp.created_at = new Date();
    this.newCamp.updated_at = new Date();

    this.CampsService.addCamp(this.newCamp).subscribe(
      (response) => {
        console.log(response);
        this.messageFlash = "Your camp has been added";
        this.router.navigate(['/camps']);
      },
      (error) => {
        console.log(error);
        this.messageFlash = "Error, your camp has not been added";
      }
    );

  }
}
