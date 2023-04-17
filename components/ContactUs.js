import { useState } from "react";
import axios from "axios";
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
    <div id="contactus" className="w-full bg-footerBackground">
      <h1 className="text-beigeText text-xl font-semibold py-4 px-8 font-merriweather">
        Got some Tea or Coffee for us?
      </h1>
      <div className="px-8">
        <input
          placeholder="Name"
          value={data["Name"]}
          onChange={changed("Name")}
          className="font-typewriter w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-beigeText focus:border-beigeText focus:ring-1"
        ></input>
      </div>

      <div className="px-8">
        <input
          placeholder="Email"
          value={data["Email"]}
          onChange={changed("Email")}
          className="font-typewriter w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-beigeText focus:border-beigeText focus:ring-1"
        ></input>
      </div>

      <div className="px-8">
        <input
          placeholder="Subject"
          value={data["Subject"]}
          onChange={changed("Subject")}
          className="font-typewriter w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-beigeText focus:border-beigeText focus:ring-1"
        ></input>
      </div>
      <div className="px-8">
        <textarea
          placeholder="Message"
          value={data["Message"]}
          onChange={changed("Message")}
          className="font-typewriter w-full my-3 px-4 py-2 text-base border border-gray-300 outline-none focus:ring-beigeText focus:border-beigeText focus:ring-1"
        ></textarea>
      </div>
      <div className="px-8">
        <button
          className="bg-yellowBackground px-4 font-merriweather hover:bg-hoverbeigeText"
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
      </div>
    </div>
  );
}
