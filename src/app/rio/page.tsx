import Headline from "@/components/Headline/Headline";
import React from "react";
import view from "../../images/rio/view.jpg";
import christ from "../../images/rio/christ.jpg";
import stairs from "../../images/rio/stairs.jpg";
import PageLayout from "@/components/PageLayout/PageLayout";

const Rio: React.FC = () => {
  return (
    <>
      <Headline
        title="Rio de Janeiro"
        blurb="Where it's carnival season all year around, full of lovely scenery, sites and samba."
        alt="Ro de Janeiro"
        image={stairs}
      />
      <PageLayout
        alt1="Selaron staircase"
        fig1="Selaron staircase"
        img1={stairs}
        para1="This staircase is one of the most visited sites of Rio de Janeiro. The neighbourhood is full of colorful pieces of art, from fascnating graffiti to the wonderful staircase. This is place is a must for taking photos. Located in the legendary neighbourhood of Lapa, this piece of art was the work of Chilean born artist as a tribute to the brazilian people."
        alt2="Christ the redeemer"
        fig2="Christ the Redeemer"
        img2={christ}
        para2="Christ the Redeemer is an Art Deco statue of Jesus Christ and quite a sight to behold. At the site, you also get some breath-taking panoramic views of View de Janeiro. This is the 4th largest statue of Jesus Christ in the world and the largest Art Deco-style sculpture on the planet. This statue is deemed as one of the New Seven Wonders of the world."
        alt3="Rio View"
        fig3="A view from Sugar Loaf Mountain"
        img3={view}
        para3="Another site worth visiting is Sugar Loaf Mountain. You get some amazing views from the Mountain. The Mountain is significant as the cable car system used to get there was the first to be launched in Brazil in 1912 and the 3rd in the world."
      />
    </>
  );
};

export default Rio;
