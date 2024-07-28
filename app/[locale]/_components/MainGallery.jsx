import React from "react";
import Gallery from "../_components/Gallery";
import { getGallery, getDoctors } from "../_utils/GlobalApi";

const MainGallery = async ({ title, locale }) => {
  const galleryData = await getGallery();
  const doctorsData = await getDoctors();

  return (
    <div>
      {title === "Gallery" ? (
        <Gallery
          data={galleryData}
          titleKey="galleryTitle"
          descriptionKey="galleryDescription"
          locale={locale}
        />
      ) : (
        <Gallery
          data={doctorsData}
          titleKey="doctors"
          descriptionKey="defaultDescription"
          locale={locale}
        />
      )}
    </div>
  );
};

export default MainGallery;
