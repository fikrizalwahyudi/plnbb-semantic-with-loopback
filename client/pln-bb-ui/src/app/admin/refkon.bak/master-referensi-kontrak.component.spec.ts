import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterReferensiKontrakComponent } from './master-referensi-kontrak.component';

describe('MasterReferensiKontrakComponent', () => {
  let component: MasterReferensiKontrakComponent;
  let fixture: ComponentFixture<MasterReferensiKontrakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterReferensiKontrakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterReferensiKontrakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
