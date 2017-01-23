import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { Idol } from './idol';

@Injectable()
export class IdolSearchService {
    constructor(private http: Http) {}
    
    search(term: string): Observable<Idol[]> {
        return this.http.get(`app/idols/?name=${term}`)
                  .map((r: Response) => r.json().data as Idol[]);
    }
}