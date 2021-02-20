import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DateServiceService} from '../../services/date-service.service';
import {Country} from '../../model/country';
import {PlacesService} from '../../services/places.service';
import {State} from '../../model/state';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  creditCardMonths: number[] = [];
  creditCardYear: number[] = [];
  countries: Country[] = [];
  statesShipping: State[] = [];
  statsBilling: State[] = [];
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
        firstName: new FormControl('',
          [Validators.required,Validators.minLength(5)]),
        lastName: new FormControl('',
          [Validators.required,Validators.minLength(5)]),
        email: new FormControl('',
          [Validators.required,
            Validators.pattern('^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')])
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
  get fName(){
    return this.checkoutGroup.get('customer.firstName');
  }
  get lName(){
    return this.checkoutGroup.get('customer.lastName');
  }
  get email(){
    return this.checkoutGroup.get('customer.email');
  }
  done() {
    if (this.checkoutGroup.invalid) {
      this.checkoutGroup.markAllAsTouched()
    }
    console.log(this.checkoutGroup.get('customer')?.value)
    console.log(this.checkoutGroup.get('shippingAddress')?.value)
    console.log(this.checkoutGroup.get('billingAddress')?.value)
    console.log(this.checkoutGroup.get('creditCard')?.value)

  }

  copyShippingAddressToBillingAddress(event: Event) {
    if((<HTMLInputElement>event.target).checked){
      this.checkoutGroup.controls.billingAddress
        .setValue(this.checkoutGroup.controls.shippingAddress.value)
      this.statsBilling = this.statesShipping
    } else {
      this.checkoutGroup.controls.billingAddress.reset();
      this.statsBilling = []
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
        this.countries = data,
        this.checkoutGroup.get('shippingAddress')?.get('country')?.setValue(data[0])
        this.checkoutGroup.get('billingAddress')?.get('country')?.setValue(data[0])

      }
    )
  }

  getStates(key: string) {
    const formGroup = this.checkoutGroup.get(key);
    const codeCountry = formGroup?.value.country.code;
    this.places.getAllStates(codeCountry).subscribe(
      data => {
        if(key === 'shippingAddress'){
          this.statesShipping = data
        } else {
          this.statsBilling = data
        }
      }
    )
  }
}
/*

if(this.checkoutGroup.invalid){
      this.checkoutGroup.markAllAsTouched()
    }
* */
