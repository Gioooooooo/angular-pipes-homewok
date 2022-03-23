import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
} from '@angular/core';

@Directive({
  selector: '[appBackgroundColorChanger]',
})
export class BackgroundColorChangerDirective {
  @Input('appBackgroundColorChanger') colorOnStatus: string | undefined;

  @HostBinding('style.background-color') backgroundColor: string | undefined;

  constructor(private elementReferce: ElementRef) {
    this.elementReferce.nativeElement.style.backgroundColor = 'yellow';
  }

  ngOnInit(): void {
    if (this.colorOnStatus == 'active') {
      this.backgroundColor = 'green';
    } else if (this.colorOnStatus == 'notActive') {
      this.backgroundColor = 'red';
    } else if (this.colorOnStatus == 'disabled') {
      this.backgroundColor = 'blue';
    }
  }

  @HostListener('click', ['$event'])
  onClick() {
    this.backgroundColor = 'yellow';
  }
}
