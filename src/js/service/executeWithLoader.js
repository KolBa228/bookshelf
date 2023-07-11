const executeWithLoader = async func => {
  const loader = document.querySelector('.loader');

  if (loader) {
    loader.classList.remove('hidden');
  }
  
  await func();

  if (loader) {
    loader.classList.add('hidden');
  }
};

export default executeWithLoader;
