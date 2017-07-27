import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 

@Component({
    moduleId: module.id,
    templateUrl : 'hike-details.component.html'
})

export class HikeDetailsComponent implements OnInit {
    title: string;
    searchTerm:string;
    constructor(private _route: ActivatedRoute, private _router: Router) {}
    
    ngOnInit(){
        let id = this._route.snapshot.params['id'];
        this.title = `L'id de cette rando est ${id}`;
    }
    
    goBack(){
        this._router.navigate(['/hikes']);
    }
}