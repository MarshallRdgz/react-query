export default () =>
  fetch(`https://rickandmortyapi.com/api/character`).then((res) => res.json());
