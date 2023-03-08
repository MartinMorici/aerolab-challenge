
export const postCoins = (amount) => {
  const addCoin = fetch('https://coding-challenge-api.aerolab.co/user/points', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
    body: JSON.stringify({ amount: amount }),
  })
    .then((resp) => resp.json())
    .catch(() => console.log('Error al realizar la peticion'));

  return addCoin;
};
