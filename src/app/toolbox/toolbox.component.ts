import { Component, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-toolbox',
  templateUrl: './toolbox.component.html',
  styleUrls: ['./toolbox.component.scss']
})
export class ToolboxComponent {

  constructor(private dialog: MatDialog) { }

  openDialogWithRef(ref: TemplateRef<any>) {
    this.dialog.open(ref);
  }
}
