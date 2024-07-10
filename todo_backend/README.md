# Todo Application Backend

This is the backend of a Todo Application built with Django. The application allows users to manage tasks by creating, reading, updating, and deleting them.

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Requirements

- Python 3.x
- Django
- Django REST Framework
- Other dependencies as specified in `requirements.txt`

## Installation

1. Clone the repository:
   ```
     git clone https://github.com/your/repository.git
     cd repository
   ```
2. Install dependencies: 
    ```
    pip install -r requirements.txt
    ```
3. Setup
    - Apply database migrations:
        ```
        python manage.py migrate

        ```
    - Create a superuser (optional):
        ```
        python manage.py createsuperuser

        ```
    - Start the development server:
        ```
        python manage.py runserver

        ```

## Usage

**Django Admin Interface**

- Access the Django admin interface at `http://localhost:8000/admin/` (if a superuser has been created).
- This interface allows you to manage your tasks through a web-based UI.

**API Endpoints**

- Use the following API endpoints to manage your tasks via HTTP requests:

* **GET /api/tasks/**: Retrieves all tasks in JSON format.
* **POST /api/tasks/**: Creates a new task. Provide the task details in the request body.
* **POST /api/tasks/mark/<int:pk>/**: Marks a specific task as completed (replace `<int:pk>` with the task ID).
* **DELETE /api/tasks/delete/<int:pk>/**: Deletes a specific task (replace `<int:pk>` with the task ID).

**Technologies Used**

* **Python**
* **Django** (web framework)
* **Django REST framework** (extension for building RESTful APIs with Django) 


## Contributing

**Forking and Pull Requests**

1. Fork this repository on your preferred version control platform (e.g., GitHub).
2. Create a new branch for your feature (`git checkout -b feature/YourFeature`).
3. Implement your changes and commit them (`git commit -am 'Add some feature'`).
4. Push your changes to the remote branch (`git push origin feature/YourFeature`).
5. Create a new Pull Request to merge your changes into the main repository.
