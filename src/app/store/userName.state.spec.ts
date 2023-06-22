import { TestBed } from '@angular/core/testing';
import { NgxsModule, Store } from '@ngxs/store';
import { UserNameState, UserNameStateModel } from './userName.state';
import { AddUserName } from './userName.action';

describe('UserNameState', () => {
  let store: Store

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([UserNameState])]
    })

    store = TestBed.inject(Store)
  })

  it('should be truthy', () => {  
    const userName = store.selectSnapshot(state => state.userName);
    expect(userName).toBeTruthy();
  })

  it('should add user name to the state', () => {
    const userName = 'John Doe'
    const action = new AddUserName({ userName })

    store.dispatch(action)

    const state = store.selectSnapshot(UserNameState.getUserName)
    expect(state).toEqual(`Hello ${userName}!!! 👋`)
  })

  it('should update the user name in the state', () => {
    const initialUserName = 'John Doe'
    const updatedUserName = 'Jane Smith'
    const initialState: UserNameStateModel = {
      userName: initialUserName
    }
    const action = new AddUserName({ userName: updatedUserName })

    store.reset({ userName: initialState })

    store.dispatch(action)

    const state = store.selectSnapshot(UserNameState.getUserName)
    expect(state).toEqual(`Hello ${updatedUserName}!!! 👋`)
  })
})
