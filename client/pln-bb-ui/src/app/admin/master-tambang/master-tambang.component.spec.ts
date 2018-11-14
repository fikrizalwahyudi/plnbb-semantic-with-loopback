import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterTambangComponent } from './master-tambang.component';

describe('MasterTambangComponent', () => {
  let component: MasterTambangComponent;
  let fixture: ComponentFixture<MasterTambangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterTambangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterTambangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
