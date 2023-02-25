import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SkeletonPost from "./skeleton/SkeletonPost";
import nasiLemak from "../assets/nasi lemak.png";

const productsData = [
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
    {
        name: "椰漿飯配炸雞",
        img: nasiLemak,
        price: 7,
    },
];

const ProductList = () => {
    const [data, setData] = useState([]);
    const prom = () => new Promise((res, rej) => setTimeout(res, 3000));

    useEffect(() => {
        const getData = async () => {
            await prom();
            setData(productsData);
        };
        getData();
    }, []);

    if (data.length < 1) {
        return (
            <ul className="grid grid-cols-3 gap-8">
                {[...Array(10).keys()].map((i) => (
                    <SkeletonPost key={i} />
                ))}
            </ul>
        );
    }

    return (
        <ul className="grid grid-cols-3 gap-8">
            {data.map((d, index) => {
                return <ProductCard {...d} key={index} />;
            })}
        </ul>
    );
};
export default ProductList;
