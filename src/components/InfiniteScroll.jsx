import React, { useRef, useEffect } from "react";

const InfiniteScroll = ({ loadMore, hasMore, loading }) => {
    const observerTargetRef = useRef(null);

    useEffect(() => {
        // use of Intersection observer Api to monitor dom viewport and take action !
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
        </div>
    )
}

export default InfiniteScroll;