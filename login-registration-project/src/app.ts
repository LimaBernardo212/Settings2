import express from 'express';
import { json } from 'body-parser';
import { setRoutes } from './routes/authRoutes';
import { connectDB } from './utils/db';

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar ao banco de dados
connectDB();

// Middleware
app.use(json());

// Configurar rotas
setRoutes(app);

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});