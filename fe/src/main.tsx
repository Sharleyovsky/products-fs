import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import 'tailwindcss/tailwind.css';

import App from './App';
import { CartProvider } from './contexts/cart';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  const queryClient = new QueryClient();

  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <CartProvider>
          <App />
        </CartProvider>
      </QueryClientProvider>
    </StrictMode>
  );
}
