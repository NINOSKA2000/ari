const baseApiUrl = 'https://api.ariapp.ai/bpass/'   //master

const fetchNoTokenPost = async (endpoint, data, specifiedLocale) => {
  const locale = specifiedLocale || 'en';
  const url = `${baseApiUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        saplicacion: process.env.NEXT_PUBLIC_X_SAPLICACION,
        slanguage: locale,
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

const fetchConTokenPost = async (endpoint, data, tok, specifiedLocale) => {
  const locale = specifiedLocale || 'en'; // Usar el locale especificado o por defecto 'en'
  const url = `${baseApiUrl}${endpoint}`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        stoken: `SSd=${tok}`,
        slanguage: locale,
        saplicacion: process.env.NEXT_PUBLIC_X_SAPLICACION,
        'x-api-key': process.env.NEXT_PUBLIC_X_API_KEY,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

const decodeText = async (valor) => {
  const token = 'a2VzdGVmby9IS2xvbG9wYW4xODA7OSck';
  const secretKey = '21sQjPq9bM4IUgWwrIhNp1xDHkqWBV8D2v1Oe33g';

  const settings = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      saplicacion: 'RPA',
      stoken: token,
      'x-api-key': secretKey,
    },
    body: JSON.stringify({
      sText: valor,
    }),
  };

  try {
    const response = await fetch('https://api.ariapp.ai/rpa/General/?Accion=DecodificarTexto', settings);

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('error', error);
    throw error;
  }
};

export { fetchNoTokenPost, fetchConTokenPost, decodeText };
