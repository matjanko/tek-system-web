import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfficeNavBarComponent } from './office-nav-bar.component';

describe('OfficeNavBarComponent', () => {
  let component: OfficeNavBarComponent;
  let fixture: ComponentFixture<OfficeNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfficeNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfficeNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
