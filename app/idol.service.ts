import { Injectable } from '@angular/core';

import { Idol } from './idol';
import { IDOLS } from './mock-idols';

@Injectable()
export class IdolService {
    getIdols(): Promise<Idol[]> {
        return Promise.resolve(IDOLS);
    }
}
