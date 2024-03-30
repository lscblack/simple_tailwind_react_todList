
**Docker Review: Simple Tailwind React Todo List**

**Project Overview:**
The Simple Tailwind React Todo List project is a minimalistic todo list application developed using React and styled with Tailwind CSS. It enables users to manage their tasks by adding, marking as complete, and deleting todos.

**Usage Instructions:**
1. **Installation:**
   - Clone the repository:
     ```
     git clone https://github.com/lscblack/simple_tailwind_react_todList.git
     ```
   - Navigate to the project directory:
     ```
     cd simple_tailwind_react_todList
     ```
   - Install dependencies:
     ```
     npm install
     ```

2. **Running the Application:**
   - To run the application locally:
     ```
     npm run dev
     ```
   - Access the application at [http://localhost:8080](http://localhost:8080) in your web browser.

3. **Usage:**
   - Add a new todo by typing the task in the input field and pressing Enter or clicking the "Add Todo" button.
   - Mark a todo as completed by clicking on the checkbox next to it.
   - Delete a todo by clicking on the delete icon next to it.

**Contributing:**
Contributions to the project are encouraged. Users can contribute by submitting pull requests or opening issues for bugs or feature requests.

**Author:**
The project is authored by Loue Sauveur Christian.

**Docker Image:**
To download and run the application using Docker, follow these steps:
1. Pull the Docker image from the repository:
   ```
   docker pull lscblack/group_assignment-todo-list:latest
   ```
2. Run the Docker container:
   ```
   docker run -p 8080:8080 lscblack/group_assignment-todo-list:latest
   ```
3. Access the application at [http://localhost:8080](http://localhost:8080) in your web browser.

**Review:**
The Simple Tailwind React Todo List project provides a straightforward and intuitive interface for managing todos. The inclusion of Tailwind CSS ensures a sleek and responsive design. The usage instructions are clear and concise, facilitating easy setup and operation of the application. The project encourages contributions, fostering community engagement and improvement. Overall, it's a commendable effort for building a functional todo list application with React and Tailwind CSS.

## Usage

1. **Clone the Repository:**

   ```
   git clone https://github.com/lscblack/simple_tailwind_react_todList.git
   ```

2. **Navigate to the Project Directory:**

   ```
   cd simple_tailwind_react_todList
   ```

3. **Run the Configuration Script:**

   Make sure you have Docker installed on your system. Then, run the following command to configure Docker:

   ```
   sudo  ./lscblack.sh
   ```

   This script will automatically build the Docker image, run the Docker container, and perform other necessary Docker configurations.

4. **Access the Application:**

   Once the Docker configuration is complete, you can access the application at [http://localhost:8080](http://localhost:8080) in your web browser.

## Note

If you choose to use my codes, please do so at your own risk. Ensure you have Docker installed on your system before running the configuration script.


## Configuration 
#### your vite.config.js should be like this
```
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  preview: {
    host: true,
    port: 8080
  }
});

```

---
# Happy coding
[live demo](https://transcendent-paletas-f74585.netlify.app/) 
