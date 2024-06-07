import React from "react";
import Gallery from "../_components/Gallery";
import { getGallery } from "../_utils/GlobalApi";
import { data as ourDoctorsData } from "../_mocks_/DoctorsData";

const MainGallery = async ({ title }) => {
  const galleryData = await getGallery();
  return (
    <div>
      {title == "Gallery" ? (
        <Gallery data={galleryData} title={title} />
      ) : (
        <Gallery data={ourDoctorsData} title={title} description=" " />
      )}
    </div>
  );
};

export default MainGallery;
