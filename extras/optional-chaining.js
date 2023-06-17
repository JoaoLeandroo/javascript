const place = {
    name: 'shopping',
    stores: [
        {name: 'renner', isOpen: true}
    ],
    // address: {
    //     cep: 99999,
    //     street: 'some street',
    //     city: 'some city',
    //     numer: 2
    // }
}

const cep = place.address?.cep
console.log(cep)
// retorna undefined