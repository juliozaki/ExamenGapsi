//import React from 'react'

export const PaginationGrid = ({ suppliersPerPage, length, handlePagination, currentPage }) => {

    let paginationNumber = []
    for (let i = 1; i <= Math.ceil(length / suppliersPerPage); i++) {
        paginationNumber.push(i);
    }

    return (
        <>
            {/*
                paginationNumber.map((data) => (

                    <button key={data} onClick={() => handlePagination(data)} className={currentPage === data ? 'active' : ''}>
                        {data}
                    </button>

                ))
            */}
            <div className="col-sm-4 border align-content-center text-start">
                <button title="First page" className="bi-skip-backward-fill btn btn-secondary"
                    onClick={() => handlePagination(1)} />

                <button title="Previous page" className="bi-skip-backward btn btn-light"
                    onClick={() => handlePagination((currentPage - 1))} />
            </div>
            <div className="col-sm-4 border align-content-center text-center">
                <div className="col-sm-12 mb-1">
                    <b>{`Página: ${currentPage}/${paginationNumber.length}`}</b>
                </div>
            </div>
            <div className="col-sm-4 border align-content-center text-end">
                <button title="Next page" className="bi-skip-forward btn btn-light"
                    onClick={() => handlePagination((currentPage + 1))} />

                <button title="Last page" className="bi-skip-forward-fill btn btn-secondary"
                    onClick={() => handlePagination((paginationNumber.length))} />
            </div>
        </>
    )
}
