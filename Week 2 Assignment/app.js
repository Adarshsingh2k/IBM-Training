function dtStr() {
    let dtAr = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return dtAr[curDt.getMonth()];
}

let curDt = new Date();
let time = document.createElement("span");
time.classList.add("tSp");
time.textContent = curDt.getDate() + "'" + dtStr() + " Time: " + curDt.getHours() + ":" + curDt.getMinutes();
document.querySelector(".time").appendChild(time);

// form data
let task = document.getElementById("task");


// console.log(del);

document.getElementById("add").addEventListener('click', (e) => {
    e.preventDefault();
    console.log(task.value);
    let liPrt = document.createElement("div");
    liPrt.setAttribute("id", "liPrt");

    let ul = document.getElementById("ul");

    // const crtli = document.createElement("li");


    const liIn=document.createElement("input");
    liIn.classList.add("text");
    liIn.type="text";
    liIn.value=task.value;
    liIn.setAttribute("readonly","readonly");
    liIn.setAttribute("placeholder","Everyday is a Vacation");


    let del = document.createElement("button");
    del.setAttribute("class", "delBtn");
    del.setAttribute("id", "delBtn");

    del.textContent = "Delete";
    console.log(del);
    // del.classList.add("del-show");
    // crtli.appendChild(del);
    // crtli.textContent = liIn.value;
    //crtli.setAttribute('readonly','readonly');

    let edit=document.createElement("button");
    edit.setAttribute('class',"editBtn");
    edit.textContent="Edit";

    liPrt.appendChild(liIn);
    liPrt.appendChild(del);
    liPrt.appendChild(edit);
    console.log(liPrt);

    ul.appendChild(liPrt);



    // document.getElementById("delBtn").addEventListener("click", () => {
    //     // ul.removeChild(liPrt);


    // });

    var close = document.getElementsByClassName("delBtn");
    var i;
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            // div.style.display = "none";
            var pDiv = div.parentElement;
            pDiv.removeChild(div);
        }
    }

    edit.addEventListener("click",(e)=>{
        if(edit.textContent.toLowerCase()=='edit'){
            edit.textContent='Save';
            liIn.removeAttribute("readonly");
            liIn.focus();
        }
        else{
            edit.textContent="Edit";
            liIn.setAttribute("readonly","readonly");
        }
    });

});

