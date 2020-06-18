import React, { Component, ReactNode } from 'react';

// Helper function
function getCopies(original: ReactNode, times: number) {
  const result = [];
  for (let i = 0; i < times; i++) {
    result.push(<div>original</div>);
  }
  return result;
}

export interface MultiDivProps {
  times: number;
  children: ReactNode;
}

export default function MultiDiv(props: MultiDivProps) { 
  return (
    <>{getCopies(props.children, props.times)}</>
  );
}

