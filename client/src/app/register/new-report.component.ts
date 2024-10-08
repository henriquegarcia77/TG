import { Component } from '@angular/core';
import { ReportService } from '../service/report.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './new-report.component.html',
  styleUrl: './new-report.component.scss'
})
export class NewReportComponent {

  email = new FormControl('');
  bairro = new FormControl('');
  problema = new FormControl('');

  newReport = new FormGroup({
    email: this.email,
    bairro: this.bairro,
    problema: this.problema
  });

  bairros: string[] = [];
  problemas: string[] = [];

  constructor(
    private reportService: ReportService
  ) { }

  ngOnInit() {
  
    this.reportService.listBairros().subscribe((data: any) => {
      this.bairros = data.bairros;
      console.log("Bairros:", this.bairros);
    });
  
    this.reportService.listProblemas().subscribe((data: any) => {
      this.problemas = data.problemas;
      console.log("Problemas:", this.problemas);
    });

  }

  submit() {
    if (this.newReport.valid) {
      const report = {
        email: this.newReport.value.email,
        bairro: this.newReport.value.bairro,
        problema: this.newReport.value.problema
      };
  
      this.reportService.create(report).subscribe((data: any) => {
        console.log(data);
        window.location.href = '/show-report';
      });
    } else {
      console.log("Form is invalid", this.newReport.errors);
    }
  }

}
