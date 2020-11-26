export interface Author {
  /*Constructor*/
  new(name:string, pais:string);
  /*Compara por el nombre si dos autores son iguales*/
  equals(name:string):boolean;
  /*Inicializa el nombre*/
  setName(name:string):void;
  /*Devuelve el nombre*/
  getName():string;
  /*Inicializa el pais*/
  setPais(pais:string):void;
  /*Devuelve el pais*/
  getPais():string;
}

