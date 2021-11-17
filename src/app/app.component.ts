import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TP1';
  public bgcolor : string='';

  public setBGColor(color:string)
  {
	  this.bgcolor = color;
  }
}
