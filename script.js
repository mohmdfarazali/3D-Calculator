document.addEventListener("keypress", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "+" ||
    e.key === "-" ||
    e.key === "*" ||
    e.key === "/"
  )
    document.calc.txt.value += e.key;
    else if(e.key==='Enter')
    document.calc.txt.value = eval(calc.txt.value)
    else if(e.key==='c' || e.key==='C')
    document.calc.txt.value = ''
});