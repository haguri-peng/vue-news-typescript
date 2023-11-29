import axios from 'axios';

// 1. HTTP Request & Response와 관련된 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/',
};

// 2. API 함수들을 정리
function fetchNewsList(page: number) {
  return axios.get(`${config.baseUrl}news/${page}.json`);
}

function fetchAskList(page: number) {
  return axios.get(`${config.baseUrl}ask/${page}.json`);
}

function fetchJobsList(page: number) {
  return axios.get(`${config.baseUrl}jobs/${page}.json`);
}

function fetchList(pageName: string) {
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(userName: string) {
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemInfo(id: string) {
  return axios.get(`${config.baseUrl}item/${id}.json`);
}

export {
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchList,
  fetchUserInfo,
  fetchItemInfo,
};
