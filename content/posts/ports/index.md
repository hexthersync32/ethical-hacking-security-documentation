+++
title = "Ports"
date = "2019-01-25"
author = "#port #ports #port-scanning #network-port"
description = " "
weight = 18
+++

<!--https://cheatsheets.zip/go (Cheatseat) -->

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


# FAQ
## 1. Portas são utilizadas em quais camadas do modelo TCP/IP e OSI?

## 2. Uma porta de rede é um componente físico de uma máquina?

## 3. Qual o significado de porta lógica?

## 4. O que significa um serviço no contexto de redes de computadores?

## 5. Qual a diferença entre processos e serviços de uma máquina?
