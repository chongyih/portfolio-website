import { useEffect, useState, MutableRefObject } from "react";

export default function useOnScreen(refs: MutableRefObject<HTMLDivElement[]>) {
    const [isIntersecting, setIntersecting] = useState(new Array(refs.current.length).fill(false));

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    entry.isIntersecting
                        ? setIntersecting(
                            refs.current.map((ref) => ref.id === entry.target.id)
                        )
                        : null;
                });
            },
            {
                threshold: 0.4,
            }
        );

        refs.current.forEach((ref) => {
            observer.observe(ref);
        });

        return () => {
            refs.current.forEach((ref) => ref && observer.unobserve(ref));
        };
    }, [refs]);

    return isIntersecting;
}