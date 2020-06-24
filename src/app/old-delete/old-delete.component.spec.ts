import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldDeleteComponent } from './old-delete.component';

describe('OldDeleteComponent', () => {
  let component: OldDeleteComponent;
  let fixture: ComponentFixture<OldDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
