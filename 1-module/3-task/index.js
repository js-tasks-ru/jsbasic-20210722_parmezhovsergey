function ucFirst(str) {
  
  let lenght = str.lenght;

  if (lenght <= 1) {
    let one = str.toUpperCase();
    return one;
  };
    let tr = str.slice(1);
    let first = str.slice(0, 1);
    let big = first.toUpperCase();
    let finish = big + tr;
    return finish;
  
};

ucFirst('вася');