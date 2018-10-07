import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'build/pages/boutique/boutiquedetail/boutiquedetail.html',
})

export class BoutiquedetailPage {
  selectedItem: any;
  quantity: number = 1;

  constructor(public nav: NavController, navParams: NavParams) {
    this.nav = nav;
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('produit');
  }

  addQuantity() {
    this.quantity++;
  }

  minusQuantity() {
    if(this.quantity > 1){
      this.quantity--;
    }
  }

}
