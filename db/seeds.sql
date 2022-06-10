INSERT INTO Departments (department_name)
VALUES
('Finance'),
('Engineering'),
('Sales'),
('Human Resources');

INSERT INTO Roles (job_title, salary, department_id)
VALUES
('Accountant', 100000, 1),
('Recruiter', 45000, 4),
('Software Engineer', 200500, 2),
('General Manager', 70000, 3),
('Business Analyst', 91000, 2),
('Digital Marketing', 56000, 3);

INSERT INTO Employees (first_name, last_name, role_id, manager_id)
VALUES
('JoJo', 'Thap', 2, NULL),
('Kim', 'Cho', 1, 1),
('Morol', 'Rod', 3, 1),
('Andy', 'Jacks', 3, 1),
('Christ', 'Lopez', 2, 1),
('Gomez', 'Julia', 2, 1);