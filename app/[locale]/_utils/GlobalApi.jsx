import {getCurrentLocale} from "../../../locales/server";


const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const BASE_URL = "http://92.205.17.203:1337/api";

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  const finalOptions = { ...defaultOptions, ...options };
  const url = `${BASE_URL}${endpoint}`;

  try {
    const res = await fetch(url, finalOptions);
    if (!res.ok) {
      throw new Error(`Error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

const getCategories = async () => {
  const data = await fetchData(`/categories?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getCategoryById = async (id) => {
  const data = await fetchData(`/categories/${id}?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getHospitals = async () => {
  const data = await fetchData(`/hospitals?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getHospitalsByName = async (name) => {
  const data = await fetchData(`/hospitals?filters[name][$eq]=${name}&populate=*&locale=${getCurrentLocale()}`);
  return data.data[0];
};

const getServices = async () => {
  const data = await fetchData(`/services?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getGallery = async () => {
  const data = await fetchData(`/galleries?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getTestimonials = async () => {
  const data = await fetchData(`/reviews?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getBlogs = async () => {
  const data = await fetchData(`/blogs?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};

const getBlogById = async (id) => {
  const data = await fetchData(`/blogs/${id}?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};
const getDoctors = async () => {
  const data = await fetchData(`/doctors?populate=*&locale=${getCurrentLocale()}`);
  return data.data;
};
const getLogo = async () => {
  const data = await fetchData(`/logos?populate=*`);
  return data.data;
};
const getBeforeAfter = async () => {
  const data = await fetchData(`/before-afters?populate=*`);
  return data.data;
};

const createInquri = async (inquriData) => {
  const data = await fetchData("/inquries", {
    method: "POST",
    body: JSON.stringify(inquriData),
  });
  return data.data;
};

export {
  getCategories,
  getHospitals,
  getServices,
  getGallery,
  getDoctors,
  getTestimonials,
  getBlogs,
  getBlogById,
  createInquri,
  getCategoryById,
  getHospitalsByName,
  getLogo,
  getBeforeAfter
};