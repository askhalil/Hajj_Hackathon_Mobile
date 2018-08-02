import axios from 'axios';
import uuid from 'uuid/v4';

const BASE_URL = 'https://labeebhq.com:8443';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: false
});

const searchByFaceImage = (imageUri) => {
  const id = uuid();

  const formData = new FormData();
  formData.append('image', {
    uri: imageUri,
    type: 'image/jpeg',
    name: id
  });

   return axios({
    withCredentials: false,
    url: `${BASE_URL}/files/tests`,
    method: 'post',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  })
   .then(function (response) {
     return response.data;
   });
};

const getImageUrl = (imageId) => {
  return `${BASE_URL}/files/${imageId}`;
};

const searchByKeys = (keys) => {
  return axiosInstance.post(`/records/search`, keys)
  .then(resp => resp.json());
};

export {
  searchByFaceImage,
  searchByKeys,
  getImageUrl
};