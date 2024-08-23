import { Boundary } from '@/components/ui/boundary';
import { TabGroup } from '@/components/ui/tab-group';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Boundary labels={['Vidro-laminado/@projetos/layout.tsx']} size="small">
      <div className="space-y-8">
        <TabGroup
          path="/Vidro-laminado"
          items={[
            {
              text: 'Home',
            },
            {
              text: 'coberturas',
              slug: 'coberturas',
            },
            {
              text: 'pele-de-vidro',
              slug: 'pele-de-vidro',
            },
          ]}
        />

        {children}
      </div>
    </Boundary>
  );
}
