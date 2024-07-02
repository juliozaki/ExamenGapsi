import { Header } from './components/Header';
import { Layout } from './layout/Layout';
import { Welcome } from './pages/Welcome';

export const App = () => {

  return (
    <>
      <Layout>
        <Header />
        <Welcome />
      </Layout>
    </>
  );

}
