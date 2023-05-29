class Person {
    constructor(name, weight, height) {
        this.name = name;
        this.weight = weight;
        this.height = height;
    }

    calculatorImc() {
        return this.weight / (this.height * this.height)
    }

    classificarImc() {
        const imc = this.calculatorImc();
        if(imc < 18.5){
            return "IMC: " + imc.toFixed(2) + ' Abaixo do Peso'
        }else if(imc >= 18.5 && imc < 25){
            return "IMC: " + imc.toFixed(2) + ' Peso Normal'
        }else if(imc >= 25 && imc < 30){
            return "IMC: " + imc.toFixed(2) + ' Acima do Peso'
        }else if(imc >= 30 && imc < 40){
            return "IMC: " + imc.toFixed(2) + ' Obesidade Morbida'
        }else{
            return "IMC: " + imc.toFixed(2) + ' Acima de 40 Obesidade Grave'
        }
    }
}


const joao = new Person('João Leandro', 68, 1.70);
console.log(joao.classificarImc())

const carlos = new Person("Carlos", 99, 1.68)
console.log(carlos.classificarImc())
