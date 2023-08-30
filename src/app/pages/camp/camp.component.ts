import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CampsService } from 'src/app/services/camps.service';

import { Camp } from 'src/app/camp';


@Component({
  selector: 'app-camp',
  templateUrl: './camp.component.html',
  styleUrls: ['./camp.component.scss']
})
export class CampComponent {
    camp: Camp[] | any;
    idCamp: number | any;

  constructor(
    private campsService : CampsService,
    private route: ActivatedRoute,
    private router: Router) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.campsService.getCamp(id).subscribe(campDetails => {
       this.camp = campDetails;
       this.idCamp=this.camp.id;
       console.log(campDetails)
    });
  }

  goback(){
    this.router.navigate(['/camps']);
  }




}
