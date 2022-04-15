import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { DialogueComponent } from './dialogue/dialogue.component';
import { ApiService } from './service/api.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angularcrud';

  constructor(private dialog : MatDialog, private api : ApiService) {
    
  }
  ngOnInit(): void {
    this.getAllproducts();
  }
   openDialog() {
    this.dialog.open(DialogueComponent, {
      width:"50%"
 
      
    });
  }
  getAllproducts() {
    this.api.getProduct()
      .subscribe({
        next: (res) => {
          console.log(res);
        },
        error: (err) => {
          alert("error while fetching the records")
          
        }
    })
    
  }
}
