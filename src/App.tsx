import { Suspense, lazy } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';

import ErorrFallback from './components/ErrorFallback';
import Home from './components/Home';
import Layout from './components/Layout';
import SkeletonAdmin from './components/skeletons/SkeletonAdmin';

const Admin = lazy(() => import('./components/Admin'));

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="admin"
          element={
            <ErrorBoundary
              FallbackComponent={ErorrFallback}
              onReset={() => () => (window.location.href = '/')}
            >
              <Suspense fallback={<SkeletonAdmin />}>
                <Admin />
              </Suspense>
            </ErrorBoundary>
          }
        />
      </Route>
    )
  );

  // const navigate = useNavigate();

  return <RouterProvider router={router} />;
}

export default App;
