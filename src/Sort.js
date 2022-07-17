import React from 'react';
import { shuffle, range } from 'lodash';
import { App, snapshot, done, clear } from './sort-visualizer';

import './sort.css';

function bubbleSort(nums) {
  // do cool stuff here

  // call snapshot any time you do anything to the array
  // it's okay if you call it with duplicate value array,
  // it will deduplicate for you

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

function insertionSort(nums) {
  for (let i = 1; i < nums.length; i++) {
    let current = nums[i], j; // current = 98

    for (j = i - 1; j >= 0 && nums[j] > current; j--)
      nums[j + 1] = nums[j]; // Move to the left until the current number is less than the number on the left
    nums[j + 1] = current; // Move to the right
    snapshot(nums);
  }
  return nums;
}

export default function SortComponent() {
  clear();
  insertionSort(shuffle(range(100)));
  done();
  return <App />;
}
