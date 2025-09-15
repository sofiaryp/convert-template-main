//Cotação de moedas do dia
const USD = 5.32
const EUR = 6.25
const GBP = 7.23

//Obtendo os elementos do formulário
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

//Manipulando o input amount para receber somente números.
amount.addEventListener("input", () =>{
  const hasCharacterRegex = /\D+/g //verificando os caracteres
  //substituindo os caracteres por "":
  amount.value = amount.value.replace(hasCharacterRegex, "")
})

//Capturando o evento de submit (enviar) no formulario (ou seja, o usuário apertar "enter" ou clciar no botão de envio):
form.onsubmit = (event) => {
  event.preventDefault()

  switch(currency.value){
    case "USD":
      convertCurrency(amount.value,USD, "US$")
      break
    case "EUR":
      convertCurrency(amount.value, EUR, "€")
      break
    case "GBP":
      convertCurrency(amount.value, GBP, "£")

  }
}

//Função para converter a moeda. (valor total, preço, simbolo da moeda)
function convertCurrency(amount, price, symbol){
  console.log(amount,price,symbol)
}