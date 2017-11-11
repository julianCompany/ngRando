import { Injectable } from '@angular/core';


@Injectable()
export class ContactService {

        postMessage(formToPost : any){
            console.log(formToPost);
        }
}