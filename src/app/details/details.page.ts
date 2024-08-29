import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
prod: any;

  constructor(private readonly router: Router, private readonly params: ActivatedRoute) { }

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {
      const url = environment.production + "prod"
      const response = await this.router
    
    });

  }

}
