import {Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactService } from './contact.service';

@Component({
    moduleId : module.id,
    templateUrl: 'contact-us.component.html'
})

export class ContactUsComponent {
    isVisible: boolean = true;

    constructor(private _hikeService: ContactService ) {
	
}

  sendMessage(form: NgForm) {
      console.log('Nous sommes dans composant');
      this._hikeService.postMessage(form);
  }
}
