interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

// create two student objects

const student1: Student = {
    firstName: "John",
    lastName: "Doe",
    age: 21,
    location: "New York",
};

const student2: Student = {
    firstName: "Jane",
    lastName: "Smith",
    age: 22,
    location: "Los Angeles",
};

//add them to an array

const studentsList: Student[] = [student1, student2];

//render a table

const table = document.createElement("table");
const tableHead = document.createElement("thead");
const headerRow = document.createElement("tr");

const nameHeader = document.createElement("th");
nameHeader.textContent = "First Name";
const locationHeader = document.createElement("th");
locationHeader.textContent = "Location";

headerRow.appendChild(nameHeader);
headerRow.appendChild(locationHeader);
tableHead.appendChild(headerRow);

const tableBody = document.createElement("tbody");

studentsList.forEach((student) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;

    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;

    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tableBody.appendChild(row);
});

table.appendChild(tableHead);
table.appendChild(tableBody);
if (document.body) {
    document.body.appendChild(table);
}