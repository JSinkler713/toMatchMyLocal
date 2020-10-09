console.log('check check, mic check')


// make a new Audio Element
//
const mary = new Audio('./assets/Mary.wav')

// on the event use the play() method
const playSound = ()=> {
  mary.play()
}

// tie it to an event listener
document.querySelector('button').addEventListener('click', playSound)

