import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client [] = []
  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getAllClients();
  }
  getAllClients(){
    this.clientService.getClients()
        .subscribe((res: Client[])=>{
          this.clients = res
          console.log(res);
        })
  }

}
