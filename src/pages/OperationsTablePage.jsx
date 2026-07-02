import Button from '@cloudscape-design/components/button';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Table from '@cloudscape-design/components/table';
import { PageShell } from '../components/PageShell';
import { StatusBadge } from '../components/StatusBadge';

export function OperationsTablePage({ title, description, actionLabel, items, columns, emptyText }) {
  const statusColumn = {
    id: 'status',
    header: 'Status',
    cell: item => <StatusBadge status={item.status} />,
    sortingField: 'status',
  };

  return (
    <PageShell>
      <Container
        header={(
          <Header
            variant="h2"
            description={description}
            actions={(
              <SpaceBetween direction="horizontal" size="xs">
                <Button>Export</Button>
                <Button variant="primary">{actionLabel}</Button>
              </SpaceBetween>
            )}
          >
            {title}
          </Header>
        )}
      >
        <Table
          columnDefinitions={[...columns, statusColumn]}
          items={items}
          loadingText={`Loading ${title.toLowerCase()}`}
          sortingDisabled={false}
          trackBy={item => item.name ?? item.queryId ?? item.bucket ?? item.dataset ?? item.message}
          empty={emptyText}
          header={<Header counter={`(${items.length})`}>Operational inventory</Header>}
        />
      </Container>
    </PageShell>
  );
}
