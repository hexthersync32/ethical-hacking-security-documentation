+++
title = "Devices"
date = "2019-01-25"
author = "#devices #network-devices"
description = "All the kinds of decives that are used on a computer network."
weight = 5
+++

# 1. Hub / Ethernet hub

É responsável por conectar todos os dispositivos de redes juntos em uma rede interna. 

Hardware básico que conecta vários computadores ou dispositivos em uma rede local (LAN).

É um dispositivo de rede simples que conecta diversos dispositivos em uma rede local (LAN), retransmitindo os sinais recebidos para todas as portas conectadas.

### Pontos positivos:
- Custo baixo: É um dos equipamentos mais baratos.

- Simplicidade: Fácil de usar e configurar, ideal para redes pequenas.

### Pontos negativos:
- Baixa eficiência: Todos os dispositivos recebem os mesmos dados, o que pode gerar congestionamento e perda de performance.

- Sem controle de tráfego: Não há gerenciamento de como o tráfego é distribuído entre os dispositivos.

---

# 2. Switch
{{< figure src="https://cdn.blueally.com/secureswitches/images/switches/dqs-5000-32q28/dqs-5000-32q28-a1-side-1664x936.png" alt="D-Link DQS-5000-32Q28" position="center" caption="D-Link DQS-5000-32Q28" captionPosition="center" >}}

O switch é um dispositivo de rede que, ao contrário do hub, encaminha os dados diretamente para o dispositivo de destino, utilizando a tabela MAC, melhorando a eficiência e desempenho da rede.

### Pontos positivos:

- Desempenho superior: Reduz colisões e congestionamentos, aumentando a velocidade da rede.

- Gerenciamento de tráfego: Oferece maior controle sobre como os dados são distribuídos.

### Pontos negativos:

- Custo mais alto: É mais caro que o hub.

- Configuração mais complexa: Alguns switches avançados exigem configurações detalhadas.

---

# 3. Router

{{< figure src="https://m.media-amazon.com/images/I/710Vt9f1vEL._AC_UF894,1000_QL80_.jpg" alt="Mikrotik hEX Gigabit 5P RB750Gr3" position="center" caption="Mikrotik hEX Gigabit 5P RB750Gr3" captionPosition="center" >}}

{{< figure src="https://salescdn.net/1i3LNslVTxOHm8pcrft6pUZ0TH0=/adaptive-fit-in/500x0/prod/store/13040/medias/products/roteador-wireless-tp-link-ac750-archer-c20-dual-band---84247-cf6b64b7-1490-4762-8e5a-e90e7ebe73d9.webp" alt="TP-Link AC750 Archer C20" position="center" caption="TP-Link AC750 Archer C20" captionPosition="center" >}}

Este equipamento possui a função de realizar o encaminhados de enderços IP aos equipamentos conectados a ele.

O roteador é responsável por encaminhar pacotes de dados entre redes diferentes (por exemplo, da rede local para a internet) e, em alguns casos, pode também realizar funções de firewall e DHCP.

### Pontos positivos:

- Conexão entre redes: Permite a comunicação entre diferentes redes, como LAN e internet.

- Segurança: Oferece funcionalidades de segurança, como firewall e NAT.

### Pontos negativos:

- Complexidade na configuração: Pode ser difícil de configurar para iniciantes.

- Custo: Modelos avançados podem ser caros.

---

# 4. Modem

Equipamento necessário para que haja internet disponibilizada dentro de uma rede, seja ela uma rede doméstica ou corporativa.

Responsável pela modularização e modularização do sinal oriundo da operadora de internet.

O modem é um dispositivo que converte os sinais digitais do computador em sinais analógicos para transmissão pela linha telefônica ou cabo, e vice-versa.

### Pontos positivos:

- Conexão com a internet: Essencial para conectar a rede doméstica à internet.

- Facilidade de uso: Normalmente, é plug-and-play e fácil de configurar.

### Pontos negativos:

- Dependência de tecnologia: Sua funcionalidade depende da tecnologia de conexão disponível (ADSL, fibra, cabo).

- Desempenho limitado: Em algumas configurações, pode limitar a velocidade da conexão.

---

# 5. Bridge

A bridge conecta duas redes locais (ou segmentos de uma mesma rede) e gerencia a comunicação entre elas, evitando colisões de pacotes de dados.

### Pontos positivos:

- Redução de tráfego: Ajuda a dividir redes congestionadas, aumentando a eficiência.

- Conexão transparente: Não requer reconfiguração dos dispositivos.

### Pontos negativos:

- Sem inteligência para roteamento: Apenas conecta redes, não direciona pacotes de forma inteligente como um roteador.

- Desempenho reduzido em grandes redes: Pode não ser eficiente para redes muito grandes.

---

# 6. Firewall

{{< figure src="https://m.media-amazon.com/images/I/61YoNT4HPZL._AC_UF1000,1000_QL80_.jpg" alt="Fortinet 40F" position="center" caption="Fortinet 40F" captionPosition="center" >}}

O firewall é um sistema de segurança que monitora e controla o tráfego de dados entre redes, bloqueando ou permitindo pacotes de acordo com regras definidas.

### Pontos positivos:

- Segurança: Protege a rede contra acessos não autorizados e ataques.

- Personalização de regras: Permite a criação de regras específicas para o tráfego de dados.

### Pontos negativos:

- Complexidade: Pode ser difícil de configurar para quem não tem conhecimento técnico.

- Impacto no desempenho: Em algumas situações, pode afetar a velocidade da rede devido à inspeção de pacotes.

---

# 7. Access Point

O Access Point é um dispositivo que conecta dispositivos sem fio a uma rede local, criando uma "ponto de acesso" para comunicação via Wi-Fi.

### Pontos positivos:

- Conectividade sem fio: Expande a cobertura Wi-Fi, permitindo a conexão de dispositivos sem fio.

- Fácil de configurar: Normalmente, é simples de instalar e configurar.

### Pontos negativos:

- Interferência: A qualidade do sinal pode ser afetada por interferências e obstáculos físicos.

- Distância limitada: Sua cobertura depende da potência e da distância do ponto de acesso.

---

# 8. ONU

A ONU é um dispositivo que recebe o sinal de fibra óptica vindo do provedor de internet e converte-o para um sinal que pode ser usado em redes locais (como Ethernet).

### Pontos positivos:

- Desempenho de alta velocidade: Oferece grandes velocidades de internet devido à fibra óptica.

- Conexões estáveis: Garantia de sinal estável e de alta qualidade.

### Pontos negativos:

- Dependência de fibra: Só é possível utilizar se a infraestrutura de fibra óptica estiver disponível na região.

- Custo de instalação: A instalação pode ser cara, dependendo da operadora.

---

# 9. ONT

{{< figure src="https://www.base4telecom.net/wp-content/uploads/2020/07/21.jpg" alt="Huawei ONT EG8010H" position="center" caption="Huawei ONT EG8010H" captionPosition="center" >}}

A ONT é similar à ONU, mas tipicamente é o equipamento instalado na residência ou empresa pelo provedor de internet para conectar a rede de fibra óptica ao roteador ou outros dispositivos locais.

### Pontos positivos:

- Alta performance: Conecta-se diretamente à fibra óptica, oferecendo altíssima velocidade de conexão.

- Redução de latência: Ideal para atividades que exigem baixa latência, como videoconferências e jogos online.

### Pontos negativos:

- Exige instalação especializada: A instalação pode ser complexa e exigir técnicos qualificados.

- Não compatível com todas as redes: Só funciona em redes de fibra óptica.

---

# 10. Repeater

{{< figure src="https://image.made-in-china.com/2f0j00wfKMZTgGYpkY/U9-Wireless-Repeater-3-in-1-Function-Wi-Fi-Signal-Booster-300Mbps-WiFi-Extender.webp" alt="U9 Wireless Repeater 3-in-1 Function Wi-Fi Signal Booster 300Mbps" position="center" caption="U9 Wireless Repeater 3-in-1 Function Wi-Fi Signal Booster 300Mbps" captionPosition="center" >}}

O repetidor é um dispositivo que recebe o sinal de rede e o retransmite, ampliando a cobertura de uma rede sem fio.

### Pontos positivos:

- Ampliação de sinal: Estende o alcance de redes sem fio em áreas com sinal fraco.

- Facilidade de instalação: Normalmente é fácil de configurar e usar.

### Pontos negativos:

- Diminuição da largura de banda: Pode reduzir a velocidade da rede, já que o sinal é repetido.

- Dependência de sinal forte: Necessita de um sinal razoavelmente forte para funcionar corretamente.

---

# 11. Gateway

Equipamento responsável pela comunicação de redes com arquiteturas distintas.

O gateway é um dispositivo que conecta redes com protocolos diferentes, atuando como uma "porta de entrada" entre elas, e realizando a conversão de protocolos de comunicação.

### Pontos positivos:

- Conectividade entre protocolos: Permite a comunicação entre redes com diferentes protocolos (por exemplo, entre uma rede local e a internet).

- Integração de sistemas diferentes: Facilita a comunicação entre sistemas com diferentes tecnologias de rede.

### Pontos negativos:

- Complexidade: Requer um conhecimento técnico maior para configuração.

- Custo elevado: Pode ser mais caro devido à complexidade das suas funções.

---

# FAQ
## 1. Independentemente se for em uma rede LAN ou uma WAN corporativo, existe um modem de internet responsável conexão com o ISPs. Por sua vez, este aparelho se conecta a um roteador de internet que, seja por meio de um meio sem fio ou por meio de um cabo UTP, é responsável pela transmissão do sinal digital para os computadores na rede. Neste caso, qual dos dois aparelhos está fazendo o papel de um gateway?

No cenário descrito acima, o roteador de internet é o dispositivo que faz o papel de gateway.

O modem é o dispositivo responsável pela conexão com o ISP (Provedor de Serviços de Internet). Ele converte os sinais da linha de comunicação (como DSL, fibra óptica, cabo, etc.) em um formato digital que o roteador pode entender. Porém, o modem em si não faz o papel de gateway, já que ele não realiza funções de roteamento ou de controle de tráfego entre diferentes redes.

O roteador, por sua vez, é o dispositivo que faz a função de gateway. Ele é responsável por rotear (encaminhar) o tráfego de dados entre a rede local (LAN) e a rede externa (geralmente a internet). O roteador usa o endereço IP público fornecido pelo ISP para permitir que dispositivos dentro da rede local se conectem à internet, além de gerenciar o tráfego e a segurança entre as duas redes. Portanto, ele age como a "porta" entre a rede interna (LAN) e a rede externa (WAN/Internet).

Resumo:

Modem: Converte os sinais e estabelece a conexão com o ISP, mas não realiza funções de roteamento.

Roteador (Gateway): Roteia o tráfego de dados entre a rede interna e a internet, gerenciando endereços IP e realizando funções típicas de um gateway.

Portanto, é o roteador que faz o papel de gateway, pois ele conecta a rede interna à rede externa, controlando e direcionando o tráfego de dados entre ambas.

## 2. O endereço IP de um gateway necessariamente deverá ser o primeiro do endereço de rede? Por exemplo, em uma rede local 192.168.0.0/24, o endereço do gateway sempre será 192.168.0.1?

## 3. Quando se diz que o gateway se conecta ao ISP, o que isso quer dizer na prática? A qual máquina ele se conecta?

## 4. É possível utilicar o utilitário `traceroute` para identificar o endereço do ISP?

## 5. ONU e ONT são equipamentos que podem substituir o modem providenciado pelo ISP?