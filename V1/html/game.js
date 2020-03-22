const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state = {}

function startGame() {
  state = {}
  showTextNode(1)
}

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

function showOption(option) {
  return option.requiredState == null || option.requiredState(state)
}

function selectOption(option){
  const nextTextNodeId = option.nextText
  state = Object.assign(state, option.setState)
  showTextNode(nextTextNodeId)
}

const textNodes = [
  {
    id: 1,
    text: 'Whalf',
    options: [
      {
        text: 'Start',
        setState: { item: true},
        nextText: 2
      },
      {
        text:'Settings',
        nextText: 2
      }
    ]
  },
  {
    id: 2,
    text: 'first scene',
    options: [
      {
        text: 'option1',
        requiredState: (currentState) => currentState.item,
        setState: {item: false, item2: true},
        nextText: 3
      },
      {
        text: 'option2',
        requiredState: (currentState) => currentState.item,
        setState: {item: false, item3: true},
        nextText: 3
      },
      {
        text: 'option3',
        nextText: 3
      },

    ]
  }
]

startGame()
