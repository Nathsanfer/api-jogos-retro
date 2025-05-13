import prisma from "../../prisma/prisma.js";

class RecordModel {

    // Obter todos os recordes
    async findAll() {
        const records = await prisma.record.findMany();

        return {
            message: "Games found successfully!",
            totalMessage: `Total games found: ${records.length}`,
            records
        }
    }

    // Criar um novo record
    async create(data) {
        const record = await prisma.record.create({
            data,
        });

        return {
            message: "Record created successfully!",
            record
        }
    }
}



export default new RecordModel();