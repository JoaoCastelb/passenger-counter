let count=0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")


function increment() {
    count += 1
    countEl.textContent = count
    
    
}



function save(){
    //let simp = saveEl.innerText
    //console.log(simp)
    //simp guarda a mensagem escrita em HTML


    let countStr = count + " - "
    saveEl.textContent+=countStr

    count=0;
    countEl.textContent = count

}




