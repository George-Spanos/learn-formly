import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataService {
    getNations() {
        return of([
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
}