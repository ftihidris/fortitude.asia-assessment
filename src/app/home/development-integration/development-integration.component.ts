import { Component, OnInit } from '@angular/core';
import { CardService } from '../service/card.service';
import { Card } from '../service/card';

@Component({
  selector: 'app-development-integration',
  templateUrl: './development-integration.component.html',
  styleUrl: './development-integration.component.scss'
})
export class DevelopmentIntegrationComponent implements OnInit{

  cardDevList: Card[] = [];

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
    this.cardService.getCardData('card-dev').subscribe(data => {
      this.cardDevList = data;
      console.log(this.cardDevList);  // Check if data is being populated
    });
  }
  


}
