"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function UploadForm() {
  const [file, setFile] = useState<File | null>(null);
  const [name, setName] = useState("");

  const handleUpload = async () => {
    if (!file) return alert("Pilih file terlebih dahulu!");

    // 🔹 Cek apakah user sudah login
    const { data: user, error } = await supabase.auth.getUser();
    if (error) {
      console.error("Error fetching user:", error.message);
      return alert("Terjadi kesalahan saat memeriksa status login.");
    }
    if (!user) {
      console.error("User must be logged in to insert data.");
      return;
    }

    // 🔹 Upload file ke Supabase Storage
    const { data, error: uploadError } = await supabase.storage
      .from("activities") // Nama bucket
      .upload(`public/${file.name}`, file);

    if (uploadError) {
      console.error("Upload failed:", uploadError.message);
      return;
    }

    // 🔹 Simpan URL gambar ke tabel "activities"
    const { error: insertError } = await supabase
      .from("activities")
      .insert([{ name, url: data.path, created_at: new Date() }]);

    if (insertError) {
      console.error("Insert failed:", insertError.message);
    } else {
      alert("Upload berhasil!");
    }
  };

  return (
    <div>
      <input type="text" placeholder="Nama kegiatan" onChange={(e) => setName(e.target.value)} />
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}
