import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragComponent } from './component/drag/drag.component';
import { DropComponent } from './component/drop/drop.component';
import {
  CdkDragDrop,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { PopupformComponent } from './common/popupform/popupform.component';
import { NgIf } from '@angular/common';
import { Formfield } from './formfield';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DragComponent,DropComponent,CdkDropListGroup,PopupformComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dragdrop';

  day:any[] = [];

  openpopup=false;

  static open:Formfield;

  get openany(){
    return AppComponent.open;
  }

  data1:Formfield[] =[
    {
      "name":"Name",
      "placeholder":"Enter Text",
      "type":"text",
      "options":null
    },
    {
      "name":"Phone Number",
      "placeholder":"Enter Number",
      "type":"integer" ,
      "options":null    
    },
    {
      "name":"Password",
      "placeholder":"Enter Password",
      "type":"password" ,
      "options":null    
    },
    {
      "name":"select",
      "placeholder":"radio",
      "type":"radio",
      "options":["html","css","javascript","react","redux","angularTs","java"]     
    },
    {
      "name":"dropdown",
      "placeholder":"radio",
      "type":"dropdown",
      "options":["html","css","javascript","react","redux","angularTs","java"]
    }
  ]

  drop(event: any){
    console.log({event})
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      this.day.splice(event.currentIndex,0,event.previousContainer.data[event.previousIndex]);  
      AppComponent.open = event.previousContainer.data[event.previousIndex];
      this.openpopup=true;
    }
    console.log(AppComponent.open)
  }
}
