import axios from 'axios';
import uuid from 'uuid/v4';

axiosInstance = axios.create({
  baseURL: 'https://94ed3f32.ngrok.io',
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

  return axiosInstance({
    url: `/files/tests/${id}`,
    method: 'POST',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  });
};

const searchByKeys = (keys) => {
  return axiosInstance.post(`/records/search`, keys)
  .then(resp => resp.json());
};

export {
  searchByFaceImage,
  searchByKeys
};