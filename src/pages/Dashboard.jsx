import Box from '@cloudscape-design/components/box';
import Button from '@cloudscape-design/components/button';
import Cards from '@cloudscape-design/components/cards';
import Container from '@cloudscape-design/components/container';
import Header from '@cloudscape-design/components/header';
import SpaceBetween from '@cloudscape-design/components/space-between';
import Tabs from '@cloudscape-design/components/tabs';
import { kpis, runbookCards, trendTabs } from '../data/mockData';
import { PageShell } from '../components/PageShell';
import { StatusBadge } from '../components/StatusBadge';

export function Dashboard() {
  return (
    <PageShell>
      <Cards
        ariaLabels={{ itemSelectionLabel: (_, item) => item.title, selectionGroupLabel: 'KPI cards' }}
        cardDefinition={{
          header: item => item.title,
          sections: [
            {
              id: 'value',
              content: item => <Box fontSize="display-l" fontWeight="bold">{item.value}</Box>,
            },
            {
              id: 'detail',
              content: item => (
                <SpaceBetween size="xs">
                  <StatusBadge status={item.status} />
                  <Box color="text-body-secondary">{item.detail}</Box>
                </SpaceBetween>
              ),
            },
          ],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 520, cards: 2 }, { minWidth: 960, cards: 4 }]}
        items={kpis}
      />

      <Container
        header={(
          <Header
            variant="h2"
            actions={<Button variant="primary">Open operations review</Button>}
            description="Unified health view for ingestion, transformation, warehouse, and quality controls."
          >
            Platform posture
          </Header>
        )}
      >
        <Tabs tabs={trendTabs} />
      </Container>

      <Cards
        header={<Header variant="h2">Runbook shortcuts</Header>}
        cardDefinition={{
          header: item => item.title,
          sections: [{ id: 'description', content: item => item.description }],
        }}
        cardsPerRow={[{ cards: 1 }, { minWidth: 720, cards: 3 }]}
        items={runbookCards}
      />
    </PageShell>
  );
}
