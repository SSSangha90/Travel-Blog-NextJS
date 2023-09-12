import React from "react";
import PageLayout from "@/components/PageLayout/PageLayout";
import bridge from "../../images/budapest/bridge.jpg";
import basilica from "../../images/budapest/basilica.jpg";
import goulash from "../../images/budapest/goulash.jpg";

const Budapest: React.FC = () => {
  return (
    <>
      <div className="headline">
        <h1>Budapest</h1>
        <p>
          Full of historic sites, including Buda Castle, as well as a bustling
          night life. Lots to explore in a compact city.
        </p>
      </div>
      <PageLayout
        alt1="Buda Castle"
        fig1="Buda Castle at night"
        img1={bridge}
        para1="Buda castle, also known as the Royal Palace was first completed in 1265 and was the home of many Hungarian Kings thereafter. It's a short walk over the Chain bridge (which is worth walking over), which spans the River Danube - separating Buda and Pest. Once up into the castle, the views of Pest can be breath taking. Exploring the castle could take the best part of a day itself, with various musuems on site."
        alt2="St Stephen's Basilica"
        fig2="St Stephen's Basilica"
        img2={basilica}
        para2="St. Stephen's Basilica is a Roman Catholic basilica in Budapest, Hungary. It is named in honour of Stephen, the first King of Hungary. Visiting the basilica requires tickets which we found dissapointing, since that was rarely the case in Rome. However it is quite a sight to behold, particularly seeing it light up at night."
        alt3="Beef Goulash"
        fig3="Beef Goulash"
        img3={goulash}
        para3="Hungarian food took me by suprise, in terms of how tasty some of the dishes were. Hungarians love Paprika in their dishes and this Beef Goulash, with plenty of paprika, was absolutely divine. A few other dishes definitely worth trying were Chicken Paprikash and Langos (lang-osh) - a deep fried flat bread loaded with sour cream and cheese."
      />
    </>
  );
};

export default Budapest;
