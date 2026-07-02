import StatusIndicator from '@cloudscape-design/components/status-indicator';

const labels = {
  success: 'Healthy',
  warning: 'Attention',
  error: 'Impaired',
  info: 'Monitoring',
};

export function StatusBadge({ status, label }) {
  return <StatusIndicator type={status}>{label ?? labels[status] ?? status}</StatusIndicator>;
}
