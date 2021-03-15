export enum ContactType {
    HOME='HOME', WORK='WORK'
}
export enum Gender {
    MALE='MALE', FEMELE='FEMELE'
}
export enum Title {
    MR='MR', MDME='MDME', DR='DR', PR='PR'
}
export class Email {
    email?: string;  
    type?: 'HOME'|'WORK';
    constructor(email?: string, type?: 'HOME'|'WORK'){
        this.email = email;
        this.type = type;
    }
}
export class PhoneNumber {
    phone?: string;
    operator?: string;
	code? : string;	
    type?: 'HOME' | 'WORK';
    constructor(phone?: string, operator?: string, code?: string, type?: 'HOME'|'WORK'){
        this.phone = phone;
        this.operator = operator;
        this.code = code;
        this.type = type;
    }
}

export class Adress {
    id?: number | string;
	city?: string;
    postalCode?: string;
    street?: string;
    state?: string;
    region?: string;
    continent?: string;
    type?: 'HOME' | 'WORK';
    constructor(id?: number| string, city?: string, 
        postalCode?: string, street?: string, state?: string, region?: string, continent?: string, type?: 'WORK' | 'HOME'){
        this.id = id;
        this.city = city;
        this.postalCode = postalCode;
        this.street = street;
        this.state = state;
        this.region = region;
        this.continent = continent;
        this.type = type;
    }
}
export class Person {
    id? : number | string;
    firstName? : string;
    lastName? : string;
    middleName? : string;
    pseudo? : string;
    birthDate? : Date;
    sex?: 'MALE'|'FEMELE';
    phones?: PhoneNumber[] = [];
    emails? : Email[];    
    title?: Title;
    addresses?: Adress[] = [];
    avatar?: string;
    constructor(id?: number, firstName?: string, lastName?: string, middleName?: string, 
        pseudo?: string, birthDate?: Date, sex?: Gender, phones?: PhoneNumber[], emails?: Email[] , title?: Title, addresses?: Adress [], avatar?: string){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
        this.pseudo = pseudo;
        this.birthDate = birthDate;
        this.sex = sex;
        this.phones = phones;
        this.emails = emails;
        this.title = title;
        this.addresses = addresses;
        this.avatar = avatar;
    }
}

export class SpecialIdentity {
    nationalID?: string ;
    passportID?: string;
    drivingLicense?: string;
    socialSecurityCode?: string;
    constructor(nationalId?: string, passportID?: string, drivingLicense?: string, socialID?: string){
        this.nationalID = nationalId;
        this.passportID = passportID; 
        this.drivingLicense = drivingLicense;
        this.socialSecurityCode = socialID;
    }
}

export class EmployeeCrud extends Person{
    specialID?: SpecialIdentity;
    constructor(specialID?: SpecialIdentity, idPerson?: number, firstName?: string, lastName?: string, middleName?: string, 
        pseudo?: string, birthDate?: Date, sex?: Gender, phones: PhoneNumber[] = [], emails: Email[] = [] , title?: Title, addresses: Adress[] = [], avatar?: string){
        super(idPerson, firstName, lastName, middleName, pseudo, birthDate, sex, phones, emails, title, addresses, avatar);
        this.specialID = specialID;
    }
}
