import { Component, ViewChild } from '@angular/core';
import { App, ionicBootstrap, Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { AccueilPage } from './pages/accueil/accueil';
import { BlogPage } from './pages/blog/blog';
import { BoutiquePage } from './pages/boutique/boutique';
import { ConceptPage } from './pages/concept/concept';
import { ContactPage } from './pages/contact/contact';
import { LivraisonPage } from './pages/livraison/livraison';
import { OffrePage } from './pages/offre/offre';
import { AccountPage } from './pages/account/account';

@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AccountPage;

  pages: Array<{title: string, component: any, icon: string}>

  constructor(private platform: Platform) {
    this.initializeApp();

    this.pages = [
      { title: 'Accueil', component: AccueilPage, icon: 'md-home' },
      { title: 'Le concept', component: ConceptPage, icon: 'eye' },
      { title: "L'offre", component: OffrePage, icon: 'list' },
      { title: 'La livraison', component: LivraisonPage, icon: 'bicycle' },
      { title: 'La boutique', component: BoutiquePage, icon: 'cart' },
      { title: 'Mon compte', component: AccountPage, icon: 'person' },
      { title: 'Blog', component: BlogPage, icon: 'logo-rss' },
      { title: 'Contact', component: ContactPage, icon: 'contact' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }
}

ionicBootstrap(MyApp, [], {backButtonText: 'Retour',backButtonIcon: 'ios-arrow-back', iconMode: 'md'});
