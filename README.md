# Autor: Yoshua López

Un hechicero sea este un Pitufo, un Mago, o incluso Thor y la Mujer Maravilla, van de compras a por unas cuantos pociones para las cuales necesitarán calcular qué pociones resultan "mas mejor" para un ataque al enemigo.

El algoritmo lo que hace es hacer un ciclo **for** de la lista de pociones adquiridas. En cada ciclo este comprueba si las pociones se repiten, entonces repetir el ciclo una y otra vez hasta que las combinaciones de pociones no repitan y al final obtener el total de combinaciones. De las combinaciones obtenidas se hace un mapeo de cada combinación y de esta sacar su valor en lo que viene la regla de: 1 combinación hace un 3% de daño. 2 combinaciones diferentes hace un 5% de daño... Al final despues de haber obtenido las combinaciones y el daño que genera cada una, lo que resta por hacer es sumar todo ese daño de cada combinación para así dar con el daño total realizado. 

---

## Pasos para instalar

1. Clonar la repo.

2. Correr el comando `yarn install o npm install`

3. Correr los test con el comando `yarn test o npm run test`

4. Para correr la aplicacion necesitas tener instalado la aplicación Expo.io en tu celular y correr el comando `yarn android o npm run android`. Te saldrá un código QR en cual debes escanear con la aplicación.

5. O si no prueba la aplicación ya en producción aquí https://expo.io/@yellyoshua/kata-idukay-react
