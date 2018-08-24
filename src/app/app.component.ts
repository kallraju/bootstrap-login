import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  frmAdminLogin: FormGroup;
  constructor(private rt: FormBuilder) {
      this.frmAdminLogin = this.rt.group({
      userName: ['', Validators.required],
      passWord: ['', Validators.required],
    });
  }
}
