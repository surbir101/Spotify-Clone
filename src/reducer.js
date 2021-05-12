export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //token: "BQC81eDLuFqFUuo2PUHZyYvlLu4aFXZnnO8H7KjoX0cZQy9esM0za57sqjE0yOhAkF5D06Wdj7Al5qMeUVRU7mVkO1oeYvfhjbzDUOMJ_yD-Zf_Kv-sheDjh1lF_H3wUjK29r5icVgrvam6ytFdOeuos_YZH4zzEzz5zF58EVOqciXiuzi-s"
}

const reducer = (state, action) => {
  console.log(action);

  switch(action.type) {
    case "SET_USER":
      return{
      ...state,
      user: action.user,
    };
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

      case "SET_DISCOVER_WEEKLY":
        return {
          ...state,
          discover_weekly: action.discover_weekly,
        };



      break;

    default:
      return state;
  }
}

export default reducer;
