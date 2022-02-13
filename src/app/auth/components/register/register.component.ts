import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup

  constructor(
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
      this.initializeForm()
  }

  initializeForm(): void {
    console.log('NgRx')
    this.form = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.email],
      password: ['', Validators.required]
    })
  }

  onSubmit(){
    console.log('submit', this.form.value, this.form.valid)
  }

}
