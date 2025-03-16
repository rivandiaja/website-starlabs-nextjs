"use client";

import UploadForm from "./upload-form";
import ActivityList from "./activity-list";

export default function AdminPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">Manage Activities</h1>

      {/* Form Upload */}
      <UploadForm />

      {/* List Gambar & Nama Kegiatan */}
      <ActivityList />
    </div>
  );
}
