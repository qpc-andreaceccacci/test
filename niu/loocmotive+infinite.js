/*
 ________
|        |
| first  |
|        |  | difftop
|--top---|
|        |
| middle |
|        |
|-bottom-|
|        | | diffbottom
|  last  |
|________|

*/

// const content = document.getElementById("content");
// const last = document.getElementById("last");

document.addEventListener("DOMContentLoaded", function(event) { 

const middle = document.querySelector('.middle')

const container = document.querySelector('[data-scroll-container]')

const mtop = middle.getBoundingClientRect().height;
const bottom = middle.getBoundingClientRect().height * 2;

var scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    direction: 'vertical',
    getSpeed: true,
    initPosition: {x: 0, y: mtop}
});


function checkPosition()
{

    const diffTop = container.getBoundingClientRect().top - middle.getBoundingClientRect().top;
    const diffBottom = container.getBoundingClientRect().top - middle.getBoundingClientRect().bottom;

    let target = undefined;
    let delta = undefined;

    if (diffTop < 0) 
    {
        console.log("go bottom")

        target = bottom;
        delta = mtop - scroll.scroll.instance.delta.y;
    }

    if (diffBottom > 0) 
    {
        console.log("go top")
        target = mtop;
        delta = bottom - scroll.scroll.instance.delta.y;
    }

    if (target)
    {
        scroll.stop();
        scroll.destroy();
        
        scroll = new LocomotiveScroll({
            el: document.querySelector('[data-scroll-container]'),
            smooth: true,
            direction: 'vertical',
            initPosition: {x: 0, y: target},
            getSpeed: true
        });

        scroll.scrollTo(target - delta, {duration: 10})
    }

    return;
}

function loop()
{
    checkPosition();
    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);
  
  
});