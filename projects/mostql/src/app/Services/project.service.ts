import { doc } from 'firebase/firestore';
import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private firestore: Firestore) {
    
    
   }
    aCollection = collection(this.firestore, '/projects');
  projects: any[] = []


  index(){
    return collectionData(this.aCollection)
  }
}
