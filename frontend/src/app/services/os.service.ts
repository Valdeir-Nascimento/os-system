import { Observable } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OrdemServico } from '../model/ordem_servico';

@Injectable({
  providedIn: 'root'
})
export class OrdemServicoService {
  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  findAll(): Observable<OrdemServico[]> {
    const url = this.baseUrl + '/ordem-servico';
    return this.http.get<OrdemServico[]>(url);
  }

  findById(idOrdemServico: any): Observable<OrdemServico> {
    const url = `${this.baseUrl}/ordem-servico/${idOrdemServico}`;
    return this.http.get<OrdemServico>(url);
  }

  create(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = this.baseUrl + '/ordem-servico';
    return this.http.post<OrdemServico>(url, ordemServico);
  }

  update(ordemServico: OrdemServico): Observable<OrdemServico> {
    const url = this.baseUrl + '/ordem-servico/' + ordemServico.id;
    return this.http.put<OrdemServico>(url, ordemServico);
  }
  
  delete(idOrdemServico: any): Observable<void> {
    const url = `${this.baseUrl}/ordem-servico/${idOrdemServico}`;
    return this.http.delete<void>(url);
  }

  message(msg: String): void {
    this.snack.open(`${msg}`, 'OK', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
      duration: 4000
    });
  }

}
