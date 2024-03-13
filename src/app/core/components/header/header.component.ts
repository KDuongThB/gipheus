import { Component, Input, OnInit } from '@angular/core';
import { KeyValue } from '@angular/common';
import { ModalService } from '../../../services/modal.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
    constructor(public modal: ModalService) {

    }
    ngOnInit(): void {

    }

    // @Input({ required: true }) userImg: string = '';
    //! Navigation items
    navList = {"Home" : "Home", "Not Home": "", "Popular": "", "Favorite": ""}
    onCompare(_left: KeyValue<any, any>, _right: KeyValue<any, any>): number {
        return 0;
    }
    
    openModal($event: Event) {
        $event.preventDefault() 
        this.modal.toggleModal('auth')
    }

    

}