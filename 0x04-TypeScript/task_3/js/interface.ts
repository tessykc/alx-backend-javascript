// interface.ts

// Define the RowID type
type RowID = number;

// Define the RowElement interface
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number; // The "?" indicates that the 'age' field is optional
}

// Export the types and interfaces
export { RowID, RowElement };

