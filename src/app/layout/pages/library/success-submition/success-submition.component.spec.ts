import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessSubmitionComponent } from './success-submition.component';

describe('SuccessSubmitionComponent', () => {
  let component: SuccessSubmitionComponent;
  let fixture: ComponentFixture<SuccessSubmitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessSubmitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessSubmitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
