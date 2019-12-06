var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nmPegawai"] = document.getElementById("nmPegawai").value;
    formData["hariMsk"] = document.getElementById("hariMsk").value;
    formData["OT"] = document.getElementById("OT").value;
    formData["sakit"] = document.getElementById("sakit").value;
    formData["cutiThn"] = document.getElementById("cutiThn").value;
    formData["ptgGJ"] = document.getElementById("ptgGJ").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nmPegawai;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.hariMsk;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.OT;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.sakit;
    
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.cutiThn;
    
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.ptgGJ;
    
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("nmPegawai").value = "";
    document.getElementById("hariMsk").value = "";
    document.getElementById("OT").value = "";
    document.getElementById("sakit").value = "";
    document.getElementById("cutiThn").value = "";
    document.getElementById("ptgGJ").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nmPegawai").value = selectedRow.cells[0].innerHTML;
    document.getElementById("hariMsk").value = selectedRow.cells[1].innerHTML;
    document.getElementById("OT").value = selectedRow.cells[2].innerHTML;
    document.getElementById("sakit").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cutiThn").value = selectedRow.cells[4].innerHTML;
    document.getElementById("ptgGJ").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nmPegawai;
    selectedRow.cells[1].innerHTML = formData.hariMsk;
    selectedRow.cells[2].innerHTML = formData.OT;
    selectedRow.cells[3].innerHTML = formData.sakit;
    selectedRow.cells[4].innerHTML = formData.cutiThn;
    selectedRow.cells[5].innerHTML = formData.ptgGJ;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nmPegawai").value == "") {
        isValid = false;
        document.getElementById("nmPegawaiValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("nmPegawaiValidationError").classList.contains("hide"))
            document.getElementById("nmPegawaiValidationError").classList.add("hide");
    }
    return isValid;
}