class AuthController {
    async register(req, res) {
        // Lógica para registrar um novo usuário
        const { email, password } = req.body;
        try {
            // Chamar o serviço de autenticação para registrar o usuário
            const user = await authService.register(email, password);
            res.status(201).json({ message: 'Usuário registrado com sucesso', user });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req, res) {
        // Lógica para fazer login do usuário
        const { email, password } = req.body;
        try {
            const token = await authService.login(email, password);
            res.status(200).json({ message: 'Login bem-sucedido', token });
        } catch (error) {
            res.status(401).json({ message: error.message });
        }
    }
}

export default new AuthController();