import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserNameState } from 'src/app/store/userName.state';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss']
})
export class MyCvComponent implements OnInit {
  @Select(UserNameState.getUserName) 
  public userName$!: Observable<string>

  constructor() { }

  ngOnInit(): void {
  }

}
