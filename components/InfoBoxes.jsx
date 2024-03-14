import React from 'react';
import InfoBox from './InfoBox';

const InfoBoxes = () => {
  return (
    <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
            heading="For Rentals"
            backgroundColor="bg-gray-100"
            buttonInfo={{
              text: 'Browse Properties',
              link: '/properties',
              backgroundColor: 'bg-black',
            }}
          >
            Find Your Dream Rental Properties. Bookmark properties and contact
            owners
          </InfoBox>
          <InfoBox
            heading="For Property owners"
            backgroundColor="bg-blue-100"
            buttonInfo={{
              text: 'Add Properties',
              link: '/properties/add',
              backgroundColor: 'bg-blue-500',
            }}
          >
            List Your Properties and reach potential tenant. Rent as an Airbnb
            or long term rental
          </InfoBox>
        </div>
      </div>
    </section>
  );
};

export default InfoBoxes;
