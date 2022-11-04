import UserModel from "../models/user.js";
import jwt from 'jsonwebtoken';

const UserService = {
  getAll: async () => {
    try {
      const data = await UserModel.find();

      return { message: "success", data };
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  getUser: async (id) => {
    try {
      if (id) {
        const Userdata = await UserModel.findById({ _id: id });
        return { message: "success", data: Userdata };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  register: async (body) => {
    try {
      const savedData = await UserModel.create(body);
      if (savedData) {
        return { message: "success", data: savedData };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },

  login: async (body) => {
    try {
      const query = { email: body.email, password: body.password };
      const data = await UserModel.findOne({email: body.email, password: body.password});
      if (data) {
        const secret = 'my-secret';
        const payload = {
          data: {
            id: data._id,
            name: data.name,
            email: data.email
          }
        }
        const token = jwt.sign(payload, secret);
        return { message: "success", data: token};
      }
      return { message: "failed invalid" };
      
    } catch (error) {
      return { message: "error", data: error.message};
    }
  },

  deleteUser: async (id) => {
    try {

      const data = await UserModel.findOneAndDelete({ _id: id });
      if (data) {
        return { message: "success", data: data };
      }
    } catch (error) {
      return { message: "error", data: error.message };
    }
  },
  updateUser: async (id,body) => {
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

export default UserService;
