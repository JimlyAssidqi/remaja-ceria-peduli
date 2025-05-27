
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Target, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Tentang Pergaulan Bebas</h1>
        <p className="text-xl text-muted-foreground">
          Memahami fenomena pergaulan bebas di kalangan remaja Indonesia
        </p>
      </div>

      {/* Definition Section */}
      <Card className="bg-gradient-to-r from-soft-blue to-white">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <BookOpen className="h-8 w-8 text-blue-500" />
            Definisi Pergaulan Bebas
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            Pergaulan bebas adalah pola interaksi sosial remaja yang melampaui batas-batas norma 
            sosial, budaya, dan agama yang berlaku dalam masyarakat. Ini mencakup berbagai perilaku 
            berisiko seperti:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Badge variant="destructive" className="mb-2">Perilaku Seksual</Badge>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Hubungan intim pranikah</li>
                <li>• Aktivitas seksual dini</li>
                <li>• Berganti-ganti pasangan</li>
              </ul>
            </div>
            <div className="space-y-2">
              <Badge variant="destructive" className="mb-2">Perilaku Berisiko Lainnya</Badge>
              <ul className="space-y-1 text-muted-foreground">
                <li>• Konsumsi alkohol dan narkoba</li>
                <li>• Merokok di usia dini</li>
                <li>• Tawuran dan kekerasan</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Context Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Users className="h-8 w-8 text-green-500" />
            Konteks Sosial dan Budaya
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Faktor Modernisasi</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Globalisasi dan pengaruh budaya Barat</li>
                <li>• Kemudahan akses internet dan media sosial</li>
                <li>• Perubahan struktur keluarga modern</li>
                <li>• Urbanisasi dan kehidupan kota</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">Dinamika Remaja</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Masa pencarian identitas diri</li>
                <li>• Pengaruh teman sebaya yang kuat</li>
                <li>• Rasa ingin tahu yang tinggi</li>
                <li>• Kurangnya bimbingan orang dewasa</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics */}
      <Card className="bg-gradient-to-r from-warm-orange to-calm-purple">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <TrendingDown className="h-8 w-8 text-orange-500" />
            Data Statistik Indonesia
          </CardTitle>
          <CardDescription>
            Berdasarkan penelitian dan survei terbaru
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">15-19</div>
              <p className="text-sm text-muted-foreground">Usia rentang tertinggi</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">25%</div>
              <p className="text-sm text-muted-foreground">Remaja aktif secara seksual</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">68%</div>
              <p className="text-sm text-muted-foreground">Terpapar konten pornografi</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-primary">42%</div>
              <p className="text-sm text-muted-foreground">Kurang pengawasan ortu</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Website Goals */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <Target className="h-8 w-8 text-purple-500" />
            Tujuan Website Ini
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3 p-4 bg-soft-green rounded-lg">
                <div className="text-4xl">🎓</div>
                <h3 className="font-semibold text-primary">Edukasi</h3>
                <p className="text-sm text-muted-foreground">
                  Memberikan informasi akurat dan terpercaya tentang pergaulan bebas
                </p>
              </div>
              <div className="text-center space-y-3 p-4 bg-soft-blue rounded-lg">
                <div className="text-4xl">🛡️</div>
                <h3 className="font-semibold text-primary">Pencegahan</h3>
                <p className="text-sm text-muted-foreground">
                  Membantu remaja terhindar dari perilaku berisiko dan dampak negatif
                </p>
              </div>
              <div className="text-center space-y-3 p-4 bg-warm-orange rounded-lg">
                <div className="text-4xl">🤝</div>
                <h3 className="font-semibold text-primary">Dukungan</h3>
                <p className="text-sm text-muted-foreground">
                  Menyediakan bantuan dan konseling untuk remaja yang membutuhkan
                </p>
              </div>
            </div>
            <div className="text-center space-y-4 pt-6">
              <p className="text-lg text-muted-foreground">
                Dengan pendekatan yang komprehensif dan berbasis bukti, kami berkomitmen untuk 
                menciptakan generasi muda Indonesia yang sehat, cerdas, dan berakhlak mulia.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default About;
