import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgrouncColorChanger]',
})
export class BackgrouncColorChangerDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = '';
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackgroundColor('red');
  }
  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
