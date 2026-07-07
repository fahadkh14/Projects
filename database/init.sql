CREATE TABLE IF NOT EXISTS notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample data
INSERT INTO notes (title, content) VALUES 
('Welcome!', 'This is your first note in your Dockerized application.'),
('Reminders', 'Don''t forget to test the API endpoints.');
