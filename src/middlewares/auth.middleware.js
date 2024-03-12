import { asyncHandler } from "../utils/asyncHandler";

export const verfyJWT = asyncHandler(async (req, res, next) => {
  const token =
    req.cookies?.accessToken ||
    req.header("Authorization")?.replace("Bearer ", "");
});
