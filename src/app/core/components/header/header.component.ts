import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { DataService } from '../../../services/data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    constructor(private dataService: DataService) {

    }
    ngOnInit(): void {

    }

    // @Input({ required: true }) userImg: string = '';
    //! Navigation items
    navList = ["Home", "Popular", "About"]
    
    onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
        return 0;
    }
}