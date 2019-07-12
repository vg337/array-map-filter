/* Array.prototype.filter - Exercice 4

Ecrire une fonction filterOnPrice, qui attend 2 arguments:
1. Un tableau d'objets représentant des produits, chacun ayant deux propriétés:
  - name
  - price
2. Un prix maximum

La fonction doit renvoyer un tableau ne contenant que les produits ne dépassant pas le prix
maximum.

Exemple d'entrée:



Sortie attendue:
  [
    { 'Xiaomi Mi A2', 209 },
    { 'Huawei P20', 480 }
  ]
*/

function filterOnPrice(products, maxPrice) {
    const basPrix = products.filter(function(product){
        return product.price <= maxPrice;
    });
    return basPrix;
}

// Ne pas modifier l'export
module.exports = filterOnPrice;
