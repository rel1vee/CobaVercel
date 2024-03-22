import Image from "next/image";

const Portofolio = () => {
  return (
    <div class="contentPort">
      <h1>Portofolio</h1>
      <div class="portfolio">
        <div class="project">
          <Image src="/project4.png" alt="Proyek 1: YouTube Transcriber" width={1200} height={600} />
          <h3>Youtube Transcriber</h3>
          <p>
            Youtube Transcriber adalah sebuah aplikasi atau program komputer yang bertujuan untuk menghasilkan transkripsi teks dari video yang diunggah di platform YouTube melalui API Gemini Pro. Tujuan utama dari proyek ini adalah untuk
            menyediakan transkripsi teks dari video-video YouTube agar lebih mudah diakses, dicari, dan dipahami oleh pengguna.
          </p>
          <div class="button-container">
            <a href="https://github.com/rel1vee/YoutubeTranscriber" target="_blank">
              Source Code
            </a>
          </div>
        </div>
        <div class="project">
          <Image src="/project5.png" alt="Proyek 2: Code Assistant" width={1200} height={600} />
          <h3>Code Assistant</h3>
          <p>
            Code Assistant adalah sebuah aplikasi atau program komputer yang dirancang untuk membantu pengembang perangkat lunak dalam menulis kode dengan lebih efisien dan produktif dengan menggunakan Llama2 LLM. Tujuan utama dari proyek
            ini adalah untuk menyediakan alat bantu yang dapat meningkatkan produktivitas pengembang dengan memberikan saran, petunjuk, dan alat yang berguna saat menulis kode.
          </p>
          <div class="button-container">
            <a href="https://github.com/rel1vee/CodeAssistant" target="_blank">
              Source Code
            </a>
          </div>
        </div>
        <div class="project">
          <Image src="/project3.png" alt="Proyek 3: ChatBot" width={1200} height={600} />
          <h3>Q&A ChatBot</h3>
          <p>
            Q&A ChatBot bertujuan untuk membuat sebuah sistem chatbot interaktif yang mampu menjawab pertanyaan-pertanyaan pengguna berdasarkan pengetahuan yang tersedia dalam database atau sumber informasi tertentu yang diakses melalui
            API Gemini Pro.
          </p>
          <div class="button-container">
            <a href="https://github.com/rel1vee/GeminiChatBot" target="_blank">
              Source Code
            </a>
          </div>
        </div>
        <div class="project">
          <Image src="/project2.png" alt="Proyek 4: Jadwal Salat" width={1200} height={600} />
          <h3>Jadwal Salat</h3>
          <p>
            Jadwal Salat adalah sebuah aplikasi atau program komputer yang bertujuan untuk memberikan informasi jadwal waktu salat kepada pengguna. Dalam kehidupan sehari-hari umat Islam, mengetahui waktu-waktu salat sangatlah penting
            untuk menjalankan ibadah dengan tepat waktu.
          </p>
          <div class="button-container">
            <a href="https://github.com/rel1vee/JadwalSalat" target="_blank">
              Source Code
            </a>
          </div>
        </div>
        <div class="project">
          <Image src="/project1.png" alt="Proyek 5: Sliding-Puzzle Solver" width={1200} height={600} />
          <h3>Sliding-Puzzle Solver</h3>
          <p>
            Sliding-Puzzle Solver adalah sebuah program komputer yang dirancang untuk menyelesaikan teka-teki permainan puzzle geser. Tujuan utama dari proyek ini adalah untuk memberikan solusi otomatis bagi teka-teki puzzle geser yang
            diberikan. Solusi menggunakan 2 metode yaitu, BFS dan A*.
          </p>
          <div class="button-container">
            <a href="https://github.com/rel1vee/Sliding-Puzzle-Solver" target="_blank">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
