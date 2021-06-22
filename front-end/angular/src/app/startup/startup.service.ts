import { StartupDTO } from './dto/startup_dto';
import { StartupModel } from './model/startup_model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class StartupService {

  url: string = environment.URLSERVIDOR+'startup';

  constructor(private http: HttpClient) { }

  buscar(): Observable<StartupModel[]>{
    return this.http.get(this.url)
    .pipe( map( resposta => <StartupModel[]> resposta) );
  }

  salvar(startupDTO: StartupDTO): Observable<StartupModel>{
    return this.http.post(this.url, startupDTO)
    .pipe( map(resposta => <StartupModel> resposta) );
  } 

  atualizar(startup: StartupDTO){
    return this.http.put(this.url+'/'+startup.id, startup)
    .pipe( map(resposta => <StartupModel> resposta) );
  }
}