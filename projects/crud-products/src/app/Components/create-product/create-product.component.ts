import { getDatabase } from '@angular/fire/database';
import { Component, DoCheck, OnInit } from '@angular/core';
import { IProduct } from '../../Models/iProduct';
import { Firestore, collectionData, updateDoc } from '@angular/fire/firestore';
import { doc, setDoc, addDoc, collection, getDoc, getFirestore } from "firebase/firestore";
import { FormControl, FormGroup } from '@angular/forms';
import { ApiProductsService } from '../../Services/api-products.service';
import { ActivatedRoute, Route, Router } from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {



  image: string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrz961kAHKFwj4m48zFWWMbJQSUzvc_pZzA&usqp=CAU';

  constructor(
    private firestore: Firestore,
    private route: ActivatedRoute,
    private router: Router,
    private proServ: ApiProductsService
  ) {


  }
  mode: 'create' | 'update' = 'create';

  editedP: any = {};

  product: FormGroup = new FormGroup({
    title: new FormControl(''),
    inStock: new FormControl(1),
    desc: new FormControl(''),
    image: new FormControl(''),
  }) 


  ngOnInit(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      this.mode = 'update';
      let docId: string = this.route.snapshot.paramMap.get('id') ?? '';

      this.proServ.getProductByID(docId).then(d => {


        this.editedP = d.data()
        console.log(this.editedP)
        // this.product.value.image = d.data()?.['image']
        // this.product.value.title = d.data()?.['title']
        // this.product.value.inStock = d.data()?.['inStock']
        // this.product.value.desc = d.data()?.['desc']
      });
    }
  
  }
 
  ngDoCheck(): void {
    if (this.route.snapshot.paramMap.get('id')) {
      // let docId: string = this.route.snapshot.paramMap.get('id') ?? '';

      // this.proServ.getProductByID(docId).then(d => {
      //   this.product.value.title = d.data()?.['title']
      //   this.product.value.inStock = d.data()?.['inStock']
      //   this.product.value.desc = d.data()?.['desc']
      //   this.product.value.image = d.data()?.['image']
      // });
    }
  }



  addProduct() {

    if (this.mode == 'update') {


      updateDoc(doc(this.firestore, "products", this.route.snapshot.paramMap.get('id') ?? ''), this.editedP).then(d => console.log(d))

      this.router.navigate(['/single-product', this.route.snapshot.paramMap.get('id') ?? ''])
    } else {
      let imgValue = this.product.get('image')?.value;
      if (imgValue == '') {
        this.product.value.image = this.image
      }
      addDoc(collection(this.firestore, "products"), { id: ++this.proServ.projectCount, ...this.product.value });

      console.log(this.product.value)
    }
  }





}
