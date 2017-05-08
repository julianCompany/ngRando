import {Component} from '@angular/core';
import { Hike } from './hike';
import { HikeService} from './hike.service';

@Component({
    moduleId: module.id,
    selector : 'hike-list',
    templateUrl: 'hike-list.component.html'
    
})
export class HikeListComponent{
  hikes: Hike[]=[];

  constructor(private _hikeService: HikeService) {
    
  }

  ngOnInit(){
      this._hikeService.getHikesFromApi().subscribe(res => this.hikes = res, 
                                                    err => console.log(err.status))
      console.log(this.hikes );
  }
}