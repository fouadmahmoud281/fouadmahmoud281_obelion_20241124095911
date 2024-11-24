CREATE TABLE priorities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    dueDate DATE NOT NULL,
    priority ENUM('High', 'Medium', 'Low') NOT NULL
);