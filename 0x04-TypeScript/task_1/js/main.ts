// Define an interface named Teacher
// This interface will describe the structure of a Teacher object
interface Teacher {
  readonly firstName: string; // readonly means it cannot be changed after initialization
  readonly lastName: string; // readonly means it cannot be changed after initialization
  fullTimeEmployee: boolean; // must always be defined
  yearsOfExperience?: number; // optional property
  location: string; // must always be defined
  [key: string]: any; // allows extra properties not defined above
}

// Example usage of the Teacher interface

// Teacher object with all required properties and an extra property "contract"
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false, // extra property allowed by [key: string]: any
};

// Log the object to see the structure in the console
console.log(teacher3);

// Expected output in the terminal/browser console:
// {
//   firstName: "John",
//   lastName: "Doe",
//   fullTimeEmployee: false,
//   location: "London",
//   contract: false
// }
