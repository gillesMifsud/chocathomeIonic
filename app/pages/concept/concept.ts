import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BoutiquePage } from '../boutique/boutique';

@Component({
  templateUrl: 'build/pages/concept/concept.html',
})
export class ConceptPage {

  etapes = [
    { titre: 'La fréquence', description: 'Sélectionner la fréquence : unique, abonnement 3 ou 6 box' },
    { titre: 'Le format de la boîte', description: 'Se décider entre 250 - 375 ou 500 grammes de chocolats' },
    { titre: 'La livraison', description: 'Opter pour une livraison à domicile ou en point relais' },
    { titre: 'La découverte', description: 'Ouvrez votre boîte et dégustez nos chocolats du moment' }
  ];

  constructor(private nav: NavController) {}

  goBoutique() {
    this.nav.setRoot(BoutiquePage);
  }
}
