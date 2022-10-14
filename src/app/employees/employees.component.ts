import { Component, OnInit } from '@angular/core';

import employees from './data/employees.json';

@Component({
  selector: 'em-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
})
export class EmployeesComponent implements OnInit {
  title: string = 'Employee Management System';
  employees: any[] = employees;
  showDp: boolean = true;

  constructor() {}

  ngOnInit(): void {}

  toggleIcon() {
    this.showDp = !this.showDp;
  }
}
