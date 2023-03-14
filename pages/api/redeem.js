export const redeemProduct = (id) => {
    const redeemProd = fetch('https://coding-challenge-api.aerolab.co/redeem', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
      },
      body: JSON.stringify({ productId: id }),
    })
      .then((resp) => resp.json())
      .catch(() => console.log('Error al realizar la peticion'));
  
    return redeemProd;
  };
  