const bars = document.querySelectorAll(".bars")
var barDays = [...bars]
console.log(barDays)

barDays.forEach(bar => bar.addEventListener("click", ()=>{
    bar.style.backgroundColor = "black"
}))