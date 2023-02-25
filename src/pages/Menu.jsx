import Search from "../components/Search";
import MenuSelect from "../components/MenuSelect";
import ProductList from "../components/ProductList";

const Menu = () => {
    return (
        <main className="container mt-20">
            <div className="grid grid-cols-[minmax(200px,300px)_1fr] gap-8">
                <div>
                    <Search />
                    <MenuSelect />
                </div>
                <ProductList />
            </div>
            {/* <div className="grid grid-cols-[auto_1fr]">
                <div>hello world</div>
            </div> */}
        </main>
    );
};
export default Menu;
