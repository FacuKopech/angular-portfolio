import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  toggleHover(event: Event): void {
    const target = event.currentTarget as HTMLElement;
    target.classList.toggle('hover');
  }
}
