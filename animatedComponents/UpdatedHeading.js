export default function UpdatedHeading(props) {
  return (
    <div className="md:mx-8 my-4 relative">
      <h2
        style={{
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className="relative md:text-4xl sm:text-[26px] text-2xl font-han  z-30 outline-2 text-white"
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h2>
      <h2
        style={{
          position: "absolute",
          top: "-6px",
          left: "-6px",
          zIndex: "5",
          color: "#EFFF00",
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className=" md:text-4xl sm:text-[26px] text-2xl font-han z-20 "
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h2>
      <h2
        style={{
          color: "#DE99FF",
          position: "absolute",
          top: "-3px",
          left: "-3px",
          zIndex: "10",
          textStroke: "1px black",
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className=" md:text-4xl sm:text-[26px] text-2xl font-han z-10"
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h2>
    </div>
  );
}
