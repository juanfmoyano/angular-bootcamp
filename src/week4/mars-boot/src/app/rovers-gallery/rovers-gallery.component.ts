import { Component, OnInit } from '@angular/core';
import { MarsPhotosService } from '../services/mars-photos.service';

import { Rover } from '../models/rover';

@Component({
   selector: 'app-rovers-gallery',
   templateUrl: './rovers-gallery.component.html',
   styleUrls: ['./rovers-gallery.component.css']
})
export class RoversGalleryComponent implements OnInit {
   rovers: Rover[];

   constructor(private photoService: MarsPhotosService) { }

   ngOnInit() {
      this.getRovers();
   }

   getRovers(): void {
      this.photoService.getRovers().subscribe(roversArray => this.rovers = roversArray['rovers']);
   }


}
