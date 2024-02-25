import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

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

export { registerUser };
