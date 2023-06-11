import { Component } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { ProjectService } from '../../Services/project.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  constructor(
    private firestore: Firestore,
    private proService: ProjectService){ 
       this.proService.index().subscribe(projects => {
        this.projects = projects
        console.log(this.projects[0].client)
      })
     }

projects: any [] = []



}
