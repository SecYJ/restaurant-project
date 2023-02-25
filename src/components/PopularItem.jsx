import img from "../assets/836.jpg";
import { ImSearch } from "react-icons/im";

const PopularItem = () => {
    return (
        <div className="border border-gray-200">
            <div className="group relative cursor-pointer overflow-hidden">
                <div className="absolute inset-0 z-[1] grid place-items-center opacity-0 duration-300 group-hover:bg-black/80 group-hover:opacity-100">
                    <div className="grid justify-items-center">
                        {/* opacity-0 group-hover:opacity-100 group-hover:delay-200 group-hover:duration-100 */}
                        <ImSearch className="" color="#fff" />
                        <p className="text-white">MORE</p>
                    </div>
                </div>

                <img
                    src={img}
                    alt="bla bla bla"
                    className="duration-300 group-hover:scale-[1.2]"
                />
            </div>

            <div className="relative grid grid-cols-2 justify-items-center py-4">
                <h3 className="text-center">烧卖</h3>
                <strong>RM 7</strong>
                <span className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-gray-200" />
            </div>
            <button
                type="button"
                className="w-full bg-accent py-3 text-white duration-200 hover:bg-primary"
            >
                加入订单
            </button>
        </div>
    );
};
export default PopularItem;
