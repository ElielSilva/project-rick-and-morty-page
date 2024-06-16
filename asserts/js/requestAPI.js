
async function getCharaterAPI(rangeIds) {
  const URLapi = $`https://rickandmortyapi.com/api/character/${rangeIds}`

  const response = await fetch(`${URLapi}${rangeIds}`);
  const result = await response.json();
  console.log(result);
  return result
}

export {
  getCharaterAPI,
};
