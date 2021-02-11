/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';


export const options = {
  // target is the VUs
  stages: [
    { duration: '1s', target: 20 },
    { duration: '1s', target: 100},
    { duration: '60s', target: 500 },
  ],
};

export default function () {
  http.get(`http://54.91.112.142:3000/reviews/${Math.floor(Math.random() * 1000001)}`);
  sleep(1);
}
