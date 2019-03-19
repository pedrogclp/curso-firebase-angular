import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'curso-firebase-angular';
  public test : string = '';
  constructor( private httpClient: HttpClient ){

  }

  hacerTest(){
    this.httpClient.get('/api/test').subscribe(
      (result: any) => {
        this.test = result.mensaje;
      },
      (error) => {
        this.test = 'Ha ocurrido un error en la petición del test';
        console.warn(error);
      }
    )
  }
}
