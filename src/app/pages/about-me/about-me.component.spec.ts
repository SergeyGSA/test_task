import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Select } from '@ngxs/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AboutMeComponent } from './about-me.component';

describe('AboutMeComponent', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeComponent ],
      imports: [ NgxsModule.forRoot([]) ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize isCustom$ with false', () => {
    expect(component.isCustom$.value).toBe(false);
  });

  it('should change isCustom$ value on changeStyle()', () => {
    component.changeStyle();
    expect(component.isCustom$.getValue()).toBeTrue();

    component.changeStyle();
    expect(component.isCustom$.getValue()).toBeFalse();
  });
});
