import userModel from "../models/userModel.js";
import { createToken, doHashed } from "../utils.js";
import { signInWithCredential, GoogleAuthProvider, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { adminAuth } from "../firebase.js";
// create user
export const registerController = async (req, res) => {
  const { name, email, password, role } = req.body;
  try {
    switch (true) {
      case !name:
        res.status(400).json({
          success: false,
          message: "Name is required",
        });
      case !email:
        res.status(400).json({
          success: false,
          message: "Email is required",
        });
      case !password:
        res.status(400).json({
          success: false,
          message: "Password is required",
        });
      case !role:
        res.status(400).json({
          success: false,
          message: "Role is required",
        });
    }

    // check this email already exist
    const isAccountExist = await userModel.findOne({ email });
    if (!isAccountExist) {
      const hashed = await doHashed(password);
      // create admin
      await userModel({
        name,
        email,
        role,
        password: hashed,
      }).save();
      res.status(200).json({
        success: true,
        message: "user added successfully",
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Account already exists, please login",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "something went wronge",
    });
  }
};

// create user
// export const loginController = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     switch (true) {
//       case !email:
//         res.status(400).json({
//           success: false,
//           message: "Email is required",
//         });
//       case !password:
//         res.status(400).json({
//           success: false,
//           message: "Password is required",
//         });
//     }
//     // check this email already exist
//     let isAccountExist = await userModel.findOne({ email });
//     const token = isAccountExist && (await createToken(isAccountExist._id));

//     if (isAccountExist) {
//       res.status(200).json({
//         success: true,
//         message: "user login successfully",
//         user: isAccountExist,
//         token,
//       });
//     } else {
//       res.status(400).json({
//         success: false,
//         message: "Account does not exists, please register",
//       });
//     }
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//       message: "something went wronge",
//     });
//   }
// };
export const loginController = async (req, res) => {
  const { email="", password="", googleIdToken } = req.body;

  console.log("googleIdToken",googleIdToken)

  try {
    if (googleIdToken) {
      // Verify Google ID token
      const decodedToken = await adminAuth.verifyIdToken(googleIdToken);
      const userEmail = decodedToken.email;
      let user = await userModel.findOne({ email: userEmail });
      if (!user) {
        user = new userModel({
          email: userEmail,
        });
        await user.save();
      }

      const token = await createToken(user._id);
      return res.status(200).json({
        success: true,
        message: "User logged in successfully with Google",
        user,
        token,
      });
    } else {
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Email and password are required",
        });
      }
      // Check if the user exists
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(400).json({
          success: false,
          message: "Account does not exist, please register",
        });
      }

      // Verify password and create token
      const token = await createToken(user._id);

      return res.status(200).json({
        success: true,
        message: "User logged in successfully",
        user,
        token,
      });
    }
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};
