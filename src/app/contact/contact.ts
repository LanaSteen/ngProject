import { Component, inject } from '@angular/core';
import { Test } from '../services/test';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  // constructor(private greeting : Test ){

  //   this.helloText = this.greeting.sayHello();
  // }



  private greeting = inject(Test);


  countPrice = this.greeting.countAfterPercent(50,20)

  //  helloText:any; // 'გამარჯობა'

}
