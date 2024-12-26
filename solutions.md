# Object-Oriented Programming (OOP) in JavaScript - Exam Questions

## **Short Answer Questions**

### **1. Explain the purpose of the constructor method in a JavaScript class.**
The constructor method in a JavaScript class is a special method used for creating and initializing objects of that class. It allows developers to pass arguments to set up initial values for object properties when the object is created. The `constructor` is automatically called when an object instance is created using the `new` keyword.

---

### **2. Explain the role of `super` in JavaScript classes with an example.**
The `super` keyword is used to call the constructor or methods of a parent class from a derived class. It is necessary to use `super()` when extending a class to ensure the parent class's constructor is properly initialized before using `this` in the derived class.

**Example:**
```javascript
class Parent {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return `Hello, ${this.name}!`;
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name); // Calls the Parent class constructor
    this.age = age;
  }
  greet() {
    return `${super.greet()} You are ${this.age} years old.`; // Calls the Parent class greet method
  }
}

const child = new Child("Alice", 10);
console.log(child.greet());
```

---

### **3. How does JavaScript support polymorphism? Provide an example to demonstrate it.**
JavaScript supports polymorphism by allowing methods in derived classes to override methods in the base class. This enables objects of different classes to be treated uniformly based on shared behaviors while having their specific implementations.

**Example:**
```javascript
class Animal {
  speak() {
    return "The animal makes a sound.";
  }
}

class Dog extends Animal {
  speak() {
    return "The dog barks.";
  }
}

class Cat extends Animal {
  speak() {
    return "The cat meows.";
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach((animal) => console.log(animal.speak()));
```

---

### **4. What is the difference between public and private fields in a JavaScript class?**
- **Public Fields**: Accessible directly from outside the class using an object instance. Public fields are declared normally without any special prefix.
  ```javascript
  class Example {
    publicField = "I am public";
  }
  const example = new Example();
  console.log(example.publicField); // Accessible
  ```

- **Private Fields**: Accessible only within the class and are declared using the `#` prefix. Private fields cannot be accessed or modified outside the class.
  ```javascript
  class Example {
    #privateField = "I am private";

    getPrivateField() {
      return this.#privateField;
    }
  }
  const example = new Example();
  console.log(example.getPrivateField()); // Accessible via method
  console.log(example.#privateField); // Error
  ```

---

### **5. Explain the concept of inheritance in JavaScript. Create an example showing a base class and a derived class, and demonstrate method overriding.**
Inheritance in JavaScript allows a class (child/derived class) to inherit properties and methods from another class (parent/base class). This helps in code reuse and establishes a parent-child relationship between classes.

**Example:**
```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}

class Dog extends Animal {
  speak() {
    return `${this.name} barks.`; // Overriding the base class method
  }
}

const myDog = new Dog("Buddy");
console.log(myDog.speak());
```

---

## **Practical Question**

### **Design a Vehicle Management System**

#### **Requirements:**

1. **Base Class: `Vehicle`**
   - **Properties:**
     - `make` (string): The manufacturer of the vehicle.
     - `model` (string): The model of the vehicle.
   - **Constructor:** Initialize `make` and `model`.
   - **Abstract Method:**
     - `getDetails()`: An abstract method that must be implemented in derived classes.

2. **Derived Classes:**

   - **`Car` Class:**
     - **Additional Properties:**
       - `seatingCapacity` (number): Number of seats in the car.
       - `fuelType` (string): Type of fuel (e.g., petrol, diesel).
     - **Constructor:** Must call the `Vehicle` class constructor and initialize additional properties.
     - **Override the `getDetails()` method:** Include all car details.

   - **`Truck` Class:**
     - **Additional Properties:**
       - `payloadCapacity` (number): Maximum weight it can carry in tons.
       - `wheels` (number): Number of wheels.
     - **Constructor:** Must call the `Vehicle` class constructor and initialize additional properties.
     - **Override the `getDetails()` method:** Include all truck details.

3. **Object Creation:**
   - Create one object of `Car` and one object of `Truck`.
   - Display their details using the `getDetails()` method.

4. **Additional Requirements:**
   - **Abstract Class Behavior:** Ensure `Vehicle` cannot be instantiated directly.
   - Use of `super()` to initialize base class properties.

#### **Solution Example:**
```javascript
class Vehicle {
  constructor(make, model) {
    if (this.constructor === Vehicle) {
      throw new Error("Vehicle is an abstract class and cannot be instantiated directly.");
    }
    this.make = make;
    this.model = model;
  }

  getDetails() {
    throw new Error("Abstract method 'getDetails()' must be implemented in derived classes.");
  }
}

class Car extends Vehicle {
  constructor(make, model, seatingCapacity, fuelType) {
    super(make, model);
    this.seatingCapacity = seatingCapacity;
    this.fuelType = fuelType;
  }

  getDetails() {
    return `Car: ${this.make} ${this.model}, Seats: ${this.seatingCapacity}, Fuel: ${this.fuelType}`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, payloadCapacity, wheels) {
    super(make, model);
    this.payloadCapacity = payloadCapacity;
    this.wheels = wheels;
  }

  getDetails() {
    return `Truck: ${this.make} ${this.model}, Payload: ${this.payloadCapacity} tons, Wheels: ${this.wheels}`;
  }
}

const myCar = new Car("Toyota", "Camry", 5, "Petrol");
const myTruck = new Truck("Volvo", "FH", 20, 18);

console.log(myCar.getDetails());
console.log(myTruck.getDetails());
```
