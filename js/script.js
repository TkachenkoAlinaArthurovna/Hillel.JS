<<<<<<< Updated upstream

=======
//Test 1

var str1 = 'ahb acb aeb aeeb adcb axeb';
var reg1 = /a.b/g;
console.log(str1.match(reg1));

//Test 2 

var str2 = '*+ *q+ *qq+ *qqq+ *qqq qqq+';
var reg2 = /\*qq*\+/g;
console.log(str2.match(reg2));

//Test 3 

str3 = '2000/10/18 12:10';
str4 = '1555/05/01 05:06';
str5 = '2015/01/12 22:56';
var reg3 = /(1\d\d\d|200\d|201[0-2])\/[01]\d\/[0-3]\d\s[0-2]\d:[0-5]\d/g;
console.log(str3.match(reg3));
console.log(str4.match(reg3));
console.log(str5.match(reg3));

//Test 4

str6 = 'Extra   spaces Sentence.   Sentence.'

reg4 = /\s+/g;
reg5 = /\.\s+/g;

console.log(str6.replace(reg4,' ').replace(reg5,'.  '))
>>>>>>> Stashed changes
