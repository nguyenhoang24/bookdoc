import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerOutreachWorkerComponent } from './peer-outreach-worker.component';

describe('PeerOutreachWorkerComponent', () => {
  let component: PeerOutreachWorkerComponent;
  let fixture: ComponentFixture<PeerOutreachWorkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerOutreachWorkerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeerOutreachWorkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
