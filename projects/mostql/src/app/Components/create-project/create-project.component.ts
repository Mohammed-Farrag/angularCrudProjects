import { addDoc, collection } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent {
  constructor(private firestore: Firestore){}

  project: FormGroup = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    client: new FormControl(''),
  })

  addProject(){
  // addDoc(collection(this.firestore, 'projects'), this.project.value);
   console.log(this.project)
  }
}
