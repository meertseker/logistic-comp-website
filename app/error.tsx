'use client';

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <html>
      <body>
        <main className="min-h-screen flex items-center justify-center bg-white px-4">
          <div className="text-center max-w-xl">
            <h1 className="text-5xl font-bold text-[#202953] mb-4">Bir Hata Oluştu</h1>
            <p className="text-gray-600 mb-8">Beklenmeyen bir hata meydana geldi. Lütfen tekrar deneyin.</p>
            <div className="flex gap-4 justify-center">
              <button onClick={reset} className="bg-[#202953] text-white px-6 py-3 rounded-lg font-semibold">Tekrar Dene</button>
              <a href="/" className="border-2 border-[#202953] text-[#202953] px-6 py-3 rounded-lg font-semibold">Anasayfa</a>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}


