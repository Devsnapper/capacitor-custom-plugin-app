import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';

import {TestingApp} from 'tesing-app';
//const { TestingApp } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  public name;
  public output;
  constructor() {
   // Plugins.Echo.echo({ value: 'Hello!' });
    //  let x =  TestingApp.echo({ value: 'Hello!' });
    // console.log('test');
    // console.log(x);
  }

  test(){
    //const {Echo} = Plugins;
    console.log(this.name);
    TestingApp.echo({ value: this.name })
    .then( (res) => {
      console.log('RES: ' + JSON.stringify(res));
      this.output = JSON.stringify(res.value);
    })
    .catch( (err) => {
      console.error('ERR: ', err);
    });
  }
  

}
