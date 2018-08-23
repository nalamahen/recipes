import axios from 'axios';
import {key, proxy} from '../config';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    try {
      const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${this.query}`);
      this.result = res.data.recipes;
      //console.log("recipes", this.result);
    } catch (error) {
      alert(error);
    }
  }
}


//Search api: http://food2fork.com/api/search
// API KEY: a5a9fb5d1a03627b9c239a04b0a65d6d
