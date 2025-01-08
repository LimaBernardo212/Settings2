import { createConnection } from 'typeorm';

const connectDB = async () => {
    try {
        const connection = await createConnection({
            type: 'mysql', // ou outro tipo de banco de dados
            host: 'localhost',
            port: 3306,
            username: 'seu_usuario',
            password: 'sua_senha',
            database: 'nome_do_banco',
            entities: [
                // Adicione suas entidades aqui
            ],
            synchronize: true, // Não usar em produção
        });
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
        return connection;
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
        process.exit(1);
    }
};

export default connectDB;