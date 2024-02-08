# Vue GitHub Developers Explorer

Este projeto visa explorar as informações de desenvolvedores do GitHub de uma maneira intuitiva e interativa. A aplicação é dividida em Frontend e Backend para oferecer uma experiência completa.

## Frontend

### Tecnologias Utilizadas
- Vue 3
- Vite
- Pinia
- Bootstrap
- Node.js 16
- Yarn

### Funcionalidades
- Lista informações de 4 desenvolvedores do GitHub (wallysonn, diego3g, filipedeschamps, rmanguinho).
- Apresenta Nome, imagem (avatar), data de registro e quantidade de repositórios de cada desenvolvedor.
- Campo de busca em tempo real para filtrar registros.
- Ao clicar em um usuário, é possível visualizar seu perfil completo em uma página separada usando Vue Router.

## Backend

### Tecnologias Utilizadas
- PHP 7.4
- Composer
- Apache
- simple-php-router
- Guzzle PHP Client

### Funcionalidades
- Rota "/salvar-local" para salvar informações do usuário localmente.
- Botão no perfil do usuário para salvar o login no backend.
- O backend acessa a API do GitHub usando Guzzle e salva o resultado em um arquivo JSON.

## Como Executar

1. **Frontend:**
   - Instale as dependências usando `yarn install`.
   - Execute o servidor com `yarn dev`.

2. **Backend:**
   - Instale as dependências com `composer install`.
   - Configure o servidor Apache para apontar para a pasta do backend.
   - Certifique-se de que o PHP 7.4 está configurado corretamente.

3. **Acesse a aplicação:**
   - Abra o navegador e vá para o endereço local onde o frontend está sendo executado.

### Observações
- Você é livre para personalizar o design e incluir informações adicionais.
- Use o Git para enviar sua aplicação para um repositório público no GitHub ou Bitbucket e compartilhe o link conosco.

### Contato
Para dúvidas ou mais informações, entre em contato através do e-mail [leosfont@gmail.com].

Esperamos que você aproveite explorando o mundo dos desenvolvedores do GitHub com esta aplicação!
