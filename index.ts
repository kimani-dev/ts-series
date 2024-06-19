// OOP
class User {
  // access modifiers (abstraction) - public, private, protected
  public name: string;
  private age: number;
  protected location: string;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public sayHello(): void {
    console.log(`${this.name} says hello`);
  }
}

// inheritance
class SuperAdmin extends User {
  public rank: string;

  monitorSystem() {
    console.log("Monitoring the system...");
  }

  constructor(name: string, age: number, rank: string) {
    super(name, age);
    this.rank = rank;
  }
}

const admin: SuperAdmin = new SuperAdmin("Klara Kimani", 52, "Management");

const fullName: String = new String(12344);
const age: Number = new Number(2344);
const isLoggedIn: Boolean = new Boolean(false);
const date = new Date();

console.log(date.getFullYear()); // 2024

function add() {
  return 1 + 2;
}

// shorter way of writing huge classes
class Car {
  static something: string = "No idea";

  constructor(
    public readonly color: string,
    public model: string,
    public doors: number,
    public yearOfManufacture: number
  ) {}

  public move() {
    console.log("vroooom!");
  }

  public static fetchAll(): Car[] {
    return [] as Car[];
  }
}

const mercedes = new Car("Light Gray", "E-250", 4, 2019);
const xx: string = Car.something;
const cars: Car[] = Car.fetchAll();

// example of a static method usage
let salary: number = 0;
const salaryString = "190000";
salary = Number.parseInt(salaryString);

// interfaces
interface Person {
  name: string;
  login: () => number;
}

class Driver implements Person {
  constructor(public name: string) {}

  public login() {
    return 19;
  }
}
