# Partilha - Plataforma de Divisão de Contas entre Amigos

## Objetivo  
Desenvolver uma plataforma simples e acessível para a web, onde usuários poderão registrar e gerenciar dívidas compartilhadas entre grupos de amigos. O foco inicial será permitir que os usuários registrem facilmente quanto pagaram, quanto devem e quanto outras pessoas devem a eles, com várias opções para dividir os valores.

## Funcionalidades Principais
- Registro de despesas pagas por um membro do grupo.
- Divisão automática da conta entre os participantes com opções personalizadas (igual, porcentagens, ou valores específicos).
- Histórico de transações e estado das dívidas (quanto devo, quanto me devem).
- Integração com notificações de status (notificar membros sobre novas dívidas ou pagamentos pendentes).

### Exemplo de Uso
- Usuário A registra que pagou R$ 50,00 por uma conta de restaurante.
- A despesa é automaticamente dividida entre 3 pessoas.
- Cada membro do grupo pode visualizar a parte que lhe cabe e quanto ainda precisa pagar.

## Autenticação
- Integração com Firebase Authentication para login simples e seguro.
- Suporte para login por e-mail/senha e Google (OAuth).

## Arquitetura do Projeto
- **Front-end:** Next.js (React) hospedado na Vercel para fácil deploy e escalabilidade.
- **Back-end:** API em ASP.NET Core hospedada em uma VPS simples.
- **Banco de Dados:** PostgreSQL, com acesso via Entity Framework Core.
- **Autenticação:** Firebase Authentication (integração com e-mail/senha e Google).

## Hospedagem e Custo Inicial
- **API Backend:** VPS de R$ 5,00/mês, que comporta vários projetos.
- **Front-end:** Hospedagem na Vercel - Gratuita para uso inicial (com limitações).
- **Autenticação Firebase:** Gratuito até certo número de usuários ativos mensais.
- **PostgreSQL:** Banco de dados hospedado na VPS.

## Referência Principal
- Splitwise (inspiração para funcionalidades de divisão de contas e interface de usuário).

## Plano Futuro
- Adição de funcionalidades para suporte a dispositivos móveis (PWA ou aplicativo nativo).
- Expansão para incluir funcionalidades premium, como lembretes automáticos de pagamento, relatórios avançados e integração com meios de pagamento.
