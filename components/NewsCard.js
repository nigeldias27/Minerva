import { useRouter } from "next/router";

export default function NewsCard(props) {
  const router = useRouter();
  return (
    <div
      className="p-8 "
      onClick={() => {
        if (props.newArticle) {
          router.push("/news/" + props.id);
        } else {
          router.push("/create/" + props.id);
        }
      }}
    >
      <div className="bg-cardBackground rounded-md min-h-full">
        <img
          className=" rounded-t-md"
          style={{ height: "200px", width: "100%" }}
          src={`${props.imageURL}`}
        ></img>
        <div className="p-8">
          <h1 className="font-bold text-2xl">{props.headline}</h1>
          <p className="text-greySubtitle my-1">
            {props.genre} | {props.date}
          </p>
          <p>{props.desc}</p>
        </div>
      </div>
    </div>
  );
}
