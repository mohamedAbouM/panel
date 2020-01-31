import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { ClientService } from '../client.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

  clientForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    lastName: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    balance: new FormControl(0,[Validators.required])
  })

  id: string = "";
  constructor(private router: Router, private route: ActivatedRoute, private clientService: ClientService) { }

  ngOnInit() {

    let id = this.route.params.subscribe(param=>{  
      this.id = param.id    
      this.getOneClient(param.id);
    })
  }

  getOneClient(id: string){
    this.clientService.retreiveOneClient(id)
        .subscribe((res: Client)=>{
          this.clientForm.patchValue(res);
        });
  }

  updateClient(){
    let myClient: Client = {
      ...this.clientForm.value,
      id: this.id
    }
    this.clientService.updateClient(myClient)
    .then(()=>this.router.navigate(['/clients']))
    .catch(err=> console.error(err))
  }

}
