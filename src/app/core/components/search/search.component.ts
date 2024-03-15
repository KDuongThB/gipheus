import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { Input } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {

    @Input() txtQuery: string = ''; // bind this to input with ngModel
    txtQueryChanged: Subject<string> = new Subject<string>();

    onFieldChange(query: string) {
        this.txtQueryChanged.next(query);
    }

    constructor(private dataService: DataService) {
        //* Add debounce time to avoid rapid firing search API
        this.txtQueryChanged
            .pipe(
                debounceTime(500), // wait 500ms after the last event before emitting last event
                distinctUntilChanged()
            ) // only emit if value is different from previous value
            .subscribe(model => {
                this.txtQuery = model;
                // Call your function which calls API or do anything you would like do after debounce
                this.search(this.txtQuery);
            })
    }

    ngOnInit(): void {

    }

    //* Search function
    public search(searchTerm: string) {
        if (searchTerm !== '') {
            this.dataService.searchGifs(searchTerm)
        }
    }
}
