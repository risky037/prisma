import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { fetchTasks, addTask, toggleTask, deleteTask } from "@/store/taskSlice";

export default function Home() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();
  const tasks = useAppSelector((state) => state.tasks.items);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleAdd = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle("");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 to-white p-6 flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-2xl">
        <h1 className="text-3xl font-extrabold text-sky-700 mb-6 text-center">
          TaskMate 📝 <br />
          <span className="text-lg font-medium text-slate-500">
            Pengingat Tugas Harian Anda
          </span>
        </h1>

        <div className="flex gap-3 mb-6">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tulis tugas baru..."
            className="flex-grow border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={handleAdd}
            className="bg-sky-600 hover:bg-sky-700 text-white px-5 py-2 rounded-lg transition"
          >
            Tambah
          </button>
        </div>

        <ul className="space-y-3">
          {tasks.map((task: any) => (
            <li
              key={task.id}
              className="flex justify-between items-center bg-gray-100 rounded-lg px-4 py-3 shadow-sm hover:bg-gray-200 transition group"
            >
              <span
                className={`flex-1 text-lg ${
                  task.completed
                    ? "line-through text-gray-400"
                    : "cursor-pointer text-gray-800 group-hover:text-sky-600"
                }`}
                onClick={() =>
                  dispatch(toggleTask({ id: task.id, completed: !task.completed }))
                }
              >
                {task.title}
              </span>
              <button
                onClick={() => dispatch(deleteTask(task.id))}
                className="ml-4 text-sm text-red-500 hover:text-red-700 transition"
              >
                ✖ Hapus
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="text-center text-gray-500 mt-6 italic">
            Belum ada tugas ditambahkan.
          </p>
        )}
      </div>
    </div>
  );
}


//cara menjalankan aplikasi ini 
//npm install
//npx prisma generate
//npx prisma migrate dev --name init
//npm run dev
//pada terminal akan muncul link localhost:3000
//buka link tersebut di browser untuk melihat aplikasi Todo List sederhana ini
//aplikasi ini menggunakan tailwindcss untuk styling dan redux toolkit untuk state management
//aplikasi ini juga menggunakan prisma sebagai ORM untuk mengakses database
//aplikasi ini sudah terintegrasi dengan database sqlite yang disimpan di folder prisma
//aplikasi ini juga sudah terintegrasi dengan redux toolkit query untuk mengakses API
