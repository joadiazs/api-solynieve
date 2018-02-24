#MYSQL Dockerizado BD_sol_y_nieve

**Consultar ip docker**
```
docker-machine ip default
```
**Crear imagen:** 
```
docker build -t mysql-solynieve-img ./database
```
**Listar imagenes:** 
```
docker image list
```
**Eliminar imagen:**
```
docker rmi -f mysql-solynieve-img
```
**Crear nuevo contenedor**
```
docker run --name mysql-solynieve-container -p 3304:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql-solynieve-img
```
**Listar contenedores en ejecucion (con -a ver todos los existentes)**
```
docker ps
```
**Iniciar contenedor**
```
docker start mysql-solynieve-container
```
**Parar contenedor**
```
docker start mysql-solynieve-container
```
**Eliminar contenedor**
```
docker rm mysql-solynieve-container
```

#Levantar API CONNECT
```
apic edit
```

#Generar sdk en angular
```
./node_modules/.bin/lb-sdk server/server ../web-solynieve/src/app/shared/services/lbsdk -l angular2 -d ng2web -i disable
```
o
```
npm run patronus
```

#Levantar servidor node (proyecto Loopback!)
```
node .
```
[localhost:3000/explorer](http://localhost:3000/explorer)