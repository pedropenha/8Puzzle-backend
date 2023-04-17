
class Util{
    randomString(str) {
        const itens = str.split(',');
        const novoArray = [];
    
        while (itens.length > 0) {
            const index = Math.floor(Math.random() * itens.length);
            novoArray.push(itens[index]);
            itens.splice(index, 1);
        }
    
        return novoArray;
    }
}

module.exports = Util;