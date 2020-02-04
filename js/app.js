document.addEventListener('DOMContentLoaded', () => {
  const gameBoard = document.querySelector('.game')
  const boards = gameBoard.querySelector('.small-board')
  const playerTurn = document.querySelector('.playerturn')
  const playerWin = document.querySelector('.playerWin')
  const endMessage = document.querySelector('.endMessage')
  const reset = document.querySelector('.reset')
  const playerText = document.querySelector('.playerText')
  const square = document.querySelectorAll('.each-board')
  

  let player = 'X'
  let win = false 

  let playerX = []
  let playerO = []

  const winningSolution = [ 
    ['1', '2', '3'], ['4', '5', '6'], 
    ['7', '8', '9'], ['1', '4', '7'], 
    ['2', '5', '8'], ['3', '6', '9'], 
    ['1', '5', '9'], ['3', '5', '7']
  ]

  function handleClick(e) {
    if (e.target.innerHTML === 'X' || e.target.innerHTML === 'O' ){
      player = player === 'O' ? 'O' : 'X'
      
    } else{
      e.target.innerHTML = player
      if (e.target.innerHTML === 'X') {
        playerTurn.innerHTML = 'O'
        playerX.push(e.target.id)
        if (winningSolution.map(x => x.every(v => playerX.includes(v))).includes(true)) {
          win = true
          playerX = []
        }
      }
      if (e.target.innerHTML === 'O') {
        playerTurn.innerHTML = 'X'
        playerO.push(e.target.id)
        if (winningSolution.map(x => x.every(v => playerO.includes(v))).includes(true)) {
          win = true
          playerO = []
        }
      }

      player = player === 'O' ? 'X' : 'O'

      if(win === true){
        win = false
        playerWin.innerHTML = e.target.innerHTML 
        endMessage.classList.remove('hidden')
        gameBoard.classList.add('hidden')
        reset.classList.remove('hidden')
        playerText.classList.add('hidden')
      }
    }
  }

  function resetGame(){
    square.innerHTML = ''
    gameBoard.classList.remove('hidden')
    reset.classList.add('hidden')
    endMessage.classList.add('hidden')
    playerText.classList.remove('hidden')


    Array.from(boards.children).forEach(tile => {
      tile.innerHTML = ''
    })
  }

  Array.from(boards.children).forEach(tile => {
    tile.addEventListener('click', handleClick)
  })

  reset.addEventListener('click', resetGame)

  // Keep these Indexes here 
})
