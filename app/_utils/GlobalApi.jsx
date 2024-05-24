const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const BASE_URL = "https://better-wealth-48913fa7ae.strapiapp.com/api";

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
  const data = await fetchData("/categories?populate=*");
  return data.data;
};

const getHospitals = async () => {
  const data = await fetchData("/hospitals?populate=*");
  return data.data;
};

const getTestimonials = async () => {
  const data = await fetchData("/reviews?populate=*");
  return data.data;
};

export { getCategories, getHospitals, getTestimonials };
