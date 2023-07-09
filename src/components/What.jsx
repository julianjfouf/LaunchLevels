import React from "react";
import Card from "./subcomponents/Card";
import picture2 from "../../public/images/picture2.png";
import picture3 from "../../public/images/picture3.png";
import picture4 from "../../public/images/picture4.png";
import Button from "./subcomponents/Button";

const What = () => {
  return (
    <div id="services" className="border-t-4 border-black z-10">
      <div className="flex flex-col px-4 py-4 z-10">
        <h1 className="text-[64px] text-center z-10">What we do</h1>
        <div className="flex h-full z-10 xl:flex-nowrap flex-wrap">
          <Card
            number="1"
            title="A Brand New Website"
            points={[
              "Unlimited Revisions",
              "Full Refunds",
              "Monthly Maintenance",
              "Single - Multi Page",
              "Increased Web Traffic",
              "Higher Search Rankings",
            ]}
            picture={picture2}
          />
          <Card
            number="2"
            title="Content Creation"
            points={[
              "Custom Media Campaigns",
              "4 Video Shorts/Cinematic Works",
              "Data Driven Strategy",
              "3D Modeling Services",
              "Creative & Influential Development",
            ]}
            picture={picture3}
          />
          <Card
            number="3"
            title="Social Media Outreach"
            points={[
              "Facebook Advertising",
              "Google Advertising",
              "Local Onpage SEO",
              "Content Marketing Alignment",
              "Marketing Discovery",
            ]}
            picture={picture4}
          />
        </div>
        <div className="px-4 py-4 z-10">
          <Button text="Get Started" size="text-[36px]" link="#contact" />
        </div>
      </div>
    </div>
  );
};

export default What;
