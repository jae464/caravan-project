import React, { useCallback, useEffect, useRef } from "react";

const useAutoScroll = (): any => {
    const scrollRef = useRef<any>();

    const scrollToBottom = useCallback(() => {
        console.log("scrollToBottom");
        scrollRef.current.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    }, [])

    return [scrollRef, scrollToBottom]
}

export default useAutoScroll;