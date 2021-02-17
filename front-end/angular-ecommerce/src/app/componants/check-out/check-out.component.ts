import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DateServiceService} from '../../services/date-service.service';
import {Country} from '../../model/country';
import {PlacesService} from '../../services/places.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  creditCardMonths: number[] = [];
  creditCardYear: number[] = [];
  countries: Country[] = [];

  // @ts-ignore
  checkoutGroup: FormGroup;

  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private formBuilder: FormBuilder,
              private dateService: DateServiceService,
              private places: PlacesService) { }

  ngOnInit(): void {
    this.getMonths();
    this.getYears();
    this.getCountries()
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

  updateMonths() {
    const creditCardFormGroup = this.checkoutGroup.get('creditCard');
    const currentYear : number = new Date().getFullYear(); // 2021
    const selectedYear: number = Number(creditCardFormGroup?.value.expirationYear); //2027
    let startMonth: number;
    if(currentYear === selectedYear){
      startMonth = new Date().getMonth() + 1;
    } else {
      startMonth = 1;
    }
    this.dateService.getMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data
      }
    )
  }
  getCountries(){
    this.places.getAllCountries().subscribe(
      data => {
        this.countries = data;
      }
    )
  }
}
