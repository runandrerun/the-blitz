const API_KEY = process.env.REACT_APP_API_KEY;
const PROXY = "https://cors-anywhere.herokuapp.com/";

export const fetchPosition = async (query) => {
  const URL = PROXY + `https://www.fantasyfootballnerd.com/service/weekly-rankings/json/${API_KEY}/${query}/14/1/`;
  const response = await fetch(URL);
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  return body.data;
};

export const fetchRankings = async () => {
  const URL = `https://www.fantasyfootballnerd.com/service/weekly-rankings/json/${API_KEY}/QB/14/1/`;
  // const URL = PROXY + `https://www.fantasyfootballnerd.com/service/weekly-rankings/json/${API_KEY}/QB/14/1/`;
  const response = await fetch(URL, {mode: 'cors'});
  const body = await response.json();

  if (response.status !== 200) {
    throw Error(body.message);
  };
  console.log(body.data)
  return body.data;
};
