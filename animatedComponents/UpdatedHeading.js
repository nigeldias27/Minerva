export default function UpdatedHeading(props) {
  return (
    <div className="mx-8 my-4 relative">
      <h1
        style={{
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className="relative text-4xl font-han  z-30 outline-2 text-white"
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "-6px",
          left: "-6px",
          zIndex: "5",
          color: "#EFFF00",
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className="text-4xl font-han z-20 "
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h1>
      <h1
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
        className="text-4xl font-han z-10"
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h1>
    </div>
  );
}
