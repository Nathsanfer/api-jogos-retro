import prisma from "../../prisma/prisma.js";

class GameModel {

    // Obter todos os jogos
    async findAll() {
        const games = await prisma.game.findMany();

        return {
            message: "Games found successfully!",
            totalMessage: `Total games found: ${games.length}`,
            games
        }
    }

    // Criar um novo jogo
    async create(data) {
        const game = await prisma.game.create({
            data,
        });

        return {
            message: "Game created successfully!",
            game
        }
    }
}



export default new GameModel();