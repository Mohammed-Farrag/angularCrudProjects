import { Component, DoCheck, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from '../../Services/api-products.service';
import { IProduct } from '../../Models/iProduct';
import { Firestore, doc, docData, documentId, getDoc, getFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss']
})
export class SingleProductComponent implements DoCheck, OnInit{

  constructor(
    private proServ: ApiProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private firestore: Firestore
    ){

     console.log(documentId())
      let docu = doc(this.firestore, 'products/1rAfgww3N2vP0FHiQnGR')
    docData(docu).subscribe(d => console.log(d))
     console.log(getDoc(docu))
    console.log( getFirestore())
    
  }
  singlePro: any = { }

  ngOnInit(): void {

  // this.singlePro = this.proServ.getProdByID(Number(this.route.snapshot.paramMap.get('id')) ); 
  }
  ngDoCheck(): void {
    let id:string = this.route.snapshot.paramMap.get('id') ?? ''
    
    this.proServ.getProductByID(id).then(d => this.singlePro = {docId: id,...d.data()})
  }



delete(id: string){
  this.proServ.deleteProject(id).then(d => console.log(d))
  this.router.navigate(['../']);
}  


}
