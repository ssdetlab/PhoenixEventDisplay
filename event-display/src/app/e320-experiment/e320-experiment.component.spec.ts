import { ComponentFixture, TestBed } from '@angular/core/testing';

import { E320ExperimentComponent } from './e320-experiment.component';

describe('E320ExperimentComponent', () => {
  let component: E320ExperimentComponent;
  let fixture: ComponentFixture<E320ExperimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ E320ExperimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(E320ExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
