import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerOutreachWorkerCreateEditComponent } from './peer-outreach-worker-create-edit.component';

describe('PeerOutreachWorkerCreateEditComponent', () => {
  let component: PeerOutreachWorkerCreateEditComponent;
  let fixture: ComponentFixture<PeerOutreachWorkerCreateEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerOutreachWorkerCreateEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerOutreachWorkerCreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
