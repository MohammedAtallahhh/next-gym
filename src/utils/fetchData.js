export const fetchData = async (url, options) => {
  const response = await fetch(url, options);

  try {
    return await response.json();
  } catch (err) {
    return err;
  }
};
