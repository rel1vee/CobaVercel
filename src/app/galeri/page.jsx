import Image from "next/image";

const Galeri = () => {
  return (
    <div class="content">
      <h1>Galeri</h1>
      <div class="gallery">
        <figure>
          <Image src="/gambar1.png" alt="Gambar 1" width={1066} height={1600} />
          <figcaption>2022</figcaption>
        </figure>
      </div>
      <div class="gallery">
        <figure>
          <Image src="/gambar2.png" alt="Gambar 2" width={1066} height={1600} />
          <figcaption>2023</figcaption>
        </figure>
      </div>
      <div class="gallery">
        <figure>
          <Image src="/gambar3.png" alt="Gambar 3" width={1066} height={1600} />
          <figcaption>2023</figcaption>
        </figure>
      </div>
      <div class="gallery">
        <figure>
          <Image src="/gambar4.png" alt="Gambar 4" width={1066} height={1600} />
          <figcaption>2022</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Galeri;
