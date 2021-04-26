export default () =>
  fetch(`https://digimon-api.vercel.app/api/digimon`).then((res) => res.json());
