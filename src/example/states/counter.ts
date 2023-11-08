import { action, map } from 'nanostores';

export interface CounterState {
  count: number;
}

export const $state = map<CounterState>({
  count: 0,
});

export const increase = action($state, 'increase', ($store) => {
  $store.setKey('count', $store.get().count + 1);
});
