/* eslint-disable func-names */
/* eslint-disable import/no-unresolved */
import http from 'k6/http';
import { sleep } from 'k6';

export default function () {
  http.get(`http://localhost:3001/reviews/${Math.floor(Math.random() * 10000001)}`);
  sleep(1);
}