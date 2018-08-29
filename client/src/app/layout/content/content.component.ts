import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  i = 4;
  editCache = {};
  dataSet = [
    {
      key    : '0',
      name   : 'Edward King 0',
      age    : '32',
      address: 'London, Park Lane no. 0'
    },
    {
      key    : '1',
      name   : 'Edward King 1',
      age    : '32',
      address: 'London, Park Lane no. 1'
    },
    {
      key    : '2',
      name   : 'Edward King 2',
      age    : '32',
      address: 'London, Park Lane no. 2'
    }
    ,
    {
      key    : '3',
      name   : 'Edward King 3',
      age    : '32',
      address: 'London, Park Lane no. 3'
    },
    {
      key    : '4',
      name   : 'Edward King 4',
      age    : '32',
      address: 'London, Park Lane no. 4'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.updateEditCache();
  }

  addRow(): void {
    this.i++;
    this.dataSet = [ ...this.dataSet, {
      key    : `${this.i}`,
      name   : `Edward King ${this.i}`,
      age    : '32',
      address: `London, Park Lane no. ${this.i}`
    } ];
    this.updateEditCache();
  }

  deleteRow(i: string): void {
    const dataSet = this.dataSet.filter(d => d.key !== i);
    this.dataSet = dataSet;
  }

  startEdit(key: string): void {
    this.editCache[ key ].edit = true;
  }

  finishEdit(key: string): void {
    this.editCache[ key ].edit = false;
    this.dataSet.find(item => item.key === key).name = this.editCache[ key ].name;
  }

  updateEditCache(): void {
    this.dataSet.forEach(item => {
      if (!this.editCache[ item.key ]) {
        this.editCache[ item.key ] = {
          edit: false,
          name: item.name
        };
      }
    });
  }

}
