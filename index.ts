// Generics

//API
// expected response from an API
interface APIResponse<T> {
  data: T;
  statusCode: number;
  error: object | null;
}

// /users
interface User {
  name: string;
  email: string;
}

const userResponse: APIResponse<User[]> = {
  data: [{ name: "Klara Kimani", email: "klara@kimani.com" }],
  statusCode: 200,
  error: null,
};

// /order
interface Order {
  userID: number;
  meal: string;
}
const orderResponse: APIResponse<Order[]> = {
  data: [{ userID: 32, meal: "chicken tikka pizza" }],
  statusCode: 200,
  error: null,
};
