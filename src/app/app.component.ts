import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userManagement';
  value='';

  userDetails = {
    name:'',
    email: ''
  }

  submit(form:any):void{
    debugger
    console.log(form.value);
    console.log(this['userDetails'])
  }

}
