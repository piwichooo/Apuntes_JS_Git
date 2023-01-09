****
**Repositorio nuevo**
****

```bash
- git init
-git commit -m "lo que sea"
-git add .    - o si quieres solo un archivo git add "nombre del archivo"
-git config user.name "nombre de tu github"
-git config user.email "email"
- git remote add origin "url"
- git push -u origin main
```


en caso salga error remote origin already exist

```bash
-git remote --verbose
-git remote set-url origin "url"
-git push
```

- agregar un cambio a tu repo

```bash
-git add .
-git commit -m .
-git push -u origin master

```

****
**Creando repositorio con Acces token**
****

![](https://media.discordapp.net/attachments/893274242169331715/1062132726200799413/image.png?width=262&height=663)
![](https://media.discordapp.net/attachments/893274242169331715/1062132887408885811/image.png?width=1153&height=662)
![](https://media.discordapp.net/attachments/893274242169331715/1062132961526427691/image.png)
![en el pass ponemos el token](https://media.discordapp.net/attachments/893274242169331715/1062133156028878888/image.png)
![](https://media.discordapp.net/attachments/893274242169331715/1062133314808451182/image.png)


****
**GITCLONE + GIT PULL**
****

- **git clone** -> se utiliza cuando queremos copiar todo el repositorio, se utiliza para copias de cero

```bash
-git clone "url"

```

- **git pull** -> se utiliza cuando quieres descargar los cambios, sirve cuando estas trabajando con otro compañero y quieres descargar la parte que modifico

```bash
-git pull origin master

```

****
**Branches(Ramas)**
****

Son como punteros, que nos permite ver los cambios o versiones, cada rama representa una linea independiente, que al final se juntan.
Git  cuenta con una rama pincripal master/main, de la cual parten las demas ramas.

![](https://media.discordapp.net/attachments/893274242169331715/1062143749561524234/image.png?width=1168&height=663)

**empezamos a crear ramas**
```bash
-git branch -> te dice en que rama estoy
-git branch "el nombre que quieres ponerle a la rama" -> crea la rama
//si quiere cambiarle de nombre
-git branch -m "la rama del que quiero cambiarlo el nombre" "nuevo nombre" -> cambia el nombre de la rama
-git checkout "nombre de la rama donde quiero estar" -> te manda a la rama que quieres
//si quiero eliminar una rama
-git branch -d "nombre de la rama que quiero eliminar" -> borra la rama, pero para eso no debes estar parada en esa rama

```

-ejemplo: crearemos archivos que no esten en la rama principal

creamos la rama 

```bash
-git branch rama1
-git checkout rama1
-git add .
-git commit -m " "
//para pasar los cambios, tienes que pararte en el origen
-git checkout master
-git rama1 master
-git add .
-git commit -m .
```

- **Diff**  nos muestra las diferencias entre rama

```bash
-git diff "master" "rama1"
```

- **Merge** para unificar a la rama origen

```bash
-git checkout master
-git merge ramaOrigen ramaDestino
-git add .
-git commit -m .
```

