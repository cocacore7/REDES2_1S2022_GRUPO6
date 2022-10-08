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
| Educacion 10 |   192.168.86.128  |  192.168.86.129   |  192.168.86.254  |  192.168.26.255 | 255.255.255.128 / 25 |
| Cultura y deportes 20 | 192.168.26.0  | 192.168.26.1  | 192.168.26.126    | 192.168.26.127  | 255.255.255.128 / 25 |
| Salud 30 |  192.168.86.0  |  192.168.86.1  |  192.168.86.126  |  192.168.26.127   |  255.255.255.128 / 25  |
| Funcion Publica 40 | 192.168.26.128  | 192.168.26.129   | 192.168.26.254   | 192.168.26.255 | 255.255.255.128 / 25 |
|Desarrollo Empresarial 50|192.168.56.0|192.168.56.1|192.168.56.126|192.168.56.127|255.255.255.128 / 25|
| Desarrollo Económico 60 |192.168.56.128|192.168.56.129|192.168.56.254|192.168.56.255|255.255.255.128 / 25|
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

---
## _ISP Telefonica_

### Configuraciones para sw 1.

```sh
ena
conf t
vtp mode client
vtp domain g6
vtp password g6

int f0/1
sw mode trunk
sw trunk allowed vlan all

int f0/2
sw mode access
switchport access vlan 1
exit

int f0/3
sw mode access
switchport access vlan 1
exit
```

### Configuraciones para sw 2.

```sh
ena
conf t
vtp mode client
vtp domain g6
vtp password g6

int f0/1
sw mode trunk
sw trunk allowed vlan all
exit

int f0/2
switchport access vlan 10
exit

int f0/3
switchport access vlan 10
exit
```

### Configuraciones para sw 3.

```sh
enable
configure terminal
int range f0/1 - 4
sw mode trunk
sw trunk allowed vlan all
exit
```

### Configuraciones para router 1.

```sh

enable
configure terminal
int gig0/0
no shutdown
ip address 5.5.5.1 255.255.255.252
exit


enable
configure terminal
int gig0/1
no shutdown
ip address 2.2.2.2 255.255.255.252
exit

enable
configure terminal
int gig0/2
no shutdown
ip address 4.4.4.2 255.255.255.252
exit

enable
configure terminal
int serial0/2/0
no shutdown
ip address 8.8.8.1 255.255.255.252
exit

.......................................RIP..........................................
enable
configure terminal
router rip 
version 2
no auto-summary
network 5.5.5.0
exit

enable
configure terminal
router eigrp 200
network 8.8.8.0 0.0.0.3
network 4.4.4.0 0.0.0.3
network 2.2.2.0 0.0.0.3
exit
exit
wr

enable
configure terminal
router rip 
default-information originate
exit 
exit
wr

.......................................Redistribucion rip-eigrp..........................................
enable
configure terminal
router eigrp 200
redistribute rip metric 255 1 1 1 1
exit
router rip 
redistribute eigrp 200 metric 15
exit
exit
wr
```

### Configuraciones para router 2.

```sh

enable
configure terminal
int gig0/2
no shutdown
ip address 4.4.4.1 255.255.255.252
exit

int gig0/1
no shutdown
ip address 3.3.3.1 255.255.255.252
exit

int gig0/0
no shutdown
ip address 6.6.6.1 255.255.255.252
exit

enable
configure terminal
int serial0/2/0
no shutdown
ip address 7.7.7.2 255.255.255.252
exit

.......................................EIGRP..........................................
enable
configure terminal
router eigrp 200
network 4.4.4.0 0.0.0.3
exit
exit
wr

configure terminal
router rip 
version 2
no auto-summary
network 6.6.6.0
network 7.7.7.0
network 3.3.3.0 
exit

enable
configure terminal
router rip 
default-information originate
exit 
exit
wr

```

### Configuraciones para router 3.

```sh
enable
configure terminal
int gig0/0
ip address 192.168.86.1 255.255.255.128
no shutdown
exit

int gig0/2
no shutdown
ip address 1.1.1.1 255.255.255.252
exit

int gig0/1
no shutdown
ip address 2.2.2.1 255.255.255.252
exit


int g0/0.10
encapsulation dot1Q 10
ip address 192.168.86.129 255.255.255.128
no shutdown
exit

int g0/0.30
encapsulation dot1Q 30
ip address 192.168.86.1 255.255.255.128
no shutdown
exit

int g0/0.40
encapsulation dot1Q 40
ip address 192.168.26.129 255.255.255.128
no shutdown
exit

int g0/0.20
encapsulation dot1Q 20
ip address 192.168.26.1 255.255.255.128
no shutdown
exit


enable
configure terminal
int serial0/2/0
no shutdown
ip address 7.7.7.1 255.255.255.252
exit

.......................................RIP..........................................
enable
configure terminal
router rip 
version 2
no auto-summary
network 1.1.1.0
network 7.7.7.0
network 192.168.86.0
exit

enable
configure terminal
router eigrp 200
network 2.2.2.0 0.0.0.3
exit
exit
wr

enable
configure terminal
router rip 
default-information originate
exit 
exit
wr

```

### Configuraciones para router 4.

```sh

enable
configure terminal
int gig0/0
ip address 192.168.86.129 255.255.255.128
no shutdown
exit

int gig0/2
no shutdown
ip address 1.1.1.2 255.255.255.252
exit

int gig0/1
no shutdown
ip address 3.3.3.2 255.255.255.252
exit

enable
configure terminal
int serial0/2/0
no shutdown
ip address 8.8.8.2 255.255.255.252
exit

config t

int g0/0.10
encapsulation dot1Q 10
ip address 192.168.86.129 255.255.255.128
no shutdown
exit


.......................................EIGRP..........................................
ena
config t
router eigrp 200
network 8.8.8.0 0.0.0.3
exit
exit
wr
config t
router rip
version 2
network 192.168.86.0
network 1.1.1.0
network 3.3.3.0
exit

```

### Configuraciones para router 5.

```sh
int g0/0
no sw
ip address 5.5.5.2 255.255.255.252
no shutdown
exit

int g0/1
no sw
ip address 6.6.6.2 255.255.255.252
no shutdown
exit

int g0/2
no sw
ip address 9.9.9.1 255.255.255.252
no shutdown
exit

config t
router eigrp 200	
network 9.9.9.0 0.0.0.3
exit
exit

enable
configure terminal
router rip 
version 2
no auto-summary
network 5.5.5.0
network 6.6.6.0
exit

.......................................Redistribucion rip-eigrp..........................................
enable
configure terminal
router eigrp 200
redistribute rip metric 255 1 1 1 1
exit
router rip 
redistribute eigrp 200 metric 15
exit
exit
wr
```

### Confguraciones router bgp.

```sh

ena
config t
int g0/1
ip address 9.9.9.2 255.255.255.252
no shutdown
exit

int g0/0
ip address 24.24.24.2 255.255.255.252
no shutdown
exit

config t
router eigrp 200	
network 9.9.9.0 0.0.0.3
exit
exit

.......................................configuracion rip con bgp..........................................
enable
configure terminal
router bgp 100
network 24.24.24.0 mask 255.255.255.252
neighbor 24.24.24.1 remote-as 200
redistribute eigrp 200
exitexit
router eigrp 200
redistribute bgp 100 metric 1 1 1 1 1
exit
exit
wr
```

### access list router 3.
```sh
enable
conf t
access-list 6 permit 192.168.86.128 0.0.0.7
access-list 6 permit 192.168.26.128 0.0.0.7
access-list 6 deny any
interface gig0/0
ip access-group 6 OUT
```

### access list router 4
```sh
enable
conf t
access-list 5 permit 192.168.86.0 0.0.0.7
access-list 5 permit 192.168.26.128 0.0.0.7
access-list 5 deny any
interface gig0/0
ip access-group 5 OUT
```

---

---
## _ISP Knology_
#### Configuracion de Interfaces router BGP
```sh
enable 
configure terminal
int gig0/1
no shutdown
ip address 11.11.11.2 255.255.255.252
exit
int gig0/2
no shutdown
ip address 25.25.25.2 255.255.255.252
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (BGP y OSPF) router BGP
```sh
enable
configure terminal
router ospf 103
network 11.11.11.0 0.0.0.3 area 0
exit
router bgp 300
network 25.25.25.0 mask 255.255.255.252
neighbor 25.25.25.1 remote-as 200
exit
exit
copy running-config startup-config
```
#### Configuracion de Distribucion de rutas router BGP
```sh
enable
configure terminal
router bgp 300
redistribute ospf 103
exit
router ospf 103
redistribute bgp 300 metric 1 subnets 
exit
exit
copy running-config startup-config
```
#### Configuracion de Interfaces router 0
```sh
ena
conf t
int gig0/0
no shutdown
ip address 12.12.12.2 255.255.255.252
exit
int gig0/1
no shutdown
ip address 13.13.13.2 255.255.255.252
exit
int gig0/2
no shutdown
ip address 11.11.11.1 255.255.255.252
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (EIGRP y OSPF) router 0
```sh
ena
conf t
router ospf 102
network 11.11.11.0 0.0.0.3 area 0
network 12.12.12.0 0.0.0.3 area 0
exit
router eigrp 200
network 13.13.13.0 0.0.0.3
exit
exit
copy running-config startup-config
```
#### Configuracion de Distribucion de rutas router 0
```sh
ena
conf t
router eigrp 200
redistribute ospf 102 metric 1 1 1 1 1
exit
router ospf 102
redistribute eigrp 200 metric 15 subnets
exit
exit
copy running-config startup-config
```
#### Configuracion de Interfaces router 1
```sh
ena
conf t
int gig0/0
no shutdown
ip address 12.12.12.1 255.255.255.252
exit
int gig0/1
no shutdown
ip address 14.14.14.2 255.255.255.252
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (OSPF) router 1
```sh
ena
conf t
router ospf 101
network 12.12.12.0 0.0.0.3 area 0
network 14.14.14.0 0.0.0.3 area 0
exit
exit
copy running-config startup-config
```
#### Configuracion de Interfaces router 2
```sh
ena
conf t
int gig0/0
no shutdown
ip address 13.13.13.1 255.255.255.252
exit
int gig0/1
no shutdown
ip address 15.15.15.2 255.255.255.252
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (EIGRP) router 2
```sh
ena
conf t
router eigrp 200
network 13.13.13.0 0.0.0.3
network 15.15.15.0 0.0.0.3
exit
exit
copy running-config startup-config
```
#### Configuracion de Interfaces router 3
```sh
ena
conf t
int gig0/1
no shutdown
ip address 14.14.14.1 255.255.255.252
exit
int gig0/2
no shutdown
ip address 192.168.56.1 255.255.255.128
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (OSPF) router 3
```sh
ena
conf t
router ospf 100
network 14.14.14.0 0.0.0.3 area 0
network 192.168.56.5 0.0.0.127 area 0
exit
exit
copy running-config startup-config
```
#### Configuracion de Acces-List router 3
```sh
ena
conf t
access-list 5 permit 192.168.56.128 0.0.0.127
access-list 5 deny any
interface gig0/2
ip access-group 5 OUT
exit
exit
copy running-config startup-config
```
#### Configuracion de Interfaces router 4
```sh
ena
conf t
int gig0/1
no shutdown
ip address 15.15.15.1 255.255.255.252
exit
int gig0/2
no shutdown
ip address 192.168.56.129 255.255.255.128
exit
exit
copy running-config startup-config
```
#### Configuracion de Protocolos de enrutamiento (EIGRP) router 4
```sh
ena
conf t
router eigrp 200
network 15.15.15.0 0.0.0.3
network 192.168.56.135 0.0.0.127
exit
exit
copy running-config startup-config
```
#### Configuracion de Acces-List router 4
```sh
ena
conf t
access-list 5 permit 192.168.56.0 0.0.0.127
access-list 5 deny any
interface gig0/2
ip access-group 5 OUT
exit
exit
copy running-config startup-config
```
#### Configuracion de VLAN Switch 1
```sh
ena
configure terminal
vlan 50
name DesarrolloEmpresarial
exit
copy running-config startup-config
```
#### Configuracion de VTP Switch 1
```sh
ena
conf t
vtp mode server
vtp domain g6
vtp password g6
exit
copy running-config startup-config
```
#### Configuracion de Puertos Switch 1
```sh
ena
conf t
interface F0/1
switchport mode access
switchport access vlan 1
switchport nonegotiate
exit
interface F0/2
switchport mode access
switchport access vlan 1
switchport nonegotiate
exit
interface F0/3
switchport mode trunk
switchport trunk allowed vlan all
switchport nonegotiate
exit
exit
copy running-config startup-config
```
#### Configuracion de VLAN Switch 2
```sh
ena
configure terminal
vlan 60
name DesarrolloEconomico
exit
copy running-config startup-config
```
#### Configuracion de VTP Switch 2
```sh
ena
conf t
vtp mode server
vtp domain g6
vtp password g6
exit
copy running-config startup-config
```
#### Configuracion de Puertos Switch 2
```sh
ena
conf t
interface F0/1
switchport mode access
switchport access vlan 1
switchport nonegotiate
exit
interface F0/2
switchport mode access
switchport access vlan 1
switchport nonegotiate
exit
interface F0/3
switchport mode trunk
switchport trunk allowed vlan all
switchport nonegotiate
exit
exit
copy running-config startup-config
```
---

---
## _Migracion IPV6_
#### Migracion IPV4 a IPV6
```sh
###### Router 1 ######
enabled
conf t
ipv6 unicast-routing
ipv6 router rip redv6
exit
int gig0/1
ipv6 address 2001:DB8:A:1::1/64
ipv6 rip redv6 enable
no shutdown
exit
int gig0/0
ipv6 address 2001:DB8:B:1::1/64
ipv6 rip redv6 enable
no shutdown
exit
copy running-config startup-config

###### Router 2 ######
enable
conf t
ipv6 unicast-routing
ipv6 router rip redv6
exit
int gig0/2
ipv6 address 2001:db8:B:1::2/64
ipv6 rip redv6 enable
no shutdown
exit
interface Tunel0
ipv6 address 3000::1/112
ipv6 rip redv6 enable
tunnel source gig0/0
tunnel destination 25.25.25.2 
tunnel mode ipv6ip
exit
copy running-config startup-config

###### Router 3 ######
enable
conf t
ipv6 unicast-routing
ipv6 router rip redv6
exit
int gig0/0
ipv6 address 2001:DB8:B:2::2/64
ipv6 rip redv6 enable
no shutdown
exit
int Tunnel10
ipv6 address 3000::2/112
ipv6 rip redv6 enable
tunnel source gig0/0
tunnel detination 24.24.24.2
tunnel mode ipv6ip
exit
copy running-config startup-config

###### Router 4 ######
ena
conf t
ipv6 unicast-routing
ipv6 router rip redv6
exit
int gig0/0
ipv6 address 2001:DB8:B:2::1/64
ipv6 rip redv6 enable
no shutdown
exit
int gig0/1
ipv6 address 2001:B8:A:2::1/64
ipv6 rip redv6 enable
no shutdown
exit
copy running-config startup-config
```