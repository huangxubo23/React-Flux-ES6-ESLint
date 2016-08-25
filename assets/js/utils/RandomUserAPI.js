// Random User API logic
import { receiveRandom } from '../actions/TodoServerActions';
import request from 'superagent';

export default function getRandomApi() {
  request.get('http://api.randomuser.me/')
    .set('Accept', 'application/json')
    .end((err, response) => {
      if (err) return console.error(err);

      receiveRandom(response.body);
    });
}

