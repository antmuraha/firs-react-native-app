import {AsyncStorage} from 'react-native';

const API_URL = "https://api.unsplash.com/search/collections";
const CLIENT_ID = "34a345c4bf98ae965e840f2d2cf06c2fb4ff85d370f50e1cb0435903379a7988";
const CLIENT_SECRET = "844c713f62fefd0ea664e2e7767a72cbd46f0903eef4791dc0c29665cd1cf0ad";
const REQUEST_URL = API_URL+'?query=*&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET;
//const REQUEST_URL = `${API_URL}?query=*&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;

export async function _storeData(d){
  //console.log('_storeData');
  try {
    await AsyncStorage.setItem('data_unsplash', JSON.stringify(d));
  } catch (error) {
    console.log('Error saving data',error);
  }
}

export async function _retrieveData(){
  //console.log('_retrieveData');
  try {
    const value = await AsyncStorage.getItem('data_unsplash');
    if (value !== null) {
      this.data_unsplash=JSON.parse(value);
      //console.log(`Data load from cache. Total ${this.data_unsplash.total}`)
      return this.data_unsplash;
    }
    return await _getFromUnsplash();
  } catch (error) {
    console.log('Error retrieving data', error);
    return false;
  }
}

export async function _existCache(){
  //console.log('_existCache');
  try {
    const value = await AsyncStorage.getItem('data_unsplash');
    if (value !== null) {
      //console.log(`Data cache exist.`)
      return true;
    }
    //console.log('Data cache not exist.');
    return false;
  } catch (error) {
    console.log('Error. Data cache not exist.');
    return false;
  }
}

export async function _clearCache(){
  //console.log('_clearCache');
  try {
    const value = AsyncStorage.removeItem('data_unsplash');
    alert('Data been removed from cache');
  } catch (error) {
    console.error(error);
    alert('Error remove data');
  }
}

export async function _getFromUnsplash(){
  //console.log('_getFromUnsplash');

  let myHeaders = new Headers({});
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var myInit = {method: 'GET',
  headers: myHeaders,
  cache: false };

  var myRequest = new Request(REQUEST_URL, myInit);

  return fetch(myRequest).then(function(response) {
    let text = response.json();
    return text;
  }).then(function(d) {
    if(d){
      this.data_unsplash=d;
      _storeData(d);
      alert('Data been load. Total '+this.data_unsplash.total);
      return this.data_unsplash;
    }else{
      alert('Error load');
    }
  }.bind(this)).catch((error) => {
    console.log(error);
  });
}
