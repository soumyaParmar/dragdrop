import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { NgIf } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { Formfield } from '../../formfield';



@Component({
  selector: 'app-popupform',
  standalone: true,
  imports: [NgIf,CdkDropList,CdkDrag],
  templateUrl: './popupform.component.html',
  styleUrl: './popupform.component.css'
})
export class PopupformComponent {
  
  @Input() openpopup!: Formfield;
  @Input() done!:any;
  @Input() drop:any;

  onChange(event:any){
    let x = (event.target as HTMLInputElement).value
    
  }
}
