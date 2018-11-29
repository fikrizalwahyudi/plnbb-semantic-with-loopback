import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterMitraComponent } from './master-mitra.component';

describe('MasterMitraComponent', () => {
  let component: MasterMitraComponent;
  let fixture: ComponentFixture<MasterMitraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterMitraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterMitraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
