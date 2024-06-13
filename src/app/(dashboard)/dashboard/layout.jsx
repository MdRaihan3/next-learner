
const layout = ({children}) => {
    return (
        <div>
            <h1>Dashboard Navbar</h1>
            <div className=" my-8">
                {children}
            </div>
            <p>Footer</p>
        </div>
    );
};

export default layout;