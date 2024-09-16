export default {
  setShows(state, payload) {
    state.shows = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  }
}