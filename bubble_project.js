let bubblecount = 0;

document.body.addEventListener('click', (event)=>{

    const posX = event.clientX;
    const posY = event.clientY;

    const circle = document.createElement('div');
    circle.className = 'circle';
    document.body.appendChild(circle);

    //random bg color (max-hex-code = 16777215, converted to base 16 then string then add zeros if length<6)
    const color1 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    const color2 = `#${Math.floor(Math.random()*16777215).toString(16).padStart(6, '0')}`;
    circle.style.backgroundImage = `linear-gradient(to right, ${color2} , ${color1})`;

    //setting position  (problem is that it starts below where clicked, we want to center it to click coordinate)
    // circle.style.left = `${posX}px`;
    // circle.style.top = `${posY}px`;
    //fixing position to start circle with center at clicked-coordinate (just subtracted 25)
    circle.style.left = `${posX-25}px`;
    circle.style.top = `${posY-25}px`;

    setTimeout(()=>{
        circle.remove();
    }, 5000) //deletes the <div> circle after 5 seconds

    //increment bubble count
    bubblecount++;
    document.getElementById('count').textContent = " Bubble Count: "+ bubblecount;

    let bubb = document.getElementById('count')

    if (bubblecount > 40) {
        bubb.style.color = "red";
    } else if (bubblecount > 20) {
        bubb.style.color = "blue";
    } else if (bubblecount > 10) {
        bubb.style.color = "violet";
    }

})
