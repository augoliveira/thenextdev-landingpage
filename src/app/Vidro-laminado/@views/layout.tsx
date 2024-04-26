import { Boundary } from '@/components/ui/boundary';
import { TabGroup } from '@/components/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['Vidro-laminado/@views/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/Vidro-laminado"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'Impressions',
              slug: 'impressions',
            },
            {
              text: 'View Duration',
              slug: 'view-duration',
            },
          ]}
        />
        {children}
      </div>
    </Boundary>
  );
}
