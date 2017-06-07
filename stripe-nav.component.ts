import {Component, OnInit, AfterViewInit, ViewChild, QueryList, ViewChildren} from '@angular/core';

@Component({
  selector: 'stripe-nav',
  templateUrl: './stripe-nav.component.html',
  styleUrls: ['./stripe-nav.component.css']
})
export class StripeNavComponent implements OnInit, AfterViewInit {
  @ViewChild("navbar") navbar;
  @ViewChild("dropdownBackground") dropBg;
  @ViewChildren("listItem") listItems: QueryList<Element>;
  private categories: any[] = [{display: "Example One"}, {display: "Example Two"}];
  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
  }

  handleEnter(event) {
    const elem = event.srcElement;

    elem.classList.add('trigger-enter');
    setTimeout(() => elem.classList.contains('trigger-enter') && elem.classList.add('trigger-enter-active'), 150);
    this.dropBg.nativeElement.classList.add('open');

    const dropdown = elem.querySelector('.dropdown');
    const dropdownCoords = dropdown.getBoundingClientRect();
    const navCoords = this.navbar.nativeElement.getBoundingClientRect();
    const coords = {
      height: dropdownCoords.height,
      width: dropdownCoords.width,
      top: dropdownCoords.top - navCoords.top,
      left: dropdownCoords.left - navCoords.left
    };

    this.dropBg.nativeElement.style.setProperty('width', `${coords.width}px`);
    this.dropBg.nativeElement.style.setProperty('height', `${coords.height}px`);
    this.dropBg.nativeElement.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
  }

  handleLeave(event) {
    event.srcElement.classList.remove('trigger-enter', 'trigger-enter-active');
    this.dropBg.nativeElement.classList.remove('open');
  }
}
