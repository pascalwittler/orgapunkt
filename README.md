# SchnittPunkt

## About this project

### Features

* Employee data management (in progress)
* Team data management (in progress)
* Simple web frontend without any framework or library
* Python (Flask) REST API and backend
* No database server required

## Get started

### Installation

The recommended way to run your own instance of SchnittPunkt is to start it inside two Docker containers by using the provided configuration. Just navigate into the project's folder and run `docker-compose up`. After some time, you can simply open `localhost:7891` in your web browser to access the web frontend and `localhost:7892` to check if the API is running.

You may wish to change the IP address and/or the port at the end of the python script `api/app.py` to avoid complications when trying to connect to the API.
