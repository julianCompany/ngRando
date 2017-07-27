import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {HikeListComponent} from './hike-list.component';
import {HikeDetailsComponent} from './hike-details.component';
import {HikeService} from './hike.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [HikeListComponent, HikeDetailsComponent],
    exports:[HikeListComponent],
    providers:[HikeService]
})
export class HikeModule {

}