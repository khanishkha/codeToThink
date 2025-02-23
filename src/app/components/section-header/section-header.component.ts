import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss']
})
export class SectionHeaderComponent implements OnInit {
  @Input() title: string = 'Section Title';
  @Input() description: string = 'Section description goes here.';
  @Input() buttonText: string = 'View More';
  constructor() { }

  ngOnInit(): void {
  }

}
