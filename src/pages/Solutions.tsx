
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Users, GraduationCap, Heart, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Solusi & Pencegahan</h1>
        <p className="text-xl text-muted-foreground">
          Strategi praktis untuk mencegah pergaulan bebas dan membangun masa depan yang lebih baik
        </p>
      </div>

      {/* Call to Action */}
      <Alert className="border-green-200 bg-green-50">
        <Shield className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Pencegahan Adalah Kunci</AlertTitle>
        <AlertDescription className="text-green-700">
          Dengan pendekatan yang tepat dan konsisten, pergaulan bebas dapat dicegah. 
          Setiap individu memiliki peran penting dalam solusi ini.
        </AlertDescription>
      </Alert>

      {/* For Teenagers */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-blue-700">
            <Users className="h-8 w-8" />
            Tips Praktis untuk Remaja
          </CardTitle>
          <CardDescription className="text-blue-600">
            Panduan untuk membuat keputusan yang bijak dan melindungi diri
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                Memilih Teman yang Tepat
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Kriteria Teman Positif:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />Menghormati batas dan nilai-nilai Anda</li>
                  <li>• <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />Mendukung prestasi dan cita-cita Anda</li>
                  <li>• <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />Tidak memaksa melakukan hal negatif</li>
                  <li>• <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />Memiliki hobi dan aktivitas positif</li>
                  <li>• <CheckCircle className="inline h-4 w-4 text-green-500 mr-1" />Jujur dan dapat dipercaya</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Ingat:</strong> "You are the average of the five people you spend the most time with" 
                  - pilihlah teman yang menginspirasi Anda menjadi lebih baik.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Badge className="bg-indigo-100 text-indigo-800 border-indigo-300">
                Cara Berkata "TIDAK"
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Strategi Menolak Tekanan:</h3>
                <div className="space-y-3">
                  <div className="bg-indigo-50 p-3 rounded-lg">
                    <h4 className="font-medium text-indigo-800">1. Tegas tapi Sopan</h4>
                    <p className="text-indigo-700 text-sm">"Terima kasih ajakannya, tapi aku tidak tertarik."</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <h4 className="font-medium text-purple-800">2. Berikan Alasan</h4>
                    <p className="text-purple-700 text-sm">"Aku harus fokus belajar untuk ujian besok."</p>
                  </div>
                  <div className="bg-pink-50 p-3 rounded-lg">
                    <h4 className="font-medium text-pink-800">3. Tawarkan Alternatif</h4>
                    <p className="text-pink-700 text-sm">"Bagaimana kalau kita nonton film saja?"</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <h4 className="font-medium text-red-800">4. Pergi Jika Perlu</h4>
                    <p className="text-red-700 text-sm">Jika terus dipaksa, jangan ragu untuk meninggalkan situasi tersebut.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Aktivitas Positif Pengganti:</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🏃‍♂️</div>
                <p className="text-sm font-medium">Olahraga</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">🎨</div>
                <p className="text-sm font-medium">Seni & Kreativitas</p>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">📚</div>
                <p className="text-sm font-medium">Membaca</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl mb-2">🎵</div>
                <p className="text-sm font-medium">Musik</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* For Parents */}
      <Card className="border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-green-700">
            <Heart className="h-8 w-8" />
            Peran Orang Tua
          </CardTitle>
          <CardDescription className="text-green-600">
            Strategi pengasuhan untuk mencegah pergaulan bebas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-300">
                Komunikasi Efektif
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Membangun Hubungan Terbuka:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Luangkan waktu berkualitas bersama anak</li>
                  <li>• Dengarkan tanpa menghakimi</li>
                  <li>• Berikan apresiasi atas kejujuran anak</li>
                  <li>• Diskusikan topik sensitif dengan bijak</li>
                  <li>• Jadilah role model yang baik</li>
                </ul>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-green-700 text-sm">
                  <strong>Tips:</strong> Mulai percakapan dari hal-hal kecil sehari-hari. 
                  Anak akan lebih terbuka jika merasa nyaman dan tidak dihakimi.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <Badge className="bg-emerald-100 text-emerald-800 border-emerald-300">
                Pengawasan Seimbang
              </Badge>
              <div className="space-y-3">
                <h3 className="font-semibold text-primary">Monitoring yang Bijak:</h3>
                <ul className="space-y-2 text-muted-foreground text-sm">
                  <li>• Ketahui teman-teman dan aktivitas anak</li>
                  <li>• Tetapkan aturan yang jelas dan konsisten</li>
                  <li>• Berikan konsekuensi yang mendidik</li>
                  <li>• Gunakan parental control untuk internet</li>
                  <li>• Libatkan anak dalam membuat aturan keluarga</li>
                </ul>
              </div>
              <div className="bg-emerald-50 p-3 rounded-lg">
                <p className="text-emerald-700 text-sm">
                  <strong>Prinsip:</strong> Bukan tentang mengontrol, tapi tentang 
                  membimbing anak untuk bisa mengontrol diri sendiri.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-3">Tanda-tanda yang Perlu Diwaspadai:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <strong className="text-green-800">Perubahan Perilaku:</strong>
                <ul className="mt-1 text-green-700 space-y-1">
                  <li>• Sering pulang terlambat</li>
                  <li>• Menutupi aktivitas sehari-hari</li>
                  <li>• Prestasi akademik menurun drastis</li>
                  <li>• Perubahan kelompok pertemanan</li>
                </ul>
              </div>
              <div>
                <strong className="text-green-800">Perubahan Fisik/Emosional:</strong>
                <ul className="mt-1 text-green-700 space-y-1">
                  <li>• Mood swing yang ekstrem</li>
                  <li>• Menunjukkan tanda-tanda stres</li>
                  <li>• Kehilangan minat pada hobi</li>
                  <li>• Menghindari interaksi keluarga</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* For Schools */}
      <Card className="border-purple-200">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-purple-700">
            <GraduationCap className="h-8 w-8" />
            Peran Sekolah dan Pendidik
          </CardTitle>
          <CardDescription className="text-purple-600">
            Program dan strategi pencegahan di lingkungan pendidikan
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-purple-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-purple-800">Kurikulum Pendidikan</h3>
              <ul className="text-sm text-purple-700 space-y-1">
                <li>• Pendidikan seksual komprehensif</li>
                <li>• Pendidikan karakter dan moral</li>
                <li>• Life skills training</li>
                <li>• Manajemen emosi</li>
              </ul>
            </div>
            <div className="bg-pink-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-pink-800">Program Sekolah</h3>
              <ul className="text-sm text-pink-700 space-y-1">
                <li>• Peer counseling</li>
                <li>• Ekstrakurikuler positif</li>
                <li>• Seminar dan workshop</li>
                <li>• Kompetisi akademik/non-akademik</li>
              </ul>
            </div>
            <div className="bg-red-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-red-800">Support System</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Konselor sekolah</li>
                <li>• Guru pembimbing</li>
                <li>• Hotline crisis</li>
                <li>• Kerjasama dengan orang tua</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Strategi Implementasi:</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-purple-800">Pendekatan Holistik</h4>
                  <p className="text-purple-700 text-sm">Integrasikan pendidikan karakter dalam semua mata pelajaran, bukan hanya di jam khusus.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-pink-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-pink-800">Metode Interaktif</h4>
                  <p className="text-pink-700 text-sm">Gunakan diskusi, role play, dan studi kasus agar siswa lebih engaged dan mudah memahami.</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-red-800">Evaluasi Berkelanjutan</h4>
                  <p className="text-red-700 text-sm">Monitor efektivitas program dan lakukan penyesuaian berdasarkan feedback siswa dan orang tua.</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Community Role */}
      <Card className="bg-gradient-to-r from-orange-50 to-yellow-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3 text-orange-700">
            <Lightbulb className="h-8 w-8" />
            Peran Masyarakat
          </CardTitle>
          <CardDescription className="text-orange-600">
            Menciptakan lingkungan yang mendukung perkembangan positif remaja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Inisiatif Komunitas:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Program mentoring untuk remaja</li>
                <li>• Kegiatan positif di lingkungan RT/RW</li>
                <li>• Kampanye kesadaran di media sosial</li>
                <li>• Workshop parenting untuk orang tua</li>
                <li>• Fasilitas olahraga dan rekreasi</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-primary">Lingkungan Suportif:</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Toko yang tidak menjual rokok ke remaja</li>
                <li>• Warnet dengan filter konten yang baik</li>
                <li>• Tempat nongkrong yang aman dan positif</li>
                <li>• Event dan kompetisi untuk remaja</li>
                <li>• Jaringan support system antar keluarga</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Action Plan */}
      <Card className="border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-blue-700">
            Rencana Aksi: Mulai dari Sekarang
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center space-y-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl">📅</div>
              <h3 className="font-semibold text-primary">Minggu Ini</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Mulai komunikasi terbuka</li>
                <li>• Evaluasi lingkaran pertemanan</li>
                <li>• Set aturan penggunaan gadget</li>
              </ul>
            </div>
            <div className="text-center space-y-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl">📆</div>
              <h3 className="font-semibold text-primary">Bulan Ini</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Daftar aktivitas positif</li>
                <li>• Workshop pendidikan di sekolah</li>
                <li>• Bentuk support group orang tua</li>
              </ul>
            </div>
            <div className="text-center space-y-3 p-4 bg-white rounded-lg shadow-sm">
              <div className="text-3xl">🗓️</div>
              <h3 className="font-semibold text-primary">Jangka Panjang</h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Program mentoring berkelanjutan</li>
                <li>• Evaluasi dan penyesuaian strategi</li>
                <li>• Kampanye kesadaran masyarakat</li>
              </ul>
            </div>
          </div>

          <div className="text-center space-y-4 pt-6">
            <p className="text-lg text-muted-foreground">
              Ingat, perubahan dimulai dari langkah kecil. Setiap usaha yang Anda lakukan 
              berkontribusi pada masa depan yang lebih baik untuk generasi muda Indonesia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link to="/counseling">
                  Dapatkan Bantuan Profesional
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">
                  Hubungi Kami untuk Konsultasi
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Solutions;
