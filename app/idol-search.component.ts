import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { Subject } from 'rxjs/subject';

import { IdolSearchService } from './idol-search.service';
import { Idol } from './idol';

@Component({
    moduleId: module.id,
    selector: 'idol-search',
    templateUrl: 'idol-search.component.html',
    styleUrls: ['idol-search.component.css'],
    providers: [IdolSearchService]
})

export class IdolSearchComponent implements OnInit {
    idols: Observable<Idol[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private idolSearchService: IdolSearchService,
        private router: Router
    ) {}

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.idols = this.searchTerms
            .debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => term ? this.idolSearchService.search(term) : Observable.of<Idol[]>([]))
            .catch(error => {
                console.log(error);
                return Observable.of<Idol[]>([]);
            })
    }

    gotoDetail(idol: Idol): void {
        let link = ['/detail', idol.id];
        this.router.navigate(link);
    }
}