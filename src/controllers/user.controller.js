import { asyncHandler } from "../utils/asyncHandler.js";

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

export { registerUser };
