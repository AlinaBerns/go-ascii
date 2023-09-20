import { Component } from '@angular/core';
import { AsciiService } from './services/ascii.service';
import { generate } from 'rxjs';

@Component({
  selector: 'app-ascii-converter',
  templateUrl: './ascii-converter.component.html',
  styleUrls: ['./ascii-converter.component.css']
})
export class AsciiConverterComponent {
  inputText: string = '';
  selectedFont: string = '';
  asciiArt: string= '';

  constructor(private ascii:AsciiService) {
  
  }

  generateAsciiArt():void {

    this.ascii.getAsciiArt(this.inputText, this.selectedFont)
    .subscribe({
      next: (response: string): void => {this.asciiArt = response},
        error: (error): void => {console.log('http error', error)}

    })
      
  }
}
