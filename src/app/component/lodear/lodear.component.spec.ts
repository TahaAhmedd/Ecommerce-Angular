import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LodearComponent } from './lodear.component';

describe('LodearComponent', () => {
  let component: LodearComponent;
  let fixture: ComponentFixture<LodearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LodearComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LodearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
