export default function DashboardLayout({ children }: {
    children: React.ReactNode;
}) {
    return (
        < main >
            <header className="border-b border-green-500">
                Dashboard layout
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