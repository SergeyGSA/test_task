import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

interface IHelloForm {
  name: FormControl<string>
}

interface IHelloFormData {
  name: string | undefined
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements OnInit {
  public helloForm: FormGroup<IHelloForm>

  constructor() { 
    this.helloForm = new FormGroup({
      name: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(30)],
      })
    })
  }

  ngOnInit(): void {
  }

  public onSubmit(): void {
    const helloData: IHelloFormData = {
      name: this.helloForm.value.name?.trim()
    } 

    if (this.helloForm.valid) {
      console.log(helloData)
    }
  }
}
