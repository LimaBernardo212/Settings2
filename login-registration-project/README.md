# Login Registration Project

Este projeto é uma aplicação de cadastro e login de usuários, desenvolvida em TypeScript. Ele permite que os usuários se registrem e façam login, armazenando suas informações em um banco de dados.

## Estrutura do Projeto

```
login-registration-project
├── src
│   ├── app.ts                  # Ponto de entrada da aplicação
│   ├── controllers
│   │   └── authController.ts   # Controlador de autenticação
│   ├── models
│   │   └── userModel.ts        # Modelo de usuário
│   ├── routes
│   │   └── authRoutes.ts       # Rotas de autenticação
│   ├── services
│   │   └── authService.ts      # Serviço de autenticação
│   ├── types
│   │   └── index.ts            # Tipos e interfaces
│   └── utils
│       └── db.ts               # Utilitário de conexão com o banco de dados
├── package.json                 # Configuração do npm
├── tsconfig.json               # Configuração do TypeScript
└── README.md                   # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd login-registration-project
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

Para iniciar a aplicação, execute o seguinte comando:
```
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto está licenciado sob a MIT License.