import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleSquareComponent } from './little-square.component';

describe('LittleSquareComponent', () => {
  let component: LittleSquareComponent;
  let fixture: ComponentFixture<LittleSquareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleSquareComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
