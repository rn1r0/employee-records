 //Create empty array named "employees"
var employees = []; 

//Create "Employee" contructor w first 3 attr. defined at time of instaniation and the 4th attr. will be defaulted to "Full Time"
function Employee(name, jobTitle, salary, status = "Full Time"){
    this.name = name;
    this,jobTitle = jobTitle;
    this.salary = salary;
    this.status = status;
    
//Create function "printEmployeeForm" that logs employee info. to console
    this.printEmployeeForm = function() { 
        console.log("Name: " + this.name + ", Job Title: " + this.jobTitle + ", Salary: $" + this.salary + "/hour, Status: " + this.status);
      };
}

//1. Instantiate three employees
var employee1 = new Employee("Miro", "Web Developer", 2000);
var employee2 = new Employee("Kranz", "Cybersecurity", 2500);
var employee3 = new Employee("Rose", "UI/UX Designer", 1800);

//2. Override the status attribute of one of them to either "Part Time" or "Contract"
employee3.status = "Contract";

//3. Call the `printEmployeeForm` method for each employee
employee1.printEmployeeForm();
employee2.printEmployeeForm();
employee3.printEmployeeForm();

//4. Put the generated employees into the `employees` array using whichever method you prefer.
employees.push(employee1);
employees.push(employee2);
employees.push(employee3);

// logs employees array showing each employee and info in a array
console.log(employees);
