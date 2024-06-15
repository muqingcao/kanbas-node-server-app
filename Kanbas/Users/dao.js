import model from "./model.js";
let currentUser = null;

export const createUser = (user) => {
    delete user._id // remove _id field just in case client sends it
    return model.create(user);
}

export const findAllUsers = () =>
    model.find();

export const findUserById = (userId) =>
    model.findById(userId);

export const findUsersByRole = (role) =>
    model.find({ role: role }); // or just model.find({ role })

export const findUsersByPartialName = (partialName) => {
    const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
    return model.find({
        $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
    });
};

// first step of sign up (followed by createUser)
export const findUserByUsername = (username) =>
    model.findOne({ username: username });

// Sign in with credentials
export const findUserByCredentials = (username, password) =>
    model.findOne({ username, password });

export const updateUser = (userId, user) =>
    model.updateOne({ _id: userId }, { $set: user });

export const deleteUser = (userId) =>
    model.deleteOne({ _id: userId });

