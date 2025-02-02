import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-portfolio';
  showButton = false;
  @ViewChild('hamMenu') hamMenu?: ElementRef;
  @ViewChild('offScreenMenu') offScreenMenu?: ElementRef;

  ngAfterViewInit() {
    this.hamMenu?.nativeElement.addEventListener('click', () => {
      console.log(this.hamMenu);
      this.hamMenu?.nativeElement.classList.toggle('active');
      this.offScreenMenu?.nativeElement.classList.toggle('active');
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showButton = window.scrollY > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.hamMenu?.nativeElement.classList.remove('active');
      this.offScreenMenu?.nativeElement.classList.remove('active');
    }
  }
}
