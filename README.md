# Practica 1
---
## Grupo #6
| Carnet | Nombre |
| ------ | ------ |
| 201503702 | Edgar Humberto Borrayo Bartolón |
| 201908321 | Katerine Adalinda Santos Ramirez | 
| 201908335 | Oscar Rene Rodriguez Vasquez |
| 201905837 | Ariel Rubelce Macario Coronado |

---
## _Sub Redes Necesarias_
Se realiza el calculo para obtener las Sub redes necesarias, teniendo en cuenta utilizar la forma de calculo VLSM y una cantidad maxima de 30 dispositivos por SubRed. Por lo que el resultado del calculo es el siguiente:

| VLAN                | SubRed         | Pimer Asignable | Ultima Asignable | Broadcast      | MascaraSubred        |
| ------              | ------         | ------          | ------           | ------         | ------               |
| Educacion 10 |    |    |    |    |    |
| Cultura y deportes 20 | 192.168.26.0  | 192.168.26.1  | 192.168.26.126    | 192.168.26.127  | 255.255.255.128 / 25 |
| Salud 30 |    |    |    |    |    |
| Funcion Publica 40 | 192.168.26.128  | 192.168.26.129   | 192.168.26.254   | 192.168.26.255 | 255.255.255.128 / 25 |
| Desarrollo Empresarial 50 |    |    |    |    |    |
| Desarrollo Económico 60 |    |    |    |    |    |
---
## _ISP Vodafone_

