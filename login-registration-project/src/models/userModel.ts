class UserModel {
    constructor(public id: number, public name: string, public email: string, public password: string) {}

    save(): Promise<void> {
        // Lógica para salvar o usuário no banco de dados
        return new Promise((resolve, reject) => {
            // Implementar a lógica de inserção no banco de dados
            resolve();
        });
    }

    static findByEmail(email: string): Promise<UserModel | null> {
        // Lógica para encontrar um usuário pelo email no banco de dados
        return new Promise((resolve, reject) => {
            // Implementar a lógica de busca no banco de dados
            resolve(null);
        });
    }
}

export default UserModel;