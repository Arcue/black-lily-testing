import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-retainer-list',
  templateUrl: './retainer-list.component.html',
  styleUrls: ['./retainer-list.component.css']
})
export class RetainerListComponent implements OnInit {
  @Output() selectedRetainer = new EventEmitter<string>();
  retainers = ["Arcu", "Mairae", "Aurila", "Arcue", "Sonobe", "Balladrack", "Scahrossar"]
  retainerSelected(item) {
    this.selectedRetainer.emit(item);
    console.log(item);
  }
  constructor() { }

  ngOnInit() {
  }

}
