import React from "react";
import Gallery from "../_components/Gallery";
import { getGallery } from "../_utils/GlobalApi";
import { getDoctors } from "../_utils/GlobalApi";

const MainGallery = async ({ title }) => {
  const galleryData = await getGallery();
  const doctorsData = await getDoctors();
  return (
    <div>
      {title == "Gallery" ? (
        <Gallery data={galleryData} title={title} />
      ) : (
        <Gallery data={doctorsData} title={title} description=" " />
      )}
    </div>
  );
};

export default MainGallery;
