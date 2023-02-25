// import banner from "../assets/faq-banner.png";
import Accordion from "../components/Accordion";
import Line from "../components/Line";

const data = [
    {
        title: "你们的菜品有哪些特色？",
        content:
            "我们的餐厅以马来西亚各群族的传统风味菜肴为主，并融合了马来西亚的多元文化特色，打造出一系列独特的菜品，每一道菜品都能够带给您最正宗的口味体验。",
    },
    {
        title: "我们可以自带酒水吗？",
        content:
            "抱歉，我们不允许顾客自带酒水。我们有各种饮品和酒水供您选择，包括酒精饮品和非酒精饮品。我们的服务员将根据您的口味和需求为您推荐最合适的饮品。",
    },
    {
        title: "你们的餐厅提供免费 Wi-Fi 吗？",
        content:
            "是的，我们的餐厅提供免费 Wi-Fi。您可以在用餐期间连接我们的 Wi-Fi 网络，享受网络上的各种服务和应用。请向我们的服务员获取 Wi-Fi 登录信息。",
    },
    {
        title: "是否提供预订服务？",
        content: "目前预订服务只提供自取",
    },
    {
        title: "是否接受团体预订或私人派对活动？",
        content:
            "如果您想要进行预订或了解更多详情，可以通过我们的网站或电话联系我们的客服人员。我们期待着为您提供最优质的服务和最难忘的用餐体验。",
    },
];

const Faq = () => {
    return (
        <main className="container py-20">
            <div className="flex justify-center">
                <h2 className="border-r border-gray-200 pr-4 text-4xl font-bold text-primary">
                    常见问题
                </h2>
                <h2 className="pl-4 text-4xl font-bold text-accent">Faq</h2>
            </div>
            <Line />
            {/* grid-cols-2 */}
            <section className="grid  gap-8 p-8">
                {/* <img src={banner} alt="Faq banner" /> */}
                <ul className="space-y-4">
                    {data.map((item) => (
                        <Accordion {...item} key={item.title} />
                    ))}
                </ul>
            </section>
        </main>
    );
};
export default Faq;
