import { useEffect, useMemo, useState } from 'react';
import AppLayout from '@cloudscape-design/components/app-layout';
import Flashbar from '@cloudscape-design/components/flashbar';
import SideNavigation from '@cloudscape-design/components/side-navigation';
import TopNavigation from '@cloudscape-design/components/top-navigation';
import BreadcrumbGroup from '@cloudscape-design/components/breadcrumb-group';
import {
  alerts,
  dataQuality,
  glueJobs,
  incidentAlerts,
  redshiftQueries,
  s3Lake,
  stepFunctions,
} from './data/mockData';
import { Dashboard } from './pages/Dashboard';
import { OperationsTablePage } from './pages/OperationsTablePage';

const pages = {
  dashboard: {
    title: 'Dashboard',
    description: 'Live operating view for the enterprise data platform.',
    content: <Dashboard />,
  },
  glue: {
    title: 'Glue Jobs',
    description: 'Track ETL jobs, runtime, capacity, retries, and domain ownership.',
    content: (
      <OperationsTablePage
        title="Glue Jobs"
        description="Batch and streaming ETL workloads across governed lakehouse zones."
        actionLabel="Start job"
        items={glueJobs}
        columns={[
          { id: 'name', header: 'Job name', cell: item => item.name, sortingField: 'name' },
          { id: 'domain', header: 'Domain', cell: item => item.domain, sortingField: 'domain' },
          { id: 'lastRun', header: 'Last run', cell: item => item.lastRun, sortingField: 'lastRun' },
          { id: 'duration', header: 'Duration', cell: item => item.duration },
          { id: 'dpu', header: 'DPU', cell: item => item.dpu, sortingField: 'dpu' },
        ]}
        emptyText="No Glue jobs found."
      />
    ),
  },
  stepfunctions: {
    title: 'Step Functions',
    description: 'Observe orchestration health, execution volume, and latency by workflow.',
    content: (
      <OperationsTablePage
        title="Step Functions"
        description="State machine execution summary for platform orchestration."
        actionLabel="View executions"
        items={stepFunctions}
        columns={[
          { id: 'name', header: 'State machine', cell: item => item.name, sortingField: 'name' },
          { id: 'executions', header: 'Executions', cell: item => item.executions, sortingField: 'executions' },
          { id: 'failed', header: 'Failed', cell: item => item.failed, sortingField: 'failed' },
          { id: 'p95', header: 'P95 duration', cell: item => item.p95 },
        ]}
        emptyText="No Step Functions executions found."
      />
    ),
  },
  redshift: {
    title: 'Redshift Queries',
    description: 'Monitor warehouse pressure, high-scan queries, and user workload queues.',
    content: (
      <OperationsTablePage
        title="Redshift Queries"
        description="Recent high-impact queries from shared analytics clusters."
        actionLabel="Open query editor"
        items={redshiftQueries}
        columns={[
          { id: 'queryId', header: 'Query ID', cell: item => item.queryId, sortingField: 'queryId' },
          { id: 'workload', header: 'Workload', cell: item => item.workload, sortingField: 'workload' },
          { id: 'user', header: 'User', cell: item => item.user, sortingField: 'user' },
          { id: 'runtime', header: 'Runtime', cell: item => item.runtime },
          { id: 'scanned', header: 'Scanned', cell: item => item.scanned },
        ]}
        emptyText="No Redshift queries found."
      />
    ),
  },
  s3: {
    title: 'S3 Data Lake',
    description: 'Review zone capacity, encryption posture, and lake governance signals.',
    content: (
      <OperationsTablePage
        title="S3 Data Lake"
        description="Storage posture across raw, curated, product, and quarantine zones."
        actionLabel="Inspect buckets"
        items={s3Lake}
        columns={[
          { id: 'bucket', header: 'Bucket', cell: item => item.bucket, sortingField: 'bucket' },
          { id: 'zone', header: 'Zone', cell: item => item.zone, sortingField: 'zone' },
          { id: 'objects', header: 'Objects', cell: item => item.objects },
          { id: 'size', header: 'Size', cell: item => item.size },
          { id: 'encryption', header: 'Encryption', cell: item => item.encryption },
        ]}
        emptyText="No S3 lake buckets found."
      />
    ),
  },
  quality: {
    title: 'Data Quality',
    description: 'Surface data contract checks, score trends, failing rules, and dataset owners.',
    content: (
      <OperationsTablePage
        title="Data Quality"
        description="Latest validation results from curated and product datasets."
        actionLabel="Run checks"
        items={dataQuality}
        columns={[
          { id: 'dataset', header: 'Dataset', cell: item => item.dataset, sortingField: 'dataset' },
          { id: 'checks', header: 'Checks', cell: item => item.checks, sortingField: 'checks' },
          { id: 'score', header: 'Score', cell: item => item.score, sortingField: 'score' },
          { id: 'failingRules', header: 'Failing rules', cell: item => item.failingRules, sortingField: 'failingRules' },
          { id: 'owner', header: 'Owner', cell: item => item.owner, sortingField: 'owner' },
        ]}
        emptyText="No data quality results found."
      />
    ),
  },
  alerts: {
    title: 'Alerts',
    description: 'Prioritize service health alerts and operational follow-up.',
    content: (
      <OperationsTablePage
        title="Alerts"
        description="Active alerts from ingestion, orchestration, warehouse, lake, and quality controls."
        actionLabel="Create incident"
        items={incidentAlerts}
        columns={[
          { id: 'severity', header: 'Severity', cell: item => item.severity, sortingField: 'severity' },
          { id: 'service', header: 'Service', cell: item => item.service, sortingField: 'service' },
          { id: 'message', header: 'Message', cell: item => item.message, sortingField: 'message' },
          { id: 'opened', header: 'Opened', cell: item => item.opened, sortingField: 'opened' },
        ]}
        emptyText="No active alerts found."
      />
    ),
  },
};

const navItems = [
  { type: 'link', text: 'Dashboard', href: '#dashboard' },
  { type: 'section', text: 'Operations', items: [
    { type: 'link', text: 'Glue Jobs', href: '#glue' },
    { type: 'link', text: 'Step Functions', href: '#stepfunctions' },
    { type: 'link', text: 'Redshift Queries', href: '#redshift' },
    { type: 'link', text: 'S3 Data Lake', href: '#s3' },
    { type: 'link', text: 'Data Quality', href: '#quality' },
    { type: 'link', text: 'Alerts', href: '#alerts' },
  ] },
];

function getPageFromHash() {
  const pageId = window.location.hash.replace('#', '');
  return pages[pageId] ? pageId : 'dashboard';
}

export default function App() {
  const [activePage, setActivePage] = useState(getPageFromHash);
  const [navigationOpen, setNavigationOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [flashItems, setFlashItems] = useState(alerts);

  useEffect(() => {
    const syncPageFromHash = () => setActivePage(getPageFromHash());
    window.addEventListener('hashchange', syncPageFromHash);
    return () => window.removeEventListener('hashchange', syncPageFromHash);
  }, []);

  const page = pages[activePage];
  const activeHref = `#${activePage}`;

  const breadcrumbs = useMemo(() => [
    { text: 'Data Platform', href: '#dashboard' },
    { text: page.title, href: activeHref },
  ], [activeHref, page.title]);

  return (
    <>
      <TopNavigation
        identity={{
          href: '#dashboard',
          title: 'AWS Data Platform Portal',
          logo: {
            src: `${import.meta.env.BASE_URL}aws.svg`,
            alt: 'AWS',
          },
        }}
        utilities={[
          { type: 'button', text: 'us-east-1' },
          { type: 'button', text: 'Prod' },
          { type: 'menu-dropdown', text: 'Data Engineering', items: [
            { id: 'profile', text: 'Team profile' },
            { id: 'preferences', text: 'Preferences' },
          ] },
        ]}
      />
      <AppLayout
        breadcrumbs={<BreadcrumbGroup items={breadcrumbs} expandAriaLabel="Show path" />}
        navigationOpen={navigationOpen}
        onNavigationChange={({ detail }) => setNavigationOpen(detail.open)}
        toolsOpen={toolsOpen}
        onToolsChange={({ detail }) => setToolsOpen(detail.open)}
        navigation={(
          <SideNavigation
            activeHref={activeHref}
            header={{ href: '#dashboard', text: 'Platform operations' }}
            items={navItems}
            onFollow={event => {
              if (!event.detail.external) {
                event.preventDefault();
                const nextPage = event.detail.href.replace('#', '');
                window.history.pushState(null, '', event.detail.href);
                setActivePage(pages[nextPage] ? nextPage : 'dashboard');
              }
            }}
          />
        )}
        notifications={(
          <Flashbar
            items={flashItems.map(item => ({
              ...item,
              onDismiss: () => setFlashItems(current => current.filter(alert => alert.id !== item.id)),
            }))}
          />
        )}
        contentHeader={(
          <header className="content-header">
            <p className="eyebrow">Internal AWS data engineering operations</p>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
          </header>
        )}
        content={page.content}
        toolsHide
      />
    </>
  );
}
