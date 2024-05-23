const { default: axios } = require("axios");

const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const axiosClient = axios.create({
  baseURL: "https://better-wealth-48913fa7ae.strapiapp.com/api",
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

const getCategories = async () => {
  const response = await axiosClient.get("/categories?populate=*");
  return response.data.data;
};

const getHospitals = async () => {
  const response = await axiosClient.get("/hospitals?populate=*");
  return response.data.data;
};
const getTestimonials = async () => {
  const data = await fetchData("/reviews?populate=*");
  return data.data;
};
module.exports = {
  getCategories,
   getHospitals,
  getTestimonials,
};
