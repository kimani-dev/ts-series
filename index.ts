// Introduction to Typescript
// primitive types
let myName: string = "Kimani";
let age: number = 53;
let isMarried: boolean = false;

// reference types
let names: number[] = [1, 2, 3];
let person: {
  name: string;
  location: string;
} = {
  name: "Kimani",
  location: "TRM",
};

let amount: number | string = 2000;

let something: any = null;
something = 23;

let numstrings: (number | string | boolean)[] = [1, 2, 3, "kimani", false];

interface Person {
  name: string;
  age: number;
  location: string;
}

type User = {
  username: string;
  email: string;
};

const user: Person = {
  name: "David Kimani",
  age: 53,
  location: "Westlands",
};

const admin: User = {
  email: "soupnazi",
  username: "soupnazi@gmail.com",
};

// inherit types and optional properties
interface SuperAdmin extends Person {
  phone?: string;
}

const superAdmin: SuperAdmin = {
  name: "Klara Njeri",
  age: 53,
  location: "Ushago",
};

// an array of a certain type
const users: User[] = [{ email: "user1@gmail.com", username: "user1" }];
users.push(admin);

// typing functions
function add(x: number, y: number): number {
  return x + y;
}

add(2, 3);

function fullName(first: string, last: string): string {
  return `${first} ${last}`;
}

fullName("Klara", "Njeri");

function changeEmail(): User {
  admin.email = "change.admin@gmail.com";
  return admin;
}
