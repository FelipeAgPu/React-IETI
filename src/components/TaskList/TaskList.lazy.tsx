import React, { lazy, Suspense } from 'react';

const LazyTaskList = lazy(() => import('./TaskList'));

const TaskList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTaskList {...props} />
  </Suspense>
);

export default TaskList;
