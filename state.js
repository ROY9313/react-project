let counter = 0;

function incrementCounter(){
    counter=counter+1;
    renderState()
}

function renderState(){
    console.log(counter)
}

setInterval(function () {
    incrementCounter();
},1000);