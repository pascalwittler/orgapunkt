FROM python:latest

WORKDIR /usr/src/app

RUN pip install --no-cache-dir Flask

COPY . .

EXPOSE 2342

CMD [ "python", "./app.py" ]
