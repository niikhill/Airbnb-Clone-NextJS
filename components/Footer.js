import React from "react";

function Footer() {
  return (
    <>
      <div className="grid md:grid-cols-4 gap-y-10 px-32 py-14 bg-gray-100 text-gray-600">
        <div className="space-y-4 text-md text-gray-800 ">
          <h5 className="font-bold">About</h5>
          <p className="cursor-pointer">How Airbnb works</p>
          <p className="cursor-pointer">Newsroom</p>
          <p className="cursor-pointer">Airbnb 2021</p>
          <p className="cursor-pointer">Investors</p>
          <p className="cursor-pointer">Airbnb Plus</p>
          <p className="cursor-pointer">Airbnb Luxe</p>
          <p className="cursor-pointer">HotelTonight</p>
          <p className="cursor-pointer">Airbnb for Work</p>
          <p className="cursor-pointer">Made possible by Hosts</p>
          <p className="cursor-pointer">Careers</p>
          <p className="cursor-pointer">Founders' Letter</p>
        </div>

        <div className="space-y-4 text-md text-gray-800">
          <h5 className="font-bold">Community</h5>
          <p className="cursor-pointer">Diversity & Belonging</p>
          <p className="cursor-pointer">Accessibility</p>
          <p className="cursor-pointer">Airbnb Associates</p>
          <p className="cursor-pointer">Frontline Stays</p>
          <p className="cursor-pointer">Guest Referrals</p>
          <p className="cursor-pointer">Airbnb.org</p>
        </div>

        <div className="space-y-4 text-md text-gray-800">
          <h5 className="font-bold">HOST</h5>
          <p className="cursor-pointer">Diversity & Belonging</p>
          <p className="cursor-pointer">Accessibility</p>
          <p className="cursor-pointer">Airbnb Associates</p>
          <p className="cursor-pointer">Frontline Stays</p>
          <p className="cursor-pointer">Guest Referrals</p>
          <p className="cursor-pointer">Airbnb.org</p>
        </div>

        <div className="space-y-4 text-md text-gray-800">
          <h5 className="font-bold">SUPPORT</h5>
          <p className="cursor-pointer">Diversity & Belonging</p>
          <p className="cursor-pointer">Accessibility</p>
          <p className="cursor-pointer">Airbnb Associates</p>
          <p className="cursor-pointer">Frontline Stays</p>
          <p className="cursor-pointer">Guest Referrals</p>
          <p className="cursor-pointer">Airbnb.org</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
