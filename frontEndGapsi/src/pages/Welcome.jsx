import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBienvenida, getVersion } from '../store/slices/appThunks';

export const Welcome = () => {

    const dispatch = useDispatch();
    const { bienvenido, version } = useSelector(state => state.app);

    useEffect(() => {
        dispatch(getBienvenida());
        dispatch(getVersion(bienvenido));
    }, []);

    //console.log(bienvenido);

    return (
        <div className="row py-2 mt-1 align-items-center">
            <div className="col-sm-3 mb-3 align-content-center" />

            <div className="col-sm-6 mb-3 align-content-center" >

                <div className="container">
                    <div className="row py-2 mt-1 align-items-center">
                        <img src="../public/02-visitors.png" alt="" className="img-fluid mb-3 d-none d-md-block" />
                    </div>

                    <div className="row py-2 mt-1 align-items-center">
                        <p className="fw-bold mb-3 text-uppercase text-center">{bienvenido}</p>
                    </div>

                    <div className="row py-2 mt-1 align-items-center">

                        <div className="col-sm-3 mb-3 align-content-center" />

                        <div className="col-sm-6 mb-3 align-content-center" >
                            <NavLink className="bi-save btn btn-primary btn-block py-2 ont-weight-bold" to="/app2">
                                Continuar
                            </NavLink>
                        </div>

                        <div className="col-sm-3 mb-3 align-content-center" />

                    </div>
                </div>
            </div>

            <div className="col-sm-3 mb-3 align-content-center" />

            <div className="row py-2 mt-1 align-items-right">
                <p className="text-end"> {version} </p>
            </div>
        </div>
    )
}
