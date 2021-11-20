import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

export class SquareComponent implements OnInit {

	@Output() backGroundColorEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public getBackGroundColor(color?: string)
  {
	this.backGroundColorEvent.emit(color);
  }
}
