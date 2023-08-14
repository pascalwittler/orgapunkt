FROM python:latest

WORKDIR /usr/src/app

RUN pip install --no-cache-dir Flask
RUN pip install --no-cache-dir flask-restful
RUN pip install --no-cache-dir Flask-Cors

COPY . .

EXPOSE 2342

CMD [ "python", "./app.py" ]
