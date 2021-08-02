import Axios from "axios"

export const get_token_data = async () => {
  const url = 'https://ty7sl9txm1.execute-api.ap-northeast-1.amazonaws.com/prod';
  return await Axios.get(url);
}

export const start_machine = async (data) => {
  const url = 'https://ty7sl9txm1.execute-api.ap-northeast-1.amazonaws.com/prod';
  return await Axios({
    method: 'POST',
    url,
    data
  });
}