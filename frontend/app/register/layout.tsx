export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <section className="bg-dark-background w-full min-h-screen">
            {children}
        </section>
    );
}