
let count = 0;
let countEl = document.getElementById("count-id");
let saveEl = document.getElementById("prevEntries-id");
let dateEl = document.getElementById("date");
let totalEl = document.getElementById("sumEntries");
let exportEl = document.getElementById("conteiner");

function increment() {
    count += 1
    countEl.innerText = count;
}

// increment();


function decrease() {
    count -= 1
    countEl.innerText = count;
}

// decrease()


function reset() {
    count = 0
    countEl.innerText = count;
}

// reset()


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr;
    countEl.innerText = 0;
    count = 0;
}



// let countTotal = count;

function totalEntries() {
    totalEl.textContent += sum.countStr;
}

// totalEntries()


function resetName() {
    let dropDown = document.getElementById("name");
    dropDown.selectedIndex = 0;
}


function resetDate() {
    dateEl.value = '';
}

function shift() {
    saveEl.textContent = "Previous entries: " + '';
}

function generatePDF() {

    html2pdf()
        .from(exportEl)
        .save();
}

