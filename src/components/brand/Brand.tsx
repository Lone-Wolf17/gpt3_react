import React from "react";
import "./brand.css";
import {
  AtlassianLogoPNG,
  DropBoxLogoPNG,
  GoogleLogoPNG,
  ShopifyLogoPNG,
  SlackLogoPNG,
} from "../../constants/image_assets";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={GoogleLogoPNG} alt="google logo" />
      </div>
      <div>
        <img src={SlackLogoPNG} alt="slack logo" />
      </div>
      <div>
        <img src={AtlassianLogoPNG} alt="atlassian logo" />
      </div>
      <div>
        <img src={DropBoxLogoPNG} alt="dropbox logo" />
      </div>
      <div>
        <img src={ShopifyLogoPNG} alt="shopify logo" />
      </div>
    </div>
  );
};

export default Brand;
