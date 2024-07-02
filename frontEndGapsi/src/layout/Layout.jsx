

export const Layout = ({ children }) => {
    return (
        <div className="container">


            <div className="row py-3 mt-4 align-items-center">

                {children}

            </div>

        </div>
    );
}