import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenresWrapperComponent } from './genres-wrapper.component';

describe('GenresWrapperComponent', () => {
  let component: GenresWrapperComponent;
  let fixture: ComponentFixture<GenresWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GenresWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GenresWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
