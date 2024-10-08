import { Component, AfterViewInit, HostListener } from '@angular/core';
import { ReportService } from '../service/report.service';
import { NgFor } from '@angular/common';
import * as echarts from 'echarts';

// Definindo um tipo para o relatório
interface Report {
  email: string;
  bairro: string;
  problema: string;
}

@Component({
  selector: 'app-show-report',
  standalone: true,
  imports: [NgFor],
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.scss']
})
export class ShowReportComponent implements AfterViewInit {

  reports: any = [];

  constructor(private reportService: ReportService) { }

  ngOnInit() {
    this.reportService.findAll().subscribe((reports: any) => {
      this.reports = reports.reports;
      this.initCharts();
    });
  }

  ngAfterViewInit() {
    // Gráficos já inicializados no ngOnInit após os dados serem carregados.
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeCharts();
  }

  initCharts() {
    this.initBairroChart();
    this.initProblemaChart();
  }

  initBairroChart() {
    const bairroChart = echarts.init(document.getElementById('bairroChart') as HTMLDivElement);
    const bairroCount = this.reports.reduce((acc: { [key: string]: number }, report: any) => {
      acc[report.bairro] = (acc[report.bairro] || 0) + 1;
      return acc;
    }, {});

    bairroChart.setOption({
      title: {
        text: 'Quantidade de Bairros',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: Object.keys(bairroCount)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Quantidade',
        type: 'bar',
        data: Object.values(bairroCount)
      }]
    });
  }

  initProblemaChart() {
    const problemaChart = echarts.init(document.getElementById('problemaChart') as HTMLDivElement);
    const problemaCount = this.reports.reduce((acc: { [key: string]: number }, report: any) => {
      acc[report.problema] = (acc[report.problema] || 0) + 1;
      return acc;
    }, {});

    problemaChart.setOption({
      title: {
        text: 'Quantidade de Problemas',
        left: 'center'
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: Object.keys(problemaCount)
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        name: 'Quantidade',
        type: 'bar',
        data: Object.values(problemaCount)
      }]
    });
  }

  resizeCharts() {
    const bairroChart = echarts.getInstanceByDom(document.getElementById('bairroChart') as HTMLDivElement);
    const problemaChart = echarts.getInstanceByDom(document.getElementById('problemaChart') as HTMLDivElement);

    if (bairroChart) bairroChart.resize();
    if (problemaChart) problemaChart.resize();
  }
}