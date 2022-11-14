export class CompraLocators {

    public compraCategory = {
        Speakers: '#speakersImg',
        Tablets: '#tabletsImg',
        Laptops: '#laptopsImg',
        Mice: '#miceImg',
        Headphones:'#headphonesImg'
    }
    
    public compraCategoryProducts = {
        Product1: ':nth-child(1) > :nth-child(4) > .productName',
        Product1Price: ':nth-child(1) > :nth-child(5) > .productPrice',
        Product2: ':nth-child(2) > :nth-child(4) > .productName',
        Product3: ':nth-child(3) > :nth-child(4) > .productName',
        Product4: ':nth-child(4) > :nth-child(4) > .productName',
        Product5: ':nth-child(5) > :nth-child(4) > .productName',
        Product6: ':nth-child(6) > :nth-child(4) > .productName',
        Product7: ':nth-child(7) > :nth-child(4) > .productName',
        Product8: ':nth-child(8) > :nth-child(4) > .productName',
        ProductImg: '#mainImg',
        ProductGeneral: 'section.ng-scope'
    }

    public compraCategoryProductsCantidad = {
        Mas: '.plus',
        Menos: '.minus',
        Numero: '.e-sec-plus-minus > :nth-child(2) > .ng-pristine'
    }

    public BotonAddToCart = '.fixedBtn > .roboto-medium'
    public BotonCheckOutCart = '#checkOutPopUp'
    public PopUp = 'checkOutPopUp'
    

    public LogInCompra = {
        Userame: ':nth-child(1) > .secForm > [a-hint="Username"] > .inputContainer',
        Password: ':nth-child(1) > .secForm > [a-hint="Password"] > .inputContainer',
        Boton: '#login_btnundefined',
        ForgotPassword: '#Forgot_your_password'
    }

}
