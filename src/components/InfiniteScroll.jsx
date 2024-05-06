import React, { useRef, useEffect } from "react";

const InfiniteScroll = ({ loadMore, hasMore, loading }) => {
    const observerTargetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !loading) {
                loadMore();
            }
        });

        if (observerTargetRef.current) {
            observer.observe(observerTargetRef.current);
        }

        return () => {
            if (observerTargetRef.current) {
                observer.disconnect();
            }
        };
    }, [loadMore, hasMore, loading]);

    return (
        <div ref={observerTargetRef}>
            {loading && <div>Loading...</div>}
        </div>
    )
}

export default InfiniteScroll;