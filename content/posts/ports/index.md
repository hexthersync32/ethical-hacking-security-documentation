+++
title = "Ports"
date = "2019-01-25"
author = "#port #ports #port-scanning #network-port"
description = " "
weight = 19
+++

<!--https://cheatsheets.zip/go (Cheatseat) -->

> Para qual aplicação dentro do host este dado deve ir?

|   **PROTOCOL**      |  **LAYER**    | **WHY IT USES PORTS?**    |
| ---------------- | ------------  | ------------ |
| TCP |   Transport   | Multiplexar aplicações e controlar sessões  |
| UDP | Transport | Entregar dados a aplicações sem controle de conexão |

![Terminal Theme Preview](https://i0.wp.com/powercampus.de/wp-content/uploads/2021/08/PVM_PI_SRIOV_Internal_Ethernet_Switch.jpg?fit=750%2C327&ssl=1)

# 1. Network ports classification

|   **CLASS**      |  **RANGE**    |
| ---------------- | ------------  |
| Well-known ports |    0 - 1023   |
| Rigistered ports | 1024 - 49151  |
|   Dynamic ports  | 49151 - 65565 |    

![Terminal Theme Preview](https://thecybersecurityman.com/wp-content/uploads/2018/01/port-numbers.png?w=925)

## 1.1. Well-known ports
Reserved for system-level and common network services. Example: 
- Port 21 (FTP service); 
- Port 22 (SSH service)
- Port 23 (Telnet service);
- Port 443 (HTTPS);
- Port 465 (SMTP service); etc.

## 1.2. Rigistered ports
Assigned to specific applications or services, often requiring registration with IANA, like databases or game servers. Example: 
- Port 1433 (SQL Server);

## 1.3. Dynamic ports
Also called **_Ephemeral Ports_**, these are automatically assigned by the operating system for temporary, outgoing client connections (e.g., when your browser connects to a website).

> **Obs.:** When you visit a website, your browser uses a high-numbered dynamic port as the source and connects to the website's well-known port (like 80 or 443) as the destination, allowing both ends of the conversation to be identified. 

# 2. Nmap snapshot

Port scanning result provides a detailed snapshot of a target as a host or network security posture. 

Nmap confirms whether a host is active and then carefully lists each scanned port, providing details such as the port number, its state, the running service; this informations helps security professionals to know what services are exposed, identify outdated or vulnerable software.

Nmap classifies ports into six states (depending on how the target responds):

## 2.1. Open

It indicates that a service is actively running and listening.

> ATENTION! Althought open ports are essential for network funcionalities, each one also presents a potential entry point for attackers.

```bash
Nmap scan report for 10.10.37.102
Host is up (0.11s latency).

PORT   STATE SERVICE
80/tcp open  http
```

## 2.2. Closed

A port is reacheble but no application is listening, i.e., the host is up and responding, even though no service is currently using that port.

## 2.3. Filtered

Packet is blocked by a firewall, router or other security device. No response received, preventing accurate detection.

> ATENTION! While filtered ports offer better protection, they may also require carfeful tuning to avoid accidentally blocking legitimate traffic.

## 2.4. Unfiltered

It means the port is accessible and not blocked by a firewall but Nmap cannot determine it's open or closed typically seen with TCP ACK scans (`-sA` flag).

This state suggests that the firewall is allowing packets through but isn't giving enough information about the actual port status.

## 2.5. Open | Filtered

## 2.6. Closed | Filtered

---

# 3. Protocolos que não usam com portas:

Os protocolos que não atuam diretamente com o uso de portas atuam fora da camada de transporte. Em outras palavras, eles não entregam dados a aplicações de usuários. Existem outras funções relevantes, como

- Controle de rede;
- Transporte de sinalização;
- Descobrimento de endereços;
- Mantenimento de rotas; etc.

Exemplo segundo o modelo OSI:

|   **PROTOCOL**      |  **LAYER**    | **HOW ITS IDENTIFIES THE SERVICE?**    |
| ---------------- | ------------  | ------------ |
| IP |   Network   | Endereço IP |
| ICMP |   Network   | Tipo e código da mensagem |
| ARP |   Data Link   | MAC Address |
| Ethernet |   Data Link   | EtherType |
| OSPF |   Network   | Número de protocolo IP |

---

# FAQ
## 1. Portas são utilizadas em quais camadas do modelo TCP/IP e OSI?

De acordo com o modelo TCP/IP, a função das portas é a identificação de qual ****aplicação****/****processo**** está operando em um host de modo que este receba os dados de outra máquina.

Os principais protocolos pertencentes a este modelo são **TCP** e **IP**.

Abaixo está a explicação sobre a camada na qual as portas operam:

|   **MODEL**      |  **LAYER**    | **NAME**    |
| ---------------- | ------------  | ------------ |
| TCP/IP |   4   | Transport  |
| OSI | 4 | Transport |

## 2. Os números de portas são um conceito exclusivo somente através do modelo TCP/IP?

Não, os números de portas não pertencem exclusivamente ao **modelo TCP/IP**, mas sim aos protocolos da Camada de Transporte, principalmente TCP e UDP.

### Modelo OSI:
Define a lógica de multiplexação e demultiplexação de aplicações. O modelo explica o que deve ser feito, e não como, isto é, o conceito de portas se encaixa na **Camada 4** do modelo, mas ele não define números específicos.

### Modelo TCP/IP:
É responsável pela implementação das portas por meio do TCP e UDP, onde os números de portas são efetivamente definidos, padronizados e usados.

### Ponto-chave:
- As portas são um mecanismo implementados pelos protocolos TCP e UDP;
- O modelo TCP/IP descreve apenas onde esses protocolos se encaixam;
- O conceito de porta existe independentemente do modelo;
- A lógica é da camada de transporte.

## 3. Uma porta de rede é um componente físico de uma máquina?

## 4. Qual o significado de porta lógica?

## 5. O que significa um serviço no contexto de redes de computadores?

## 6. Qual a diferença entre processos e serviços de uma máquina?

## 7. Como a IANA padroniza as portas?

## 8. O que significa multiplexação de aplicações?