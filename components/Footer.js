import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from "react-icons/bs";
export default function Footer() {
  return (
    <div className="w-full   bg-[#428897] dark:bg-yellowBackground flex flex-col  items-center pb-8 pt-10">
      <div className="flex flex-row md:pt-8 pb-4">
        <div
          onClick={() => {
            window.location.href = "https://www.instagram.com/minerva.pesu/";
          }}
          className="bg-white p-1.5 md:p-4 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
        >
          <BsInstagram color="#3C3635" />
        </div>

        <div
          onClick={() => {
            window.location.href =
              "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjzs5nhg6H-AhVKW2wGHQ3YBCQQFnoECBMQAQ&url=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fminerva-pesu%3Ftrk%3Dpublic_profile_experience-item_profile-section-card_image-click&usg=AOvVaw1tS4uBkYlptap2RiVb05Gu";
          }}
          className="bg-white p-1.5 md:p-4 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
        >
          <BsLinkedin color="#3C3635" />
        </div>
        <div
          onClick={() => {
            window.location.href = "";
          }}
          className="bg-white p-1.5 md:p-4 mx-2 w-7 h-7 md:w-auto md:h-auto rounded-full hover:bg-hoverbeigeText"
        >
          <BsTwitter color="#3C3635" />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-end md:pt-4 pb-4">
        <p className="text-white text-[10px] md:text-[20px] font-gilroy font-500 pl-3 md:px-3">
          About Minerva
        </p>
        <div class="flex items-center">
          <p className="text-white text-[10px] md:text-[20px] font-gilroy pl-3 md:px-3">
            About PES University
          </p>
        </div>
        <div class="flex items-center">
          <p className="text-white text-[10px] md:text-[20px] font-gilroy pl-3 pt-1 md:px-3">
            Newsletter
          </p>
        </div>
        <div class="flex items-center">
          <p className="text-white text-[10px] md:text-[20px] font-gilroy pl-3 pt-1 md:px-3">
            Privacy Policy
          </p>
        </div>
        <div class="flex items-center">
          <p className="text-white text-[10px] md:text-[20px] font-gilroy pl-3 pt-1 md:px-3">
            Terms & Conditions
          </p>
        </div>
      </div>
      <h1 className="text-white text-[10px] md:text-[16px] font-gilroy">
        MINERVA 2023 - All rights reserved
      </h1>
    </div>
  );
}
