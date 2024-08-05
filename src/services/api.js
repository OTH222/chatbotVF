const API_KEY = "proj_XAPAXDOGA6mittlBdszyRVZH";
const API_URL = "https://api.openai.com/v1/chat/completions";

export const sendMessageToAPI = async (message) => {
  const prompt = `
    You are an intelligent assistant. Here are the possible actions you can perform:
    1. Create a ticket
    2. Schedule an appointment
    3. Collect contact details
    4. Answer general questions

    User: ${message}
    Assistant:
  `;

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: prompt }]
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data); // Log de la réponse pour le débogage

    if (data.choices && data.choices.length > 0) {
      return data.choices[0].message.content.trim();
    } else {
      throw new Error('Invalid response structure');
    }
  } catch (error) {
    console.error('Error communicating with API:', error);
    return 'Sorry, I am having trouble understanding you. Please try again later.';
  }
};
