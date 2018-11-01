window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");

    document.querySelector("#start").classList.remove("hide");
    document.querySelector("#play").classList.add("pulse");
    document.querySelector("#play").addEventListener("click", hideStart);

}


function hideStart() {
    console.log("hide start");
    document.querySelector("#play").removeEventListener("click", hideStart);

    document.querySelector("#play").classList.remove("pulse");
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").addEventListener("animationend", startGame);
}


function startGame() {
    console.log("start game");

    document.querySelector("#start").removeEventListener("animationend", startGame);
    document.querySelector("#start").classList.add("fade_out");

    document.querySelector("#start").classList.add("hide");

    document.querySelector("#paraply").addEventListener("click", clickGood);
    document.querySelector("#paraply1").addEventListener("click", clickGood);
    document.querySelector("#paraply2").addEventListener("click", clickGood);
    document.querySelector("#paraply3").addEventListener("click", clickGood);
    document.querySelector("#pude").addEventListener("click", clickGood);
    document.querySelector("#pude1").addEventListener("click", clickGood);
    document.querySelector("#pude2").addEventListener("click", clickGood);
    document.querySelector("#pude3").addEventListener("click", clickGood);
    document.querySelector("#tordensky").addEventListener("click", clickBad);
    document.querySelector("#tordensky1").addEventListener("click", clickBad);
    document.querySelector("#tordensky2").addEventListener("click", clickBad);

}

//en variabel med et tal
let score = 0;

function pageLoaded() {
    console.log(loaded);

    document.querySelector("#score").innerHTML = score;
}

function clickGood() {
    console.log("good");

    score++;
    console.log(score);

    document.querySelector("#score").innerHTML = score;

    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click, clickGood");
}

function clickBad() {
    console.log("bad");

    score--;
    console.log(score);

    document.querySelector("#score").innerHTML = score;
    console.log(this);
    this.classList.add("hide");
    this.removeEventListener("click, clickBad");
}
