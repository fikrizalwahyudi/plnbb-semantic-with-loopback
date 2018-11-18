import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterPltuComponent } from './master-pltu.component';

describe('MasterPltuComponent', () => {
  let component: MasterPltuComponent;
  let fixture: ComponentFixture<MasterPltuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterPltuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterPltuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
