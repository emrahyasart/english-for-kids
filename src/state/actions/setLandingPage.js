import store from "../store";

export function setSectionName(section) {
  return store.dispatch({
    type: "UPDATE_SECTION",
    payload: {
      section
    }
  });
}
