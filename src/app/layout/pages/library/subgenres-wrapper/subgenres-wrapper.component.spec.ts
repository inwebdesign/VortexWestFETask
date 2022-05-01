import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubgenresWrapperComponent } from './subgenres-wrapper.component';

describe('SubgenresWrapperComponent', () => {
  let component: SubgenresWrapperComponent;
  let fixture: ComponentFixture<SubgenresWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubgenresWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubgenresWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
