import { StartupService } from './../startup.service';
import { StartupModel } from './../model/startup_model';
import { StartupDTO } from './../dto/startup_dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})

export class CadastrarComponent implements OnInit {

  startups: StartupModel[] = [];
  startup: StartupDTO = {};

  constructor(private service: StartupService) { }

  ngOnInit(): void {
  }

  adicionar(){
    this.service.salvar(this.startup).subscribe( resposta => {
      this.startup = {};
    });
  }
}

