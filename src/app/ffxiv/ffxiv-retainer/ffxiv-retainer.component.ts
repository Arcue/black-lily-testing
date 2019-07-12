import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ffxiv-retainer',
  templateUrl: './ffxiv-retainer.component.html',
  styleUrls: ['./ffxiv-retainer.component.css']
})
export class FfxivRetainerComponent implements OnInit, OnChanges {
currentRetainer: string;

  constructor() {

  }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(this.currentRetainer);
  }
}
