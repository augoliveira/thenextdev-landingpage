const title = 'Vidro-laminado';

export const metadata = {
  title,
  openGraph: {
    title,
    images: [`/api/og?title=${title}`],
  },
};

export default function Layout({
  children,
  projetos,
  views,
}: {
  children: React.ReactNode;
  projetos: React.ReactNode;
  views: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-6 lg:space-y-0">
        {children}

        <div className="space-y-6">
          {projetos}
          {views}
        </div>
      </div>
    </div>
  );
}
