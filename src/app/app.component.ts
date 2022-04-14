import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogueComponent } from './dialogue/dialogue.component';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcrud';

  constructor(private dialog : MatDialog, private api : ApiService) {
    
  }
   openDialog() {
    this.dialog.open(DialogueComponent, {
      width:"50%"
 
      
    });
  }
  getAllproducts() {
    
  }
}
