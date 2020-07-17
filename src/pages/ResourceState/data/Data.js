import { query } from "../services";

export default class Data {
  static instance = null;
  constructor() {
    this.data = query();
  }
  static getInstance() {
    if (Data.instance === null) {
      Data.instance = new Data();
    }
    return Data.instance;
  }

  getData() {
    return this.data;
  }

  updateData() {
    this.data = query();
  }
}
