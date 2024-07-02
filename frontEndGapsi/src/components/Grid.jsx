import { useDispatch, useSelector } from 'react-redux';
import { getSuppliers, deleteSupplier } from '../store/slices/appThunks';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export const Grid = () => {

    const dispatch = useDispatch();
    const { columns, suppliers, error, isError } = useSelector(state => state.app);

    const showExito = (!isError && error.length > 0);

    useEffect(() => {
        dispatch(getSuppliers());
    }, []);

    return (
        <>
            <div className="col-sm-12 mb-3">
                <NavLink className="bi-plus-square btn btn btn-success" to="/app3">
                </NavLink>
            </div>
            <div className="modal-dialog ">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className="panel panel-default">
                            <div className="panel-body table-responsive">
                                <table className="table table-bordered">
                                    <thead>
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
                                            suppliers.map((row) => (
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
                                                        <button name={row.rfc} className="bi-x-octagon btn btn-danger"
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
            <div className="col-sm-12 mb-3 alert alert-success"
                style={{ display: showExito ? '' : 'none' }}>
                <b>{error}</b>
            </div>
        </>
    )
}
