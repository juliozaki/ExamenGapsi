import { Header } from '../components/Header';
import { Layout } from '../layout/Layout';
import { Grid } from '../components/Grid';

export const Administrador = () => {
    return (
        <>
            <Layout>
                <Header />
                <div className="row py-2 mt-1 align-items-center">

                    <div className="row py-2 mt-1 align-items-center">
                        <p className="fw-bold mb-3 text-uppercase text-center"> Relación de proveedores </p>
                    </div>

                    <div className="col-sm-12 mb-3 align-content-center" >

                        <Grid />

                    </div>

                </div>
            </Layout>
        </>
    )
}
