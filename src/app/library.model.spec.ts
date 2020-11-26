//  Tecnologico de Costa Rica
//  LAB # 2
//  Aseguramiento de la calidad
//  Randald Villegas
//  Carlos Villobos
//  26/11/2020

import Substitute from '@fluffy-spoon/substitute';
import { Author } from './author';
import { Book } from './book.model';
import { Library } from './library.model';

// Variables globales
let autor;
let book1;
let book2;
let library;

// Prueba de before Each
// Se ejecuta antes de cada test de una suite.
beforeEach(() => { 
  autor = Substitute.for<Author>();
  autor.getName().returns('Nombre 1');
  book1 = new Book('Libro 1', autor, 5);
  book2 = new Book('Libro 2', autor, 3);
  library = new Library();
  library.addBook(book1);
  library.addBook(book2);
});

// Prueba de after Each
// Se ejecuta despues de cada test de una suite.
afterEach(() => {
  autor = null;
  book1 = null;
  book2 = null;
  library = null;
});

// Nombre: Prueba de instancia
// Objetivo: Probar que se cree una instancia de tipo Library
// Datos: Ninguno
// Resultado: creacion de instancia sin errores
describe('Library', () => {
  it('should create an instance', () => {
    expect(new Library()).toBeTruthy();
  });
});

// Nombre: Prueba de metodo searchByAuthor(), cuando existen libros
// Objetivo: Probar que se retorne una lista de libros asociados a un autor
// Datos: Nombre del autor = 'Nombre 1'
// Resultado: La cantidad de libros asociados al autor, en este caso 2
describe('Library: searchByAuthor(), caso que si hay libros', () => {
  it('Regresa la cantidad de libros relacionados con el autor buscado', () => {
    expect(library.searchByAuthor('Nombre 1').size()).toBe(2);
  });
});

// Nombre: Prueba de metodo searchByAuthor(), cuando NO existen libros
// Objetivo: Probar que se retorne una lista de libros asociados a un autor
// Datos: Nombre del autor = 'Nombre 2'
// Resultado: La cantidad de libros asociados al autor, en este caso 0, ya que no existe un autor con nombre = 'Nombre 2'
describe('Library: searchByAuthor(), caso que no hay libros', () => {
  it('Regresa la cantidad de libros relacionados con el autor buscado', () => {
    expect(library.searchByAuthor('Nombre 2').size()).toBe(0);
  });
});


