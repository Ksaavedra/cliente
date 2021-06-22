import { Component, OnInit } from '@angular/core';
import { faInstagram, faFacebook, faLinkedin, faTelegram, faSlack, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faInstagram = faInstagram
  faFacebook = faFacebook
  faLinkedin = faLinkedin
  faTelegram = faTelegram
  faTwitter = faTwitter
  faSlack = faSlack
  faWhatsapp = faWhatsapp

  constructor() { }

  ngOnInit(): void {
  }

}
