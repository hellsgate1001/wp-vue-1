class WaypointsService {
  get(offset = 0, limit = 30) {
    return this.$http.get(`http://api.waypoints.briansdojo.co.uk/api/bookmarks/bookmarks/?limit=${limit}&offset=${offset}`);
  }
}

export default WaypointsService;
