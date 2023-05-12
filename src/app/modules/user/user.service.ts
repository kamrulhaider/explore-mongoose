import { IUser } from "./user.interface";
import User from "./user.model";

export const createUserToDB = async (payload: IUser): Promise<IUser> => {
  // creating user model
  const user = new User(payload);
  console.log(user.fullName());
  await user.save();
  return user;
};

export const getUsersFromDB = async () => {
  const users = await User.find();
  return users;
};

export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = User.findOne({ id: payload });
  return user;
};

export const getAdminUserFromDB = async () => {
  const admins = await User.getAdminUsers();
  return admins;
};
