import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReagentCreateEditComponent } from './reagent-create-edit.component';

describe('ReagentCreateEditComponent', () => {
  let component: ReagentCreateEditComponent;
  let fixture: ComponentFixture<ReagentCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReagentCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReagentCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
