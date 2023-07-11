const getCategoryFromBtns = event => {
  return event.target.closest('.categories-button').textContent;
};

export default getCategoryFromBtns;
