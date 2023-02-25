// import nasiLemak from "../assets/nasi lemak png.png";

// TODO:
// { img, title, price }

const ProductCard = ({ img, price, name }) => {
    return (
        <li className="transition-transform hover:rotate-3">
            {/* <img src={nasiLemak} alt="" /> */}
            <img src={img} alt="" />
            <div className="my-5 flex justify-between">
                {/* <h3>椰漿飯配炸雞</h3> */}
                <h3>{name}</h3>
                <strong>{price}</strong>
            </div>
            <button
                type="button"
                className="w-full rounded-md bg-primary py-4 text-center text-white transition-colors hover:bg-primary/80"
            >
                加入购物车
            </button>
        </li>
    );
};
export default ProductCard;
