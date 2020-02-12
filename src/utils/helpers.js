import url from "./URL";

// flatten function
export function flattenProducts(data) {
  return data.map(item => {
    // cloudinary
    let image = item.image.url;
    // local setup(no deployment)
    // let image = `${url}${item.image.url}`;
    return { ...item, image };
  });
}

// helper functions
export function featuredProducts(data) {
  return data.filter(item => item.featured === true);
}
