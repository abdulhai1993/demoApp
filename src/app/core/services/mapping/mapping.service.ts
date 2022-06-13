import { Injectable, Inject } from '@angular/core';

import { User } from '../../models/user.model';


@Injectable()
export class MappingService {

    constructor() {
    }


    public mapUser(res: any): User {
        const userData = res ? res : null;
        const isUser = new User();
        if (userData) {
            isUser.id = userData.id || null;
            isUser.userId = userData.id || null;
            isUser.firstName = userData.firstName || null;
            isUser.lastName = userData.lastName || null;
            isUser.email = userData.email || null;

            isUser.mobileNumber = userData.mobile || null;
            isUser.isActive = userData.isActive || false;

            isUser.createdOn = userData.createdOn || null;
            isUser.createdBy = userData.createdBy || null;
            isUser.updatedOn = userData.updatedOn || null;
            isUser.updatedBy = userData.updatedBy || null;
        }


        return isUser;
    }

}
