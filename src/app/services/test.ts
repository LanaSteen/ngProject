import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Test {



  // method vs function


  sayHello() : string  {
      return 'გამარჯობა'
  }


  connvert(userName : string){
    console.log(userName.toLocaleUpperCase())
  }



  countPercentage(amount : number, percent : number){
     return amount * percent  / 100
  }


  countAfterPercent(amount : number, percent : number){
    return  amount - (amount * percent  / 100)
  }


}

