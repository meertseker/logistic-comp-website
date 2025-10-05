export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-xl">
        <h1 className="text-5xl font-bold text-[#202953] mb-4">Sayfa Bulunamadı</h1>
        <p className="text-gray-600 mb-8">Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
        <a href="/" className="inline-block bg-[#202953] text-white px-6 py-3 rounded-lg font-semibold">Anasayfa</a>
      </div>
    </main>
  );
}


