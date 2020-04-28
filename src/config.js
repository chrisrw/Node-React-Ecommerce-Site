// export const API = process.env.REACT_APP_API_URL
export const API =
         window.location.hostname === 'localhost'
           ? 'https://ecommercebonanzaapi.herokuapp.com/api'
           : 'http://localhost:8000';
