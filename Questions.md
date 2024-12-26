Here is a prompt you can use for the exam questions:

---

**Object-Oriented Programming (OOP) in JavaScript - Exam Instructions**

- **Duration:** 1 Hour
- **Sections:**
  - Short Answer Questions (Answer all questions concisely)
  - Practical Question (Develop and demonstrate the required system)

---

**Short Answer Questions**
Answer the following:
1. Explain the purpose of the constructor method in a JavaScript class.
2. Explain the role of `super` in JavaScript classes with an example.
3. How does JavaScript support polymorphism? Provide an example to demonstrate it.
4. What is the difference between public and private fields in a JavaScript class?
5. Explain the concept of inheritance in JavaScript. Create an example showing a base class and a derived class, and demonstrate method overriding.

---

**Practical Question**
Design a system for a **Vehicle Management Application** using Object-Oriented Programming (OOP) concepts in JavaScript. The system must demonstrate the following:

**Requirements:**
- **Base Class:** Vehicle
  - Properties:
    - `make` (string): The manufacturer of the vehicle.
    - `model` (string): The model of the vehicle.
  - **Constructor:** Initialize `make` and `model`.
  - **Abstract Method:**
    - `getDetails()`: An abstract method that must be implemented in derived classes.

- **Derived Classes:**
  - **Car Class:**
    - Additional Properties:
      - `seatingCapacity` (number): Number of seats in the car.
      - `fuelType` (string): Type of fuel (e.g., petrol, diesel).
    - Constructor: Must call the Vehicle class constructor and initialize additional properties.
    - Override the `getDetails()` method to include all car details.

  - **Truck Class:**
    - Additional Properties:
      - `payloadCapacity` (number): Maximum weight it can carry in tons.
      - `wheels` (number): Number of wheels.
    - Constructor: Must call the Vehicle class constructor and initialize additional properties.
    - Override the `getDetails()` method to include all truck details.

**Object Creation:**
- Create one object of `Car` and one object of `Truck`.
- Display their details using the `getDetails()` method.

**Additional Requirements:**
- Ensure the `Vehicle` class cannot be instantiated directly (abstract class behavior).
- Use `super()` to initialize base class properties.

---

