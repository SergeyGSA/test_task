import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UserNameState } from 'src/app/store/userName.state';
import { ICvData, cvMockData } from 'src/assets/myCvMockData';

@Component({
  selector: 'app-my-cv',
  templateUrl: './my-cv.component.html',
  styleUrls: ['./my-cv.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyCvComponent implements OnInit {
  @ViewChild(MatAccordion) 
  public accordion!: MatAccordion;

  @Select(UserNameState.getUserName) 
  public userName$!: Observable<string>

  public cvData: ICvData[] = cvMockData

  constructor() { }

  ngOnInit(): void {
  }

}
