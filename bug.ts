function greet(name: string | null): string {
  if (name === null) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(null)); // Output: Hello, world!
console.log(greet("Alice")); // Output: Hello, Alice!

// The following line causes a compilation error.
console.log(greet(undefined)); //Error: Argument of type 'undefined' is not assignable to parameter of type 'string | null'.