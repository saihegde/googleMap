import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { GoogleMaps, GoogleMap } from '@ionic-native/google-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: GoogleMap;

  constructor(public navCtrl: NavController) {

  }

  ngAfterViewInit(){
   this.initMap();
  }

  initMap() {
    let element = this.mapElement.nativeElement;
    this.map = GoogleMaps.create(element);
  }

}
