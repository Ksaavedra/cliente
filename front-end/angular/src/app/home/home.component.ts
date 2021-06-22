import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  values: number = 0;
  messageService: any;
  cards: any;
  indexModal: number = 0;
  cardsModal: any;
  titleModal: any;
  descriptionModal: any;
  buttonModal: any;
  isCompleted: any;
  imgModal:any;
  pessoaModal: any;
  rentabilidadeModal: any;
  investimentoValorModal: any;
  investimentoMinimoModal: any;


  constructor() {}

  ngOnInit(): void {

    this.cards = [
      {
        tituloCards: 'Doar para a comida',
        title: 'Doar para a comida',
        description: 'Some quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Contribuir',
        img: '../../assets/imagens/doar1.jpeg',
        porcentagemNumero: '40.00',
        investimentoTotal: '5.000,00',
        investidoresMinimo: '2.000,00',
        pessoa: '300',
      },
      {
        tituloCards: 'Comprar para a casa',
        title: 'Comprar para a casa',
        description: 'Some 2 quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Encerrada',
        img: '../../assets/imagens/doar5.jpeg',
        porcentagemNumero: '100.00',
        investimentoTotal: '510.000,00',
        investidoresMinimo: '510.000,00',
        pessoa: '900'
      },
      {
        tituloCards: 'Viajar para o pais',
        title: 'Viajar para o pais',
        description: 'Some 3quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Contribuir',
        img: 'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg',
        porcentagemNumero: '67.27',
        investimentoTotal: '2.000,00',
        investidoresMinimo: '1.345,50',
        pessoa: '134'
      },
      {
        tituloCards: 'Doar para as roupas',
        title: 'Doar para as roupas',
        description: 'Some 4quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Contribuir',
        img: '../../assets/imagens/doar2.jpeg',
        porcentagemNumero: '51.25',
        investimentoTotal: '10.000,00',
        investidoresMinimo: '5.125,00',
        pessoa: '289'
      },
      {
        tituloCards: 'Crescer para a empresa',
        title: 'Crescer para a empresa',
        description: 'Some 4quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Contribuir',
        img: '../../assets/imagens/doar3.jpeg',
        porcentagemNumero: '60.00',
        investimentoTotal: '1.750,00',
        investidoresMinimo: '1.050,00',
        pessoa: '60'
      },
      {
        tituloCards: 'Cuidar para as plantas',
        title: 'Cuidar para as plantas',
        description: 'Some 4quick example text to build on the card title and make up the bulk of the card content',
        buttonText: 'Encerrada',
        img: '../../assets/imagens/doar4.jpeg',
        porcentagemNumero: '100.00',
        investimentoTotal: '9.000,00',
        investidoresMinimo: '9.000,00',
        pessoa: '500'
      },
    ];
  }

  display: boolean = false;
  showDialog(index:any) {
    this.indexModal = index;
    this.titleModal = this.cards[index].title;
    this.descriptionModal = this.cards[index].description;
    this.buttonModal = this.cards[index].buttonText;

    this.imgModal = this.cards[index].img;
    this.pessoaModal = this.cards[index].pessoa;
    this.rentabilidadeModal = this.cards[index].porcentagemNumero;
    this.investimentoValorModal = this.cards[index].investimentoTotal;
    this.investimentoMinimoModal = this.cards[index].investidoresMinimo;
    this.cardsModal = this.cards[index].tituloCards;
    this.display = true;

    var total = (this.totalInvestidores(this.cards[index].investidoresMinimo) / this.totalInvestidores(this.cards[index].investimentoTotal)) * 100;
    this.values = total;
    console.log("values==<>>", this.values.toFixed(2));
  }

  totalInvestidores(val:any){
    var str = val.replace(',','.').replace('.',',');
    return Number(str.replace(/[^0-9.-]+/g,""));
  }

  clickInvestir(index:any){
    console.log("index", index);
    this.display = false;
  }
}
