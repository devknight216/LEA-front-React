import React from "react";
import CarouselPropertyComponent from "components/homecomponent/crousel";
import CtaComponent from "components/homecomponent/helpcenter";
import HeroComponent from "components/herosection";
import StatusComponent from "components/homecomponent/status/status";
import OurTeamComponent from "components/homecomponent/team";
import FeedbackComponent from "components/homecomponent/feedback";
import ReviewGuesComponent from "components/homecomponent/reviewgues/reviewgues";
import SearchPropertyComponent from "components/searchproperty/searchproperty";

function HomePage() {
  return (
    <div>
      <HeroComponent />
      <CarouselPropertyComponent />
      <FeedbackComponent />
      <ReviewGuesComponent />
      <StatusComponent />
      <OurTeamComponent />
      <CtaComponent />
    </div>
  );
}

export default HomePage;
