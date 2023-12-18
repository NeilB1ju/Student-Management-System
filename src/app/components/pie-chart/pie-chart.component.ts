import { Component } from '@angular/core';
import Chart from 'chart.js/auto';
import { StudentService } from '../../services/student/student.service';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.css',
})
export class PieChartComponent {
  constructor(private studentService: StudentService) {}

  departmentChart: any;
  stateChart: any;
  pieChartColors: string[] = [
    '#1f77b4',
    '#ff7f0e',
    '#2ca02c',
    '#d62728',
    '#9467bd',
    '#8c564b',
    '#e377c2',
    '#7f7f7f',
    '#bcbd22',
    '#17becf',
    '#aec7e8',
    '#ffbb78',
    '#98df8a',
    '#ff9896',
    '#c5b0d5',
    '#c49c94',
    '#f7b6d2',
    '#c7c7c7',
    '#dbdb8d',
    '#9edae5',
    '#393b79',
    '#e6550d',
    '#637939',
    '#8ca252',
    '#b5cf6b',
    '#8c6d31',
    '#bd9e39',
    '#e7ba52',
    '#843c39',
    '#d6616b',
    '#e7969c',
    '#7b4173',
  ];

  createDepartmentChart() {
    const studentsCount = this.studentService.getStudentsCount('Department');
    const labels = Object.keys(studentsCount);
    const data = Object.values(studentsCount);

    const labelColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--secondary-text');

    this.departmentChart = new Chart('departmentChart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: this.pieChartColors,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
        plugins: {
          legend: {
            labels: {
              color: labelColor,
              font: {
                size: 20,
              },
            },
          },
        },
      },
    });
  }

  createStateChart(): void {
    const studentsCount = this.studentService.getStudentsCount('State');
    const labels = Object.keys(studentsCount);
    const data = Object.values(studentsCount);

    const labelColor = getComputedStyle(
      document.documentElement
    ).getPropertyValue('--secondary-text');

    this.stateChart = new Chart('stateChart', {
      type: 'pie',
      data: {
        labels: labels,
        datasets: [
          {
            data: data,
            backgroundColor: this.pieChartColors,
            hoverOffset: 4,
          },
        ],
      },
      options: {
        aspectRatio: 2,
        plugins: {
          legend: {
            labels: {
              color: labelColor,
              font: {
                size: 20,
              },
            },
          },
        },
      },
    });
  }

  dataPresent = false;

  ngOnInit(): void {
    this.dataPresent = false;
    const students = this.studentService.getStudents();
    if (students.length) {
      this.dataPresent = true;
    }
    this.createDepartmentChart();
    this.createStateChart();
  }
}
