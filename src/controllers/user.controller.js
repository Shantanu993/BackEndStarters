import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "ok",
  });
});

/*
1. get details from frontend
2. validations - not empty, etc.
3. check if user already exists: username, email
4. check for images, check for avatar
5. upload them to cloudinary: avatar
6. create user object- create entry in db
7. remove password and refresh token field from response
8. check for user creation
9. return response
 */

const { fullName, email, username, password } = req.body;
console.log("email: ", email);

// if(fullName === ""){
// 	throw new ApiError(400, "fullname is required")
// }

// Professional Way to check for all the fields

if (
  [fullName, email, username, password].some((field) => field?.trim() === "")
) {
  throw new ApiError(400, "All fields are required");
}

const existedUser = User.findOne({
  $or: [{ username }, { email }],
});

if (existedUser) {
  throw new ApiError(409, "User with email or username already exists");
}

// middlewares add more fields in the req, in this case multer adds files

const avatarLocalPath = req.files?.avatar[0]?.path;
const coverImageLocalPath = req.files?.coverImage[0]?.path;

if (!avatarLocalPath) {
  throw new ApiError(400, "Avatar file is required");
}

const avatar = await uploadOnCloudinary(avatarLocalPath);
const coverImage = await uploadOnCloudinary(coverImageLocalPath);

if (!avatar) {
  throw new ApiError(400, "Avatar file is required");
}

export { registerUser };
