import request from '../utils/request';

export function getList(page) {
  return request(`/api/users?_page=${page.payload}&_limit=5`);
}