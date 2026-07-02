export const kpis = [
  { title: 'Pipelines healthy', value: '42', detail: '5 domains monitored', status: 'success' },
  { title: 'Active incidents', value: '3', detail: '2 high priority', status: 'error' },
  { title: 'Daily processed data', value: '18.7 TB', detail: '+12% from yesterday', status: 'success' },
  { title: 'SLA compliance', value: '97.8%', detail: 'Last 24 hours', status: 'info' },
];

export const alerts = [
  {
    type: 'error',
    content: 'Payments curated-zone Glue workflow breached its 45 minute SLA.',
    dismissible: true,
    id: 'sla-payments',
  },
  {
    type: 'warning',
    content: 'Redshift queue wait time is elevated for finance analytics users.',
    dismissible: true,
    id: 'redshift-wlm',
  },
  {
    type: 'success',
    content: 'Customer 360 data quality score recovered above the 98% threshold.',
    dismissible: true,
    id: 'dq-customer',
  },
];

export const glueJobs = [
  { name: 'raw-orders-to-curated', domain: 'Commerce', lastRun: '2026-07-02 08:10', duration: '18m 42s', dpu: 20, status: 'success' },
  { name: 'payments-ledger-normalizer', domain: 'Finance', lastRun: '2026-07-02 07:55', duration: '47m 11s', dpu: 40, status: 'error' },
  { name: 'crm-contact-deduper', domain: 'Customer', lastRun: '2026-07-02 07:30', duration: '12m 05s', dpu: 10, status: 'success' },
  { name: 'inventory-snapshot-loader', domain: 'Supply Chain', lastRun: '2026-07-02 06:45', duration: '21m 29s', dpu: 20, status: 'warning' },
  { name: 'clickstream-sessionizer', domain: 'Digital', lastRun: '2026-07-02 06:15', duration: '33m 17s', dpu: 30, status: 'success' },
];

export const stepFunctions = [
  { name: 'DailyLakehouseOrchestration', executions: 96, failed: 1, p95: '14m 20s', status: 'warning' },
  { name: 'PartnerInboundSettlement', executions: 24, failed: 0, p95: '7m 11s', status: 'success' },
  { name: 'MLFeatureRefresh', executions: 12, failed: 2, p95: '29m 44s', status: 'error' },
  { name: 'GovernedDatasetPublisher', executions: 48, failed: 0, p95: '5m 06s', status: 'success' },
];

export const redshiftQueries = [
  { queryId: 'q-98124', workload: 'Finance month-end mart', user: 'analytics_finance', runtime: '09m 42s', scanned: '1.8 TB', status: 'warning' },
  { queryId: 'q-98125', workload: 'Executive KPI rollup', user: 'bi_service', runtime: '02m 18s', scanned: '340 GB', status: 'success' },
  { queryId: 'q-98126', workload: 'Customer churn features', user: 'ml_platform', runtime: '13m 02s', scanned: '2.2 TB', status: 'error' },
  { queryId: 'q-98127', workload: 'Inventory availability view', user: 'supply_chain_bi', runtime: '01m 55s', scanned: '210 GB', status: 'success' },
];

export const s3Lake = [
  { bucket: 'company-raw-us-east-1', zone: 'Raw', objects: '124.2M', size: '624 TB', encryption: 'SSE-KMS', status: 'success' },
  { bucket: 'company-curated-us-east-1', zone: 'Curated', objects: '48.7M', size: '218 TB', encryption: 'SSE-KMS', status: 'success' },
  { bucket: 'company-analytics-products', zone: 'Product', objects: '9.3M', size: '74 TB', encryption: 'SSE-KMS', status: 'warning' },
  { bucket: 'company-quarantine-data', zone: 'Quarantine', objects: '621K', size: '8.4 TB', encryption: 'SSE-S3', status: 'error' },
];

export const dataQuality = [
  { dataset: 'curated.orders', checks: 62, score: '99.2%', failingRules: 0, owner: 'Commerce DE', status: 'success' },
  { dataset: 'curated.payments', checks: 54, score: '94.1%', failingRules: 4, owner: 'Finance DE', status: 'error' },
  { dataset: 'product.customer_360', checks: 88, score: '98.4%', failingRules: 1, owner: 'Customer Platform', status: 'warning' },
  { dataset: 'curated.inventory', checks: 39, score: '99.7%', failingRules: 0, owner: 'Supply Chain DE', status: 'success' },
];

export const incidentAlerts = [
  { severity: 'High', service: 'AWS Glue', message: 'payments-ledger-normalizer failed after retry budget exhausted', opened: '2026-07-02 08:44', status: 'error' },
  { severity: 'Medium', service: 'Amazon Redshift', message: 'WLM queue wait above 8 minutes for finance queue', opened: '2026-07-02 08:18', status: 'warning' },
  { severity: 'Low', service: 'Amazon S3', message: 'Quarantine bucket lifecycle policy drift detected', opened: '2026-07-02 07:50', status: 'warning' },
  { severity: 'Info', service: 'Data Quality', message: 'Customer 360 completeness check back within target', opened: '2026-07-02 07:12', status: 'success' },
];

export const runbookCards = [
  { title: 'Data freshness', description: 'Validate latest partitions, crawler status, and downstream dashboard refresh windows.' },
  { title: 'Pipeline recovery', description: 'Restart failed Glue jobs, replay Step Functions executions, and confirm idempotent loads.' },
  { title: 'Query pressure', description: 'Inspect WLM queues, long scans, and materialized view refreshes before scaling.' },
];

export const trendTabs = [
  {
    label: 'Throughput',
    id: 'throughput',
    content: '18.7 TB processed today across raw, curated, and product zones. Peak ingestion occurred between 03:00 and 05:00 UTC.',
  },
  {
    label: 'Reliability',
    id: 'reliability',
    content: '97.8% SLA compliance over the last 24 hours. Finance and ML feature workflows account for most missed windows.',
  },
  {
    label: 'Cost signals',
    id: 'cost',
    content: 'Redshift scanned data is 16% above the weekly baseline. Review large ad hoc queries and refresh cadence.',
  },
];
