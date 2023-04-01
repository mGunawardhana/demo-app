import React, { Component } from "react";
import AboutCard from "../../components/AboutCard";
import Header from "../../components/Header";

export default class About extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-20">
          <div className="text-center flex flex-col space-y-3">
            <h3>About Us</h3>
            <p>
              This mystery of life is what really is at the heart
              of our concern, because we say it is a gift so stupendous, so
              magnificent, so mysterious that no one but God has any rights over
              it.description="This mystery of life is what really is at the
              heart of our concern, because we say it is a gift so stupendous,
              so magnificent, so mysterious that no one but God has any rights
              over it."description="This mystery of life is what really is at
              the heart of our concern, because we say it is a gift so
              stupendous, so magnificent, so mysterious that no one but God has
              any rights over it.description="This mystery of life is what
              really is at the heart of our concern, because we say it is a gift
              so stupendous, so magnificent, so mysterious that no one but God
              has any rights over it.description="This mystery of life is what
              really is at the heart of our concern, because we say it is a gift
              so stupendous, so magnificent, so mysterious that no one but God
              has any rights over it."description="This mystery of life is what
              really is at the heart of our concern, because we say it is a gift
              so stupendous, so magnificent, so mysterious that no one but God
              has any rights over it.
            </p>
          </div>

          {/* Cards wrapper */}
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  gap-x-5 w-full">
            <AboutCard
              title="Card 1"
              icon
              description="This mystery of life is what really is at the heart of our concern, because we say it is
              a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it."
            />
            <AboutCard
              title="Card 2"
              icon
              description="This mystery of life is what really is at the heart of our concern, because we say it is
               a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it."
            />
            <AboutCard
              title="Card 3"
              icon
              description="This mystery of life is what really is at the heart of our concern, because we say it is
               a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it."
            />
            <AboutCard
              title="Card 4"
              icon
              description="This mystery of life is what really is at the heart of our concern, because we say it is
               a gift so stupendous, so magnificent, so mysterious that no one but God has any rights over it."
            />
          </div>
        </div>
      </>
    );
  }
}
