import { Component, OnInit , Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-little-square',
  templateUrl: './little-square.component.html',
  styleUrls: ['./little-square.component.scss']
})
export class LittleSquareComponent implements OnInit {

	@Input() button_color = '';
	@Output() buttonColorEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getButtonColor(color?: string)
  {
	this.buttonColorEvent.emit(color);
  }

}
