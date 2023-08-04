export default function UpdatedHeading(props) {
  return (
    <div className="mr-6 sm:mx-8 my-4 relative">
      <h1
        style={{
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className="relative sm:text-3xl text-2xl md:text-[40px] lg:text-[40px] font-han  z-30 outline-2 text-white"

      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h1>
      <h1
        style={{
          position: "absolute",
          top: "-5px",
          left: "-5px",
          zIndex: "5",
          color: "#EFFF00",
          textShadow:
            "1px 0 0 black,0 1px 0 black,-1px 0 0 black,0 -1px 0 black",
        }}
        className="sm:text-3xl text-2xl md:text-[40px] lg:text-[40px]  font-han z-20 "

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
        className="sm:text-3xl text-2xl md:text-[40px] lg:text-[40px]  font-han z-10"
      >
        {props.notcap == false ? props.children : props.children.toUpperCase()}
      </h1>
    </div>
  );
}
