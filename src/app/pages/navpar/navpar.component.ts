import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent {

    @Output() searchData = new EventEmitter;
    TitlePostSearch(input: HTMLInputElement) {
      this.searchData.emit(input.value);
    }
  }

