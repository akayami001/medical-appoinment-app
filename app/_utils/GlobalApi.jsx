const API_KEY = process.env.NEXT_PUBLIC_STRAPI_API_KEY;

const BASE_URL = "https://faithful-smile-d6918f5d1c.strapiapp.com/api";

const fetchData = async (endpoint, options = {}) => {
  const defaultOptions = {
    // cache: "no-store",
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
  const data = await fetchData("/categories?populate=*", {
    next: { tags: ["categories"] },
  });
  return data.data;
};

const getHospitals = async () => {
  const data = await fetchData("/hospitals?populate=*", {
    next: { tags: ["hospitals"] },
  });
  return data.data;
};

const getServices = async () => {
  const data = await fetchData("/services?populate=*");
  return data.data;
};

const getGallery = async () => {
  const data = await fetchData("/galleries?populate=*");
  return data.data;
};

const getTestimonials = async () => {
  const data = await fetchData("/reviews?populate=*");
  return data.data;
};

const getBlogs = async () => {
  const data = await fetchData("/blogs?populate=*");
  return data.data;
};

const getBlogById = async (id) => {
  const data = await fetchData(`/blogs/${id}?populate=*`);
  return data.data;
};

export {
  getCategories,
  getHospitals,
  getServices,
  getGallery,
  getTestimonials,
  getBlogs,
  getBlogById,
};
