import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserNameState } from 'src/app/store/userName.state';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {
  public isCustom$ = new BehaviorSubject<boolean>(false)
  
  @Select(UserNameState.getUserName) 
  public userName$!: Observable<string>

  constructor() { }

  ngOnInit(): void {
  }

  public changeStyle():void {
    const currentValue = this.isCustom$.getValue()
    this.isCustom$.next(!currentValue)
  }
}
