# Full Stack Todo App using React (FrontEnd) + Python Django (Backend) 


This project is a simple Todo Application that allows users to manage tasks. The frontend is built with React, while the backend is powered by Python Django.


```
todo-app/
├── todo_backend/
│   ├── manage.py
│   ├── todos/
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── migrations/
│   │   │   ... (migration files)
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── views.py
│   │   └── tests.py
│   ├── __init__.py
│   ├── settings.py
│   └── urls.py
├── todo_frontend/
│   ├── package.json
│   ├── src/
│   │   ├── App.js
│   │   ├── components/
│   │   │   ├── AddTask.js
│   │   │   └── TaskView.js
│   │   └── index.js
│   ├── public/
│   │   └── index.html
│   └── README.md
├── requirements.txt
└── .gitignore

```


## Overview

This Todo Application provides basic functionality to create, read, update, and delete tasks. It consists of a frontend built with React that communicates with a backend API developed using Django. Users can add tasks, mark them as completed, and delete tasks as needed.


## Requirements

- Node.js
- npm (Node Package Manager)
- Python
- Django
- Django REST Framework
- React
- Axios (for API communication)

## Installation

### Backend (Django)

1. Navigate to the `todo_backend` directory:
    ```
    cd todo_backend
    
    ```

2. Install Python dependencies using pip (recommended in a virtual environment):
    ```
    pip install -r requirements.txt
    
    ```

3. Apply migrations to set up the database:
    ```
    python manage.py migrate

    ```
4. Start the Django development server:

    ```
    python manage.py runserver

    ```
5. 

### Frontend (React)


### Navigate to the todo_frontend directory:
    ```
    cd todo-frontend
    
    ```

### Install npm packages:
    ```
    npm install

    ```



### Start the React development server:
    ```
    npm start
    
    ```
#### Usage
   - Open your web browser and go to http://localhost:3000 to view the Todo App.
    

* Use the interface to add, mark as completed, and delete tasks.
* **Technologies Used:**
* **Frontend:** React, Axios
* **Backend:** Python, Django, Django REST Framework
* **Database:** SQLite (default with Django)
* **Styling:** CSS, Bootstrap (for UI components)
