function findAccountById(accounts, id) {
  let foundId = accounts.find((account) => account.id === id);
   return foundId;
}
function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
      accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
   );
  return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrows = 0;
  for(let i = 0; i < books.length; i++){
    for(let j = 0; j < books[i].borrows.length; j++) {
      if(account.id === books[i].borrows[j].id) {
        totalBorrows += 1;
      }
    }
  }
  return totalBorrows; 
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = [];
   books.forEach(( book )  => {
     let bookBorrows = book.borrows;
      bookBorrows.forEach(( borrow )   => {

      if (borrow.id === account.id && !borrow.returned) {
        borrowedBooks.push(book);
      }
    });
  });

  
  let result = borrowedBooks.map((book)  => {
    return { ...book, author: getAuthor(book, authors) };
  });
  return result;
}



function getAuthor(book, authors) {

  let author = authors.find((author)  => author.id  === book.authorId);

  return author;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
