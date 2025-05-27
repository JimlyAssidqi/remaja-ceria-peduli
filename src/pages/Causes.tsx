
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserX, Users, Smartphone, GraduationCap, Home, Zap } from "lucide-react";

const Causes = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Faktor Penyebab Pergaulan Bebas</h1>
        <p className="text-xl text-muted-foreground">
          Memahami akar masalah untuk pencegahan yang lebih efektif
        </p>
      </div>

      {/* Primary Factors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Lack of Parental Supervision */}
        <Card className="border-red-200 hover:shadow-lg transition-shadow">
          <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
            <CardTitle className="text-xl flex items-center gap-3 text-red-700">
              <UserX className="h-6 w-6" />
              Kurangnya Pengawasan Orang Tua
            </CardTitle>
            <Badge variant="destructive" className="w-fit">Faktor Utama</Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Penyebab:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Orang tua terlalu sibuk bekerja</li>
                <li>• Kurangnya komunikasi terbuka dengan anak</li>
                <li>• Tidak mengetahui aktivitas anak sehari-hari</li>
                <li>• Memberikan kebebasan berlebihan tanpa batas</li>
                <li>• Tidak mengajarkan nilai-nilai moral dan agama</li>
              </ul>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <p className="text-red-700 text-sm">
                <strong>Dampak:</strong> 67% remaja yang terlibat pergaulan bebas mengaku 
                kurang mendapat perhatian dan bimbingan dari orang tua.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Negative Peer Influence */}
        <Card className="border-orange-200 hover:shadow-lg transition-shadow">
          <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
            <CardTitle className="text-xl flex items-center gap-3 text-orange-700">
              <Users className="h-6 w-6" />
              Pengaruh Teman Sebaya Negatif
            </CardTitle>
            <Badge className="bg-orange-100 text-orange-800 border-orange-300 w-fit">
              Faktor Kritis
            </Badge>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Manifestasi:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Tekanan untuk "ikut-ikutan" agar diterima kelompok</li>
                <li>• Normalisasi perilaku berisiko dalam kelompok</li>
                <li>• Persaingan tidak sehat antar teman</li>
                <li>• Rasa malu jika tidak mengikuti trend kelompok</li>
                <li>• Takut dikucilkan jika menolak ajakan negatif</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-3 rounded-lg">
              <p className="text-orange-700 text-sm">
                <strong>Statistik:</strong> 73% remaja mengaku pernah melakukan sesuatu 
                yang mereka tahu salah hanya untuk diterima teman-temannya.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Technology and Media */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-blue-700">
            <Smartphone className="h-8 w-8" />
            Paparan Media Sosial dan Internet
          </CardTitle>
          <CardDescription className="text-blue-600">
            Dampak teknologi digital terhadap perilaku remaja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-blue-800">Konten Dewasa</h3>
              <p className="text-sm text-blue-700">
                82% remaja terpapar konten pornografi sebelum usia 16 tahun
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-indigo-800">Media Sosial</h3>
              <p className="text-sm text-indigo-700">
                Platform yang menormalisasi hubungan casual dan gaya hidup bebas
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-purple-800">Gaming Online</h3>
              <p className="text-sm text-purple-700">
                Interaksi dengan stranger dan exposure konten tidak pantas
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Cara Media Mempengaruhi:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300">Konten Viral</Badge>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Video dan foto yang menampilkan gaya hidup bebas</li>
                  <li>• Challenge berbahaya di TikTok dan Instagram</li>
                  <li>• Normalisasi hubungan tanpa komitmen</li>
                  <li>• Glorifikasi penggunaan alkohol dan narkoba</li>
                </ul>
              </div>
              <div className="space-y-3">
                <Badge className="bg-blue-100 text-blue-800 border-blue-300">Interaksi Online</Badge>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Chatting dengan orang asing tanpa pengawasan</li>
                  <li>• Dating apps yang memfasilitasi hubungan casual</li>
                  <li>• Cyberbullying yang menurunkan harga diri</li>
                  <li>• FOMO (Fear of Missing Out) dari konten teman</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Education Gap */}
      <Card className="border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-green-700">
            <GraduationCap className="h-8 w-8" />
            Kurangnya Pendidikan Seksual dan Moral
          </CardTitle>
          <CardDescription className="text-green-600">
            Gap edukasi yang berkontribusi pada masalah pergaulan bebas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Pendidikan Seksual
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Masalah di Sekolah:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Kurikulum yang tidak memadai atau tidak ada</li>
                  <li>• Guru yang tidak terlatih membahas topik sensitif</li>
                  <li>• Pendekatan yang terlalu teoretis tanpa praktik</li>
                  <li>• Tidak membahas konsekuensi nyata dari perilaku berisiko</li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                Pendidikan Moral
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Tantangan:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Nilai-nilai tradisional vs modernitas</li>
                  <li>• Kurangnya diskusi tentang etika hubungan</li>
                  <li>• Tidak mengajarkan cara menolak tekanan sosial</li>
                  <li>• Pendidikan agama yang tidak aplikatif</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Konsekuensi Kurangnya Edukasi:</h3>
            <p className="text-green-700 text-sm">
              Remaja yang tidak mendapat pendidikan seksual dan moral yang memadai memiliki 
              risiko 3x lebih tinggi untuk terlibat dalam perilaku berisiko. Mereka cenderung 
              mencari informasi dari sumber yang tidak akurat seperti teman atau internet.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Environmental Factors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-purple-200 hover:shadow-lg transition-shadow">
          <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardTitle className="text-xl flex items-center gap-3 text-purple-700">
              <Home className="h-6 w-6" />
              Faktor Lingkungan Keluarga
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Keluarga broken home atau perceraian orang tua</li>
              <li>• Kekerasan dalam rumah tangga</li>
              <li>• Kondisi ekonomi yang sulit</li>
              <li>• Orang tua yang juga memiliki perilaku bermasalah</li>
              <li>• Kurangnya kehangatan dan kasih sayang</li>
            </ul>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-purple-700 text-sm">
                <strong>Riset menunjukkan:</strong> Remaja dari keluarga harmonis 
                60% lebih kecil kemungkinannya terlibat pergaulan bebas.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-yellow-200 hover:shadow-lg transition-shadow">
          <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50">
            <CardTitle className="text-xl flex items-center gap-3 text-yellow-700">
              <Zap className="h-6 w-6" />
              Faktor Psikologis Personal
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 pt-4">
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>• Rendahnya harga diri dan kepercayaan diri</li>
              <li>• Kebutuhan akan validasi dan penerimaan</li>
              <li>• Rasa ingin tahu yang berlebihan</li>
              <li>• Ketidakstabilan emosional masa remaja</li>
              <li>• Trauma masa kecil atau pengalaman buruk</li>
            </ul>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <p className="text-yellow-700 text-sm">
                <strong>Penting diingat:</strong> Remaja dengan self-esteem rendah 
                lebih mudah terpengaruh tekanan dari teman sebaya.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-gray-200">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-primary">
            Kesimpulan: Pendekatan Holistik Diperlukan
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg text-muted-foreground">
            Pergaulan bebas bukan disebabkan oleh satu faktor tunggal, melainkan kombinasi dari 
            berbagai faktor yang saling berinteraksi. Oleh karena itu, pencegahan harus dilakukan 
            secara komprehensif melibatkan keluarga, sekolah, dan masyarakat.
          </p>
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <Badge variant="outline">Keluarga</Badge>
            <Badge variant="outline">Sekolah</Badge>
            <Badge variant="outline">Teknologi</Badge>
            <Badge variant="outline">Lingkungan</Badge>
            <Badge variant="outline">Psikologi</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Causes;
