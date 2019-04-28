import { Component } from '@angular/core';
import { conditionallyCreateMapObjectLiteral } from '@angular/compiler/src/render3/view/util';

@Component({
    selector: 'app-createcontacts',
    templateUrl: './createcontacts.component.html',
    styleUrls: ['./createcontacts.component.scss']
})
export class CreateContactsComponent {

    formData: {
        name: string,
        address: string,
        mobile: string,
        email: string,
        instagram: string,
        github: string,
        linkedin: string,
        note: string
    } = {
            name: '',
            address: '',
            mobile: '',
            email: '',
            instagram: '',
            github: '',
            linkedin: '',
            note: ''
        };

    constructor() {

    }

    clearData() {
        this.formData.name = '';
        this.formData.address = '';
        this.formData.mobile = '';
        this.formData.email = '';
        this.formData.instagram = '';
        this.formData.github = '';
        this.formData.linkedin = '';
        this.formData.note = '';
    }
}