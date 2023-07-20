import connectDB from "@/lib/connect";
import validateToken from "@/lib/validateToken";
const getUserRole = async (req, res) => {
  if (req.method == "GET") {
    const token = req.headers["authorization"].split(" ")[1];
    if (!token) {
      res.json({ id: null, role: "" });
      return;
    }
    const user = await validateToken(token);
    res.json({ id: user._id.toString(), role: user.role });
  }
};

export default connectDB(getUserRole);
