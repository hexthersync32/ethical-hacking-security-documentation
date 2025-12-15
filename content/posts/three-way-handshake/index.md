+++
title = "Three-Way Handshake (SYN/ACK)"
date = "2019-01-25"
description = "Client for the `whois` directory service."
weight = 24
+++

# 1. Overview

Processo responsável pelo estabelecimento de conexão através do protocolo TCP. Para que isso se concretize, é importante que essa técnica atua com os seguintes passos:

- `SYN` = (Synchronize)

- `ACK` = (Acknowledgement)

Os processos são os seguintes:

1. O cliente envia um pacote com a flag **_SYN_** ativa junto de uma sequência randômica de números (ISN);
2. O cliente entra em estado de **_SYN-SENT_**;
3. O servidor responde com uma pacote com as flags **_SYN + ACK_** (ACK = Client ISN + 1) e providenciando seu próprio ISN;
4. O servidor entra em estado de **_SYN-RCVD_**;
5. O cliente responde com um pacote **_ACK_** (ACK = Server ISN + 1).
6. Ambos os participantes entram em estado de **_ESTABLISHED_** e os dados podem ser transferidos.

Administradores de rede, pentesters e engenheiros de segurança pode observar a three-way handshake por meio do Shell Linux.

Comandos mais comuns:

## 1.1. Tcpdump

It can capture network traffic to display the SYN, SYN-ACK, and ACK packets in real-time.

```bash
tcpdump
```

---

## 1.2. Nestat

It shows the various connection states (`SYN-SENT`, `SYN-RCVD`, `CLOSE_WAIT`, `TIME_WAIT` and `ESTABLISHED`) within the kernel's state machine. A more recent variation of this command is `ss`.

```bash
nestat
```

Resultado:

```bash
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 GLB01TIDP13274:54128    151.101.1.91:https      ESTABLISHED
tcp        0      0 localhost:xtel          localhost:40702         TIME_WAIT  
tcp        0      0 localhost:xtel          localhost:47702         TIME_WAIT  
tcp        0      0 GLB01TIDP13274:52122    93.243.107.34.bc.:https ESTABLISHED
tcp        0      0 localhost:53914         localhost:xtel          ESTABLISHED
tcp        0      0 localhost:40686         localhost:xtel          ESTABLISHED
tcp        0      0 GLB01TIDP13274:52116    93.243.107.34.bc.:https ESTABLISHED
tcp        0      0 GLB01TIDP13274:39248    upload-lb.magru.w:https ESTABLISHED
```

> A aplicação **Wireshark** também permite a mesma visualização, sendo desta vez através de interface gráfica, capturando arquivos `.pcap` e visualizando o processo de handshake com detalhes.


# FAQ
## 1. Por que o comando `netstat` deve ser utilizado?

- **Monitor connection status**: identify if connections are successfully moving to the `ESTABLISHED` state or if they are stuck int intermediate states;

- **Troubleshoot failures:** if connections remain in `SYN_SENT` (client side) or `SYN_RCVD` (server side), it suggests a firewall might be blocking traffic, a service ins't listening, or there's a potential **_SYN Flood Attack**;

- **Detect security threads:** a large number of connections in the `SYN_RCVD` state on a server can indicate a Denial of Service (**_DoS_**) attack.