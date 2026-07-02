import SpaceBetween from '@cloudscape-design/components/space-between';

export function PageShell({ children }) {
  return (
    <SpaceBetween size="l">
      {children}
    </SpaceBetween>
  );
}
