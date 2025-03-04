import React, { useEffect, useRef } from 'react';

const BenefitList = () => {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = '1';
            target.style.transform = 'scale(1)';
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '20px',
      }
    );

    const elements = itemRefs.current;
    elements.forEach((item) => {
      if (item) {
        item.style.opacity = '0';
        item.style.transform = 'scale(0.7)';
        observer.observe(item);
      }
    });

    return () => {
      elements.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const setItemRef = (index: number) => (el: HTMLDivElement | null) => {
    itemRefs.current[index] = el;
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="overflow-y-auto max-h-[400px] space-y-6 pr-4 hide-scrollbar">
        {[...Array(8)].map((_, index) => (
          <div 
            key={index}
            ref={setItemRef(index)}
            className={`w-[85%] p-5 rounded-lg text-white relative
                      bg-gradient-to-r from-[#073696] to-[#120c2b]
                      border-t border-b border-[rgba(2,12,95,0.8)]
                      shadow-[0_-2px_2px_rgba(12,10,126,0.8),
                              0_-4px_4px_rgba(29,1,105,0.6),
                              0_-6px_6px_rgba(5,6,95,0.4),
                              0_2px_2px_rgba(12,10,126,0.8),
                              0_4px_4px_rgba(29,1,105,0.6),
                              0_6px_6px_rgba(5,6,95,0.4)]
                      transition-all duration-[350ms] ease-in-out
                      ${index % 2 === 0 ? 'ml-auto mr-4' : 'mr-auto ml-4'}`}
            style={{
              opacity: 0,
              transform: 'scale(0.7)'
            }}
          >
            {index === 0 && (
              <>
                <h2 className="text-xl font-bold mb-3">1. Pengembangan Skill Teknis</h2>
                <p className="mb-2">Kamu bisa belajar dan mengasah keterampilan di bidang pemrograman, robotika, AI, IoT, dan teknologi lainnya.</p>
                <p>Ada kesempatan untuk mengerjakan proyek-proyek nyata yang menantang dan relevan dengan industri.</p>
              </>
            )}
            {index === 1 && (
              <>
                <h2 className="text-xl font-bold mb-3">2. Networking</h2>
                <p className="mb-2">Kamu akan bertemu dengan mahasiswa lain yang memiliki minat serupa, sehingga bisa membangun jaringan (network) yang bermanfaat untuk masa depan.</p>
                <p>Terkadang, UKM Starlabs juga mengundang praktisi atau alumni yang sudah sukses di bidang teknologi untuk berbagi pengalaman.</p>
              </>
            )}
            {index === 2 && (
              <>
                <h2 className="text-xl font-bold mb-3">3. Pengalaman Organisasi</h2>
                <p className="mb-2">Kamu bisa belajar manajemen proyek, kerja tim, dan kepemimpinan melalui kegiatan-kegiatan yang diadakan oleh Starlabs.</p>
                <p>Ini bisa menjadi nilai tambah untuk CV atau portofolio kamu.</p>
              </>
            )}
            {index === 3 && (
              <>
                <h2 className="text-xl font-bold mb-3">4. Mengikuti Kompetisi</h2>
                <p>Starlabs sering mengadakan atau mengikuti kompetisi teknologi, baik tingkat nasional maupun internasional. Ini adalah kesempatan bagus untuk menguji kemampuan dan menambah pengalaman.</p>
              </>
            )}
            {index === 4 && (
              <>
                <h2 className="text-xl font-bold mb-3">5. Akses ke Sumber Daya dan Fasilitas</h2>
                <p>Sebagai anggota, kamu mungkin mendapatkan akses ke tools, software, atau fasilitas lab yang mendukung pembelajaran dan proyek-proyekmu.</p>
              </>
            )}
            {index === 5 && (
              <>
                <h2 className="text-xl font-bold mb-3">6. Peluang Karir</h2>
                <p className="mb-2">Dengan skill dan pengalaman yang didapat, kamu akan lebih siap untuk memasuki dunia kerja, terutama di bidang teknologi.</p>
                <p>Beberapa anggota Starlabs mungkin juga mendapatkan rekomendasi untuk magang atau pekerjaan dari jaringan yang dibangun.</p>
              </>
            )}
            {index === 6 && (
              <>
                <h2 className="text-xl font-bold mb-3">7. Komunitas yang Supportif</h2>
                <p>Kamu akan menjadi bagian dari komunitas yang saling mendukung dan berbagi pengetahuan. Ini bisa memotivasi kamu untuk terus berkembang.</p>
              </>
            )}
            {index === 7 && (
              <>
                <h2 className="text-xl font-bold mb-3">8. Eksplorasi Minat dan Bakat</h2>
                <p>Starlabs memberikan ruang untuk mencoba hal-hal baru, seperti mengembangkan aplikasi, membuat robot, atau mengeksplorasi AI. Ini bisa membantu kamu menemukan passion di bidang teknologi.</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BenefitList; 