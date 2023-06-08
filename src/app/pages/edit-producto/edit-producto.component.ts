import { ProductoService } from './../../services/producto.service';
import { Producto } from './../../domain/producto.model';
import { DataSharingService } from './../../services/data-sharing.service';

import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-producto',
  templateUrl: './edit-producto.component.html',
  styleUrls: ['./edit-producto.component.scss']
})
export class EditProductoComponent {

  @Input() producto: Producto = { id: '', codigo: '', descripcion: '', precio: 0 };


  constructor(private _snackBar: MatSnackBar,
    private productoService: ProductoService,
    private dataSharingService: DataSharingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.dataSharingService.currentProducto.subscribe(producto => {
      if(producto){
        this.producto = producto;
      }
    });
  }

  actualizarProducto() {
    this.productoService.updateProduct(this.producto)
      .then(() => {

        this._snackBar.open('Producto actualizado con éxito', 'Cerrar', {
          duration: 2000,
        });
        this.router.navigate(['list-producto']);
      })
      .catch(error => {
        console.error("Error al actualizar el producto: ", error);
        this._snackBar.open(`Error al actualizar producto: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      });
  }

}
