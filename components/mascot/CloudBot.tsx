"use client";

import { useEffect, useRef, useState } from "react";
import {
  CLOUD_BODY_PATH,
  CLOUD_BODY_FILL,
  CLOUD_BODY_SCALE,
  CLOUD_EYE_HEIGHT,
  CLOUD_EYE_POSITIONS,
  CLOUD_EYE_RADIUS,
  CLOUD_EYE_WIDTH,
} from "@/lib/mascot-shape";
import { gazeFromPointer, type GazeTarget } from "@/lib/mascot-gaze";

const RESTING_GAZE: GazeTarget = { x: 0, y: 0, rotate: 0 };

type CloudBotProps = {
  className?: string;
  label?: string;
};

export default function CloudBot({
  className = "",
  label = "The devstackedmagazine studio mascot",
}: CloudBotProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [gaze, setGaze] = useState<GazeTarget>(RESTING_GAZE);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") {
        return;
      }

      const bounds = svgRef.current?.getBoundingClientRect();
      if (!bounds) {
        return;
      }

      setGaze(
        gazeFromPointer(
          { x: event.clientX, y: event.clientY },
          bounds,
        ),
      );
    };

    const resetGaze = () => setGaze(RESTING_GAZE);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("blur", resetGaze);
    document.addEventListener("pointerleave", resetGaze);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("blur", resetGaze);
      document.removeEventListener("pointerleave", resetGaze);
    };
  }, []);

  return (
    <div className={["cloud-bot", className].filter(Boolean).join(" ")}>
      <svg
        ref={svgRef}
        viewBox="0 0 400 400"
        role="img"
        aria-label={label}
        focusable="false"
      >
        <path
          d={CLOUD_BODY_PATH}
          fill={CLOUD_BODY_FILL}
          transform={`translate(200 200) scale(${CLOUD_BODY_SCALE}) translate(-200 -200)`}
        />

        <g aria-hidden="true">
          {CLOUD_EYE_POSITIONS.map((position, index) => (
            <rect
              key={position.x}
              x={-CLOUD_EYE_RADIUS}
              y={-CLOUD_EYE_HEIGHT / 2}
              width={CLOUD_EYE_WIDTH}
              height={CLOUD_EYE_HEIGHT}
              rx={CLOUD_EYE_RADIUS}
              className="cloud-bot-eye"
              transform={`translate(${position.x + gaze.x * (index ? 1.04 : 0.86)} ${position.y + gaze.y * (index ? 0.82 : 0.72)}) rotate(${position.rotation + gaze.rotate * (index ? 0.82 : 0.7)})`}
            />
          ))}
        </g>
      </svg>
    </div>
  );
}
