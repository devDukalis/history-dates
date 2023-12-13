import { useState, useEffect, useRef, FC } from "react";
import { createPortal } from "react-dom";

import classes from "./styles.module.scss";

interface Position {
  x: number;
  y: number;
}

const initialPosition = {
  x: 0,
  y: 0,
};

const MouseTracker: FC = () => {
  const [mousePosition, setMousePosition] = useState<Position>(initialPosition);
  const [isMouseDown, setIsMouseDown] = useState(false);

  const handleMouseMove = useRef((e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  });

  const handleMouseDown = useRef(() => {
    setIsMouseDown(true);
  });

  const handleMouseUp = useRef(() => {
    setIsMouseDown(false);
  });

  useEffect(() => {
    const currentHandleMouseMove = handleMouseMove.current;
    const currentHandleMouseDown = handleMouseDown.current;
    const currentHandleMouseUp = handleMouseUp.current;

    window.addEventListener("mousemove", currentHandleMouseMove);
    window.addEventListener("mousedown", currentHandleMouseDown);
    window.addEventListener("mouseup", currentHandleMouseUp);

    return () => {
      window.removeEventListener("mousemove", currentHandleMouseMove);
      window.removeEventListener("mousedown", currentHandleMouseDown);
      window.removeEventListener("mouseup", currentHandleMouseUp);
    };
  }, []);

  const borderedCircle = (
    <div
      className={classes.circle}
      style={{
        top: mousePosition.y - 30,
        left: mousePosition.x - 30,
      }}
    />
  );

  return (
    <div className={classes.container}>
      {isMouseDown && createPortal(borderedCircle, document.body)}
    </div>
  );
};

export default MouseTracker;
