import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HomePage } from '../pages/home/home';
import { MyAppComponent } from './app.component';

@NgModule({
  declarations: [MyAppComponent, HomePage],
  imports: [BrowserModule, IonicModule.forRoot(MyAppComponent)],
  bootstrap: [IonicApp],
  entryComponents: [MyAppComponent, HomePage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
