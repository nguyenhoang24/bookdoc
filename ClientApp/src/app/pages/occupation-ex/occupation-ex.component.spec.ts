import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OccupationExComponent } from './occupation-ex.component';

describe('OccupationExComponent', () => {
  let component: OccupationExComponent;
  let fixture: ComponentFixture<OccupationExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccupationExComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OccupationExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
