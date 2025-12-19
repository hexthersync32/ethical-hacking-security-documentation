+++
title = "Server"
date = "2019-01-25"
author = "#devices #network-devices"
description = "All the kinds of decives that are used on a computer network."
weight = 21
+++

# 1. Introduction

O servidor é um equipamento de rede projetado para fornecer serviços, recursos ou dados para outros dispositivos em uma rede, como computadores, impressoras e outros servidores. 

Ele pode desempenhar várias funções, como armazenamento de dados, hospedagem de sites, controle de autenticação de usuários e gerenciamento de aplicativos. 

Os servidores podem ser físicos (hardware dedicado) ou virtuais (em máquinas virtuais), e a função que desempenham depende do tipo de serviço que estão oferecendo, como servidores de arquivos, servidores de e-mail, servidores web, entre outros.

{{< figure src="https://cdn.shoppub.io/cdn-cgi/image/w=1000,h=1000,q=80,f=auto/oficinadosbits/media/uploads/produtos/foto/mtgxosvh/file.png" alt="HP Proliant ML30 Gen9" position="center" caption="HP Proliant ML30 Gen9" captionPosition="center" >}}


# 2. Main functions

- Armazenamento centralizado de dados: Servidores de arquivos armazenam, gerenciam e distribuem dados de forma centralizada, facilitando o acesso e a segurança dos arquivos para os usuários da rede.

- Gerenciamento de recursos e segurança: Servidores podem gerenciar a autenticação de usuários e controlar quem tem acesso a determinados recursos ou informações na rede.

- Hospedagem de aplicativos e serviços: Servidores de aplicação hospedam software que é acessado por outros dispositivos da rede, como sistemas de ERP ou CRM.

- Serviços de rede: Eles podem fornecer serviços como DNS (Sistema de Nomes de Domínio), DHCP (Protocolo de Configuração Dinâmica de Host), e autenticação centralizada (por exemplo, via Active Directory em ambientes Windows).

# 3. Pontos Positivos de um Servidor de Rede:

- Centralização de Recursos: Os servidores permitem que dados e recursos sejam centralizados, facilitando o gerenciamento e a manutenção da infraestrutura de TI.

- Segurança: Como as informações e os recursos são centralizados, fica mais fácil implementar políticas de segurança e backups regulares, protegendo dados críticos.

- Escalabilidade: É possível adicionar mais capacidade a um servidor (como mais armazenamento ou mais processamento) conforme a rede cresce, o que garante que a infraestrutura de TI acompanhe as necessidades do negócio.

- Disponibilidade e Confiabilidade: Servidores dedicados são projetados para funcionar de forma contínua, oferecendo alta disponibilidade de serviços e dados para os usuários. Além disso, muitos servidores possuem mecanismos de redundância para evitar falhas catastróficas.

# 4. Pontos Negativos de um Servidor de Rede:

- Custo Inicial e Manutenção: A compra de um servidor físico, bem como a configuração e manutenção, podem ser caras. Além disso, servidores exigem pessoal especializado para gerenciar e garantir que funcionem adequadamente.

- Ponto Único de Falha: Em algumas configurações, se o servidor falhar, pode interromper o funcionamento de toda a rede ou dos serviços centralizados, o que destaca a importância de redundância e backup.

- Sobrecarga de Rede: Se não configurado corretamente, o servidor pode acabar sobrecarregando a rede, especialmente em ambientes de alto tráfego, causando lentidão no acesso aos dados.

- Requisitos de Energia e Espaço: Servidores geralmente consomem mais energia e espaço físico, além de gerar mais calor, o que pode aumentar os custos operacionais e exigir mais infraestrutura (como refrigeração).

# 5. Centralização X Descentralização

# 5.1. Centralização

A centralização em servidores de rede significa que os recursos, dados e serviços estão concentrados em um único servidor ou em um grupo pequeno de servidores. Esse modelo facilita o controle, a segurança e a gestão, pois tudo está em um ponto centralizado.

Exemplo: Em uma empresa, todos os arquivos e dados são armazenados em um servidor de arquivos centralizado, e os usuários acessam esses dados de seus computadores. A segurança é gerenciada em um único servidor, garantindo que apenas usuários autorizados acessem determinadas informações.

Vantagens:

Facilidade de gerenciamento e segurança centralizada.

Backups regulares podem ser feitos em um único local.

Desvantagens:

Risco de ponto único de falha: Se o servidor central falhar, toda a rede pode ser afetada.

# 5.2. Descentralização
A descentralização significa que os dados, serviços e recursos estão distribuídos entre vários servidores ou dispositivos na rede. Não há um único ponto de controle, o que pode aumentar a robustez e a escalabilidade, mas também torna o gerenciamento mais complexo.

Exemplo: Em uma rede descentralizada, em vez de ter um único servidor para armazenar os arquivos, cada filial de uma empresa tem seus próprios servidores locais. Isso significa que, se um servidor de uma filial falhar, as outras ainda continuam funcionando normalmente.

Vantagens:

Maior resiliência e menos risco de falhas impactarem toda a rede.

Escalabilidade: É mais fácil adicionar novos servidores conforme a rede cresce.

Desvantagens:

Gerenciamento complexo: Cada servidor precisa ser configurado e mantido individualmente.

Segurança mais difícil: A segurança precisa ser implementada em vários pontos da rede.