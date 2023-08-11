import axios from 'axios';

const api = axios.create({
  baseURL: 'https://parseapi.back4app.com',
  headers: {
    'X-Parse-Application-Id': 'lrAPveloMl57TTby5U0S4rFPBrANkAhLUll8jFOh',
    'X-Parse-REST-API-Key': '8aqUBWOjOplfA6lstntyYsYVkt3RzpVtb8qU5x08',
    'X-Parse-Revocable-Session': '1',
    'Content-Type': 'application/json',
  },
});

export default api;