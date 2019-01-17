import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineCronjobComponent } from './pipeline-cronjob.component';

describe('PipelineCronjobComponent', () => {
  let component: PipelineCronjobComponent;
  let fixture: ComponentFixture<PipelineCronjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineCronjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineCronjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
