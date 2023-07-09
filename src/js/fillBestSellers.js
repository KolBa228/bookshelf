import getBooksByCategory from './service/getBooksByCategory';
import {
  bookslist1,
  bookslist2,
  bookslist3,
  bookslist4,
} from './querrySelectors';
import bookCard from '../temlpates/bookCard.hbs';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

const fillBestSellers = async () => {
  const combinedFictionPromise = getBooksByCategory(
    'Combined Print and E-Book Fiction'
  );
  const combinedNonFictionPromise = getBooksByCategory(
    'Combined Print and E-Book Nonfiction'
  );
  const hardcoverFictionPromise = getBooksByCategory('Hardcover Fiction');
  const hardcoverNonFictionPromise = getBooksByCategory('Hardcover Nonfiction');

  const promises = [
    combinedFictionPromise,
    combinedNonFictionPromise,
    hardcoverFictionPromise,
    hardcoverNonFictionPromise,
  ];

  const results = await Promise.allSettled(promises);

  const combinedFiction = results[0];
  const combinedNonFiction = results[1];
  const hardcoverFiction = results[2];
  const hardcoverNonFiction = results[3];

  // combinedFiction.value.length = 4;
  // combinedNonFiction.value.length = 4;
  // hardcoverFiction.value.length = 4;
  // hardcoverNonFiction.value.length = 4;

  // console.log(results);

  // console.log(combinedFiction.value);
  // console.log(combinedNonFiction.value);
  // console.log(hardcoverFiction.value);
  // console.log(hardcoverNonFiction.value);

  bookslist1.innerHTML = bookCard(combinedFiction.value);
  bookslist2.innerHTML = bookCard(combinedNonFiction.value);
  bookslist3.innerHTML = bookCard(hardcoverFiction.value);
  bookslist4.innerHTML = bookCard(hardcoverNonFiction.value);

  const firstSwiper = new Swiper('.swiper-1', {
    modules: [Navigation],
 
    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 5,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const secondSwiper = new Swiper('.swiper-2', {
    modules: [Navigation],
   
    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 5,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const thirdSwiper = new Swiper('.swiper-3', {
    modules: [Navigation],
  
    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 5,
      },
    },
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const fourthSwiper = new Swiper('.swiper-4', {
    modules: [Navigation],

    breakpoints: {
      375: {
        slidesPerView: 1,
      },

      768: {
        slidesPerView: 3,
      },

      1440: {
        slidesPerView: 5,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};

export default fillBestSellers;
