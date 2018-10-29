import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {


  @Input() nombre: String;
  @Input() precio: String;
  @Input() codigo: number;
  @Input() medida: String;
  @Input() url: String;

  constructor() { }

  ngOnInit() {
  }

}
