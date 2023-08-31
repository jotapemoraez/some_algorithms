function fib( n, map ) {

  if (n === 1 || n === 2) {
    return 1;
  } else {


    map[n-1] = map[n-1] ?? fib(n-1, map);
    map[n-2] = map[n-2] ?? fib(n-2, map);

    map[n] = map[n-1] + map[n-2]

  
    return map[n];
  }



}

console.log(fib(9, {}))