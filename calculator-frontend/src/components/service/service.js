const getResponse = async (param) => {
  const url = 'http://localhost:3030/';

  const response = await fetch(url, {
    method: "POST",
    body: JSON.stringify({equation: param}),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  return response.json();
}

const getResult = async (param) => {
  const res = await getResponse(param);
  console.log(res);
  if (res !== null) {
    return res.toString();
  }
  return 'Error';
}

export default getResult;