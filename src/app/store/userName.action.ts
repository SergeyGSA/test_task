import { IUserName } from "./userName.interface";

export class AddUserName {
  static readonly type = '[USERNAME] Add'

  constructor(public payload: IUserName) {}
}