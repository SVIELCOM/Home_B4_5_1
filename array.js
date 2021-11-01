var sports = ['футбол', 'бейсбол'];
var total = sports.push('американский футбол', 'плавание');

console.log(sports);
console.log(total);

var vegetables = ['пастернак', 'картошка'];
var moreVegs = ['сельдерей', 'свёкла'];
Array.prototype.push.apply(vegetables, moreVegs);
console.log(vegetables);
