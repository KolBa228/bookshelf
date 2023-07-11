const checkData = book => {
  if (book.description === '') {
    book.description = 'No description';
  }
  return book;
};

export default checkData;
