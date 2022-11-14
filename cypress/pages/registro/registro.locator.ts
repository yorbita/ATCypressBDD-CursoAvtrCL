export class RegistroLocators {

    public registro = {
        Username: ':nth-child(2) > [a-hint="Username"] > .inputContainer > .ng-pristine',
        Email: '[sec-name="userEmail"] > .inputContainer > .ng-pristine',
        Password: ':nth-child(3) > [a-hint="Password"] > .inputContainer > label',
        ConfirmPassword: '[a-hint="Confirm password"] > .inputContainer > label',
        FirstName: '[sec-name="userFirstName"] > .inputContainer > label',
        LastName: '[sec-name="userLastName"] > .inputContainer > label',
        PhoneNumber: ':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > .ng-pristine',
        Country: '[sec-name="userCountry"] > .inputContainer > .ng-valid',
        City: '[sec-name="userCity"] > .inputContainer > .ng-pristine',
        Address: '[sec-name="userAdress"] > .inputContainer > .ng-pristine',
        State: '[sec-name="userState"] > .inputContainer',
        PostalCode: '#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > .ng-pristine',
        ReceiveOffers: '#formCover > .option > .ng-valid',
        TermsAndConditions: '[sec-name="registrationAgreement"] > .inputContainer > .ng-valid',
        Register: '#register_btnundefined'
    }
}


