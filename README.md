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

#### Configuracion de Protocolo de enrutamiento RIP Router0(1)
```sh
enable
configure terminal
router rip
version 2
network 22.22.22.0 
no auto-summary
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolo de enrutamiento RIP Router3(1)
```sh
enable
configure terminal
router rip
version 2
network 192.168.26.128
network 22.22.22.0 
no auto-summary
exit
exit
copy running-config startup-config
```
---
#### Configuracion de Protocolo de enrutamiento OSPF Router0(1)
```sh
enable
configure terminal
router ospf 500
network 23.23.23.0 0.0.0.3 area 0
network 21.21.21.0 0.0.0.3 area 0
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolo de enrutamiento OSPF Router1(1)
```sh
enable
configure terminal
router ospf 600
network 23.23.23.0 0.0.0.3 area 0
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolo de enrutamiento OSPF Router2(1)
```sh
enable
configure terminal
router ospf 700
network 21.21.21.0 0.0.0.3 area 0
network 192.168.26.0 0.0.0.127 area 0
exit
exit
copy running-config startup-config
```
---
#### Configuracionde redistribucion de BGP con OSPF Router1(1)
```sh
enable
configure terminal
router bgp 200
network 24.24.24.0 mask 255.255.255.252
neighbor 24.24.24.2 remote-as 100
network 25.25.25.0 mask 255.255.255.252
neighbor 25.25.25.2 remote-as 300
redistribute ospf 600
exit
exit
copy running-config startup-config
```
#### Configuracionde redistribucion de OSPF con BGP Router1(1)
```sh
enable
configure terminal
router ospf 600
redistribute bgp 200 metric 1 subnets 
exit
exit
copy running-config startup-config
```
#### Configuracionde redistribucion de RIP con BGP Router1(1)
```sh
enable
configure terminal
router bgp 200
network 22.22.22.0 mask 255.255.255.252
network 192.168.26.128 mask 255.255.255.128
exit
exit
copy running-config startup-config
```
---
#### Configuracion de redistribucion de OSPF con RIP Router0(1)
```sh
enable
configure terminal
router rip
redistribute ospf 500 metric 15
exit
exit
copy running-config startup-config
```
#### Configuracion de redistribucion de RIP con OSPF Router0(1)
```sh
enable
configure terminal
router ospf 500
redistribute rip subnets 
exit
exit
copy running-config startup-config
```
---
#### Configuracion de ACCESS-LIST Router2(1)
```sh
enable
configure terminal
access-list 20 permit 192.168.26.128 0.0.0.127
access-list 20 deny any
interface gig0/1
ip access-group 20 out
exit
exit
copy running-config startup-config
```
#### Configuracion de ACCESS-LIST Router3(1)
```sh
enable
configure terminal
access-list 10 permit 192.168.26.0 0.0.0.127
access-list 10 permit 192.168.86.0 0.0.0.127 
access-list 10 permit 192.168.86.128 0.0.0.127 
access-list 10 deny any
interface gig0/0
ip access-group 10 out
exit
exit
copy running-config startup-config
```
---