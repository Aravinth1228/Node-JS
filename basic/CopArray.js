const habbies1 = ['reading', 'writing', 'coding'];
// const habbies2 = habbies1.map(h => h.toUpperCase());
// habbies2.push('Dancing');

// console.log(habbies2);
/*PS D:\Project\Node JS\Node-JS\basic> node .\CopArray.js
[ 'READING', 'WRITING', 'CODING', 'Dancing' ]*/

const habbies2 = habbies1.slice(); 
habbies2.push('Dancing');
console.log(habbies2);
/*PS D:\Project\Node JS\Node-JS\basic> node .\CopArray.js
[ 'reading', 'writing', 'coding', 'Dancing' ]*/
 