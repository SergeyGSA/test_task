import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AddUserName } from 'src/app/store/userName.action';
import { UserNameState } from 'src/app/store/userName.state';

interface IHelloForm {
  userName: FormControl<string>
}

interface IHelloFormData {
  userName: string
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public helloForm: FormGroup<IHelloForm>

  @Select(UserNameState.getUserName) 
  public userName$!: Observable<string>

  constructor(private store: Store) { 
    this.helloForm = new FormGroup({
      userName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(30)],
      })
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const helloData: IHelloFormData = {
      userName: this.helloForm.value.userName?.trim()!
    } 

    if (this.helloForm.valid) {
      this.store.dispatch(new AddUserName(helloData))
    }
  }
}
