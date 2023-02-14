

const nombre = ["Mike", "Steven", "Kobe", "Manu"];
const pronoun = ["the"];
const adj = ["great", "big", "master", "ruthless"];
const extension =[".com", ".net", ".org"];

nombre.forEach ((apodo) => {
    pronoun.forEach ((articulo) => {
        adj.forEach((mote) => {
            extension.forEach ((dom) => {
                console.log (`${apodo}${articulo}${mote}${dom}`)});
        });
    });   
});