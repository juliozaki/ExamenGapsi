import { Navigate, Route, Routes } from 'react-router-dom';
import { App } from '../App';
import { Administrador } from '../pages/Administrador';
import { Agrega } from '../pages/Agrega';

export const AppRouter = () => {
    return (
        <>

            <div className='container'>
                <Routes>
                    <Route path='app1' element={<App />}></Route>
                    <Route path='app2' element={<Administrador />}></Route>
                    <Route path='app3' element={<Agrega />}></Route>

                    <Route path='/' element={<Navigate to='/app1' />}></Route>
                </Routes>
            </div>
        </>
    )
}
