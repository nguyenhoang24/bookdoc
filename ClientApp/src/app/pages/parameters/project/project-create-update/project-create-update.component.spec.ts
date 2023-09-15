import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCreateUpdateComponent } from './project-create-update.component';

describe('ProjectCreateUpdateComponent', () => {
  let component: ProjectCreateUpdateComponent;
  let fixture: ComponentFixture<ProjectCreateUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectCreateUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectCreateUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
