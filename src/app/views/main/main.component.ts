import { Component, OnInit } from '@angular/core';
import {AccordionType} from "../../../types/accordion.type";

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


  constructor() {

  }

  ngOnInit(): void {
  }

  public accordionItems: AccordionType[] = [
    {
      header: 'Собираете ли вы подарочные боксы?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
      open: false
    },
    {
      header: 'Сколько у вас разновидностей чая?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
      open: false
    },
    {
      header: 'В какой срок осуществляется доставка?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
      open: false
    },
    {
      header: 'У вас обновляется ассортимент?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
      open: false
    },
    {
      header: 'Какого объема у вас пачки чая?',
      content: 'Да, у нас есть такая услуга. Мы можем собрать подарочный бокс на любой вкус, объем и стоимость!',
      open: false
    }
  ];



  togglePanel(index: number) {
    this.accordionItems[index].open = !this.accordionItems[index].open;
  };
}
