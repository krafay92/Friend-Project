import GenreService from "../../services/season.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await GenreService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  get: async (req, res) => {
    try {
      const data = await GenreService.get(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  add: async (req, res) => {
    const addResponse = await GenreService.add(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },


  delete: async (req, res) => {
    try {
      const data = await GenreService.delete(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  update: async (req, res) => {
    try {
      const data = await GenreService.update(req.params.id,req.body);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getBySeries: async (req, res) => {
    try {
        const response = await GenreService.getBySeries(req.params.id);
        if(response.message === "success") {
            return httpResponse.SUCCESS(res, response.data);
        }

        return httpResponse.NOT_FOUND(res);
    } catch (error) {
        return httpResponse.INTERNAL_SERVER(res, error)    
    }
},

}

export default controller;
