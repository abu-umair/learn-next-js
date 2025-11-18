export default function AdminLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        < main >
            <header className="border-b border-green-500">
                Admin layout
            </header>
            {children}
        </ main>
    )
}

// mirip seperti
{/* <RootLayout> //? menginput layout root
  <AdminLayout> //? kemidian input layout admin (nested)
    <AdminPage />
  </AdminLayout>
</RootLayout> */}