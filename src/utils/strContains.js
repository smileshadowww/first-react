export const strContains = (searchedStore, searchingString )=> {
  console.log(searchedStore);
  console.log(searchingString);
  // (searchedStore.toString().toLowerCase().includes(searchingString.toString().toLowerCase()))
  return searchedStore.toString().toLowerCase().includes(searchingString.toString().toLowerCase());
}
