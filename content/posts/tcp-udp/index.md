+++
title = "TCP and UDP"
date = "2019-01-25"
description = "Client for the `whois` directory service."
weight = 21
+++

# 1. Definition

Protocolos utilizados para o envio de dados entre computadores.

O TCP (Transmission Control Protocol) é um protocolo de transporte confiável que garante que os dados enviados entre dispositivos cheguem de forma correta e ordenada. Ele realiza controle de fluxo, detecção de erros e retransmissão de pacotes perdidos, tornando-o ideal para aplicações que exigem alta confiabilidade, como a navegação na web (HTTP) e a transferência de arquivos (FTP).

O UDP (User Datagram Protocol), por outro lado, é um protocolo de transporte não confiável e sem conexão. Ele envia pacotes de dados (datagramas) sem garantir que cheguem ao destino ou que cheguem na ordem correta, o que o torna mais rápido e com menor sobrecarga. Isso o torna adequado para aplicações onde a velocidade é mais importante que a confiabilidade, como transmissões de vídeo em tempo real (streaming) ou jogos online.

# 2. Differencies summary

A principal diferença entre o TCP e o UDP é que o TCP garante a entrega ordenada e sem erros dos dados, enquanto o UDP é mais simples e rápido, mas sem garantir a entrega ou a ordem dos pacotes. Portanto, TCP é usado em situações que exigem precisão, e UDP em contextos onde a agilidade é mais relevante.

![Terminal Theme Preview](https://www.datocms-assets.com/41207/1627941441-header.jpg?q=60)

# 3. Three-Way Handshake (SYNC/ACK)
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

## 3.1. Tcpdump

It can capture network traffic to display the SYN, SYN-ACK, and ACK packets in real-time.

```bash
tcpdump
```

---

## 3.2. Nestat

It shows the various connection states (`SYN-SENT`, `SYN-RCVD`, `CLOSE_WAIT`, `TIME_WAIT` and `ESTABLISHED`) within the kernel's state machine. A more recent variation of this command is `ss`.

```bash
nestat
```

Resultado:

```bash
Active Internet connections (w/o servers)
Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp       64      0 LUCLAPTOP:36682         ec2-35-164-85-72.:https CLOSE_WAIT 
tcp        0      0 localhost:xtel          localhost:34746         ESTABLISHED
tcp        0      0 localhost:34522         localhost:xtel          ESTABLISHED
tcp        0      0 localhost:59766         localhost:xtel          ESTABLISHED
tcp        0      0 localhost:xtel          localhost:44612         ESTABLISHED
tcp        0      0 LUCLAPTOP:49490         172.64.148.235:https    ESTABLISHED
tcp        0      0 localhost:44612         localhost:xtel          ESTABLISHED
tcp        0      0 LUCLAPTOP:51980         amyrose.canonical.:http TIME_WAIT  
tcp        0      0 localhost:xtel          localhost:59766         ESTABLISHED
tcp        0      0 localhost:xtel          localhost:34522         ESTABLISHED
tcp        0      0 LUCLAPTOP:42546         104.208.16.90:https     ESTABLISHED
tcp        0      0 localhost:34746         localhost:xtel          ESTABLISHED
tcp        0      0 LUCLAPTOP:59006         relay-4a0880f8.ne:https ESTABLISHED
udp        0      0 LUCLAPTOP:57243         bog02s19-in-f4.1e:https ESTABLISHED
udp        0      0 LUCLAPTOP:bootpc        _gateway:bootps         ESTABLISHED
udp        0      0 LUCLAPTOP:60399         bfbdff6d.virtua.c:https ESTABLISHED

```

> A aplicação **Wireshark** também permite a mesma visualização, sendo desta vez através de interface gráfica, capturando arquivos `.pcap` e visualizando o processo de handshake com detalhes.

# FAQ

## 1. Por que os protocolos TCP/UDP são tão relevantes para a rede de computadores?

Os protocolos TCP e UDP são essenciais para a comunicação eficiente em redes de computadores, pois eles definem como os dados são transmitidos entre dispositivos. O TCP oferece uma transmissão confiável, garantindo que os dados cheguem ao destino sem erros e na ordem correta, o que é fundamental para serviços como navegação na web, transferências de arquivos e e-mails. Já o UDP, ao ser mais leve e rápido, é crucial para aplicações que exigem baixa latência, como videoconferências e jogos online, onde a velocidade é mais importante que a perfeição na entrega dos dados.

Ambos os protocolos permitem a escolha entre confiabilidade (TCP) e velocidade (UDP), atendendo às necessidades específicas de diferentes tipos de serviços e aplicações na rede. Sem esses protocolos, a comunicação moderna na internet seria impossível, já que eles são a espinha dorsal para a troca de informações entre servidores, clientes e dispositivos em geral.

## 2. TCP/UDP são uma forma de categorização de outros protocolos?

Sim, TCP e UDP podem ser vistos como formas de categorização de protocolos de transporte. Eles são, na verdade, protocolos de camada de transporte dentro do modelo OSI (Open Systems Interconnection) e do modelo TCP/IP. Esses dois protocolos são responsáveis por gerenciar a transmissão de dados entre dispositivos em uma rede, mas de maneiras diferentes.

Quando falamos de protocolos como HTTP, FTP, SMTP, ou DNS, esses protocolos de aplicação dependem de TCP ou UDP para enviar e receber dados pela rede. Por exemplo, o HTTP normalmente usa TCP para garantir uma comunicação confiável entre o servidor e o navegador, enquanto DNS frequentemente usa UDP por ser uma comunicação rápida e simples que não necessita de garantias de entrega. Então, TCP e UDP são modos de transporte que categorizam a forma como outros protocolos da camada de aplicação transmitem dados.

## 3. É possível que um protocolo seja classificado tanto quanto TCP quanto UDP?

Sim, é possível que um protocolo seja classificado tanto quanto TCP quanto UDP, dependendo de como ele é configurado e do seu comportamento. Isso acontece porque alguns protocolos de aplicação podem ser implementados sobre TCP ou UDP, dependendo das necessidades específicas da aplicação. A escolha entre TCP ou UDP determina o tipo de transporte que será utilizado, mas o protocolo de aplicação permanece o mesmo.

Por exemplo, o DNS (Domain Name System) é um protocolo de aplicação que pode ser implementado sobre UDP para consultas rápidas e de baixa latência, mas pode ser configurado para usar TCP quando há necessidade de maior confiabilidade, como em transferências de zonas de dados DNS, onde a integridade e a ordem dos pacotes são mais críticas. Outro exemplo é o FTP (File Transfer Protocol), que normalmente usa TCP para garantir a entrega confiável dos dados, mas pode usar UDP em implementações específicas para otimizar o desempenho em situações onde a perda de pacotes não seja um problema crítico.

Portanto, a decisão entre TCP e UDP para um protocolo de aplicação depende das características da comunicação que ele precisa realizar, como confiabilidade versus velocidade. O protocolo em si (como DNS ou FTP) pode funcionar em ambos os tipos de transporte, mas com diferentes garantias e comportamentos.