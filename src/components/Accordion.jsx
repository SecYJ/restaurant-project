import { useEffect } from "react";
import { useRef } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import useToggle from "../hooks/useToggle";

const Accordion = ({ title, content }) => {
    const contentRef = useRef();
    const [isOpen, setIsOpen] = useToggle(false);

    useEffect(() => {
        if (!isOpen) {
            contentRef.current.style.maxHeight = "0px";
            return;
        }
        const { scrollHeight } = contentRef.current;
        contentRef.current.style.maxHeight = `${scrollHeight}px`;
    }, [isOpen]);

    return (
        <li>
            <div
                className="flex cursor-pointer justify-between bg-primary py-4 px-6"
                onClick={() => setIsOpen()}
            >
                <p className="text-lg text-white">{title}</p>
                <button type="button">
                    {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
            </div>
            <div
                className="overflow-hidden text-base transition-all duration-300"
                ref={contentRef}
            >
                <div className="p-6">{content}</div>
            </div>
        </li>
    );
};
export default Accordion;
