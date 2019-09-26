const { fetchBreedDescription } = require('./breedFetcher');

const breedName = process.argv.slice(2);

fetchBreedDescription(breedName, (desc, error) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});