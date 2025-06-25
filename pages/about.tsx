import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-3xl w-full">
        <h1 className="text-3xl font-extrabold text-blue-700 mb-4 border-b pb-2">
          Tentang Aplikasi <span className="text-blue-500">TaskMate</span>
        </h1>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <span className="font-medium text-blue-600">TaskMate</span> adalah aplikasi pengelola tugas harian
          yang dibangun dengan stack modern: <strong>Next.js</strong>, <strong>Redux Toolkit</strong>,
          <strong>Prisma ORM</strong>, dan <strong>SQLite</strong>. Aplikasi ini memungkinkan pengguna untuk
          menambahkan, menandai selesai, dan menghapus tugas dengan cepat dan efisien.
        </p>

        <p className="text-gray-600 mb-6 italic">
          Video di bawah menunjukkan demo fitur dan penjelasan aplikasi ini sebagai bukti pengerjaan tugas
          secara mandiri.
        </p>

        <div className="aspect-w-16 aspect-h-9 mb-4">
          <iframe
            className="rounded-xl border border-gray-200 shadow-sm"
            width="100%"
            height="500"
            src="https://www.youtube.com/embed/vfe-Ds7Srdo?si=N6PVkyJgIgWiHqKt"
            title="Video Presentasi TaskMate"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <p className="text-sm text-gray-500 text-center">
          &copy; 2025 TaskMate - Dibuat dengan semangat produktivitas 💼📝
        </p>
      </div>
    </div>
  );
}
