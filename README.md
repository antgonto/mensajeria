# ChatIO :email:

Este proyecto es basado en la idea de poder crear un Sitio Web en el cual se puedan realizar envio de mensajes y archivos, y realizar llamadas a personas o grupos de amigos o trabajo.
La idea de este proyecto es tambien conocer un poco el mundo de _**JavaScript**_ y todas las ideas de proyectos  que se pueden realizar con este lenguaje.
Este proyecto trata tambien de impulsarnos a conocer nuevas herramientas tecnologicas como por ejemplo _**Socket.IO**_ para el envio de información en tiempo real.

## Software Usado

1. <a href="https://code.visualstudio.com/">VS Code</a> - IDE Predeterminado.
    Extenciones: (Para instalar las siguientes extenciones, debe ingresar el siguiente comando <code>Ctrl + P</code>, seguido del comando de instalación y <code>Enter</code>)
    1. <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint">ESLint</a> - Ayuda con el autocompletado con el lenguaje de JavaScript.
        * Instalación: <code>ext install dbaeumer.vscode-eslint</code>
    1. <a href="https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens">GitLens — Git supercharged</a> - Un mejor control en el versionamiento del codigo.
        * Instalación: <code>ext install eamodio.gitlens</code> 
    1. <a href="https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer">Live Server</a> - Acitva un desarrollo servidor local con un recargado activo para la creacion de paginas estáticas y dinamicas.
        * Instalación: <code>ext install ritwickdey.LiveServer</code> 
    1. <a href="https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare">Live Share</a> - Desarrollo colaborativo en tiempo real.
        * Instalación: <code>ext install MS-vsliveshare.vsliveshare</code>
    1. <a href="https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh">Remote SSH</a> - Conexión Remota mediante SSH.
        * Instalación: <code>ext install ms-vscode-remote.remote-ssh</code>
    1. <a href="https://marketplace.visualstudio.com/items?itemName=wayou.vscode-todo-highlight">TODO Highlight</a> - Identificar de una mejor forma las tareas que faltan por realizar o mensajes dejados por los demas colaboradores.
        *   Instalación:<code>ext install wayou.vscode-todo-highlight</code>
    
1. <a href="https://git-scm.com">Git</a>
1. <a href="https://nodejs.org/en/">NodeJS</a>
1. <a href="https://www.npmjs.com/">npm</a>
1. <a href="https://socket.io/">SocketIO</a>

## Servidores / Servicios utilizados:

1.	_**Oracle Cloud**_: Gratis, se pueden utilizar hasta dos maquinas virtuales de por vida, el problema es que contiene una configuración un tanto difícil y durante el proceso de desarrollo no se logro habilitar los puertos de conexión necesarios.
2.	_**Google Cloud**_: Gratis y $300 que se pueden utilizar en los demás servicios durante los primeros 12 meses, luego de ese momento se debe empezar a pagar una cantidad dependiendo la modalidad seleccionada: Pago por adelantado o pago según lo usado. Fué utilizado tambien durante gran parte del desarrollo pero debido a problemas con la conexión y el uso de las claves SSH se planteo la busqueda de otro proveedor de servios.Para la creación de la cuenta es solo necesario el registro de una tarjeta de credito/debito.
3.	_**Azure**_: Gratis y $200 que se pueden utilizar en los demás servicios durante los primeros 12 meses. Esta sin embargo sí cumplió con todas nuestras necesidades y la cual fué facil y rapido de configurar y desplegar. Para la creación de la cuenta es solo necesario el registro de una tarjeta de credito/debito.


## Instalación de programas

Para poder ejecutar este tipo de proyectos se debe tener instalado el sistema  *Node.Js* y *npm*. En sistemas *UNIX* basados en las distribuciones *Debian* y *Ubuntu*, se puede instalar de la siguiente forma:
	
	# sudo apt install node

Para mas información sobre la instalación revise <a href="https://github.com/nodesource/distributions/blob/master/README.md">aquí</a>.

**Importante**: Al mostrar comandos con el signo #, significa que deben de ser ejecutados con permisos de administrador. En caso de usar el simbolo $ puede ser cualquier usuario que posea los permisos necesarios para trabajar en dicha carpeta.

Luego tambien se debe tener instalado el administrador de paquetes *npm* para el lenguaje de *JavaScript*. Este se instala en conjunto con el paquete *node*. Por lo que para validar si debida instalación se puede ejecutar los siguientes comandos:
	
	$ node -v
	$ npm -v

Para mas informacion sobre npm <a href="https://www.npmjs.com/get-npm">aquí</a>.

## Control de Versiones:

Como software de control de versiones se utilizó: _**Git**_.
Se utilizó _**GitHub**_ como servicio de hosting para nuestro codigo fuente.

Para poder clonar el repositorio se utiliza el siguiente comando:

	$ git clone https://github.com/antgonto/mensajeria.git

Se accede luego a la carpeta donde se encuentra el archivo _packages.json_ 
	
	$ cd mensajeria/ChatIO/


## Instalación de los paquetes 

Ahora poder instalar las dependencias necesarias para ejecutar el proyecto:

	# npm install -f

En este caso algunos de los pquetes no fueron diseñadas para sistemas Linux, por lo que el ingresa como argumento *-f* el cual fuerza la instalación de todos los paquetes necesarios. 

## Funcionamiento de la aplicación


Por ultimo una vez instalados los paquetes, lo unico que se necesita es ejecutar el proyecto:

    $ npm start

Una ves ya funcionando la aplicación se deberá desplegar un mensaje como este:

    Servidor activo en el puerto 3000

## Cierre de la aplicación

Para poder finalizar la ejecución de la aplicación se debe introducir el siguiente comando <code>Ctrl + C</code>.

