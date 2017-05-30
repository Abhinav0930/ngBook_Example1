import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDevelopersComponent } from './display-developers.component';

describe('DisplayDevelopersComponent', () => {
  let component: DisplayDevelopersComponent;
  let fixture: ComponentFixture<DisplayDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
