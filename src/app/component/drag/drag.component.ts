import { CdkDrag, CdkDropList,CdkDragDrop } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormRendererComponent } from '../../common/form-renderer/form-renderer.component';

@Component({
  selector: 'app-drag',
  standalone: true,
  imports: [CdkDropList,CdkDrag,FormRendererComponent],
  templateUrl: './drag.component.html',
  styleUrl: './drag.component.css'
})
export class DragComponent {

  @Input() drop:any;
  @Input() todo:any;


}
