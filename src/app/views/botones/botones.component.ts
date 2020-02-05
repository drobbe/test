import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
//import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';


@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.scss']
})
export class BotonesComponent implements OnInit {

  constructor() {
  	console.log("genial");
   }

  ngOnInit() {
  }

   public obey($event) : void {
    $event.classList.add('MyClass');
    $event.classList.remove('MyClass');
    console.log("hola");
  }


}
