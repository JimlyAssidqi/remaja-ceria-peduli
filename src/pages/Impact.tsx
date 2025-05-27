
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Heart, Brain, Users, AlertTriangle, TrendingDown } from "lucide-react";

const Impact = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Dampak Pergaulan Bebas</h1>
        <p className="text-xl text-muted-foreground">
          Konsekuensi serius yang harus dipahami oleh remaja, orang tua, dan pendidik
        </p>
      </div>

      {/* Warning Alert */}
      <Alert className="border-orange-200 bg-orange-50">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertTitle className="text-orange-800">Perhatian Penting</AlertTitle>
        <AlertDescription className="text-orange-700">
          Dampak pergaulan bebas bersifat jangka panjang dan dapat mempengaruhi seluruh aspek 
          kehidupan remaja. Edukasi dan pencegahan dini sangat krusial.
        </AlertDescription>
      </Alert>

      {/* Health Impact */}
      <Card className="border-red-200">
        <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-red-700">
            <Heart className="h-8 w-8" />
            Dampak Kesehatan
          </CardTitle>
          <CardDescription className="text-red-600">
            Konsekuensi fisik yang dapat dialami remaja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Badge variant="destructive" className="mb-2">Infeksi Menular Seksual (IMS)</Badge>
              <ul className="space-y-2 text-muted-foreground">
                <li>• HIV/AIDS - dapat mengancam jiwa</li>
                <li>• Gonore dan Sifilis - dapat menyebabkan kemandulan</li>
                <li>• Herpes Genital - tidak dapat disembuhkan</li>
                <li>• HPV - dapat menyebabkan kanker serviks</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Badge variant="destructive" className="mb-2">Kehamilan Tidak Diinginkan</Badge>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kehamilan remaja di bawah usia 18 tahun</li>
                <li>• Risiko komplikasi kehamilan tinggi</li>
                <li>• Putus sekolah dan masa depan terhambat</li>
                <li>• Masalah ekonomi keluarga</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="font-semibold text-red-800 mb-2">Studi Kasus: Rina (17 tahun)</h3>
            <p className="text-red-700 text-sm">
              "Setelah hamil di usia 16 tahun, saya harus putus sekolah. Mimpi menjadi dokter 
              terpaksa tertunda. Sekarang saya berjuang membesarkan anak sambil bekerja part-time 
              untuk membantu ekonomi keluarga."
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Psychological Impact */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-blue-700">
            <Brain className="h-8 w-8" />
            Dampak Psikologis
          </CardTitle>
          <CardDescription className="text-blue-600">
            Pengaruh terhadap kesehatan mental remaja
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-blue-800">Depresi</h3>
              <p className="text-sm text-blue-700">
                38% remaja yang terlibat pergaulan bebas mengalami depresi berat
              </p>
            </div>
            <div className="bg-indigo-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-indigo-800">Kecemasan</h3>
              <p className="text-sm text-indigo-700">
                Perasaan cemas berlebihan dan serangan panik yang mengganggu aktivitas
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg space-y-2">
              <h3 className="font-semibold text-purple-800">Trauma</h3>
              <p className="text-sm text-purple-700">
                PTSD akibat pengalaman negatif atau pelecehan seksual
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary">Gejala Psikologis Lainnya:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>• Rendahnya harga diri dan kepercayaan diri</li>
                <li>• Perasaan bersalah dan menyesal yang mendalam</li>
                <li>• Gangguan tidur dan mimpi buruk</li>
                <li>• Kesulitan berkonsentrasi di sekolah</li>
              </ul>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Perilaku menyakiti diri sendiri</li>
                <li>• Kecenderungan bunuh diri</li>
                <li>• Gangguan makan (anoreksia/bulimia)</li>
                <li>• Ketergantungan pada zat adiktif</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Social Impact */}
      <Card className="border-green-200">
        <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
          <CardTitle className="text-2xl flex items-center gap-3 text-green-700">
            <Users className="h-8 w-8" />
            Dampak Sosial
          </CardTitle>
          <CardDescription className="text-green-600">
            Konsekuensi dalam hubungan sosial dan masyarakat
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-300">Pendidikan</Badge>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Penurunan prestasi akademik drastis</li>
                <li>• Sering membolos dan tidak fokus belajar</li>
                <li>• Putus sekolah untuk mengurus kehamilan</li>
                <li>• Kehilangan beasiswa dan kesempatan pendidikan</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Badge className="bg-green-100 text-green-800 border-green-300">Stigma Sosial</Badge>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dikucilkan oleh teman-teman sebaya</li>
                <li>• Pandangan negatif dari masyarakat</li>
                <li>• Kesulitan mendapat pekerjaan di masa depan</li>
                <li>• Reputasi keluarga tercemar</li>
              </ul>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-800 mb-2">Dampak Jangka Panjang</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-green-700">
              <div>
                <strong>Karir dan Ekonomi:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Kesempatan karir terbatas</li>
                  <li>• Penghasilan rendah</li>
                  <li>• Ketergantungan ekonomi</li>
                </ul>
              </div>
              <div>
                <strong>Hubungan Keluarga:</strong>
                <ul className="mt-1 space-y-1">
                  <li>• Kehilangan kepercayaan orang tua</li>
                  <li>• Konflik keluarga berkepanjangan</li>
                  <li>• Kesulitan membangun keluarga harmonis</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-orange-200">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3 text-orange-700">
            <TrendingDown className="h-8 w-8" />
            Data dan Statistik Dampak
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">45%</div>
              <p className="text-sm text-muted-foreground">Mengalami kehamilan tidak diinginkan</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">62%</div>
              <p className="text-sm text-muted-foreground">Putus sekolah karena kehamilan</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-red-600">28%</div>
              <p className="text-sm text-muted-foreground">Terinfeksi IMS</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-orange-600">71%</div>
              <p className="text-sm text-muted-foreground">Mengalami depresi atau kecemasan</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Impact;
