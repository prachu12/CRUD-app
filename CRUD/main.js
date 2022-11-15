var row = null;


// function add(e){
//   event.preventDefault();
//   var data = readData();
//   /*if(row==null){
//     insertNewData(formData);
//   }else{*/
//     updateRecord(data);
  
//   cancelForm();
// }

// function readData(){
//     var formData = {};
//     formData["name"] = document.getElementById("name").value
//     formData["date"] = document.getElementById("date").value
//     formData["city"] = document.getElementById("city").value
//     return formData;
// }
const search = () => {
    let filter = document.getElementById("search").value.toUpperCase();
    let myTable = document.getElementById("storeList");
    let tr = myTable.getElementsByTagName("tr");
    for(var i=0;i<tr.length;i++){
        let td = tr[i].getElementsByTagName("td")[0];
        if(td){
            let textValue = td.textContent || td.innerHTML;
            if(textValue.toUpperCase().indexOf(filter)>-1){
                tr[i].style.display = " ";
            }else{
                tr[i].style.display = "none";
            }
        }
    }
}
function insertNewData(){
    var dataEntered = insertNewDat();
    var read = readLocal(dataEntered);

    if(row == null){
        insert(read);
        // msg.innerHTML="data inserted";
        cancelForm();
    }else{
        updateRecord();
        // msg.innerHTML="data updated";
        cancelForm();
    }
   
    
}
function insertNewDat(){
    //create
    var inputName = document.getElementById("name").value;
    var inputDate = document.getElementById("date").value;
    var inputCity = document.getElementById("city").value;
    
    var arr = [inputName,inputDate,inputCity];
    if(arr.includes(" ")){
        return false;
    }else{
        return arr;
    }
    cancelForm();
    // if(regexp!=RegExp){
    //     regexp = new RegExp(regexp);
    // }else if(regexp.global){
    //     regexp.lastIndex=0;
    // }
    //store data
    // var data={};
    // data["name"]=inputName;
    // data["date"]=inputDate;
    // data["city"]=inputCity;

    //insert data in table
    // cell1 = newRow.insertCell(0);
    // cell1.innerHTML = data.name;
    // cell1 =  newRow.insertCell(1);
    // cell1.innerHTML = data.date;
    // cell1 = newRow.insertCell(2);
    // cell1.innerHTML = data.city;
    // cell1 = 
    // newRow.insertCell  (3);
    // cell1.innerHTML = `<button onClick="onEdit(this)" class="edit">Edit</button>
    // <button onClick="onDelete(this)">Delete</button>`

    //clear data in form
    // document.getElementById("name").value = " ";
    // document.getElementById("date").value = " ";
    // document.getElementById("city").value = " ";


}
function validate(){
    var user = document.getElementById("")
}


function readLocal(dataEntered){
    //read nd store from local storage
    var n = localStorage.setItem("Name",dataEntered[0]);
    var d = localStorage.setItem("Date",dataEntered[1]);
    var c = localStorage.setItem("City",dataEntered[2]);
    
    
    var n1 = localStorage.getItem("Name",n);
    var d1 = localStorage.getItem("Date",d);
    var c1 = localStorage.getItem("City",c);
    var arr = [n1,d1,c1];
    return arr;
}
function insert(read){
    var table = document.getElementById("storeList").getElementsByTagName("tbody")[0];
    var row = table.insertRow();
     row.insertCell(0).innerHTML = read[0];
     row.insertCell(1).innerHTML = read[1];
     row.insertCell(2).innerHTML = read[2];
     row.insertCell(3).innerHTML = `<button onClick="onEdit(this)"><a href="#modal">Edit</a></button>
      <button onClick="onDelete(this)">Delete</button>`
}

function onEdit(td){
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("date").value = row.cells[1].innerHTML;
    document.getElementById("city").value = row.cells[2].innerHTML;
    
}

function updateRecord(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("date").value;
    row.cells[2].innerHTML = document.getElementById("city").value;
    row = null;
}

function onDelete(td){
    var ans = confirm("do u want to delete??");
    if(ans == true){
        row = td.parentElement.parentElement;
        document.getElementById("storeList").deleteRow(row.rowIndex);
    }
    
}

function cancelForm(){
    document.getElementById("name").value = " ";
    document.getElementById("date").value = " ";
    document.getElementById("city").value = " ";
    alert("data inserted");
    // row = null;
}


