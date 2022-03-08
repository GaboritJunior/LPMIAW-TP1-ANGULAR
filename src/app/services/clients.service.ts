import { Injectable, Input } from '@angular/core';
import { Client } from '../models/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private httpClient: HttpClient) { }

  getClients(): Observable<any> {
  
    return this.httpClient.get('http://localhost:3000/clients');
    
  }

  getClient(id: string|null): Observable<any> {
  
    return this.httpClient.get('http://localhost:3000/clients/' + id);
  
  }
    
  addClient(data: Client) {
  
    return this.httpClient.post('http://localhost:3000/clients', data);
    
  }

  updateClient(id: string | null, client: Client): Observable<any> {
    return this.httpClient.put('http://localhost:3000/clients/' + id, client);
  }
    
  deleteClient(id: string | null): Observable<any> {
    return this.httpClient.delete('http://localhost:3000/clients/' + id);
    }

  

}
