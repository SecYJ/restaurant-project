import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import review1 from "../assets/review-1.avif";

const customerReviews = [
    {
        text: "我们常常在这里用餐，每一次的用餐体验都令人难忘。从环境优美的氛围到热情周到的服务，再到精心烹制的美食，这里没有一样不好的地方。特别要提到的是，餐厅采用新鲜食材，确保每道菜肴的口感和味道都是最佳 的。我们一定会再来的！",
        name: "Sean",
        img: review1,
    },
    {
        text: "各种马来西亚美食齐聚一堂,  自从第一次吃过这里的美食后就念念不忘, 不用烦恼每次要吃什么, 只要来这里都可以满足你的需求， 而且服务员们都很贴心, 服务态度真的太好啦! 强力推荐给大家。",
        name: "Sharon",
        img: review1,
    },
    {
        text: "这里的食物真的很美味，而且价格也很实惠。我们特别喜欢餐厅的传统风味菜肴，每一道菜都是精心烹制的。餐厅的环境也很棒，让人感到非常舒适。我们强烈推荐这里，绝对不会让您失望！",
        name: "Wisdom",
        img: review1,
    },
    {
        text: "这是一个拥有多元文化风味的餐厅，让您体验到各种不同的味道。我们特别喜欢餐厅的特色菜品，它们不仅美味，而且也充满了历史文化的味道，是一道道美食与艺术的完美结合。",
        name: "Anne",
        img: review1,
    },
];

const Reviews = () => {
    return (
        <section className="mt-20">
            <h2 className="text-primary-dark mb-8 text-center text-[3rem]">
                看看食客们这么说
            </h2>

            <ul className="gap-8 md:grid md:grid-cols-2 2xl:grid-cols-4">
                {customerReviews.map((review) => {
                    const { text, name, img } = review;
                    // hover:rotate-6
                    return (
                        <li
                            key={text}
                            className="flex min-h-[400px] flex-col border border-primary p-6 shadow-md shadow-primary transition-transform "
                        >
                            <FaQuoteLeft color="#A4CD1D" />
                            <p className="my-5 grow">
                                {text.slice(0, 50)}
                                {text.length > 50 && (
                                    <span className="cursor-pointer text-gray-600 hover:text-gray-400">
                                        ...
                                    </span>
                                )}
                            </p>
                            <div className="grid grid-cols-[auto_1fr_auto] items-center gap-4">
                                <img
                                    src={img}
                                    alt="Sean"
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <p>{name}</p>
                                <FaQuoteRight color="#A4CD1D" />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};
export default Reviews;
