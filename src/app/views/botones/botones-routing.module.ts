import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BotonesComponent } from './botones.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Botones'
    },
    children: [
      {
        path: '',
        redirectTo: 'botones'
      },
      {
        path: 'botones',
        component: BotonesComponent,
        data: {
          title: 'Botones'
        }
      },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ButtonsRoutingModule {}
