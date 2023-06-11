import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './Components/products-list/products-list.component';
import { SingleProductComponent } from './Components/single-product/single-product.component';
import { NavbarComponent } from './Layouts/navbar/navbar.component';
import { CreateProductComponent } from './Components/create-product/create-product.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Layouts/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseApp, initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth, Auth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { provideStorage,getStorage } from '@angular/fire/storage';
import { NgxPaginationModule } from 'ngx-pagination';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MobileNumberPipe } from './Pipes/mobile-number.pipe';


@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    SingleProductComponent,
    NavbarComponent,
    CreateProductComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    MobileNumberPipe,
    // ProductsModule,
  ],
  imports: [
    // AngularFireAuthModule,
    // AngularFireStorageModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
