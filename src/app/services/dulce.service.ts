import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { DulceInterface } from './../models/dulce.Interface';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from 'angularfire2/firestore';



@Injectable({
  providedIn: 'root'
})
export class DulceService {
  dulcesCollection: AngularFirestoreCollection<DulceInterface>;
  dulces: Observable<DulceInterface[]>
  dulceDoc: AngularFirestoreDocument<DulceInterface>;


  constructor(public afs: AngularFirestore) { 
    //this.dulces = afs.collection('dulces').valueChanges();
    this.dulcesCollection = afs.collection<DulceInterface>('dulces');
    this.dulces = this.dulcesCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as DulceInterface;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }


  getDulces(){
    return this.dulces;
  }

  addDulce(dulce: DulceInterface){
    console.log('New Dulce');
    this.dulcesCollection.add(dulce);

  }

  deleteDulce(dulce: DulceInterface){
    console.log('delete Dulce');
    this.dulceDoc = this.afs.doc(`dulces/${dulce.id}`);
    this.dulceDoc.delete();
  }

  updateDulce(dulce: DulceInterface){
    console.log('update Dulce');
    this.dulceDoc = this.afs.doc(`dulces/${dulce.id}`);
    this.dulceDoc.update(dulce);
  }
}

