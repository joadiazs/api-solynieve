#MYSQL Dockerizado BD_sol_y_nieve

**Crear imagen:** 
```
docker build -t mysql-solynieve-img ./database
```

**Crear nuevo contenedor**
```
docker run --name mysql-solynieve-container -p 3304:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql-solynieve-img
```

#Generar sdk en angular
```
./node_modules/.bin/lb-sdk server/server ../web-solynieve/src/app/shared/services/lbsdk -l angular2 -d ng2web -i disable
```
o
```
npm run patronus
```

**Levantar api**
```npm run pokemon
```

[localhost:3000/explorer](http://localhost:3000/explorer)