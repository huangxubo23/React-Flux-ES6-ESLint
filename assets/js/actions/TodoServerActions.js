// Todo actions
import AppDispatcher from '../dispatcher/AppDispatcher';
import { TodoConstants } from '../constants/TodoConstants';

export default function receiveRandom(response) {
  AppDispatcher.handleServerAction({
    actionType: TodoConstants.GET_RANDOM_RESPONSE,
    response: response,
  });
}

