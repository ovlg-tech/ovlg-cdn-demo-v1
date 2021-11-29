import React, { useEffect, useState } from 'react'

const AnswersPagination = ({ postsPerPage, totalPosts, paginate, PageNum }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }



  return (
    <div className="text-center">
      <ul className="pagination justify-content-center p-3">
        {PageNum != 1 &&
          <li key={'first'} className="page-item" >
            <span onClick={() => paginate(1)} className="page-link cursor-pointer">First</span>
          </li>
        }
        {pageNumbers.map((number) => (

          number >= (PageNum - 3) && number <= (PageNum + 3) &&
          <li key={number} className={PageNum == number ? "page-item active" : "page-item"}  >
            <span onClick={() => paginate(number)} className="page-link cursor-pointer">{number}</span>
          </li>

        ))}
        {PageNum != pageNumbers.length &&
          <li key={'last'} className="page-item" >
            <span onClick={() => paginate(pageNumbers.length)} className="page-link cursor-pointer">Last</span>
          </li>
        }
      </ul>
    </div>

  );
};

export default AnswersPagination;
