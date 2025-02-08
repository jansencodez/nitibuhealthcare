import React from "react";

const GoogleMap: React.FC = () => {
  return (
    <div className="relative w-full h-96 mx-auto ">
      <div className="overflow-hidden bg-none w-full h-full">
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=aea plaza , valleyroad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
