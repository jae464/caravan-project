import { useCallback, useState } from "react";

const useInput = (initialValues: any) => {
    const [value, setValue] = useState(initialValues);
    const handler = useCallback((e: any) => {
        setValue(e.target.value);
    }, [])
    return [value, handler, setValue];
}

export default useInput;