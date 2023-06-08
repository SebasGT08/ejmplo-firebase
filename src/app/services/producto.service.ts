import { Producto } from './../domain/producto.model';
import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection, addDoc, doc, deleteDoc,updateDoc,setDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private fs: Firestore) { }

  getProducts(): Observable<Producto[]> {
    let productsCollection = collection(this.fs, 'productos');
    return collectionData(productsCollection, {idField: 'id'}) as Observable<Producto[]>;
  }

  addProduct(product: Producto) {
    let productsCollection = collection(this.fs, 'productos');
    let newDocRef = doc(productsCollection);
    let newProduct = { ...product, id: newDocRef.id };
    return setDoc(newDocRef, newProduct);
  }

  deleteProduct(id: string) {
    let docRef = doc(this.fs, 'productos/' + id);
    return deleteDoc(docRef);
  }

  updateProduct(product: Producto) {
    let docRef = doc(this.fs, 'productos/' + product.id);
    let updatedProduct = {
      codigo: product.codigo,
      descripcion: product.descripcion,
      precio: product.precio
    };
    return updateDoc(docRef, updatedProduct);
  }
}
