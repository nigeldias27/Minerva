// Rendered at the bottom of the Home page
// When the form is submitted an email is sent through api/ContactUs route to nigeldias@gmail.com
import { useState } from "react";
import axios from "axios";
import UpdatedHeading from "@/animatedComponents/UpdatedHeading";
export default function Contact() {
  const [data, setData] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: "",
  });
  const changed = (props) => (e) => {
    var d = {};
    d[props] = e.target.value;
    setData({ ...data, ...d });
    console.log(data);
  };
  return (
    <div
      id="contactus"
      className="w-full  bg-[#428797] dark:bg-yellowBackground"
    >
      <div className="pt-8 px-8 ">
        <UpdatedHeading notcap={false}>
          Got some Tea or Coffee for us?
        </UpdatedHeading>

        <div className="px-8 mt-8">
          <input
            placeholder="Name"
            value={data["Name"]}
            onChange={changed("Name")}
            className="font-georgia w-full mt-3 px-8 py-3  border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(222,153,255,1)]"
          ></input>
        </div>

        <div className="px-8">
          <input
            placeholder="Email"
            value={data["Email"]}
            onChange={changed("Email")}
            className="font-georgia w-full mt-6 px-8 py-3 text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(239,255,0,1)]"
          ></input>
        </div>

        <div className="px-8">
          <input
            placeholder="Subject"
            value={data["Subject"]}
            onChange={changed("Subject")}
            className="font-georgia w-full mt-6 px-8 py-3 text-black border border-black placeholder:text-gray-500  outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(159,225,240,1)]"
          ></input>
        </div>
        <div className="px-8">
          <textarea
            placeholder="Message"
            value={data["Message"]}
            onChange={changed("Message")}
            className="font-georgia w-full mt-6 px-8 py-3 text-black border border-black placeholder:text-gray-500 outline-none focus:ring-black focus:border-black focus:ring-1 drop-shadow-[8px_8px_0px_rgba(222,153,255,1)]"
          ></textarea>
        </div>
        <div className="px-8 mt-6 relative">
          <button className="bg-yellow z-10 px-6 top-2 left-10 rounded-lg  py-2 border border-black font-gilroy font-bold hover:bg-hoverbeigeText absolute">
            Submit
          </button>
          <button className="bg-blue z-30 px-6 top-1 left-9 rounded-lg  py-2 border border-black font-gilroy font-bold hover:bg-hoverbeigeText absolute">
            Submit
          </button>
          <button
            className="bg-pink px-6 z-40 rounded-lg relative  py-2 border border-black font-gilroy font-bolder hover:bg-hoverbeigeText"
            onClick={async () => {
              try {
                const response = await axios.post("/api/contactUs", data);
                console.log(response);
                if ((response.data = "Finished")) {
                  alert("Thank you for your response!");
                }
              } catch (e) {
                alert("Failed to send.");
              }
              setData({ Name: "", Email: "", Subject: "", Message: "" });
            }}
          >
            Submit
          </button>
          <button></button>
        </div>
      </div>
    </div>
  );
}
