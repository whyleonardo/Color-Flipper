const colors = [
  'green',
  'red',
  'orange',
  'purple',
  'blue',
  'black',
  'white'
]
const btn = document.getElementById('btn')
const color = document.querySelector('.color')

btn.addEventListener('click', function () {
  // get random number between 0 - 3
  const randomNumber = getRandomNumber()

  document.body.style.backgroundColor = colors[randomNumber]
  color.textContent = colors[randomNumber] //altera o texto dentro da classe color no span, para a cor selecionada na const randomNumber>
  document.querySelector('.color').style.color = colors[randomNumber]
})

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length)
}
