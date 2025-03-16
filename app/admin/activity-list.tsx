"use client";

import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function ActivityList() {
  const [activities, setActivities] = useState<{ id: number; name: string; url: string }[]>([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    const { data, error } = await supabase.from("activities").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    else setActivities(data);
  };

  const handleDelete = async (id: number, url: string) => {
    // Hapus dari Storage
    const filePath = url.split("/storage/v1/object/public/activities/")[1];
    await supabase.storage.from("activities").remove([filePath]);

    // Hapus dari Database
    const { error } = await supabase.from("activities").delete().eq("id", id);
    if (error) return alert("Gagal menghapus: " + error.message);

    alert("Kegiatan berhasil dihapus!");
    setActivities(activities.filter((item) => item.id !== id));
  };

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-bold">Daftar Kegiatan</h2>

      {activities.length === 0 ? (
        <p>Tidak ada kegiatan.</p>
      ) : (
        <div className="grid grid-cols-2 gap-4">
          {activities.map(({ id, name, url }) => (
            <div key={id} className="p-4 border rounded shadow">
              <h3 className="text-center font-bold mt-2">{name}</h3>
              <button
                onClick={() => handleDelete(id, url)}
                className="bg-red-500 text-white px-3 py-1 mt-2 w-full rounded"
              >
                Hapus
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
