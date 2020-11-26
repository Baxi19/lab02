//  Tecnologico de Costa Rica
//  LAB # 2
//  Aseguramiento de la calidad
//  Randald Villegas
//  Carlos Villobos
//  26/11/2020

import { Author } from './author';
import { Book } from './book.model';
import { Substitute } from '@fluffy-spoon/substitute';

// Variable global
let autor;
let book1;

// Prueba de before Each
// Se ejecuta antes de cada test de una suite.
beforeEach(function() { 
  autor = Substitute.for<Author>();
  autor.getName().returns('Nombre 1');
  book1 = new Book('Libro 1', autor, 5);
});

// Prueba de after Each
// Se ejecuta despues de cada test de una suite.
afterEach(() => {
  autor = null;
  book1 = null;
});

// Nombre: Prueba de instancia
// Objetivo: Probar que se cree una instancia de tipo Book
// Datos: 'Libro 1', dataAccess, 5
// Resultado: creacion de instancia sin errores
describe('Book', () => {
  it('should create an instance', () => {
    expect(book1).toBeTruthy();
  });
});

// Nombre: Prueba de metodo de authorContains()
// Objetivo: Probar que se retorne true si el nombre del autor existe
// Datos: Nombre del autor
// Resultado: Probar que se retorne true si encuentra 'Nombre 1' cuando se llama authorContains()
describe('Book, authorContains(), caso 1', () => {
  it('Se debe retornar true si el nombre de author esta contenido', () => {
    expect(book1.authorContains('Nombre 1')).toEqual(true);
  });
});

// Nombre: Prueba 2 de metodo de authorContains()
// Objetivo: Probar que se retorne false si el nombre del autor NO existe
// Datos: Nombre del autor
// Resultado: Probar que se retorne false si No encuentra 'Nombre 2' cuando se llama authorContains()
describe('Book, authorContains(), caso 2', () => {
  it('Se debe retornar false si el nombre de author NO esta contenido', () => {
    expect(book1.authorContains('Nombre 2')).toEqual(false);
  });
});