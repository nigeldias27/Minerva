import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="w-full bg-footerBackground flex flex-col items-center py-8">
      <div className="flex flex-row pb-4">
        <div
          onClick={() => {
            window.location.href = "https://www.instagram.com/minerva.pesu/";
          }}
          className="bg-beigeText p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsInstagram color="#3C3635" />
        </div>
        <div className="bg-beigeText p-4 mx-2 rounded-full hover:bg-hoverbeigeText">
          <BsYoutube color="#3C3635" />
        </div>
        <div
          onClick={() => {
            window.location.href =
              "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzs5nhg6H-AhVKW2wGHQ3YBCQQFnoECBMQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fminerva-pesu%3Ftrk%3Dpublic_profile_experience-item_profile-section-card_image-click&usg=AOvVaw1tS4uBkYlptap2RiVb05Gu";
          }}
          className="bg-beigeText p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsLinkedin color="#3C3635" />
        </div>
        <div
          onClick={() => {
            window.location.href = "";
          }}
          className="bg-beigeText p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsTwitter color="#3C3635" />
        </div>
      </div>
      <h1 className="text-beigeText font-thin">
        MINERVA 2022 - All rights reserved
      </h1>
      <h1 className="text-beigeText font-thin">
        {"Made with <3 by Web Dev Team"}
      </h1>
    </div>
  );
}
