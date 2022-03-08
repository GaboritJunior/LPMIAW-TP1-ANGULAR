import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.scss']
})
export class ClientFormComponent implements OnInit {

  form: FormGroup;
  name = '';

  constructor(private httpClient: HttpClient, private clientService: ClientsService, private fb: FormBuilder, private router: Router, public route: ActivatedRoute) {

  }

  add() {
    this.clientService.addClient(this.form.value).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }

  ngOnInit(): void {
    this.initForm();
    if (this.route.snapshot.data['edit']) {
      this.getData();
    }

  }

  initForm() {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      description: [''],
      date: [''],
      type: ['']
    });

  }

  getData() {
    this.clientService
      .getClient(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        this.form.patchValue(response);
      });
  }
   

  update() {
    this.clientService.updateClient(this.route.snapshot.paramMap.get('id'), this.form.value).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }

  delete() {
    this.clientService.deleteClient(this.route.snapshot.paramMap.get('id')).subscribe(response => {
      this.router.navigate(['/clients']);
    });
  }

  submit() {
    if (!this.route.snapshot.data['edit']) {
      this.add();
    } else {
      this.update();
    }
  }

}
