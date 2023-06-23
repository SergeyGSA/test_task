import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { UserNameState } from 'src/app/store/userName.state';
import { AddUserName } from 'src/app/store/userName.action';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;
  let store: Store;

  beforeEach(async () => { 
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent ],
      imports: [ NgxsModule.forRoot([UserNameState]) ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;

    store = TestBed.inject(Store);
    spyOn(store, 'dispatch').and.callThrough();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch AddUserName action when form is valid', () => {
    const mockUserName = 'Serhii';
    const addUserNameAction = new AddUserName({ userName: mockUserName });

    component.helloForm.patchValue({ userName: mockUserName });
    component.onSubmit();

    expect(store.dispatch).toHaveBeenCalledWith(addUserNameAction);
  });
});
