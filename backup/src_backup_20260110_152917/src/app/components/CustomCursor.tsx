"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const followerRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only run on desktop
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = cursorRef.current;
        const follower = followerRef.current;

        // Hide default cursor
        document.body.style.cursor = 'none';

        // Move cursor logic
        const moveCursor = (e: MouseEvent) => {
            gsap.to(cursor, {
                x: e.clientX,
                y: e.clientY,
                duration: 0, // Direct follow for dot
            });

            gsap.to(follower, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.15, // Smooth follow for circle
                ease: "power2.out"
            });
        };

        // Hover interactions
        const onHover = () => setIsHovering(true);
        const onLeave = () => setIsHovering(false);

        // Initial setup
        gsap.set([cursor, follower], { xPercent: -50, yPercent: -50, opacity: 1 });
        window.addEventListener("mousemove", moveCursor);

        // Add listeners to interactive elements
        const handleLinkHover = () => {
            const links = document.querySelectorAll("a, button, .cursor-hover");
            links.forEach((link) => {
                link.addEventListener("mouseenter", onHover);
                link.addEventListener("mouseleave", onLeave);
            });

            // Cleanup for this batch
            return () => {
                links.forEach((link) => {
                    link.removeEventListener("mouseenter", onHover);
                    link.removeEventListener("mouseleave", onLeave);
                });
            };
        };

        // Run initially and observe DOM changes to handle dynamic content
        let cleanupLinks = handleLinkHover();

        const observer = new MutationObserver(() => {
            if (cleanupLinks) cleanupLinks();
            cleanupLinks = handleLinkHover();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.body.style.cursor = 'auto';
            if (cleanupLinks) cleanupLinks();
            observer.disconnect();
        };
    }, []);

    return (
        <>
            {/* Main Cursor Dot */}
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-orange-500 rounded-full z-[9999] pointer-events-none mix-blend-difference"
            />

            {/* Follower Circle */}
            <div
                ref={followerRef}
                className={`fixed top-0 left-0 rounded-full border border-orange-500/50 z-[9998] pointer-events-none transition-all duration-300 ease-out ${isHovering
                        ? "w-12 h-12 bg-orange-500/10 border-transparent backdrop-blur-[1px]"
                        : "w-8 h-8 bg-transparent"
                    }`}
            />
        </>
    );
}
