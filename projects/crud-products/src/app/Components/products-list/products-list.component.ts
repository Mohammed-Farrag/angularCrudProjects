import { Component, DoCheck, OnInit, inject } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable} from 'rxjs';
import { IProduct } from '../../Models/iProduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiProductsService } from '../../Services/api-products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, DoCheck{

  constructor(private firestore: Firestore, 
    private route: ActivatedRoute,
     private router: Router,
     private prodServ: ApiProductsService){

  

 }
  products: any[] = [];

  
  p: number = 1;

  ngOnInit(): void {
    // this.products = this.prodServ.products
  }
  
  ngDoCheck(): void {
    this.products = this.prodServ.products
    
  }
  showProduct(id:number){
    this.router.navigate(['single-product', id]);
  }

}
