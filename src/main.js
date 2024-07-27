import { fetchImages } from './js/pixabay-api';
import {
  renderGallery,
  clearGallery,
  showMessage,
} from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('#search-form').addEventListener('submit', e => {
  e.preventDefault();

  const query = e.currentTarget.elements.searchQuery.value.trim();

  if (query === '') {
    showMessage('Please enter a search query');
    return;
  }

  clearGallery();
  document.querySelector('.loader-text').style.display = 'block';

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        showMessage(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
      } else {
        renderGallery(images);
      }
    })
    .catch(error => {
      showMessage('Something went wrong. Please try again later.');
    })
    .finally(() => {
      document.querySelector('.loader-text').style.display = 'none';
    });
});
