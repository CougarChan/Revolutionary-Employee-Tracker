
CREATE TABLE Departments (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
    );

CREATE TABLE Roles (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30) NOT NULL,
    salary DECIMAL(8,2) NOT NULL,
    department_id INT NOT NULL, 
    CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES Departments(id)
    );

CREATE TABLE Employees ( 
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES Roles(id),
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES Employees(id) ON DELETE SET NULL
);