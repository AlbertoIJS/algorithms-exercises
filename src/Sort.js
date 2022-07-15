import React from 'react';
import { shuffle, range } from 'lodash';
import { App, snapshot, done, clear } from './sort-visualizer';

import './sort.css';

function sort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you

  // 2344

  let sorted;
  do {
    sorted = false;
    for (let i = 0; i < nums.length; i++)
      if (nums[i] > nums[i + 1]) {
        sorted = true;

        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        snapshot(nums);
      }
  } while (sorted)
  return nums;
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(100)));
  done();
  return <App />;
}
