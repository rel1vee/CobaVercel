import Image from "next/image";

const Beranda = () => {
  return (
    <div className="content">
      <Image src="/profile.png" alt="Zaki's Photo" className="profile-image" />
      <h2>Tentang Saya Selengkapnya?</h2>
      <p>Silakan pilih menu di atas untuk melihat Biodata, Prestasi, Galeri, Portofolio dan Kontak Saya.</p>
    </div>
  );
};

export default Beranda;
