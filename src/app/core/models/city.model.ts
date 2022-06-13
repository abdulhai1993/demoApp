import { BaseModel } from './base.model';

export class City {

    id: number;
    cityId: number;
    guid: string;
    cityName: string;
    cityArabicName: string;
    selected: boolean;
    cityCode: string;
    // isoCodeTwo: string;
    // isoCodeThree: string;
    regionId: number;
    stateId: number;
    value: string;

}
