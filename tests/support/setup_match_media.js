const fakeMatchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {}
});

window.matchMedia = window.matchMedia || fakeMatchMedia;
