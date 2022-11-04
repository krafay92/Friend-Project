
import UserModel from "../models/stream.js";


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
  userHistory: async () => {
    try {
      const allUser = await UserModel.aggregate([
        {
          $lookup: {
            from: "episodes",
            as: "episodes",
            let: { episodeId: "$episode_id" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      {
                        $eq: ["$_id", "$$episodeId"]
                      }
                    ]
                  }
                }
              }]
          }
        },{ $unwind:"$episodes"
        
        

        },
        {
          $project: {
            episodes: {
              _id:0,
              season_id: 0,
              __v: 0,
              description: 0,
              image: 0
            }
          }
        }
      ])
      return { message: "success", data: allUser };

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
  updateUser: async (id, body) => {
    try {
      const userId = id;
      const time = body;
      let updateDate = await UserModel.findByIdAndUpdate(userId, { $set: time })
      if (updateDate) {
        return { message: "success", data: "updated" };
      }
    } catch (error) {
      throw error;
    }
  },

};

export default UserService;
