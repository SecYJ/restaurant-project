import { useCallback, useState } from "react";

const useToggle = (bool) => {
    const [toggle, setToggle] = useState(bool);

    const updateToggle = useCallback(() => {
        return setToggle((prevBool) => !prevBool);
    }, []);

    return [toggle, updateToggle];
};
export default useToggle;
