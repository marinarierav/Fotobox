import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the UploadPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upload',
  templateUrl: 'upload.html',
})
export class UploadPage {

  boto : string = "Connect?";
  color : string = "primary";
  text : string = "No se...";
  name : string = "";
  showName : boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }


  connectDB(event) {
    console.log("Click !!!");
    console.log(event);

    this.boto = "Connecting...";
    this.color = "danger";

    //$connexio = new PDO(  'mysql:host=127.0.0.1;dbname=tdiwh1;port=3306;charset=utf8mb4', 'tdiw-h1',  'fM_MzvwX'  );

  }

}
