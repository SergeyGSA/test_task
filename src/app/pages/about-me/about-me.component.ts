import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserNameState } from 'src/app/store/userName.state';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  @Select(UserNameState.getUserName) 
  public userName$!: Observable<string>

  constructor() { }

  ngOnInit(): void {
  }

}
