"use client";

import { useState, lazy, Suspense } from "react";
import { allProjects } from "@/data/showcase-data";
import { Flow } from "@/types/showcase";
import { FlowCard } from "./FlowCard";

const FlowModal = lazy(() =>
  import("./FlowModal").then((m) => ({ default: m.FlowModal }))
);

interface FlowEmbedProps {
  project: string;
  flow?: string;
  columns?: number;
}

export function FlowEmbed({ project, flow, columns }: FlowEmbedProps) {
  const [modalFlow, setModalFlow] = useState<Flow | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const projectData = allProjects.find((p) => p.id === project);
  if (!projectData) return null;

  const flows = flow
    ? projectData.flows.filter((f) => f.id === flow)
    : projectData.flows;

  if (flows.length === 0) return null;

  const handleOpen = (f: Flow) => {
    setModalFlow(f);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setModalFlow(null);
  };

  const gridCols = columns || Math.min(flows.length, 3);
  const gridClass =
    gridCols === 1
      ? "grid grid-cols-1 gap-6"
      : gridCols === 2
        ? "grid grid-cols-1 sm:grid-cols-2 gap-6"
        : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6";

  return (
    <>
      <div className={flows.length === 1 ? undefined : gridClass}>
        {flows.map((f, i) => (
          <FlowCard
            key={f.id}
            flow={f}
            index={i}
            onClick={() => handleOpen(f)}
          />
        ))}
      </div>
      {isOpen && (
        <Suspense fallback={null}>
          <FlowModal flow={modalFlow} isOpen={isOpen} onClose={handleClose} />
        </Suspense>
      )}
    </>
  );
}
