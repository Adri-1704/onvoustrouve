export const metadata = {
  title: "OnVousTrouve - Studio",
  description: "Éditeur de contenu Sanity Studio",
  robots: "noindex",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
}
