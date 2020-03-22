const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

//function to add options manually
function showTextNode(textNodeIndex) {
  const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
  textElement.innerText = textNode.text
  while (optionButtonsElement.firstChild) {
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
  }

  textNode.options.forEach(option => {
    if (showOption(option)) {
      const button= document.createElement('button')
      button.innerText = option.text
      button.classList.add('btn')
      button.addEventListener('click', () => selectOption(option))
      optionButtonsElement.appendChild(button)
    }
  })
}

//function to show options users have
function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

//selection
function selectOption(option){
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
  playSound()
}

/*
ACTUAL GAME

id = path
text = the question/scenario
options = the answers for user
state = data

*/
const textNodes = [
  {
    id: 1,
    text: 'Whalf',
    options: [
      {
        text: 'Start',
        setState: {start: true},
        nextText: 2
      }
    ]
  },


  {
    id: 2,
    text: 'There\'s an apple on the floor',
    options: [
      {
        text: 'You eat it',
        requiredState: (currentState) => currentState.start,
        setState: {start: false},
        nextText: 3
      },
      {
        text: 'You throw it',
        nextText: 3
      },
      {
        text: 'Shove it up your ass',
        setState: {ecstasy: true},
        nextText: 3
      },
    ]
  },


    {
        id: 3,
        text: 'You feel something...',
        options: [
          {
            text: 'It\'s because Junmin licked the apple',
            setState: {immoral: true},
            nextText: 4
          },
          {
            text: 'You want to shove more up your ass',
            requiredState: (currentState) => currentState.ecstasy,
            nextText: 4
          },
          {
            text: 'Just ignore it',
            nextText: 4
          },
        ]
    },

    {
        id: 4,
        text: 'Your stomache growls',
        options: [
          {
            text: 'You run to toilet',
            requiredState: (currentState) => currentState.immoral,
            nextText: 5
          },
          {
            text: 'You start mast*rbating',
            requiredState: (currentState) => currentState.ecstasy,
            setState: {dopamine:true},
            nextText: 5
          },
          {
            text: 'Fuck it, keep ignoring',
            nextText: 5
          },
        ]
    },

]

startGame()
