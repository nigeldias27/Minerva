import { useState } from "react";

export default function Contact() {
  const [data, setData] = useState({});
  const changed = (props) => (e) => {
    var d = {};
    d[props] = e.target.value;
    setData({ ...data, ...d });
    console.log(data);
  };
  return (
    <div className="w-full bg-footerBackground">
      <h1 className="text-beigeText text-xl font-semibold py-4 px-8">
        Got some Tea or Coffee for us?
      </h1>
      <div className="px-8">
        <input
          placeholder="Name"
          onChange={changed("Name")}
          className="w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
        ></input>
      </div>

      <div className="px-8">
        <input
          placeholder="Email"
          onChange={changed("Email")}
          className="w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
        ></input>
      </div>

      <div className="px-8">
        <input
          placeholder="Subject"
          onChange={changed("Subject")}
          className="w-full mt-3 px-4 py-2 text-base border border-gray-300  outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
        ></input>
      </div>
      <div className="px-8">
        <textarea
          placeholder="Message"
          onChange={changed("Message")}
          className="w-full my-3 px-4 py-2 text-base border border-gray-300 outline-none focus:ring-purple-500 focus:border-purple-500 focus:ring-1"
        ></textarea>
      </div>
      <div className="px-8">
        <button className="bg-yellowBackground px-4">Submit</button>
      </div>
    </div>
  );
}
