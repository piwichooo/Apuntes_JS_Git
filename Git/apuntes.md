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
