export class BaseModel {
    id: number;
    guid: string;

    createdBy: number;
    // createdOn: Date;
    createdOn: string;
    updatedBy: number;
    // updatedOn: Date;
    updatedOn: string;
    isActive: boolean;
}
