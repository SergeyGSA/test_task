import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule } from '@ngxs/store';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MyCvComponent } from './my-cv.component';

describe('MyCvComponent', () => {
  let component: MyCvComponent;
  let fixture: ComponentFixture<MyCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyCvComponent ],
      imports: [ NgxsModule.forRoot([]) ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
