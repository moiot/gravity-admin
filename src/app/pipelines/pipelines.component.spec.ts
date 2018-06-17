
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipelinesComponent } from './pipelines.component';

describe('PipelinesComponent', () => {
  let component: PipelinesComponent;
  let fixture: ComponentFixture<PipelinesComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PipelinesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipelinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
