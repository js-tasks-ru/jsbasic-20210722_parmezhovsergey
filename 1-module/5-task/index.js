function truncate(str, maxlength) {
  // ваш код...
  let lenght = str.length;
  let max = maxlength - 1;
  if (lenght > maxlength) {
    let stroka = str.slice(0, max) + "…";
    return stroka;
  };
  if (lenght <= maxlength) {
    return str;
  };
}
