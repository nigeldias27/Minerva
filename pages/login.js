import Headers from "@/components/Header";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { Alert } from "@mui/material";
export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [invalid, setInvalid] = useState(false);
  return (
    <div className="bg-lightGrey min-h-screen">
      <Headers />
      <div style={{ paddingTop: "15vh" }} className="px-64">
        <div className="rounded-xl p-12 bg-white w-full my-12 py-8 drop-shadow-2xl flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center my-8">Login</h1>
          <input
            placeholder="Email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="w-2/3 my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-black focus:border-black focus:ring-1"
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            className="w-2/3 my-4 px-4 py-2 text-base border border-gray-300 rounded outline-none focus:ring-black focus:border-black focus:ring-1"
          ></input>
          <div className="flex w-full justify-center">
            <button
              class="x-6 my-8 drop-shadow-xl font-small rounded-md bg-gradient-to-r from-gray-800 to-blackButton py-3 px-8 text-beigeText"
              type="submit"
              onClick={async () => {
                const response = await axios.post("/api/login", {
                  email: email,
                  password: pass,
                });
                console.log(response.data.token);
                if (response.data.token == "") {
                  setInvalid(true);
                } else {
                  localStorage.setItem("token", response.data.token);
                  router.push("/pendingNews");
                }
              }}
            >
              <span className="text-xl">Login</span>
            </button>
          </div>
          {invalid ? (
            <Alert severity="error">Invalid Login Credentials</Alert>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}
