const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

//set click time set to 0
let clickTime = 0
let timesClicked = 0
//create double click event. easier way is put dbclick
loveMe.addEventListener('click', (e)=>{
    console.log(123)
    if(clickTime === 0){
        //set to click time to new Data getTime method
        clickTime = new Date().getTime()
        // console.log(clickTime)
        //else = if it is not equal to 0
    }else {
        //get current time - clicktime is greater than 800 miliseconds
        if(new Date().getTime() - clickTime < 800){
            console.log(123)
            //function createHeart event and set the clickTime to 0
            createHeart(e)
            clickTime = 0
        }else {
             clickTime = new Date().getTime()
        }
    }
})
//define createHeart function
const createHeart = (e) => {
    //build heart icon - create i element and couple classes using classList.add
    const heart= document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    //get position of x and y by using clientX and Y
    const x = e.clientX
    const y = e.clientY
    console.log(x,y) //find out position
    //set offset left and top
    const leftOffset = e.target.offsetLeft
    const topOffset = e.target.offsetTop
    //whole viewport - offset values
    const xInside = x - leftOffset
    const yInside = y - topOffset
    //get position value within image
    console.log(xInside, yInside)
    //set heart style
    heart.style.top = `${yInside}px`
    heart.style.left = `${xInside}px`
    //show heart
    loveMe.appendChild(heart)
    //increment times click
    times.innerHTML = ++timesClicked
    //use setTimeout function to remove heart class
    setTimeout(() => heart.remove(), 1000)
}