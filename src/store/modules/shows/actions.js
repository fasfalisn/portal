import {fetchShows} from "@/services/showsService.js"

const getByGenre = (shows) => {
  const showsByGenre = [];
  shows.forEach((show) => {
    show.genres.forEach((genre) => {
      if (!showsByGenre[genre]) {
        showsByGenre[genre] = [];
      }
      showsByGenre[genre].push(show);
    });
  });
  return showsByGenre;
}

export default {
  async loadShows(context) {
    if (!context.getters.shouldUpdate) {
      return;
    }

    let page = 0;
    let allDataFetched = false;
    let shows = [];

    while (!allDataFetched) {
      try {
        const response = await fetchShows(page);
        if (response.status === 404) {
          allDataFetched = true;
          break;
        }
  
        const data = await response.json();
        shows = shows.concat(data);
  
        page++;
      } catch (e) {
        const error = new Error(responseData.message || 'Failed to fetch!');
      }
    }
    const showsByGenre = getByGenre(shows);

    context.commit('setShows', showsByGenre);
    context.commit('setFetchTimestamp');
  }
};
