function solve(arr) {
    var html = arr.join('\n'),
        regex = /<tr><td>(.*?)<\/td><td>(.*?)<\/td><td>(.*?)<\/td><\/tr>/g,
        match,
        products = [];
    while(match = regex.exec(html)) {
        var product = {product: match[1], price: match[2], votes: match[3]};
        products.push(product);
    }
    products.sort(function(x, y) {
        if(x.price === y.price) {
            return x.product > y.product;
        }
        return Number(x.price) - Number(y.price);
    });
    
    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    products.forEach(function(product) {
        console.log('<tr><td>' + product.product+ '</td><td>' + product.price + '</td><td>' + product.votes+ '</td></tr>');
    })
    console.log('</table>');

}

function solve(arr) {
    var products = [];
    arr.slice(2, arr.length - 1).forEach(function(el) {
        var matches = el.match(/<tr><td>(.+?)<\/td><td>(.+?)<\/td><td>(.+?)<\/td><\/tr>/);
        var product = matches[1],
            price = matches[2],
            votes = matches[3];
        products.push({name: product, price: price, votes:votes});
    });
    products.sort(function(x, y) {
        if(+x.price == +y.price) {
            return x.name.localeCompare(y.name);
        }
        return +x.price - +y.price;

    });
    //output
    console.log('<table>');
    console.log('<tr><th>Product</th><th>Price</th><th>Votes</th></tr>');
    products.forEach(function(el) {
       console.log('<tr><td>' + el.name + '</td><td>'+ el.price + '</td><td>' + el.votes + '</td></tr>'); 
    });
    console.log('</table>');
}

//solve([
//    '<table>',
//    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>+1</td></tr>',
//    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//    '<tr><td>Ariana Grapefruit 1.5 l</td><td>1.85</td><td>+7</td></tr>',
//    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//    '</table>'
//]);

//solve([
//    '<table>',
//    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
//    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
//    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
//    '<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
//    '<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
//    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
//    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
//    '</table>'
//]);

solve([
    '<table>',
    '<tr><th>Product</th><th>Price</th><th>Votes</th></tr>',
    '<tr><td>Kamenitza Grapefruit 1 l</td><td>1.85</td><td>+7</td></tr>',
    '<tr><td>Vodka Finlandia 1 l</td><td>19.35</td><td>+12</td></tr>',
    '<tr><td>Laptop Lenovo IdeaPad B5400</td><td>929.00</td><td>0</td></tr>',
    '<tr><td>Laptop ASUS ROG G550JK-CN268D</td><td>1939.00</td><td>+1</td></tr>',
    '<tr><td>Ariana Radler 0.5 l</td><td>1.19</td><td>+33</td></tr>',
    '<tr><td>Coffee Davidoff 250 gr.</td><td>11.99</td><td>+11</td></tr>',
    '<tr><td>Kamenitza Lemon 1 l</td><td>1.65</td><td>+7</td></tr>',
    '<tr><td>Vodka Absolute 1 l</td><td>22.00</td><td>+2</td></tr>',
    '<tr><td>Laptop Dell Inspiron 3537</td><td>1199.0</td><td>+3</td></tr>',
    '<tr><td>Laptop HP 250 G2</td><td>629</td><td>-10</td></tr>',
    '<tr><td>Ariana Radler 1.5 l</td><td>2.79</td><td>+33</td></tr>',
    '<tr><td>Coffee Lavazza 250 gr.</td><td>8.73</td><td>+10</td></tr>',
    '</table>'
]);
