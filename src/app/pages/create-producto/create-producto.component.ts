import { Producto } from './../../domain/producto.model';
import { ProductoService } from './../../services/producto.service';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-create-producto',
  templateUrl: './create-producto.component.html',
  styleUrls: ['./create-producto.component.scss']
})
export class CreateProductoComponent {

  producto: Producto = { id: '', codigo: '', descripcion: '', precio: 0 };

  constructor(private router: Router,private _snackBar: MatSnackBar, private productoService: ProductoService) { }

  agregarProducto() {
    this.productoService.addProduct(this.producto).then(() => {
      this._snackBar.open('Producto creado con éxito', 'Cerrar', {
        duration: 2000,

      });
      this.producto = { id: '', codigo: '', descripcion: '', precio: 0 };
      this.router.navigate(['list-producto']);

    }).catch((error) => {
      this._snackBar.open(`Error al crear producto: ${error}`, 'Cerrar', {
        duration: 2000,
      });
    });
  }
}
