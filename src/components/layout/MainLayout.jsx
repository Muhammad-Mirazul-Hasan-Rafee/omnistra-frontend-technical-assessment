import Navbar from '../shared/Navbar/Navbar';
import Integrations from '../Integrations/Integrations';
import Footer from '../shared/Footer/Footer';



const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Integrations></Integrations>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;