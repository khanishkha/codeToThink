import { Component } from '@angular/core';

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent {
  categories = [
    { name: 'Bayer', imageUrl: 'assets/bayer.jpeg', size: 'large' },
    { name: 'Claritin', imageUrl: 'assets/bayer.jpeg', size: 'medium' },
    { name: 'Bayer', imageUrl: 'assets/bayer.jpeg', size: 'small' },
    { name: 'Donna Karan', imageUrl: 'assets/bayer.jpeg', size: 'large' },
    { name: 'Procter & Gamble', imageUrl: 'assets/bayer.jpeg', size: 'medium' }
  ];
}
