import { getDatabase } from '@angular/fire/database';
import { Component, DoCheck, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iProduct';
import { Firestore, collectionData, updateDoc  } from '@angular/fire/firestore';
import { doc, setDoc, addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import { FormControl, FormGroup } from '@angular/forms';
import { ApiProductsService } from '../../Services/api-products.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit, DoCheck{



  image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU';

  constructor(
    private firestore: Firestore,
     private route: ActivatedRoute,
     private proServ: ApiProductsService 
     ) { 
       
      
    }
    mode: 'create' | 'update' = 'create';
    
    editedP: any = {};
    
    product : FormGroup = new FormGroup({
      title: new FormControl( ''),
      inStock: new FormControl(1),
      desc: new FormControl(''),
      image: new FormControl(''),
    })
    
    
    ngOnInit(): void {
     

  if(this.route.snapshot.paramMap.get('id')){
    this.mode = 'update';
    // const d = this.proServ.getProdByID(Number(this.route.snapshot.paramMap.get('id')) ); 
    // this.editedP =d;
    console.log(this.editedP)

    this.product = new FormGroup({
      title: new FormControl(this.editedP.title ),
      inStock: new FormControl(this.editedP.inStock),
      desc: new FormControl(this.editedP.desc),
      image: new FormControl(this.editedP.image),
    })
  
  }
}
// file: File = 
ngDoCheck(): void {
  // if(this.route.snapshot.paramMap.get('id')){
    
  //   const d = this.proServ.getProdByID(Number(this.route.snapshot.paramMap.get('id')) ); 
  //   this.editedP =d;
  //   console.log(this.editedP)
  // }
  
}



  addProduct() {

    // for (let i = 0; i < 20; i++) {
      let imgValue = this.product.get('image')?.value;
      if (imgValue == '') {
        this.product.value.image = this.image
      }
      
        // this.product.value.inStock += i
      

      if(this.mode == 'update'){

       
        // updateDoc(doc(this.firestore, "products"), this.product)
      }else{
        addDoc(collection(this.firestore, "products"),{ id: ++this.proServ.projectCount, ...this.product.value});

        console.log(this.product.value)
      }
    }
  




}
