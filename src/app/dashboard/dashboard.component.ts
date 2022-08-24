import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Nivel de riesgo', cols: 1, rows: 1 },
          { title: 'Temperatura actual', cols: 1, rows: 1 },
          { title: 'Estado', cols: 1, rows: 1 },
          { title: 'Origen', cols: 1, rows: 1 },

          { title: 'Registro de incidente', cols: 1, rows: 1 },
          { title: 'Nivel de riesgo por dispositivo', cols: 1, rows: 1 },
          { title: 'Temperatura 1', cols: 1, rows: 1 },
          { title: 'Temperatura 2', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Nivel de riesgo', cols: 1, rows: 3 },
        { title: 'Temperatura actual', cols: 1, rows: 1 },
        { title: 'Estado', cols: 1, rows: 1 },
        { title: 'Origen', cols: 1, rows: 1 },
        
        { title: 'Registro de incidente', cols: 1, rows: 1 },
        { title: 'Nivel de riesgo por dispositivo', cols: 1, rows: 1 },
        { title: 'Temperatura 1', cols: 1, rows: 1 },
        { title: 'Temperatura 2', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
