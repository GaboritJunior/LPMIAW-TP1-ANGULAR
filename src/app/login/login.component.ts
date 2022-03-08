import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { TokenStorageService } from '../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  username = '';
  password = '';

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private tokenStorageService: TokenStorageService) { }

  login() {
    this.userService.connect(this.form.value).subscribe(response => {
      this.tokenStorageService.setToken(response['access_token']);
      this.router.navigate(['/dashboard']);
    })
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

}
