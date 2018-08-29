import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  isCollapsed: boolean;

  @Output()
  isCollapsedChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;
    this.isCollapsedChange.emit(this.isCollapsed);
  }

}
