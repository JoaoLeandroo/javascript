const userAge = 16;

const verifyAge = (age) => {
  if (age >= 18 && age < 60) {
    console.log(`Voce tem ${age} anos, então voce é considerado um adulto`);
    return;
  }

  if (age >= 60) {
    console.log(`Voce tem ${age} anos, então voce é considerado um Idoso`);
    return;
  }

  if(age > 13 && age < 18) {
    console.log(`Voce tem ${age} anos, então voce é considerado um Adolescente`)
    return
  }

  console.log(`Voce tem ${age} anos, então voce é uma criança`);
  return;
};

verifyAge(userAge)