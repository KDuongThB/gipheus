import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {


    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        
    }

    searchGif($event: Event, searchTerm: string) {
        $event.preventDefault()
        if (searchTerm !== '') {
            this.dataService.searchGifs(searchTerm)
        }
    }
}
