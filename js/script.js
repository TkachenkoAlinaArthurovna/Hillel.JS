<<<<<<< Updated upstream
=======
//Task 1
//variation 1

var sum = '';

for (var a = 1; a <= 7; a++) {
  if( a == 1 ) {
    sum = sum + '#' + '\n'
  }
  if( a == 2 ) {
    for (var b =1; b <= 2; b++) {
      sum = sum + '#'
    }
  sum = sum + '\n'
}
  if( a == 3 ) {
    for (var b =1; b <= 3; b++) {
      sum = sum + '#'
  }
  sum = sum + '\n'
}
  if( a == 4 ) {
    for (var b =1; b <= 4; b++) {
      sum = sum + '#'
  }
  sum = sum + '\n'
}
  if( a == 5 ) {
    for (var b =1; b <= 5; b++) {
      sum = sum + '#'
}
  sum = sum + '\n'
}
  if( a == 6 ) {
    for (var b =1; b <= 6; b++) {
      sum = sum + '#'
}
  sum = sum + '\n'
}
  if( a == 7 ) {
    for (var b =1; b <= 7; b++) {
      sum = sum + '#'
}
  sum = sum + '\n'
}
}

console.log(sum)

//variation 2

var sum = '';
var str = '';

for (var a = 1; a <= 7; a++) {
  str = str + '#';
  sum = sum + str + '\n';
}
 
console.log(sum)

//Task 2

var sum = '';

for (var a = 1; a <= 12; a++) {
  if (a == 1) {
    for (var b = 1; b <= 28; b++) {
    sum = sum + '#'
  }
  sum = sum + '\n'
}
  if (a == 2) {
    for (var b = 1; b <= 28; b++) {
      if (b <= 5) {
        sum = sum + '#'
  }
      if (b >= 6 && b <= 22) {
        sum = sum + ' '
  }
      if (b >= 23) {
        sum = sum + '#'   
  }
  }
  sum = sum + '\n'
}
  if (a == 3) {
    for (var b = 1; b <= 28; b++) {
      if (b <= 2) {
        sum = sum + '#'
      }
      if (b >=3 && b <= 5) {
        sum = sum + ' '
      }
      if (b >= 6 && b <=8) {
        sum = sum + '*'
      }
      if (b >= 9 && b <= 24) {
        sum = sum + ' '
      }
      if (b >= 25 && b <= 26) {
        sum = sum + '*'
      }
      if (b >= 27) {
        sum = sum + '#'
      }
    }
    sum = sum + '\n'
  }
  if (a == 4) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 6 || b == 7 || b >= 27) {
        sum = sum + '#'
      }
      if (b >= 2 && b <= 4 || b >= 10 && b <= 18 || b >=21 && b <= 22 || b >=24 && b <= 25) {
        sum = sum + ' '
      }
      if (b == 5 || b == 8 || b == 9 || b == 19 || b == 20 || b == 26) {
        sum = sum + '*'
      }
      if (b == 23) {
        sum = sum + 'O'
      }
    }
    sum = sum + '\n'
  }
  if (a == 5) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 19 || b == 20 || b == 28) {
        sum = sum + '#'
      }
      if (b >= 6 && b <= 8 || b == 21 || b == 22 || b == 27) {
        sum = sum + '*'
      }
      if (b == 14) {
        sum = sum + 'O'
      }
      if (b >= 2 && b <= 5 || b >= 9 && b <=13 || b >= 15 && b <= 18 || b >=23 && b <=26) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 6) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b >=19 && b <= 20 || b ==28) {
        sum = sum + '#'
      }
      if (b >= 21 && b <=23) {
        sum = sum + '*'
      }
      if (b == 9) {
        sum = sum + 'O'
      }
      if (b >=2 && b <=8 || b >= 10 && b <= 18 || b >=24 && b <=27) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 7) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 18 || b == 19 || b == 28) {
        sum = sum + '#'
      }
      if (b == 20 || b == 21) {
        sum = sum + '*'
      }
      if (b >= 2 && b <= 17 || b >= 22 && b <= 27) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 8) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 13 || b == 28) {
        sum = sum + '#'
      }
      if (b == 14) {
        sum = sum + '*'
      }
      if (b == 5) {
        sum = sum + 'O'
      }
      if (b >=2 && b <= 4 || b >= 6 && b <= 12 || b >=15 && b <= 27) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 9) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 13 || b ==28) {
        sum = sum + '#'
      }
      if (b == 2 || b ==14 || b == 15) {
        sum = sum + '*'
      }
      if (b == 23) {
        sum = sum + 'O'
      }
      if (b >= 3 && b <= 12 || b >= 16 && b <= 22 || b >= 24 && b <= 27) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 10) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 13 || b == 14 || b ==28) {
        sum = sum + '#'
      }
      if (b >= 2 && b <= 4 || b == 15 || b == 16 || b == 26 || b ==27) {
        sum = sum + '*'
      }
      if (b == 21) {
        sum = sum + 'O'
      }
      if (b >= 5 && b <= 12 || b >= 17 && b <= 20 || b >= 22 && b <= 25) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 11) {
    for (var b = 1; b <= 28; b++) {
      if (b == 1 || b == 2 || b >= 12 && b <= 14 || b >= 26) {
        sum = sum + '#'
      }
      if (b >= 3 && b <= 6 || b >=15 && b <= 17 || b == 25) {
        sum = sum + '*'
      }
      if (b >=7 && b <= 11 || b >= 18 && b <= 24) {
        sum = sum + ' '
      }
    }
    sum = sum + '\n'
  }
  if (a == 12) {
    for (var b = 1; b <= 28; b++) {
      sum = sum + '#'
    }
    sum = sum + '\n'
  }
}
console.log(sum)
>>>>>>> Stashed changes

