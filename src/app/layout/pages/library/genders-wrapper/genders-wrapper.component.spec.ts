import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GendersWrapperComponent } from './genders-wrapper.component';

describe('GendersWrapperComponent', () => {
  let component: GendersWrapperComponent;
  let fixture: ComponentFixture<GendersWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GendersWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GendersWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
