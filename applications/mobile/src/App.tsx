import { registerRootComponent } from 'expo';
import { RequireContext } from 'expo-router/build/types';
import { ExpoRoot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// Must be exported or Fast Refresh won't update the context
export function App() {
  const ctx = require.context('./app') as RequireContext;

  return (
    <>
      <ExpoRoot context={ctx} />

      <StatusBar style="auto" />
    </>
  );
}

registerRootComponent(App);
