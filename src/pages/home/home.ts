import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import Tesseract from 'tesseract.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  @ViewChild('imagen')
  private imagen: ElementRef;

  constructor(public navCtrl: NavController, public loading: LoadingController) {

  }
  analiza() {
    let load = this.loading.create({ content: 'Analizando la imagen' });
    load.present();
    Tesseract.recognize(this.imagen.nativeElement.src,{lang:'spa'})
    .then(data => {
      load.dismiss();
      console.log('analizando');
      console.log(data)
      alert(data.text);
      // console.log(text);
    }).catch(err => {
      load.dismiss();
      console.log('error analizando');
    });
  }
}
