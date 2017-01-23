import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Idol } from './idol';

@Injectable()
export class IdolService {
    private idolsUrl = 'api/idols';

    constructor(private http: Http) {}

    getIdols(): Promise<Idol[]> {
        return this.http.get(this.idolsUrl)
                    .toPromise()
                    .then(res => res.json().data as Idol[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('An error occured', error);
        return Promise.reject(error.message || error);
    }

    getIdol(id: number): Promise<Idol> {
        const url = `${this.idolsUrl}/${id}`;
        return this.http.get(url)
                    .toPromise()
                    .then(res => res.json().data as Idol)
                    .catch(this.handleError);
    }

    private headers = new Headers({'Content-Type': 'application/json'});

    update(idol: Idol): Promise<Idol> {
        const url = `${this.idolsUrl}/${idol.id}`;
        return this.http.put(url, JSON.stringify(idol), {headers: this.headers})
                .toPromise()
                .then(() => idol)
                .catch(this.handleError);
    }

    create(name: string): Promise<Idol> {
        return this.http.post(this.idolsUrl, JSON.stringify({name: name}), {headers: this.headers})
                .toPromise()
                .then(res => res.json().data)
                .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.idolsUrl}/${id}`;
        return this.http.delete(url, {headers: this.headers})
                .toPromise()
                .then(() => null)
                .catch(this.handleError);
    }
}
