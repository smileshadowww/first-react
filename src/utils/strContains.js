export const strContains = (searchedStore, searchingString )=> {
  if(searchedStore.toString().toLowerCase().includes(searchingString.toString().toLowerCase())){
    return true;
  } else {
    return false;
  }
}
