import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private readonly navCtr: NavController) {}

  public doNavigate(id: any){
  this.navCtr.navigateForward("details/"+ id)
  }
}
