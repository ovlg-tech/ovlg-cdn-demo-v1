import React from "react";
import paginationCss from "../styles/pagination.module.css";

export default function Pagination({ postsPerPage, totalPosts, paginate, current_Page }) {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="text-center">
            <ul className={paginationCss["pagination"]}>
                {current_Page != 1 &&
                    <li key={'first'} className="page-item" >
                        <span onClick={() => paginate(1)} className="page-link cursor-pointer">First</span>
                    </li>
                }
                {pageNumbers.map((number) => (

                    number >= (current_Page - 2) && number <= (current_Page + 2) &&
                    <li key={number} className={current_Page == number ? paginationCss["active"] : "page-item"}  >
                        <span onClick={() => paginate(number)} className="page-link cursor-pointer">{number}</span>
                    </li>

                ))}
                {current_Page != pageNumbers.length &&
                    <li key={'last'} className="page-item" >
                        <span onClick={() => paginate(pageNumbers.length)} className="page-link cursor-pointer">Last</span>
                    </li>
                }
            </ul>
        </div>
    );
};