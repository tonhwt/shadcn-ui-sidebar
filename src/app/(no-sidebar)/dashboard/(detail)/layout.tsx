export default function DashboardDetailLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold mb-4">Detail Layout</h1>
      {children}
    </div>
    );
  }