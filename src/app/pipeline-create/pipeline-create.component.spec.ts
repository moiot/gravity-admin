import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelineCreateComponent } from './pipeline-create.component';

describe('PipelineCreateComponent', () => {
  let component: PipelineCreateComponent;
  let fixture: ComponentFixture<PipelineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipelineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
