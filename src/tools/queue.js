export default class Queue {
  constructor() {
    this.data = new Map();
    this.size = this.data.size;
    this.key = 0;
    this.startKey = 0;
  }

  push = (value) => {
    if (value === undefined) return;

    this.data.set(this.key, value);
    this.key++;
  };

  pop = () => {
    if (this.data.size === 0) return undefined;

    const queueStartValue = this.data.get(this.startKey);
    this.data.delete(this.startKey);
    this.startKey++;

    return queueStartValue;
  };

  clear = () => {
    this.data.clear();
    this.key = 0;
    this.startKey = 0;
  };
}
