import { CdkDrag, CdkDropList } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormRendererComponent } from '../../common/form-renderer/form-renderer.component';

@Component({
  selector: 'app-drop',
  standalone: true,
  imports: [CdkDrag,CdkDropList,FormRendererComponent],
  templateUrl: './drop.component.html',
  styleUrl: './drop.component.css'
})
export class DropComponent {
  @Input() drop:any;
  @Input() day:any;

}
