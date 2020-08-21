//Contiene el nombre de los botones del envio de archivos
const archivoInput = document.getElementById("pc_file");
const archivoBtn = document.getElementById("pc_file_btn");
const input = document.querySelector('input[type="file"]');
const envioBtn = document.getElementById('envio_contenido_btn');

    

//Evento que le da al botton los atributos de un espacio input
archivoBtn.addEventListener("click", function(){
    archivoInput.click();
});


//Lee el archivo e ingresa su informacion dentro de la consola
input.addEventListener('change', function(e){
    console.log(input.files)
    const reader = new FileReader()
    reader.onload = function(){
        const img = new Image();
        img.onload = function(){
            //Se genera un objeto tipo canvas 2D donde se coloca la imagen
            const canvas = document.createElement('canvas')
            const context = canvas.getContext('2d')

            //Maneja las proporciones de  la imagen para que sean las mismas del canvas
            var hRatio = canvas.width / img.width;
            var vRatio = canvas.height / img.height;
            var ratio  = Math.min ( hRatio, vRatio );

            context.drawImage(img, 0,0, img.width, img.height, 0,0,img.width*ratio, img.height*ratio)

            const imageData = context.getImageData(0, 0, canvas.width, canvas.height)

            context.putImageData(imageData, 0, 0)

            document.body.appendChild(canvas)

            //Este codigo comentado convirte los archivos en un archivo blob que se almacena en el disco
            //Requiere un on click

            //canvas.toBlob(function(blob){
                //const form = new FormData()
                //form.append('image', blob, 'imagenPrueba.jpg')
                //const xhr = new XMLHttpRequest()
                //xhr.open('POST', '/imageupload', true)
                //xhr.send(form)
            //});
        }

        chatForm.addEventListener('submit', (e) => {

            img.src = reader.result;

            //TODO: Buscar documentacion del siguiente metodo.
            e.preventDefault();
        
            //Obtiene el mensaje del usuario
            const msg = e.target.elements.canvas;
        
            //Muestra en consola el mensaje enviado
            console.log('image was sent');
        
            //Envia el imagen al servidor.
            socket.emit("imagen", img);
        
            //Limpiar mensaje.
            e.target.elements.msg.value = '';
            e.target.elements.msg.focus();
             
        });

        //Evento que le da al botton los atributos de un espacio input
        //envioBtn.addEventListener("click", function(){        

            //Evia la imagen a tarves del socket hacia el servidor
            //img.src = reader.result;
            //socket.emit("imagen", img);
            //console.log('image was sent');


        //});
    }
    reader.readAsDataURL(input.files[0])

    //socket.write(imageData)
});


