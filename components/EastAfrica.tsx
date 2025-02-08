import React from "react";

const GoogleMapEastAfricaEmbed = () => {
  return (
    <div className="relative w-full h-96 mx-auto ">
      <div className="overflow-hidden bg-none w-full h-full">
        <iframe
          title="Google Map of East Africa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15981586.339042956!2d29.863188486393738!3d-1.2863897267599174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182699cf002f4791%3A0x21a8c9aa883e1088!2sEast%20Africa!5e0!3m2!1sen!2sus!4v1707245555555"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapEastAfricaEmbed;
