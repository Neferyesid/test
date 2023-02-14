const { request, response } = require('express');
const express = require('express')

const app = express()

app.get('/', (request, response) => {
    response.send('hola todo ')
})

app.get('/Suma/:num1/:num2', (request, response) => {
    const { num1, num2 } = request.params
    const numero1 = +num1
    const numero2 = +num2
    const suma = numero1 + numero2
    response.send(suma.toString())
});
app.get('/Restar/:nu1/:nu2', (request, response) => {
    const {nu1, nu2} = request.params
    const numerres1 = +nu1
    const numerres2 = +nu2
    const res = numerres1-numerres2
    response.send(res.toString())
});
app.get('/multip/:n1/:n2',(request, response) => {
    const{n1, n2} = request.params
    const numeroos1 = +n1
    const numeroos2 = +n2
    const mul = numeroos1*numeroos2
    response.send(mul.toString()) 
})

app.listen(3000, () => console.log('Listening in http://localhost:3000'))