import { NavLink } from "react-router-dom";

const menu = [
    {
        link: "/",
        text: "首页",
    },
    {
        link: "/about",
        text: "关于",
    },
    {
        link: "/menu",
        text: "菜单",
    },
    {
        link: "/appointment",
        text: "预约",
    },
    {
        link: "/faq",
        text: "常见问题",
    },
    {
        link: "/login",
        text: "登入",
    },
];

const Header = () => {
    return (
        // 2xl:py-10
        <header className="sticky top-0 left-0 z-10 grid h-[120px] items-center bg-primary text-white">
            <div className="container flex justify-between">
                <div>
                    <h1>一马风味</h1>
                </div>
                <ul className="flex gap-8 ">
                    {menu.map((m) => (
                        <li className="" key={m.text}>
                            <NavLink
                                className={({ isActive }) =>
                                    // isActive ? "text-primary-dark" : ""
                                    isActive
                                        ? "border-b-2 border-white pb-2"
                                        : "pb-2"
                                }
                                to={m.link}
                            >
                                {m.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
};
export default Header;
