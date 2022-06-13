import { BaseModel } from './base.model';

export class Status extends BaseModel {

    id: number;
    questionStatusId: number;
    name: string;
    code: string;
    key: string;
    description: string;
    selected: boolean;
    value: string;

}
