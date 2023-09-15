import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCreateEditComponent } from './organization-create-edit.component';

describe('OrganizationCreateEditComponent', () => {
  let component: OrganizationCreateEditComponent;
  let fixture: ComponentFixture<OrganizationCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrganizationCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
