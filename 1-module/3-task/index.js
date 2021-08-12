function ucFirst() {
  let str = 'вася';
  let tr = str.slice(1);
  let first = str.slice(0, 1);
  let big = first.toUpperCase();
  let finish = big + tr;
  return finish;
};

ucFirst();