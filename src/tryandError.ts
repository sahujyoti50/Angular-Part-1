  // count: number = 0;
  // counter(type: string) {
  //   type === 'add' ? this.count++ : this.count--
  // }
  // color:string="brown";
  // ******************************
  // users = ['anil', 'javed', 'ali', 'sarah'];
  // userDetails = [{
  //   firstName: 'jyoti',
  //   lastName: 'sahu',
  //   contactNo: '987643210'
  // },
  // {
  //   firstName: 'anil',
  //   lastName: 'ali',
  //   contactNo: '777743210'
  // }]
  // *******************************************
  // details=[{
  //   name:'angle',
  //   phoneNumber:'9876543210',
  //   hobbies:[
  //     'reading','cooking','dancing'
  //   ]
  // }];
  // ***********************************
    // color = ['blue', 'green', 'red', 'yellow'];
  // i:number=0;
  // setBackgroundColor() {
  //   setInterval(() => {
  //   this.i++;
  //   }, 1000)
  // }
  // color:string='red';
  // setBackgroundColor() {
  //   this.color='blue';
  // }
  // ********************************
  // userData: any = [];
  // getData(data: NgForm) {
  //   this.userData = data;
  //    console.log(this.userData);
  // }
  // *************************
//   toggle=false;
// showDetails(){
//   this.toggle=!this.toggle;
// }
// *********************************
// import { Component } from '@angular/core';
// import { NgForm } from '@angular/forms';
// interface Alert {
// 	type: string;
// 	message: string;
// }
// const ALERTS: Alert[] = [
// 	{
// 		type: 'success',
// 		message: 'This is an success alert',
// 	},
// 	{
// 		type: 'info',
// 		message: 'This is an info alert',
// 	},
// 	{
// 		type: 'warning',
// 		message: 'This is a warning alert',
// 	},
// 	{
// 		type: 'danger',
// 		message: 'This is a danger alert',
// 	},
// 	{
// 		type: 'primary',
// 		message: 'This is a primary alert',
// 	},
// 	{
// 		type: 'secondary',
// 		message: 'This is a secondary alert',
// 	},
// 	{
// 		type: 'light',
// 		message: 'This is a light alert',
// 	},
// 	{
// 		type: 'dark',
// 		message: 'This is a dark alert',
// 	},
// ];
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   alerts: Alert[]=[];
//   close(alert: Alert) {
// 		this.alerts.splice(this.alerts.indexOf(alert), 1);
// 	}
//   reset() {
// 		this.alerts = Array.from(ALERTS);
// 	}

// }
// ************
// todo
// toDoList: any[] = [];
// addTaskHandler(newTask: string) {

//   this.toDoList.push({ id: this.toDoList.length, name: newTask });
//   console.log(this.toDoList);
// }
// removeItem(id: number) {

//   this.toDoList=this.toDoList.filter((item) => item.id !== id);
// }
// *************************

// name: any = "";
// addInput(event:Event) {
//   this.name = (<HTMLInputElement>event.target).value;
// }
// *********************