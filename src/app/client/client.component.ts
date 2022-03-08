import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../services/clients.service';
import { ActivatedRoute } from '@angular/router';
import { Client } from '../models/client';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})

export class ClientComponent implements OnInit {

  constructor(private clientsService: ClientsService, private route: ActivatedRoute) { }

  @Input() client: Client;

  ngOnInit(): void {
  }

  getData() {
    this.clientsService
      .getClient(this.route.snapshot.paramMap.get('id'))
      .subscribe(response => {
        this.client = response;
      });
  }




}
