import React, { useEffect, useState } from 'react'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()
import TrustListItem from './trust-list-item'
import Pagination from "../../pagination"

import TrustListData from '../../../contents/success/stories/trust-list-data.json'

export default function TrustList() {
    const [trustListArray, setTrustListArray] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(9);

    useEffect(() => {
        const fetchPosts = async () => {
            setTrustListArray(TrustListData);
        };

        fetchPosts();
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTrustListArray = trustListArray.slice(indexOfFirstItem, indexOfLastItem);
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const renderTrustList = (item, index) => {
        return (
            <TrustListItem key={item.id} trustItem={item} />
        )
    }

    return (
        <>
            <div className="row g-2">
                {currentTrustListArray.map(renderTrustList)}
            </div>
            <div className="content">
                <Pagination
                    postsPerPage={itemsPerPage}
                    totalPosts={trustListArray.length}
                    paginate={paginate}
                    current_Page={currentPage}
                />
            </div>
        </>
    )
}