class Book{
    constructor(name, age , area){
        this.name = name;
        this.age = age;
        this.area = area;
    }
} 

class Display {
    add(book,index) {
        let tableBody = document.getElementById('tableBody');
        let uiString = `<tr>
                        <td class="fw-bold text-dark">${book.name}</td>
                        <td class="fw-bold text-dark">${book.age}</td>
                        <td class="fw-bold text-dark">${book.area}</td>
                         </tr>`;
     tableBody.innerHTML += uiString;
    }
clear() {
    let libraryForm = document.getElementById('libraryForm');
    libraryForm.reset();
}
validate(book) {
    if (book.age< 3 ) {
        return false
    }
    else {
        return true;
    }
}
show(type, displayMessage) {
    let message = document.getElementById('message');
    let boldText;
    if(type==='success'){
        boldText = 'Success';
    }
    else{
        boldText = 'Error!';
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                            <strong>${boldText}:</strong> ${displayMessage}  
                        </div>`;
    setTimeout(function () {
        message.innerHTML = ''
    }, 1000);


}

}

let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit',libraryFormSubmit);

function libraryFormSubmit(a) {
    a.preventDefault();
let name = document.getElementById("name").value;
let age = document.getElementById('age').value;
let area ;
let nasikRoad = document.getElementById('nasikRoad');
let ashokaMarg = document.getElementById('ashokaMarg');
let govindNagar = document.getElementById('govindNagar');

    if (nasikRoad.checked) {
        area = nasikRoad.value;
    }
    else if (ashokaMarg.checked) {
        area = ashokaMarg.value;
    }
    else if (govindNagar.checked) {
        area = govindNagar.value;
    }
//     let tableBody =localStorage.getItem('tableBody');
// //     if(tableBody == null){
// //        tableBodyForm=(tableBody);
// //     }
// //     else{
// //         tableBodyForm = JSON.parse(tableBody);
// //     }
//     var tableBodyForm = JSON.parse(tableBody);
    
//     let myTableForm = {
//         name : name.value,
//         age  : age.value,
//         area : area.value
//     }
//     console.log(myTableForm);
// // // console.log(myTableForm);
// tableBodyForm.push(myTableForm);
// localStorage.setItem("tableBody",JSON.stringify(tableBodyForm));

// showtableBody();

// function showtableBody() {
//    let tableBody = localStorage.getItem('tableBody');
//     // if(tableBody== (tableBody)){
//     //    tableBodyForm=(tableBody);
//     // }
//     // else{
//     //     tableBodyForm = JSON.parse(tableBody);
//     // }
//     let html = "";
//     tableBody.forEach(function (element,index) {
//         html += `<tr>
//                     <td>${book.name}</td>
//                     <td>${book.age}</td>
//                     <td>${book.area}</td>
//                     <td><button type="button" class="btn btn-outline-info">delete</button></td>
//                     </tr>`;
        
//     }); 
//       let tableBodyElm = document.getElementById("tableBody");
  
// }




   let book = new Book(name,age,area);
   
    let display = new Display();
// 
    if (display.validate(book)) {

        display.add(book);
        display.clear();
        display.show('success', 'Your have successfully added your details')
    }
    else {
     
        display.show('danger', 'Fill All Requirements');
    }

    a.preventDefault();
}
// function deleteNote(index) {
//     let tableBody = localStorage.getItem('tableBody');
//     if (tableBody == null) {
//         tableBodyForm = [];
//       } else {
//         tableBodyForm = JSON.parse(tableBody);
//       }
//       tableBodyForm.splice(index,1);
//     localStorage.setItem("tableBody",JSON.stringify(tableBodyForm));
   
// }








