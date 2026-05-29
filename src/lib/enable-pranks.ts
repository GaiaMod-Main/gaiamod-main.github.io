export default
  (new Date().getMonth() === 3 
  && new Date().getDate() === 1) ||
  new URLSearchParams(location.search).has('my-name-is-shipguy');