import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ModalCard = ({ isOpen, onClose }) => {
    const overlayRef = useRef(null);
    const cardRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(
                overlayRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.4, ease: "power2.out" }
            );
            gsap.fromTo(
                cardRef.current,
                {
                    opacity: 0,
                    y: -60,
                    scale: 0.9,
                    rotateY: 15
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotateY: 0,
                    duration: 0.6,
                    ease: "back.out(1.7)"
                }
            );
        }
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div
            className="modal-overlay"
            ref={overlayRef}
            onClick={onClose}
        >
            <div
                className="modal-card"
                ref={cardRef}
                onClick={(e) => e.stopPropagation()}
            >
                <h2>People's name enter </h2>
                <input type="text" />
                <div className="divbtn">
                    <button className="cancelBtn" onClick={onClose}>cancel</button>
                    <button className="save">save</button>
                </div>
            </div>
        </div>
    );
};

export default ModalCard;
