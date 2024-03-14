import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { FormsModule } from '@angular/forms';
import { Subject, Subscription, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Input } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {

    @Input() txtQuery: string = ''; // bind this to input with ngModel
    txtQueryChanged: Subject<string> = new Subject<string>();

    onFieldChange(query: string) {
        this.txtQueryChanged.next(query);
    }

    constructor(private dataService: DataService) {
        this.txtQueryChanged
            .pipe(
                debounceTime(500), // wait 500ms after the last event before emitting last event
                distinctUntilChanged()
                ) // only emit if value is different from previous value
            .subscribe((model) => {
                this.txtQuery = model;
                // search after debounce
                this.search(this.txtQuery);
            })
    }

    ngOnInit(): void {

    }

    public search(searchTerm: string) {

        if (searchTerm !== '') {
            this.dataService.searchGifs(searchTerm)
        }
        this.dataService.getTrendingGifs()
    }
}
