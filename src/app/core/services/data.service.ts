import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Subject, BehaviorSubject, debounceTime, distinctUntilChanged } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    gifs = new BehaviorSubject<any>([]);

    constructor(private http: HttpClient) { }

    private searchTerms = new Subject<string>();

    getTrendingGifs() {
        return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.apiKey}&limit=48`)
            .subscribe((response: any) => {
                if (response && response.data) {
                    this.gifs.next(response.data);
                }
            })
    }

    searchGifs(gifName: string) {
            this.http.get(`https://api.giphy.com/v1/gifs/search?q=${gifName}&api_key=${environment.apiKey}&limit=48`)
            .subscribe((response: any) => {
                if (response && response.data) {
                    console.log('SEARCH!')
                    this.gifs.next(response.data);
                }
            })      
    }

    getGifs() {
        return this.gifs.asObservable()
    }
}