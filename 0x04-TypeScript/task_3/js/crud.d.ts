// crud.d.ts

// Import the necessary types from 'interface.ts'
import { RowID, RowElement } from './interface';

// Declare the CRUD functions
declare module 'crud' {
    /**
     * Inserts a row into the database.
     *
     * @param row The row data to insert.
     */
    export function insertRow(row: RowElement): void;

    /**
     * Updates an existing row in the database.
     *
     * @param id The ID of the row to update.
     * @param updatedRow The updated row data.
     */
    export function updateRow(id: RowID, updatedRow: RowElement): void;

    /**
     * Deletes a row from the database.
     *
     * @param id The ID of the row to delete.
     */
    export function deleteRow(id: RowID): void;
}