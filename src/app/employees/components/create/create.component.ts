import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    birthday: new FormControl(''),
    gender: new FormControl(''),
    isActive: new FormControl(false)
  });

  constructor(private _snackBar: MatSnackBar) {}

  onCancel() {
    this._snackBar.open('Canceled', '', {duration: 5000});
  }

  onSubmit() {
    console.log(this.form.value);
    this._snackBar.open('Saved', '', {duration: 5000});
  }
}
