import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamplesReactiveComponent } from './examples-reactive.component';

describe('ExamplesReactiveComponent', () => {
  let component: ExamplesReactiveComponent;
  let fixture: ComponentFixture<ExamplesReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamplesReactiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamplesReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
