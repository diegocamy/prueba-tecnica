import { Response, Request } from "express";
import { getManager } from "typeorm";
import { Search } from "../db/entities/Search";

export default {
  getSearch: async (req: Request, res: Response) => {
    try {
      const entityManager = getManager();
      const searchHistory = await entityManager.find(Search, {
        order: { created_at: "DESC" },
      });
      res.json(searchHistory);
    } catch (error) {
      if (error instanceof Error) {
        console.log(error.message);
        console.log(error.stack);
      }
    }
  },
};
