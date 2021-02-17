import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DateServiceService} from '../../services/date-service.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  creditCardMonths: number[] = [];
  creditCardYear: number[] = [];

  // @ts-ignore
  checkoutGroup: FormGroup;

  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private formBuilder: FormBuilder,
              private dateService: DateServiceService) { }

  ngOnInit(): void {
    this.getMonths();
    this.getYears();

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
  getMonths(){
    const startMonth = new Date().getMonth() + 1; // 1 2 3 4 5 6
    console.log(startMonth)
    this.dateService.getMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data
      }
    )
  }
  getYears(){
    this.dateService.getYears().subscribe(
      data => {
        this.creditCardYear = data
      }
    )
  }
}
