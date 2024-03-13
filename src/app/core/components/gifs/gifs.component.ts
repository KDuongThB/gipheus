import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-gifs',
    templateUrl: './gifs.component.html',
    styleUrl: './gifs.component.css'
})
export class GifsComponent implements OnInit, OnDestroy {

    gifs: any[] = [];

    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.dataService.getTrendingGifs()
        this.dataService.getGifs()
            .subscribe((response: any) => {
                this.gifs = response
            });

    }

    ngOnDestroy(): void {
        // this.subscription.unsubscribe()
    }
}
