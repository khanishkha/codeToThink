import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent {
  @Input() imageUrl!: string;
  @Input() title!: string;
  @Input() subtitle!: string;
  @Input() size: string = 'medium'; // Default size
}
