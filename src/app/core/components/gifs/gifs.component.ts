import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-gifs',
    templateUrl: './gifs.component.html',
    styleUrl: './gifs.component.css'
})
export class GifsComponent implements OnInit, OnDestroy {

    gifs: any[] = [];

    private subscription : Subscription = new Subscription();
    constructor(private dataService: DataService) {

    }

    ngOnInit(): void {
        this.dataService.getTrendingGifs()
        this.subscription = this.dataService.getGifs()
            .subscribe((response: any) => {
                this.gifs = response
            });

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe()
    }
}
