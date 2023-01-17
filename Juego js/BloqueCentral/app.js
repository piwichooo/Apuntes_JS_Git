const canvas=document.querySelector('#lienzo')//llamamos al canvas del index.html
const ctx=canvas.getContext('2d');
//medidas del escenario
let casillaHorizontal=50
let casillaVertical=50
const vidas=document.querySelector('#vidas')//conexicon con h1 de html vidas


let ogroArray=[]//instancia

canvas.width=500//ancho
canvas.height=500//el alto


let vidasVariable=5//en html

vidas.textContent=vidasVariable//textcontent contiene el contexto

//borde
canvas.style.border='5px solid black'
canvas.style.backgroundColor='lightblue'

//escenario de 2 dimensiones
let escenario=[//10 filas de 50 px
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],

]

//ahora pintamos con 2 bucles for recorremos Y y X
for(y=0;y<10;y++){
    for(x=0;x<10;x++){
        if (escenario[y][x]==0) {
            ctx.fillStyle='lightblue'//color
            ctx.fillRect(y*casillaVertical,x*casillaHorizontal,casillaVertical,casillaHorizontal)//medidas
        }
    }
}



//protagonista
const protagonista=function(posX,posY,ancho,alto,color,velocidad){
    //POO
    this.posX=posX
    this.posY=posY
    this.ancho=ancho
    this.alto=alto
    this.color=color
    this.velocidad=velocidad

    //creamos el metodo dibujar
    this.dibuja=function() {
        //ahora dibujamos el cuadrado
        ctx.fillStyle=this.color
        ctx.fillRect(this.posX,this.posY,this.ancho,this.alto,this.color,this.velocidad)
    }
    //funcion para que suba
    this.subir=function () {
        if(this.posY>=2){//colision con el techo
            this.posY-=5//movimiento
        }
        
    }
    this.bajar=function(){
        if(this.posY<=448){
            this.posY+=5
        }

    }
    this.derecha=function(){
        if(this.posX<=448){//le restamos 50 que es lo que mide el jugador
            this.posX+=5
        }
        
    }
    this.izquierda=function(){
        if(this.posX>=2){
            this.posX-=5
        }
        
    }

}
//le pasamos los datos del prota
const prota=new protagonista(225,450,50,50,'blue',2)

//enemigo

const enemigo=function(posX,posY,ancho,alto,color,velocidad,derecha){
   
    this.posX=posX
    this.posY=posY
    this.ancho=ancho
    this.alto=alto
    this.color=color
    this.velocidad=velocidad
    this.derecha=true;// inicia caminando hacia la derecha

    
    this.dibuja=function() {
       
        ctx.fillStyle=this.color
        ctx.fillRect(this.posX,this.posY,this.ancho,this.alto,this.color,this.velocidad)
    }
        //movimiento del enemigo  y colision
        this.mover=function(){
            if(this.derecha==true){
                if(this.posX<500-50)
                    this.posX+=5
                    else{
                        this.derecha=false
                    }
                
            }
            else{
                if(this.posX>0)
                this.posX-=5
                else{
                    this.derecha=true
                }
            }
        }
}

const malo=new enemigo(225,200,50,50,'red',2)

//ogro
const ogro=function(posX,posY,ancho,alto,color,velocidad){
   
    this.posX=posX
    this.posY=posY
    this.ancho=ancho
    this.alto=alto
    this.color=color
    this.velocidad=velocidad
    

    
    this.dibuja=function() {
       
        ctx.fillStyle=this.color
        ctx.fillRect(this.posX,this.posY,this.ancho,this.alto,this.color,this.velocidad)
    }
 
    this.abajo=function(){//ogros se mueven para abajo
        this.posY+=1 + this.velocidad
        if(this.posY>500){
            this.posY=-50
        }
        
    }
            
        
}

ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',1))//llenamos el array con el push- creamos mas ogros
ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',1.5))
ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',1.7))
ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',1))
ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',2))
ogroArray.push(new ogro(Math.random()*500,Math.random()*100,50,50,'green',1.9))




//colisiones con el enemigo

function colisiones(){

    if(prota.posY<malo.posY+50){// la posicion del jugador es menor que el enemigo + 50 del enemigo
        this.posY+=0
        this.posY=360
    
        
        vidas.textContent=vidasVariable-1//actualiza el marcador
    }
    if(prota.posX+50>malo.posX && //que choque con el enemigo y que lo mueva
        prota.posY>=malo.posY && 
        prota.posY<=malo.posY+50){
        malo.posX=prota.posX+50
        vidas.textContent=vidasVariable-1
    }

}
colisiones()



//movimiento de jugador, eventos

window.addEventListener('keydown',(e)=>{
    e.preventDefault//nos previene de un tipo de error del efecto burbuja
    if(e.key==='w' || e.key==='W'){
        prota.subir();

    }
    if(e.key==='s' || e.key==='S'){
        prota.bajar();

    }
    if(e.key==='d' || e.key==='D'){
        prota.derecha();

    }
    if(e.key==='a' || e.key==='A'){
        prota.izquierda();

    }

})





//funcion que actualizara canvas, para que se vea el dibujo moviendose

function borraCanvas(){
    canvas.width=500//ancho
    canvas.height=500//el alto
}


//bucle principal del juego
function principal(){
    //metodo que hace que se repita interminentemente
    requestAnimationFrame(principal)
    borraCanvas()
    colisiones()
    //ahora llamamos al protagonista y a los datos para que sea un bucle y se dibujoe
    prota.dibuja()
    malo.dibuja()
    malo.mover()



    for(let i=0;i<ogroArray.length;i++){//creaciones del ogro
        ogroArray[i].dibuja()
        ogroArray[i].abajo()
    }
}
principal()