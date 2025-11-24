# Proyecto Final Git

Objetivo del Proyecto

El objetivo de este proyecto es familiarizarse con el sistema de control de versiones Git, entendiendo cómo gestionar el código fuente de manera eficiente, incluyendo conceptos como ramas, commits, merge, y cómo organizar un flujo de trabajo adecuado para colaborar en proyectos de desarrollo de software.

Integrante

Nombre completo: jose esteban villamil castro

Fecha: 24/11/2025

¿Qué es Git?

Git es un sistema de control de versiones distribuido que permite gestionar el historial de cambios de archivos, típicamente utilizado para el desarrollo de software. Con Git, se puede registrar el estado de un proyecto en puntos específicos en el tiempo (llamados commits), lo que permite volver a versiones anteriores del código o identificar cuándo y por qué se hicieron ciertos cambios.

A diferencia de otros sistemas de control de versiones, Git permite que cada desarrollador tenga una copia completa del repositorio en su propia máquina, lo que facilita el trabajo fuera de línea y la colaboración. Git también facilita el manejo de ramas (branches), lo que permite a los desarrolladores trabajar en diferentes características o correcciones de forma aislada antes de integrarlas en la versión principal del proyecto (main o master).

Git es especialmente útil en equipos grandes o distribuidos, ya que soporta múltiples flujos de trabajo y resuelve conflictos que pueden surgir cuando varias personas modifican el mismo archivo. Además, Git está diseñado para ser rápido y eficiente en cuanto a la gestión de grandes volúmenes de datos, lo que lo hace ideal para proyectos de desarrollo a gran escala.

10 Comandos de Git Explicados

git init
Este comando se utiliza para inicializar un nuevo repositorio de Git en un directorio. Crea un subdirectorio llamado .git que contiene todos los archivos de configuración y los objetos de seguimiento.

git clone <url>
Este comando crea una copia local de un repositorio remoto. Clona todos los archivos y el historial del proyecto desde la URL proporcionada.

git branch
Muestra las ramas existentes en el repositorio. También puede usarse para crear nuevas ramas con git branch <nombre_rama>.

git merge <rama>
Integra los cambios de otra rama en la rama actual. Se usa cuando se quiere combinar el trabajo de diferentes ramas.

git pull
Descarga los cambios del repositorio remoto y los fusiona con la rama local actual. Este comando es útil para mantener tu repositorio local actualizado.

git push
Envía los cambios locales al repositorio remoto, haciendo que tus modificaciones sean accesibles para otros desarrolladores.

Flujo de Trabajo Recomendado

Un flujo de trabajo comúnmente recomendado para trabajar con Git es el siguiente:

Clonar el repositorio:
Si estás empezando a trabajar en un proyecto ya existente, clona el repositorio usando git clone <url>.

Crear una rama:
Antes de empezar a trabajar en cualquier característica o corrección, crea una nueva rama con git branch <nombre_rama> y cámbiate a ella con git checkout <nombre_rama>.

Realizar cambios:
Realiza los cambios necesarios en tu código. Recuerda que cada vez que realices un cambio significativo, debes añadirlo al área de preparación con git add <archivo> y luego hacer un commit con git commit -m "Descripción del cambio".

Sincronizar con el repositorio remoto:
Es importante mantener tu copia local actualizada con el repositorio remoto. Usa git pull regularmente para descargar y fusionar los cambios hechos por otros desarrolladores.

Fusionar cambios:
Cuando termines de trabajar en tu rama, cambia a la rama principal (por ejemplo, main o master) con git checkout main y fusiona tu rama con git merge <nombre_rama>.

Subir los cambios:
Finalmente, cuando tu trabajo esté listo, sube tus cambios al repositorio remoto con git push.

Sección: "Problemas Encontrados Hoy"

Conflictos de fusión: Al intentar fusionar mi rama con la rama principal, encontré un conflicto en el archivo index.html. Tuve que editar manualmente el archivo para resolver el conflicto y luego completar la fusión con git merge --abort en caso de errores.

Problemas con el seguimiento de archivos no rastreados: Olvidé añadir un archivo a la zona de preparación antes de hacer el commit. Como resultado, tuve que usar git add y luego realizar un nuevo commit.

Sección: "Conclusión del Día"

Hoy, aprendí la importancia de trabajar con ramas en Git, lo cual facilita la gestión de diferentes tareas y características sin afectar el código principal. Además, entendí cómo manejar conflictos y mantener mi repositorio local sincronizado con el repositorio remoto. Aunque tuve algunos problemas con los conflictos de fusión, logré resolverlos y pude completar el flujo de trabajo sin mayores inconvenientes. A medida que continúe practicando, me siento más cómodo con el uso de Git y su flujo de trabajo.
git checkout <rama>
Permite cambiar de una rama a otra. También puede usarse para restaurar archivos a su versión más reciente desde el repositorio.

git add <archivo>
Muestra el estado actual del repositorio, es decir, qué archivos han sido modificados, cuáles están en el área de preparación, y si hay archivos no rastreados.

