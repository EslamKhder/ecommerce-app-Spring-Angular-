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

  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.checkoutGroup = this.formBuilder.group({ // form
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      })
    })
  }

  done() {
    console.log(this.checkoutGroup.get('customer')?.value)
    console.log(this.checkoutGroup.get('shippingAddress')?.value)
    console.log(this.checkoutGroup.get('billingAddress')?.value)
    console.log(this.checkoutGroup.get('creditCard')?.value)

  }

  copyShippingAddressToBillingAddress(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutGroup.controls.billingAddress
        .setValue(this.checkoutGroup.controls.shippingAddress.value)
    } else {
      this.checkoutGroup.controls.billingAddress.reset();
    }
  }
}
