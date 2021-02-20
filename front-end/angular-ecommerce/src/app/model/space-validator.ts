import {FormControl, ValidationErrors} from '@angular/forms';

export class SpaceValidator {
  static noSpace(input: FormControl): ValidationErrors | null {
    if((input.value != null) && (input.value.trim().length === 0)){
      return {'spacesError': true}
    } else {
      return null;
    }
  }
}

// "hhh  jhhh"
// "       " => ""
