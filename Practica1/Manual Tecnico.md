# Practica 1
---
## Grupo #6
| Carnet | Nombre |
| ------ | ------ |
| 201503702 | Edgar Humberto Borrayo Bartolón |
| 201800000 | Katy | 
| 201800001 | Oscar Rene Rodriguez |
| 201800002 | Ariel Rubelce Macario |

---
## _Sub Redes Necesarias_
Se realiza el calculo para obtener las Sub redes necesarias, teniendo en cuenta utilizar la forma de calculo VLSM y una cantidad maxima de 30 dispositivos por SubRed. Por lo que el resultado del calculo es el siguiente:

| VLAN | SubRed | Pimer Asignable | Ultima Asignable | Broadcast | MascaraSubred |
| ------ | ------ | ------ | ------ | ------ | ------ |
| Ventas | 192.168.86.0 | 192.168.86.1 | 192.168.86.30 | 192.168.86.31 | 255.255.255.224 / 27 |
| Distribucion | 192.168.86.32 | 192.168.86.33 | 192.168.86.62 | 192.168.86.63 | 255.255.255.224 / 28 |
| Administracion | 192.168.86.64 | 192.168.86.65 | 192.168.86.94 | 192.168.86.95 | 255.255.255.224 / 29 |
| Servidores | 192.168.86.96 | 192.168.86.97 | 192.168.86.126 | 192.168.86.127 | 255.255.255.224 / 30 |
| Magnament&Native | 192.168.86.128 | 192.168.86.129 | 192.168.86.158 | 192.168.86.159 | 255.255.255.224 / 31 |
| BlackHole | 192.168.86.160 | 192.168.86.160 | 192.168.86.161 | 192.168.86.191 | 255.255.255.224 / 32 |

## _Configuracion VLAN y VTP_
### Configuracion VLAN Router (R0)
Se inicia configurando el Router con las Vlans, aplicando los siguientes comandos
```sh
enable
configure terminal
vlan 16
name Ventas
exit
vlan 26
name Distribucion
exit
vlan 36
name Administracion
exit
vlan 46
name Servidores
exit
exit
```

#### Configuracion VTP Router (R0)
Se inicia configurando el Router como servidor de VTP, aplicando los siguientes comandos
```sh
enable
configure terminal
vtp mode server
vtp domain g6
vtp password g6
exit
show vtp status
copy running-config startup-config
```
#### Resultado de configuración
![Resultado de la configuracion](https://https://github.com/cocacore7/REDES2_1S2022_GRUPO6/Resources/img_config_r0.JPG)

### Configuracion VLAN Switch0 (S0)
Se inicia configurando el Switch con las Vlans 16-Ventas y 26-Distribucion, aplicando los siguientes comandos
```sh
enable
configure terminal
vlan 16
name Ventas
exit
vlan 26
name Distribucion
exit
vlan 36
name Administracion
exit
vlan 46
name Servidores
exit
exit

configure terminal
interface F0/10
switchport access vlan 16
switchport mode trunk
switchport nonegotiate
exit
interface F0/11
switchport access vlan 26
switchport mode trunk
switchport nonegotiate
exit
exit
```
#### Configuracion VTP Switch0 (S0)
Se inicia configurando el Router como servidor de VTP, aplicando los siguientes comandos
```sh
configure terminal
vtp mode client
vtp domain g6
vtp password g6
exit
show vtp status
copy running-config startup-config
```
#### Resultado de configuración
![Resultado de la configuracion](https://https://github.com/cocacore7/REDES2_1S2022_GRUPO6/Resources/img_config_S0.JPG)

### Configuracion Switch2 (S2)
Se inicia configurando el Switch con las Vlans 26-Distribucion y 36-Administracion, aplicando los siguientes comandos
```sh
enable
configure terminal
vlan 16
name Ventas
exit
vlan 26
name Distribucion
exit
vlan 36
name Administracion
exit
vlan 46
name Servidores
exit
exit

configure terminal
interface F0/10
switchport access vlan 36
switchport mode trunk
switchport nonegotiate
exit
interface F0/11
switchport access vlan 26
switchport mode trunk
switchport nonegotiate
exit
exit
```
#### Configuracion VTP Switch2 (S2)
Se inicia configurando el Router como servidor de VTP, aplicando los siguientes comandos
```sh
configure terminal
vtp mode client
vtp domain g6
vtp password g6
exit
show vtp status
copy running-config startup-config
```

#### Resultado de configuración
![Resultado de la configuracion](https://https://github.com/cocacore7/REDES2_1S2022_GRUPO6/Resources/img_config_S2.JPG)

