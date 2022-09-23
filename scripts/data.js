const API = "https://collectionapi.metmuseum.org/public/collection/v1/objects";

export const fetchLuke = async () => {
  const dataFetch = await fetch(`${API}/438815`);
  const jsonData = await dataFetch.json();
  return jsonData;
};
