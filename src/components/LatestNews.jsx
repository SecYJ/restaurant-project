import Line from "./Line";

import repair from "../assets/new-repair.jpg";
import price from "../assets/new-price.jpg";
import price2 from "../assets/new-price-2.jpg";
import cny from "../assets/new-new-year.jpg";
import { heading } from "../helpers/ui";

const data = [repair, price, price2, cny];

const LatestNews = () => {
    return (
        <section className="container py-20">
            <div className="flex justify-center">
                <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                    最新消息
                </h2>
                <h2 className="pl-4 text-4xl font-bold text-accent">
                    Latest News
                </h2>
            </div>
            <Line />
            {/* <ul className="grid gap-8 grid-cols-4"> */}
            <ul className="grid-auto-layout my-16">
                {data.map((img, index) => (
                    <li key={index}>
                        <img src={img} />
                    </li>
                ))}
            </ul>
            <div className="flex justify-center">
                <button
                    type="button"
                    className="text-accent hover:text-primary"
                >
                    - MORE NEWS -
                </button>
            </div>
        </section>
    );
};
export default LatestNews;
