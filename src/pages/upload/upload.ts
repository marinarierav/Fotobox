import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

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
  response;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  API : string = 'https://my-json-server.typicode.com/marinarierav/Fotobox/users';

  //API: string = "https://api.sunrise-sunset.org/json";
  
  // Estany de Sant Maurici
  lat: number = 42.582104;
  lon: number = 1.0008419;
  sunrise : string;
  sunset : string;

  ionViewDidLoad() {
    console.log('ionViewDidLoad UploadPage');
  }


  
  connectDB(event) {
    console.log("Click !!!");
    console.log(event);

    this.boto = "Connecting...";
    this.color = "danger";

    //$connexio = new PDO(  'mysql:host=127.0.0.1;dbname=tdiwh1;port=3306;charset=utf8mb4', 'tdiw-h1',  'fM_MzvwX'  );

    let data = {  lat: this.lat.toString(), 
      lng: this.lon.toString(),
      formatted: "0"
    };
    
    //const params = new HttpParams({fromObject: data});

    //const headers = new HttpHeaders().set("Accept", "application/json");


    var headers = new HttpHeaders();
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    let options = { headers: headers, 
                    //params: params, 
                    withCredentials: false
                  };

    
    this.http.get(this.API, options).subscribe(answer => {
      console.log("Hem rebut: "+ JSON.stringify(answer));
      
      if (answer['status']=="OK") {
        console.log("OK!!");
      }
    
    });
    

    /*
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => console.log(JSON.stringify(response)));
    */
  }

}
