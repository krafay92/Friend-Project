import GenreModel from "../models/genre.js";


const GenreService = {
  getAll: async () => {
    try {
      const data = await GenreModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  get: async (id) => {
    try {
      if (id) {
        const Userdata = await GenreModel.findById({ _id: id });
        return { message: "success", data: Userdata };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  add: async (body) => {
    try {
      const savedData = await GenreModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  delete: async (id) => {
    try {

      const data = await GenreModel.findOneAndDelete({ _id: id });
      if (data) {
        return { message: "success", data: data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  update: async (id,body) => {
    try {
      const userId = id;
      const time=body;
      let updateDate = await UserModel.findByIdAndUpdate(userId, { $set: time})
      if (updateDate) {
        return { message: "success", data: "updated" };
      }
    } catch (error) {
      throw error;
    }
  },

};

export default GenreService;
