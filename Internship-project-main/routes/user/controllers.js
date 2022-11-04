import UserService from "../../services/user.js";
import httpResponse from "../../utils/httpResponse.js";

const controller = {
  getAll: async (req, res) => {
    try {
      const data = await UserService.getAll();
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  getUser: async (req, res) => {
    try {
      const data = await UserService.getUser(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  register: async (req, res) => {
    const addResponse = await UserService.register(req.body);
    if (addResponse.message === "success") {
      return httpResponse.CREATED(res, addResponse.data);
    } else if (addResponse.message === "failed") {
      return httpResponse.CONFLICT(res, addResponse.data);
    } else {
      return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
    }
  },

  login: async (req, res) => {
    try {
      const loginResponse = await UserService.login(req.body);

      if (loginResponse.message === "success") {
        return httpResponse.SUCCESS(res, loginResponse.data)
      }

      return httpResponse.FORBIDDEN(res, loginResponse.data);

    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);

    }
  },

  deleteUser: async (req, res) => {
    try {
      const data = await UserService.deleteUser(req.params.id);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },

  updateUser: async (req, res) => {
    try {
      const data = await GenreService.updateUser(req.params.id,req.body);
      return httpResponse.SUCCESS(res, data.data);
    } catch (error) {
      return httpResponse.INTERNAL_SERVER_ERROR(res, error);
    }
  },
  

}

export default controller;
