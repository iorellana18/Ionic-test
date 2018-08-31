import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { JsonplaceholderProvider } from '../../providers/jsonplaceholder/jsonplaceholder';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

	users

  constructor(public navCtrl: NavController, public provider: JsonplaceholderProvider) {}

  	ionViewDidLoad(){
		this.provider.obtainUsers()
		.subscribe(
			(data)=> {this.users = data;},
			(error)=> {console.log(error);}
		)
	}

}
