import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-post',
    templateUrl: './gifs.component.html',
    styleUrl: './gifs.component.css'
})
export class GifsComponent implements OnInit {
    
    gifs: any[] = [];

    constructor(private dataService:DataService) {

    }

    ngOnInit(): void {
        this.dataService.getTrendingGifs()
        .subscribe((response : any) => {
            console.log('data: ', response)
            this.gifs = response.data;
        });
    }
}
