import axios from 'axios'


const API_KEY = 'XXXXXXXXXX';
const openai = axios.create({
    baseURL: 'https://api.openai.com/v1/chat',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${API_KEY}`,
    },
});

const  getResponse =async (messages)=>{
    
    
    const response = await openai.post('/completions', {
        model: 'gpt-3.5-turbo',
        messages: messages,
        max_tokens: 100,
        temperature:0.2,

    });
    return response;
      

}
export default getResponse;