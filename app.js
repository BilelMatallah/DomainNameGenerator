

const nombre = ["Mike", "Steven", "Kobe", "Manu"];
const pronoun = ["the"];
const adj = ["great", "big", "master", "ruthless"];
const extension =[".com", ".net", ".org"];






/*Función para generar los dominios*/
nombre.forEach ((apodo) => {
    pronoun.forEach ((articulo) => {
        adj.forEach((mote) => {
            extension.forEach ((dom) => {
              /*Imprimimos la combinación de los elementos anteriores*/
              console.log (`${apodo}${articulo}${mote}${dom}`)});
        });
    });   
});