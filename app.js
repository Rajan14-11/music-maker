window.addEventListener('load',()=>{
    const pads = document.querySelectorAll('.pads div')
    const sounds = document.querySelectorAll('.sound')
    const visuals = document.querySelector('.visuals')
    let colors = ["rgb(41, 206, 49)",
        "darkkhaki",
        "lightcoral",
        "lightgoldenrodyellow",
        "lightseagreen"
    ]

    pads.forEach(function(pad,index){
        pad.addEventListener('click',()=>{
            sounds[index].currentTime = 0
            sounds[index].play();
            createbubbles(index)
        })
    })


     let createbubbles = (index)=>{
      let bubble = document.createElement('div')
      visuals.appendChild(bubble);
      bubble.style.backgroundColor = colors[index];
      bubble.style.animation = 'jump 1s ease'
      bubble.addEventListener('animationend',()=>{
          visuals.removeChild(bubble)
      })
    }
})