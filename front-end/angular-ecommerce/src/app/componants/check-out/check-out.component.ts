import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  // @ts-ignore
  checkoutGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutGroup = this.formBuilder.group({ // form
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      })
    })
  }

  done() {
    console.log(this.checkoutGroup.get('customer')?.value)
  }
}
