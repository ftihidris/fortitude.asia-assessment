import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Card } from '../service/card';


@Component({
  selector: 'app-ui-ux',
  templateUrl: './ui-ux.component.html',
  styleUrl: './ui-ux.component.scss'
})
export class UiUxComponent implements OnInit{

  cardUiList: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardData('card-ui').subscribe(data => {
      this.cardUiList = data;
      console.log(this.cardUiList);  // Check if data is being populated
    });
  }
  


}
