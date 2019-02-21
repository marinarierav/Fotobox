import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { UploadPage } from '../pages/upload/upload';

// ngx-translate
import { LangService } from '../providers/lang-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  currentLang : string;

  constructor(  private platform: Platform, 
                private statusBar: StatusBar, 
                private splashScreen: SplashScreen,
                private langService : LangService,
                ) 
  {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Menu.Home', component: HomePage },
      { title: 'Menu.Show-photos', component: ListPage },
      { title: 'Menu.Upload-photos', component: UploadPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.langService.init("ca", ["en", "ca"]);

      this.langService.onLang.subscribe((lang) => this.currentLang = lang );
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  setLanguage(lang: string) {
    this.langService.setLanguage(lang);
  }

}
