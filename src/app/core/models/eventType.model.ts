import { BaseModel } from './base.model';

export class EventType extends BaseModel {

    id: number;
    eventTypeId: number;
    name: string;
    arabicName: string;
    code: string;
    key: string;
    description: string;
    selected: boolean;
    value: string;

}
