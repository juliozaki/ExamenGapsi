
import { Layout } from '../layout/Layout';
import { Header } from '../components/Header';
import { saveSupplier } from '../store/slices/appThunks';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../hooks/useForme';
import { NavLink } from 'react-router-dom';

export const Agrega = () => {

    const dispatch = useDispatch();
    const { error, isError } = useSelector(state => state.app);

    const showExito = (!isError && error.length > 0);

    const { formState, onInputChange, onResetForm } = useForm({
        rfc: '',
        nombre: '',
        direccion: ''
    });

    const { rfc, nombre, direccion } = formState;

    //console.log(formState);

    return (
        <>
            <Layout>
                <Header />



                <div className="col-md-7 col-lg-6 ml-auto">
                    <div className="row">

                        <div className="col-sm-12 mb-3 align-items-center">
                            <p className="fw-bold mb-3 text-uppercase text-center"> Alta de un nuevo proveedor </p>
                        </div>

                        <div className="col-sm-6 mb-3">

                            <input id="rfc"
                                maxLength={15}
                                type="text"
                                placeholder="RFC"
                                className="form-control bg-white border-left-0 border-md"
                                name="rfc"
                                value={rfc}
                                onChange={onInputChange} />

                        </div>

                        <div className="col-sm-6 mb-3">

                            <input id="nombre"
                                type="text"
                                placeholder="Nombre"
                                className="form-control bg-white border-left-0 border-md"
                                name="nombre"
                                value={nombre}
                                onChange={onInputChange} />

                        </div>

                        <div className="col-sm-12 mb-3">

                            <input id="direccion"
                                type="text"
                                placeholder="Dirección"
                                className="form-control bg-white border-left-0 border-md"
                                name="direccion"
                                value={direccion}
                                onChange={onInputChange} />

                        </div>

                        <div className="col-sm-12 mb-3 alert alert-success"
                            style={{ display: showExito ? '' : 'none' }}>
                            <b>{error}</b>
                        </div>
                        <div className="col-sm-12 mb-3 alert alert-danger"
                            style={{ display: isError ? '' : 'none' }}>
                            <b>{error}</b>
                        </div>

                        <div className="col-sm-6 mb-3">
                            <button className="bi-save btn btn-primary btn-block py-2 ont-weight-bold"
                                onClick={() => { dispatch(saveSupplier(rfc, nombre, direccion)) }}>
                                -Submit
                            </button>
                        </div>
                        <div className="col-sm-6 mb-3">
                            <button className="bi-x btn btn-primary btn-block py-2 ont-weight-bold"
                                onClick={() => { onResetForm() }}>
                                -Reset
                            </button>
                        </div>

                        <div className="col-sm-12 mb-3">
                            <NavLink className="bi-skip-backward btn btn btn-success" to="/app2">
                            </NavLink>
                        </div>

                    </div>
                </div>

            </Layout>
        </>
    )
}
