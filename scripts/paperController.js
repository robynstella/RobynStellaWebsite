let paper1Button = document.getElementById("paper1Button")
let paper2Button = document.getElementById("paper2Button")
let paper3Button = document.getElementById("paper3Button")
let paper4Button = document.getElementById("paper4Button")

papers = ['paper1','paper2','paper3','paper4']


hideAllPapers()


paper1Button.addEventListener("click", function (){
    changePaper('paper1')
})

paper2Button.addEventListener("click", function (){
    changePaper('paper2')
})

paper3Button.addEventListener("click", function (){
    changePaper('paper3')
})

paper4Button.addEventListener("click", function (){
    changePaper('paper4')
})


function hideAllPapers(){
    papers.forEach(x => {
        document.getElementById(x).style.display = 'none'
    });
    changePaper('paper1')

}

function changePaper(page){
    papers.forEach(x => {
        document.getElementById(x).style.display = 'none'
    });
    document.getElementById(page).style.display = "block"
}
