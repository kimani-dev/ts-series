// OOP
class User {
  // access modifiers (abstraction)
  public name: string;
  public age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  sayHello(): void {
    console.log(`${this.name} says hello`);
  }
}

const student = new User("Kimani", 16);
const teacher = new User("Bill Gates", 10);
console.log(student.name); // Kimani
console.log(teacher.name); // Bill Gates
