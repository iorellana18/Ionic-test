import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertController: AlertController) {

  }
  alert(){
	let simpleAlert = this.alertController.create({
		title: 'Super título',
		message: 'Acabas de presionar el botón de alerta',
		buttons: ['Ok!'] 
	});
	simpleAlert.present();
  }
  alert2(){
	let simpleAlert2 = this.alertController.create({
		title: 'Super título',
		message: 'Acabas de presionar el botón de alerta',
		inputs: [
			{
				name: 'Nombre',
				placeholder: 'Nombre'
			}
		],
		buttons: [
			{
				text: 'Cancelar'
			},
			{
				text: 'guardar'
			}
		] 
	});
	simpleAlert2.present();
  }
}
