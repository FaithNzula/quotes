import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.scss']
})
export class DialogueComponent implements OnInit {
  productForm !: FormGroup;       

  constructor(private FormBuilder : FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
  this.productForm = this.FormBuilder.group({
      productName: ['', Validators.required],
      FirstName: ['', Validators.required],
      SecondName: ['', Validators.required],
      Qoute : [ '', Validators.required],

    })
       
    
  }
  addQoute() {
    if (this.productForm.valid) {
      this.api.postProduct(this.productForm.value)
        .subscribe({
          next: (res) => {
            
        }
      })
    }

  }

}
