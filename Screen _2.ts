import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

export interface MapDetails {
  capital: string;
  pay: string;
  ville: string;
  population: number;
  lat: number;
  long: number;
}

const MAP_DATA: MapDetails[] = [
  { capital: 'Tokyo', pay: 'Japon', ville: 'Tokyo',
  population: 37115000, lat: 35.67, long: 139.65 },
  { capital: 'New Delhi', pay: 'Inde', ville: 'New Delhi',
  population: 33807000, lat: 28.61, long: 77.20 },
  { capital: 'Paris', pay: 'France', ville: 'Paris',
  population: 11276701, lat: 48.85, long: 2.35 },
  { capital: 'Seoul', pay: 'Corée du Sud', ville: 'Seoul',
  population: 10005000, lat: 37.55, long: 126.99 },
  { capital: 'Rome', pay: 'Italie', ville: 'Rome',
  population: 4332000, lat: 41.90, long: 12.49 },
];

@Component ({
  selector: 'screen2',
  styleUrls: ['screen2.css'],
  templateUrl: 'screen2.html',
})
export class Screen2 {
  displayedColumns: string[] = [
    'capital',
    'pay',
    'ville',
    'population',
    'lat',
    'long',
    'actions',
  ];
  dataSource = MAP_DATA;

  @ViewChild(MatTable) table:
  MatTable<MapDetails>;

  onEdite(element: MapDetails): void {
    // To Edit Table
  }

  onDelete(element: MapDetails): void {
    const indexToDelete = this dataSource.findIndex(
      (mapDetails) => mapDetails.capital === element.capital
    );
    MAP_DATA.splice(indexToDelete, 1);
    this.dataSource = MAP_DATA;
    this.table.renderRows();
  }
}
  
