export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="flex-auto">{children}</main>
      <footer className="py-6 text-center text-sm text-gray-400 bg-black">
        <p>&copy; {new Date().getFullYear()} Tellora. All rights reserved.</p>
      </footer>
    </>
  )
}
