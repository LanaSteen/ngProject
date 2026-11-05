import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Test } from '../services/test';

@Component({
  selector: 'app-home',
  imports: [FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // userName? : string;   // nullable   null
  // userName! :string  //



  //////////////  ინჯექშენი კონსტრუქტორში
constructor(private greeting: Test) {
  this.helloText = this.greeting.sayHello();
}  //ძველი ვერსია 

  helloText: string;
///////////////

///////////////// ინჯექშენი inject-ით
  test = inject(Test)
  gamarjoba : string = this.test.sayHello(); // "გამარჯობა"
  ///////////////////////////////////////



  price = 50;

  percentFromPrice = this.test.countPercentage(this.price, 30)

  priceAfterSale = this.test.countAfterPercent(this.price, 30)


  userName: string = '';

  name: string = 'John';

  age: number = 50;

  isValid: boolean = true;

  search!: string;
  showSearch!: string;

  changeName() {
    if (this.name == 'John') {
      this.name = 'Jane';
    } else {
      this.name = 'John';
    }
  }

  ShowChanges() {
    this.showSearch = this.search;
  }
  clear(){
        this.showSearch  = "";
  }

  // button.AddEventListener(click, function)

  //  rame : any;  არ გამოიყენოთ
}
