import {Page, NavController, NavParams} from 'ionic-angular';
import {Inject, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { FORM_DIRECTIVES, FormBuilder,  ControlGroup, Validators, AbstractControl, Control } from '@angular/common';
import {RegisterService} from './register.service';
import {AccueilPage} from '../../accueil/accueil';

@Page({
  templateUrl: 'build/pages/account/register/register.html',
  providers: [RegisterService],
  directives: [FORM_DIRECTIVES]
})

export class RegisterPage {

  registerForm: ControlGroup;

  last_name: AbstractControl;
  first_name: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;
  address_1: AbstractControl;
  postcode: AbstractControl;
  city: AbstractControl;

  response: string;

  constructor(public nav: NavController, navParams: NavParams,
    private registerService:RegisterService,fb: FormBuilder) {
      this.nav = nav;
      this.registerService = registerService;
      this.registerForm = fb.group({
        last_name: ['', Validators.required],
        first_name: [''],
        email: ['', Validators.required],
        phone: ['', Validators.required],
        address_1: ['', Validators.required],
        postcode: ['', Validators.required],
        city: ['', Validators.required]
      });
      this.last_name =  this.registerForm.controls['last_name'],
      this.first_name =  this.registerForm.controls['first_name'],
      this.email =  this.registerForm.controls['email'],
      this.phone =    this.registerForm.controls['phone'],
      this.address_1 =    this.registerForm.controls['address_1'],
      this.postcode =  this.registerForm.controls['postcode'],
      this.city =  this.registerForm.controls['city']
    }

    onSubmit(values) {
      console.log(values);
    }

    // onSubmit(
    //   data: {
    //     customer: {
    //       email: string,
    //       first_name: string,
    //       last_name: string,
    //       username: string,
    //       password: string,
    //       billing_address: {
    //         first_name: string,
    //         last_name: string,
    //         company: string,
    //         address_1: string,
    //         address_2: string,
    //         city: string,
    //         state: string,
    //         postcode: string,
    //         country: string,
    //         email: string,
    //         phone: string
    //       },
    //       shipping_address: {
    //         first_name: string,
    //         last_name: string,
    //         company: string,
    //         address_1: string,
    //         address_2: string,
    //         city: string,
    //         state: string,
    //         postcode: string,
    //         country: string
    //       }
    //     }
    //   }
    // ) {
    //   this.registerService.register(
    //     data = {
    //       customer: {
    //         email: this.email.value,
    //         first_name: this.first_name.value,
    //         last_name: this.last_name.value,
    //         username: this.username.value,
    //         password: this.password.value,
    //         billing_address: {
    //           first_name: this.first_name.value,
    //           last_name: this.last_name.value,
    //           company: '',
    //           address_1: this.address_1.value,
    //           address_2: '',
    //           city: this.city.value,
    //           state: '',
    //           postcode: this.postcode.value,
    //           country: 'FR',
    //           email: this.email.value,
    //           phone: this.phone.value
    //         },
    //         shipping_address: {
    //           first_name: this.first_name.value,
    //           last_name: this.last_name.value,
    //           company: '',
    //           address_1: this.address_1.value,
    //           address_2: '',
    //           city: this.city.value,
    //           state: '',
    //           postcode: this.postcode.value,
    //           country: 'FR'
    //         }
    //       }
    //     }
    //   )
    //   .subscribe(
    //     response => this.response = response,
    //     error => console.log(error)
    //   );
    //   window.alert('Envoyé avec succès');
    //   this.nav.setRoot(AccueilPage);
    // }
  }
