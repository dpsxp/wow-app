import React from 'react';
import { Observable } from 'rxjs/Observable';
import client from '../lib/wow-client';
import { mapPropsStream } from 'recompose';
import Boss from '../components/boss';

const withBosses = mapPropsStream(
  prop$ => prop$
    .combineLatest(
      client()
        .pluck('bosses')
        .switchMap((bosses) => {
          let index = 0

          return Observable
            .interval(1000)
            .map(() => {
              const newData = bosses.slice(0, index)
              index = index + 10
              return newData
            })
            .takeWhile((data) => data.length <= bosses.length)
        }),
      (props, bosses) => Object.assign({}, props, { bosses })
    )
)

const App = ({ bosses }) => {
  return (
    <div>
      <h1>Hello WoW</h1>
      {
        bosses.map((boss) => <Boss key={boss.id} boss={boss} />)
      }
    </div>
  )
}

export default withBosses(App)
