"use strict";
// task_3/js/main.ts
Object.defineProperty(exports, "__esModule", { value: true });
var CRUD = require("./crud");
var row = {
    firstName: 'Guillaume',
    lastName: 'Salva'
};
var newRowID = CRUD.insertRow(row);
console.log(newRowID); // The ID returned from insertRow
var updatedRow = {
    firstName: 'Guillaume',
    lastName: 'Salva',
    age: 23
};
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
