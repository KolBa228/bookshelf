const executeWithLoader = async func => {
  const loader = document.querySelector('.loader');

  loader.classList.remove('hidden');

  await func();

  loader.classList.add('hidden');

};

export default executeWithLoader;
