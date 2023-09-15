import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationGroupCreateUpdateComponent } from './population-group-create-update.component';

describe('PopulationGroupCreateUpdateComponent', () => {
  let component: PopulationGroupCreateUpdateComponent;
  let fixture: ComponentFixture<PopulationGroupCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopulationGroupCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopulationGroupCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
