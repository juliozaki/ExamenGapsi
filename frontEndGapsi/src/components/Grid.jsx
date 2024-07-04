import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers, deleteSupplier } from '../store/slices/appThunks';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { PaginationGrid } from './PaginationGrid';

export const Grid = () => {

    const dispatch = useDispatch();
    const { columns, suppliers, error, isError } = useSelector(state => state.app);

    const showExito = (!isError && error.length > 0);

    useEffect(() => {
        dispatch(getSuppliers());
    }, []);


    ////manejo de variables de paginación
    const [currentPage, setCurrentPage] = useState(1);
    const [suppliersPerPage, SetSuppliersPerPage] = useState(3);

    const indexOfLastPost = currentPage * suppliersPerPage;
    const indexOfFirstPost = indexOfLastPost - suppliersPerPage;
    const currentSuppliers = suppliers.slice(indexOfFirstPost, indexOfLastPost);

    const handlePagination = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    return (
        <>
            <div className="col-sm-12 mb-3">
                <NavLink title="Back" className="bi-arrow-left-square btn btn btn-dark" to="/app1">
                </NavLink>
            </div>
            <div className="col-sm-12 mb-3 text-end">
                <NavLink title="Add new supplier" className="bi-plus-square btn btn btn-success" to="/app3">
                </NavLink>
            </div>
            <div className="col-sm-12 ">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="panel panel-default">
                            <div className="panel-body">
                                <table className="table table-responsive table-bordered table-hover">
                                    <thead className="table-dark">
                                        <tr>

                                            {
                                                columns.map((column) => (
                                                    <th
                                                        key={column.column}
                                                    >
                                                        {column.column}
                                                    </th>
                                                ))
                                            }
                                            <th>
                                                Acciones
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            currentSuppliers.map((row) => (
                                                <tr
                                                    key={row.rfc}
                                                >
                                                    <td
                                                        key={row.rfc}
                                                    >
                                                        {row.rfc}
                                                    </td>
                                                    <td
                                                    >
                                                        {row.nombre}
                                                    </td>
                                                    <td
                                                    >
                                                        {row.direccion}
                                                    </td>
                                                    <td
                                                    >
                                                        {row.fecha_alta}
                                                    </td>
                                                    <td
                                                    >
                                                        <button title="Delete supplier" name={row.rfc} className="bi-x-octagon btn btn-danger"
                                                            onClick={(e) => {
                                                                dispatch(deleteSupplier(e.target.name));
                                                            }}
                                                        />
                                                    </td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row mb-3 border">
                <PaginationGrid length={suppliers.length}
                    suppliersPerPage={suppliersPerPage}
                    handlePagination={handlePagination}
                    currentPage={currentPage} />
            </div>

            <div className="col-sm-12 mb-3 alert alert-success border"
                style={{ display: showExito ? '' : 'none' }}>
                <b>{error}</b>
            </div>

            <div className="col-sm-12 mb-3 alert alert-danger border"
                style={{ display: isError ? '' : 'none' }}>
                <b>{error}</b>
            </div>
        </>
    )
}
