# Activity: Creating a Flexible Calculator with TypeScript Functions

## Instructions:

You are tasked with creating a more advanced calculator that not only handles basic arithmetic but also performs additional operations based on user-defined rules. You will use TypeScript’s advanced function features, including optional parameters, default parameters, function overloads, and strict type annotations to ensure type safety.

## Steps:

### Create a New File:

Create a new file called advancedCalculator.ts.

### Basic Calculator Functions:

Start by writing functions for basic calculator operations: addition, subtraction, multiplication, and division.

### Each function should:

-Accept two parameters of type number.<br>
-Return a number (or null if the operation is invalid, like division by zero).<br>
-Use default parameters to provide default values for the second operand.<br>

## Implement the Following Operations with Function Overloads:

### Calculate function:

-Should accept either a number or an array of numbers.<br>
-If it receives a single number, it should return its square.<br>
-If it receives an array of numbers, it should return the sum of all numbers.<br>
-Use optional parameters to specify if the sum should be calculated as an integer or floating-point number.<br>
Overload Example Template

### Function to handle user-defined rules:

-Accepts a number and a callback function as parameters.<br>
-The callback function should take a number as an input and return a number.<br>
-Use this function to implement a rule that rounds numbers to the nearest tenth or hundredth.<br>

### Error Handling:

-Division by zero should return null.<br>
-Invalid inputs (like passing a string instead of a number) should trigger TypeScript compile-time errors.<br>

### Compile and Test Your Code:

-Create a testCalculator.ts file to test each function.<br>
-Use sample input data to verify that your calculator behaves correctly under different scenarios.

## Critical Thinking Questions

### How does TypeScript’s type system help catch errors at compile time when building a complex calculator with multiple functions?

### What benefits do function overloads provide when designing flexible functions? Can you think of other scenarios where overloads might be beneficial?

### How does using callback functions promote the reusability of code in this context? What other advanced JavaScript concepts could enhance this calculator?
