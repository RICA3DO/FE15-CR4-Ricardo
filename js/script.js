var arr = JSON.parse(array);
for (let value of arr) {
    document.getElementById("Tasks").innerHTML += `
    <div class = "card m-4" style="width: 22rem;">
    <div class = "card-body">
    <h5 class = "card-title">${value.taskName}</h5>
    <img src = "${value.image}" class = "card-img-top" alt="${value.taskName}">
    <h6 class = "card-title">${value.time}</h6>
    <p class = "card-text">${value.description}</p>
    <img src = "${value.danger}" class = "card-img-bottom-medium" style = "width: 30px;>
    <h6 class = "card-text">Priority Level:</h6>
    <button style = "height: 30px;" id = "buttoncolor-${value.info}" onclick = "prio('${value.info}')">
    <p id = "number-${value.info}"> ${value.importance}</p>
    </button>
  </div>
 </div>
    `;
}
function prio (param) {
    var res = "number-" + param;
    var info_val = "buttoncolor-" + param;
    var resulting = "number-" + param;
    var value = document.getElementById(res).innerHTML
    value++;
    document.getElementById(res).innerHTML = value;

    if (value <= 1) {
        document.getElementById(info_val).style.backgroundColor = "green";
    } 
    else if (value > 1 & value <= 3) {
        document.getElementById(info_val).style.backgroundColor = "yellow";
    } 
    else if (value > 3 & value <= 4) {
        document.getElementById(info_val).style.backgroundColor = "red";
        document.getElementById(info_val).style.color = "white";
    } 
    else if (value === 5) {
        document.getElementById(info_val).disabled = true;
    }
}