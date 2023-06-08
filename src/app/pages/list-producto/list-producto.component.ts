import { Component,OnInit  } from '@angular/core';
import { Router } from '@angular/router';

import { Producto } from './../../domain/producto.model';
import { ProductoService } from './../../services/producto.service';
import { DataSharingService } from './../../services/data-sharing.service';

import { MatSnackBar } from '@angular/material/snack-bar';






@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.scss']
})
export class ListProductoComponent  implements OnInit {

  listadoProductos: Producto[] = [];
  displayedColumns: string[] = ['codigo', 'descripcion', 'precio', 'acciones'];


  constructor(private _snackBar: MatSnackBar,private productoService: ProductoService,private router: Router, private dataSharingService: DataSharingService) { }

  ngOnInit() {
    this.getProductos();
  }

  getProductos() {
    this.productoService.getProducts().subscribe(data => {
      this.listadoProductos = data as Producto[];
    });
  }

  eliminar(producto: Producto) {
    if (producto.id) {
      this.productoService.deleteProduct(producto.id).then(() => {

        this._snackBar.open('Producto eliminado con éxito', 'Cerrar', {
          duration: 2000,
        });
        this.getProductos();  // refrescar la lista después de la eliminación
      }).catch((error) => {
        this._snackBar.open(`Error al eliminar producto: ${error}`, 'Cerrar', {
          duration: 2000,
        });
      });
    } else {
      console.error('Producto.id es undefined');
      this._snackBar.open('Error: Producto.id es undefined', 'Cerrar', {
        duration: 2000,
      });
    }
  }

  editar(product: Producto) {
    this.dataSharingService.changeProducto(product);
    this.router.navigate(['edit-producto']);
  }
}



