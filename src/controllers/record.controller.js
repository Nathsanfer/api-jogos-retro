import recordModel from "../models/record.model.js";

class RecordController {
    async findAll(req, res) {
        try {
            const records = await recordModel.findAll();

            return res.status(200).json(records);
        } catch (error) {
            console.error("Error finding all records", error)
            return res.status(500).json({ message: "Error finding all records", error })
        }
    }

    async create(req, res) {
        try {
            const { score, screenshot, useId, gameId  } = req.body;

            //Validação básica 
            if (!score || !screenshot || !useId || !gameId) {
                return res.status(400).json({ error: "Score, screenshot, userId e gameId fields are required!!" });
            }

            const data = {
                score, 
                screenshot, 
                useId, 
                gameId
            }

            const newRecord = await recordModel.create(data);

            return res.status(201).json({
                message: "New record game created successfully!",
                newRecord
            });

        } catch (error) {
            console.error("Error creating a new record game:", error);
            res.status(500).json({ error: "Error creating a new record game" });
        }
    }

}

export default new RecordController();