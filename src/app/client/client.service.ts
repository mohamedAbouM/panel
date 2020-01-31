import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Client } from '../models/client';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  clientCollection: AngularFirestoreCollection;
  constructor(private afs: AngularFirestore) { 
    this.clientCollection = afs.collection('client');
  }

  getClients(){
    return this.clientCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Client;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );;
  }
  retreiveOneClient(id:  string){
    return this.clientCollection.doc(id).valueChanges();
  }
  persistClient(client: Client){
    return this.clientCollection.add(client);
  }
  updateClient(client: Client){
    return this.clientCollection.doc(client.id).update(client);
  }
}
