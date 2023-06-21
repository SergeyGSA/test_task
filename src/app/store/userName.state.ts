import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AddUserName } from './userName.action';

export class UserNameStateModel {
  userName: string = ''
}

@State<UserNameStateModel>({
  name: 'userName',
  defaults: {
    userName: ''
  }
})

@Injectable()
export class UserNameState {

  @Selector()
  static getUserName(state: UserNameStateModel) {
    return state.userName
  }

  @Action(AddUserName)
  add({getState, patchState}: StateContext<UserNameStateModel>, { payload }: AddUserName) {
    const state = getState()
    patchState({
      ...state,
      userName: payload.userName
    })
  }
}
