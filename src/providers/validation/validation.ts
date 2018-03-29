export class ValidationProvider {
  static getValidatorErrorMessage(controlName: string, validatorName: string, validatorValue?: any) {
    let validation_messages = {
      'name': {
        required: 'Please enter Name',
      },
      'age': {
        required: 'Please enter age',
        maxlength: `Age maximum of ${validatorValue.requiredLength} digit`,
      },
      'height': {
        required: 'Please enter height',
        maxlength: `Height maximum of ${validatorValue.requiredLength} digit`,
      },
      'weight': {
        required: 'Please enter weight',
        maxlength: `Weight maximum of ${validatorValue.requiredLength} digit`,
      }
    }
    return validation_messages[controlName][validatorName];
  }

}
