import { Component, OnInit } from '@angular/core';
import { NavController, SqlStorage } from 'ionic-angular';
import { BoutiqueService } from './boutique.service';
import { BoutiquedetailPage } from './boutiquedetail/boutiquedetail';

@Component({
  templateUrl: 'build/pages/boutique/boutique.html',
  providers: [BoutiqueService]
})

export class BoutiquePage implements OnInit{

  response;
  selectedItem: any;

  constructor(
    private nav: NavController,
    private boutiqueService: BoutiqueService) {}

  ngOnInit() {
    this.boutiqueService.getProducts()
    .subscribe(
        response => this.response = response,
        error => console.log(error));
  }

  itemTapped(event, produit) {
    this.nav.push(BoutiquedetailPage, {
      produit: produit
    });
  }

}
