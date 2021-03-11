import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngz-grid';
  columns = [];
  dataSource = [];

  ngOnInit() {
    this.setColumnConfiguration();
    this.setDataSource();
  }

  setColumnConfiguration() {
    const columnConfiguration = [
      {
        headerName: '',
        field: 'IsSelected',
        cellTemplate: 'checkbox',
        columnOrder: 1
      },
      {
        headerName: 'Id',
        field: 'Id',
        cellTemplate: 'label',
        columnOrder: 2
      },
      {
        headerName: 'Name',
        field: 'Name',
        cellTemplate: 'text',
        columnOrder: 3
      }
    ];
    this.columns = columnConfiguration;
  }

  setDataSource() {
    this.dataSource.push({ IsSelected: false, Id: 101, Name: 'Achuth', BirthDate: '08/10/1992', Role: 'Associate' });
    this.dataSource.push({ IsSelected: false, Id: 102, Name: 'Rimbochi', BirthDate: '05/02/1999', Role: 'Programmer Analyst' });
    this.dataSource.push({ IsSelected: false, Id: 102, Name: 'Firoz Chuttippara', BirthDate: '12/11/1994', Role: 'Programmer Analyst' });
  }
}
