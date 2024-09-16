const apiUrl = import.meta.env.VITE_API_URL;

export const fetchShows = (page) => {
  return fetch(`${apiUrl}/shows?page=${page}`);
};

export const fetchShow = (id) => {
  return fetch(`${apiUrl}/lookup/shows?thetvdb=${id}`);
};

export const findShows = (searchTerm) => {
  return fetch(`${apiUrl}/search/shows?q=${searchTerm}`);
};
