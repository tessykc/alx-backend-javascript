// main.ts

/// <reference path="./crud.d.ts" />

import { RowID, RowElement } from './interface';
import * as CRUD from 'crud'; // Assuming 'crud' is the actual module name

// Placeholder function to generate a new row ID
function getNewRowID(): RowID {
    // Replace this logic with your actual implementation
    return Math.floor(Math.random() * 1000);
}

const row: RowElement = {
    firstName: 'Guillaume',
    lastName: 'Salva',
};

// Assuming you have an actual function to get the new row ID
const newRowID: RowID = getNewRowID(); // Replace with the actual logic

// Update the row with an age field
const updatedRow: RowElement = { ...row, age: 23 };

// Call the CRUD functions
CRUD.insertRow(row);
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(125); // Replace with the actual row ID
