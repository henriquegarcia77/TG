import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get(this.apiURL + 'report');
  }

  create(report: any) {
    return this.http.post(this.apiURL + 'report', report);
  }

  listBairros() {
    return this.http.get(this.apiURL + 'report/bairros');
  }

  listProblemas() {
    return this.http.get(this.apiURL + 'report/problemas');
  }

}
