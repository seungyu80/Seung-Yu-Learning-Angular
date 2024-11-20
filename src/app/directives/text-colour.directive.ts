import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appTextColour]',
  standalone: true
})
export class TextColourDirective implements OnChanges {
  //Take in the grade as an input
  @Input() appTextColour: number | null = null;

  //Renderer2: Used to safely apply styles to the element, especially in scenarios where direct DOM manipulation might not be that safe
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appTextColour'] && this.appTextColour !== null) {
      this.applyTextColour(this.appTextColour);
    }
  }

  private applyTextColour(mark: number): void {
    let color = '';
    let fontWeight = 'normal';
    if (mark < 100) {
      color = 'darkred';
      fontWeight = 'bold';
    } else if (mark >= 100 && mark <= 105) {
      color = 'lightcoral';
    } else if (mark >= 105 && mark <= 110) {
      color = 'darkorange';
    } else if (mark >= 110) {
      color = 'green';
    }
    this.renderer.setStyle(this.el.nativeElement, 'color', color);
    this.renderer.setStyle(this.el.nativeElement, 'fontWeight', fontWeight);
  }

}
