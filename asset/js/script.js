document.getElementById("resetButton").addEventListener("click", function () {
    document.getElementById("postit").innerHTML = ""
})


document.getElementById("cancelButton").addEventListener("click", function () {

    document.getElementById("titlePostItEntry").value = ""
    document.getElementById("textPostItEntry").value = ""
})

document.getElementById("validateButton").addEventListener("click", function () {

    let title = document.getElementById("titlePostItEntry").value
    let text = document.getElementById("textPostItEntry").value

if(title=="" || text==""){
    alert("Veuillez rentrer un titre et une description")
} else {
    document.getElementById("postit").innerHTML += `<div class="col-lg-3 col-md-6 col-10 card bg-transparent border-white" id="child">
                <div class="card-body">
                    <div class="row justify-content-between">
                        <h5 class="card-title text-white col-10" id="titlePostIt">${title}</h5>
                        <button type="button" class="btn-close bg-danger col-lg-4 col-10 mx-2" aria-label="Close"
                            onclick="closebtn()"></button>
                    </div>
                    <hr class="border border-white border-2 opacity-50">
                    <p class="card-text text-white" id="textPostIt">${text}</p>
                </div>
            </div>`

    document.getElementById("textPostItEntry").value = ""
    document.getElementById("titlePostItEntry").value = ""
}
})

function closebtn(){
    const enfant = document.getElementById("child")
    const parent = document.getElementById("postit")
    parent.removeChild(enfant)

}

