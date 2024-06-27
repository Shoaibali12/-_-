let txtf = document.querySelector("#txt");
let ulist = document.querySelector("#list");

let add = document.querySelector("#addbtn");

add.onclick = adding;
function adding() {
  let task = txtf.value;
  if (task == "") {
    alert("please write something");
  } else {
    let li = document.createElement("li");

    let del = document.createElement("button");
    del.className = "delete";
    del.textContent = "Delete";
    li.textContent = task;
    let div = document.createElement("div");
    div.className = "Con";
    div.appendChild(li);
    div.appendChild(del);
    ulist.appendChild(div);
    txtf.value = "";
  }
}
