import { Boundary } from '@/components/ui/boundary';

export default function NotFound() {
  return (
    <Boundary labels={['parallel-routes/not-found.tsx']} color="pink">
      <div className="text-vercel-pink space-y-4">
        <h2 className='text-lg font-bold'>404</h2>
          <div>
              <p className='text-sm'>
                Oops, não conseguimos encontrar essa página!
              </p>
              <span>
                Clique no botão abaixo para ser redirecionado à Página Inicial
              </span>
              </div>
      </div>
    </Boundary>
  );
}
