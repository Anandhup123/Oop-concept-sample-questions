class Student {
    #name; // Private field
    #age; // Private field
    #grades; // Private field

    constructor(name, age) {
        this.#name = name;
        this.setAge(age); // Use setter to validate age
        this.#grades = [];
    }

    // Getter for name
    getName() {
        return this.#name;
    }

    // Getter for age
    getAge() {
        return this.#age;
    }

    // Setter for age
    setAge(age) {
        if (age > 0) {
            this.#age = age;
        } else {
            throw new Error("Age must be a positive number.");
        }
    }

    // Method to add a grade
    addGrade(grade) {
        if (grade >= 0 && grade <= 100) {
            this.#grades.push(grade);
        } else {
            throw new Error("Grade must be between 0 and 100.");
        }
    }

    // Method to calculate average grade
    getAverageGrade() {
        if (this.#grades.length === 0) {
            return 0;
        }
        const total = this.#grades.reduce((sum, grade) => sum + grade, 0);
        return total / this.#grades.length;
    }
}

// Usage
const student = new Student("Alice", 20);
console.log(student.getName()); // Output: Alice
console.log(student.getAge()); // Output: 20

student.addGrade(85);
student.addGrade(90);
student.addGrade(78);

console.log(student.getAverageGrade()); // Output: 84.33

student.setAge(21);
console.log(student.getAge()); // Output: 21

// Direct access to private fields is not allowed
// console.log(student.#grades); // Error: Private field '#grades' must be declared in an enclosing class