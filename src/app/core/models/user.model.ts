import { BaseModel } from './base.model';


// import { Document } from './document';
import { Country } from './country.model';
import { Region } from './region.model';
import { City } from './city.model';
import { State } from './state.model';
import { Role } from './role.model';
// import { Permission } from './permission';
// import { State } from './state';

export class User extends BaseModel {

    userId: number;
    firstName: string;
    lastName: string;

    fullName: string;

    email: string;


    password: any;
    confirmPassword: any;

    joiningDate: string;


    mobileNumber: String;
    phoneNumber: String;
    cnic: String;

    credentials: String;
    title: String;

    countryId: number;
    country: Country = new Country();

    regionId: number;
    region: Region = new Region();

    stateId: number;
    state: State = new State();

    cityId: number;
    city: City = new City();

    userStatus: string;

    zipCode: string;
    terms: string;
    token: string;
    expiry: number;
    profilePicture: any;
    accountVerified: boolean;

    // designation: Designation = new Designation();
    // designationId: number;

    // department: Department = new Department();
    // departmentId: number;

    roleId: number;
    role: Role = new Role();

    permissionIds: number[] = [];

    userRole: string;
    roles: Role[] = [];
    // permissions: Permission[];
    // userRolePermission: Role = new Role();


    resume: Document = new Document();

    // roleId: number;
    // roleName: string;

    lastLogin: string;

    gender: string;

    utcDSTOffset: number;

    // employer: string;
    address: string;
    address1: string;
    secretQuestion1: string;
    secretQuestion2: string;
    secretAnswer1: string;
    secretAnswer2: string;
    userGUID: string;
    // webUrl: string;
    unsuccessfulAttempt: string;

    isActive: boolean;
    isBlocked: boolean;
    isLoggedIn: boolean;

    isBlockDisabled: boolean = false;
    isUnBlockDisabled: boolean = false;

    isAddFlagDisabled: boolean = false;
    isRemoveFlagDisabled: boolean = false;


}
