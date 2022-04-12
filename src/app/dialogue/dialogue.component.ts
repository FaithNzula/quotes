import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  productForm !: FormGroup;       

  constructor(private FormBuilder : FormBuilder) { }

  ngOnInit(): void {
  this.productForm = this.FormBuilder.group({
      productName: ['', Validators.required],
      FirstName: ['', Validators.required],
      SecondName: ['', Validators.required],
      Qoute : [ '', Validators.required],

    })
       
    
  }
  addQoute() {
    console.log(this.productForm.value);
  }

}
