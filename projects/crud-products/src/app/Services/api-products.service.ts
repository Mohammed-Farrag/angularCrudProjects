import { HttpClient } from '@angular/common/http';
import { Injectable, OnChanges, OnInit } from '@angular/core';
import { collectionData, Firestore, collection,documentId, deleteDoc, getCountFromServer, doc, docData, DocumentData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { IProduct } from '../Models/iProduct';

@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor( private firestore: Firestore) {
  
    const aCollection = collection(this.firestore, '/products')
    
    collectionData(aCollection, {idField: 'docId'}).subscribe(data => {
      
      
      data.forEach(s => {
        if(s['image'] == undefined){
          s ={ ...s, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU'} 
        }
        return s;
      })


      this.products = data.sort((a,d) => d['id'] - a['id'] )
     
      console.log(this.products)
    })

    
    getCountFromServer(collection(this.firestore, 'products')).then(da => {
      this.projectCount = da.data().count
    })

  }

  projectCount:number = 0
  products: DocumentData[] = []


 
  // getAllProducts():IProduct[]{
    
  //   return this.products
  // }


  // getProdByID(id: any):IProduct | any{
  //   const p = this.products?.find(pr => pr.id === id)  ;
  //   return p;
  // }

  deleteProject(id:number){
    deleteDoc(doc(this.firestore, '/products/')).then(d => console.log(d))
  }
}
