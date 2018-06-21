import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  bools: Array<any> = [
    true,
    false
  ];

  nums: any[] = [
    1,
    2.5,
    5
  ];

  strs: Array<any> = [
    'Hello',
    'There'
  ];

  test: any =  {
    id: 2,
    name: 'user'
  };

  user: any = {
    id: 2,
    name: 'user'
  };

  obj: any = [
    this.test,
    this.user
  ];

  types: Array<any> = [
    this.bools,
    this.nums,
    this.strs,
    this.obj
  ];


  getTypeOf(x) {
    return typeof(x);
  }

  ngOnInit() {
    console.log(this.types[0]);
  }
}


// First Attempt is right but wanted to check the other way
        // types: Array<any> = [ {
        //   // user : {
        //   //   id: 2,
        //   //   name: 'user'
        //   // },

        //   // bools: [
        //   //   true,
        //   //   false
        //   // ],

        //   // nums: [
        //   //   1,
        //   //   2.5,
        //   //   5
        //   // ],

        //   // strs: [
        //   //   'Hi',
        //   //   'There'
        //   // ],

        //   // objs: [{
        //   //   test : {
        //   //   id: 1,
        //   //   name: 'test'
        //   // }
        //   // }]

        // }];
