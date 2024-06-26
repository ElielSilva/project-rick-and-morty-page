async function getCharaterAPI(rangeIds) {
  const URLapi = `https://rickandmortyapi.com/api/character/${rangeIds}`

  const response = await fetch(URLapi);
  const result = await response.json();
  // console.log(result);
  return traductionInfo(result)
}

async function getOneCharaterAPI(id) {
  const URLapi = `https://rickandmortyapi.com/api/character/${id}`

  const response = await fetch(URLapi);
  const result = await response.json();
  console.log(result);
  return result
}

function traductionInfo(params) {
  const result = params.map((data) => {
    if (data.status == 'Alive') {
      data.status = 'Vivo'
      return data
    }
    data.status == 'Dead' ? data.status = 'Morto' : data.status = 'Indeterminado'
    return data
  }
  );
  return result
}


function rangeNumbers(start) {
  var ans = [];
  if (start === 1) {
    for (let i = start; i <= start*9; i++) {
      ans.push(i);
    }
    return ans;
  }
  else if (start === 2) {
    for (let i = (start*10-10); i <= start*9; i++) {
      ans.push(i);
  }
    return ans;
  }
  for (let i = (start*10-10)-(start-2); i <= start*9; i++) {
      ans.push(i);
  }
  return ans;
}

window.utils = {
  rangeNumbers,
  getCharaterAPI,
  getOneCharaterAPI
};