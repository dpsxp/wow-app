import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';

export default function client() {
  const API_KEY = ''

  const bosses = fetch(`https://us.api.battle.net/wow/boss/?locale=en_US&apikey=${API_KEY}`)
    .then((response) => response.json())

  return Observable
    .fromPromise(bosses)
}
