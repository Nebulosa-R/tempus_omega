#imagen 
FROM python:3.6.6-alpine3.8

#definir ambiente de entorno
ENV FLASK_APP app.py
ENV FLASK_DEBUG 1
ENV FLASK_RUN_PORT 8888

#instalar la imagen base de python
RUN mkdir /www/
ADD requeriments.txt /www/requeriments.txt
RUN pip install -r /www/requeriments.txt 

EXPOSE 8888

WORKDIR /www/
ENTRYPOINT [ "python", "-m", "flask", "run", "--host=0.0.0.0" ]


