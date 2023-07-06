import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="w-full bg-yellowBackground flex flex-col items-center py-8">
      <div className="flex flex-row pt-8 pb-4">
        <div
          onClick={() => {
            window.location.href = "https://www.instagram.com/minerva.pesu/";
          }}
          className="bg-white p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsInstagram color="#3C3635" />
        </div>

        <div
          onClick={() => {
            window.location.href =
              "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzs5nhg6H-AhVKW2wGHQ3YBCQQFnoECBMQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fminerva-pesu%3Ftrk%3Dpublic_profile_experience-item_profile-section-card_image-click&usg=AOvVaw1tS4uBkYlptap2RiVb05Gu";
          }}
          className="bg-white p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsLinkedin color="#3C3635" />
        </div>
        <div
          onClick={() => {
            window.location.href = "";
          }}
          className="bg-white p-4 mx-2 rounded-full hover:bg-hoverbeigeText"
        >
          <BsTwitter color="#3C3635" />
        </div>
      </div>
      <div className="flex flex-row pt-4 pb-4">
        <p className="text-white font-gilroy font-500 px-3">About Minerva</p>
        <p className="text-white font-gilroy px-3">About PES University</p>
        <p className="text-white font-gilroy px-3">Newsletter</p>
        <p className="text-white font-gilroy px-3">Privacy Policy</p>
        <p className="text-white font-gilroy px-3">Terms & Conditions</p>
      </div>
      <h1 className="text-white font-gilroy">
        MINERVA 2023 - All rights reserved
      </h1>
    </div>
  );
}
