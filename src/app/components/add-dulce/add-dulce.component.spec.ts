import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDulceComponent } from './add-dulce.component';

describe('AddDulceComponent', () => {
  let component: AddDulceComponent;
  let fixture: ComponentFixture<AddDulceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDulceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDulceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
