import { Injectable } from '@angular/core';
import { of } from 'rxjs';
interface City {
    nationId: number;
    value: number;
    label: string;
}
@Injectable({ providedIn: 'root' })
export class DataService {
    getNations() {
        return of([
            {
                value: null,
                label: '--',
                nationId: null
            },
            {
                value: 1,
                label: 'Greece'
            },
            {
                value: 2,
                label: 'Italy'
            },
        ])
    }
    getCities(nationId: number = null) {
        return of([

            {
                value: 1,
                label: 'Karditsa',
                nationId: 1
            },
            {
                value: 2,
                label: 'Athens',
                nationId: 1
            },
            {
                value: 12,
                label: 'Bolzano',
                nationId: 2
            },
            {
                value: 13,
                label: 'Rome',
                nationId: 2
            }
        ].filter((entry: City) => {
            if (nationId) {
                return entry.nationId === nationId
            } else {
                return true;
            }

        }))

    }
}