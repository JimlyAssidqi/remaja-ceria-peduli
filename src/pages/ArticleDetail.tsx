
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, BookmarkPlus, MessageCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { id } = useParams();

  // Sample article data - in a real app, this would come from an API or database
  const articles = {
    1: {
      id: 1,
      title: "Survei Terbaru: 65% Remaja Indonesia Terpapar Konten Dewasa Melalui Media Sosial",
      excerpt: "Penelitian terbaru dari Universitas Indonesia menunjukkan peningkatan signifikan exposure konten dewasa di kalangan remaja...",
      content: `
        <p>Penelitian terbaru yang dilakukan oleh tim riset Universitas Indonesia mengungkap data mengkhawatirkan tentang paparan konten dewasa di kalangan remaja Indonesia. Survei yang melibatkan 5.000 responden remaja usia 13-18 tahun di seluruh Indonesia menunjukkan bahwa 65% dari mereka telah terpapar konten dewasa melalui berbagai platform media sosial.</p>

        <h3>Metodologi Penelitian</h3>
        <p>Penelitian ini menggunakan metode survei online dan wawancara mendalam yang dilakukan selama 6 bulan, dari Januari hingga Juni 2024. Tim peneliti bekerja sama dengan berbagai sekolah menengah di 10 provinsi untuk memastikan representasi data yang akurat.</p>

        <h3>Temuan Utama</h3>
        <ul>
          <li>65% remaja terpapar konten dewasa melalui media sosial</li>
          <li>Platform Instagram dan TikTok menjadi sumber utama paparan</li>
          <li>Usia rata-rata pertama kali terpapar adalah 14 tahun</li>
          <li>40% remaja mengaku tidak memiliki kontrol parental yang memadai</li>
        </ul>

        <h3>Dampak Psikologis</h3>
        <p>Dr. Sarah Wijaya, psikolog klinis yang terlibat dalam penelitian, menyatakan bahwa paparan dini terhadap konten dewasa dapat berdampak signifikan pada perkembangan psikologis remaja. "Kami menemukan korelasi antara paparan konten dewasa dengan tingkat kecemasan dan depresi yang lebih tinggi pada remaja," ungkapnya.</p>

        <h3>Rekomendasi</h3>
        <p>Berdasarkan temuan ini, tim peneliti merekomendasikan beberapa langkah pencegahan:</p>
        <ol>
          <li>Implementasi kontrol parental yang lebih ketat</li>
          <li>Edukasi literasi digital untuk remaja</li>
          <li>Kerjasama dengan platform media sosial untuk filtering konten</li>
          <li>Program konseling dan pendampingan di sekolah</li>
        </ol>

        <p>Penelitian ini diharapkan dapat menjadi dasar untuk pengembangan kebijakan perlindungan anak di era digital dan meningkatkan kesadaran orang tua tentang pentingnya pengawasan aktivitas online anak.</p>
      `,
      category: "Penelitian",
      author: "Tim Riset UI",
      date: "2024-01-15",
      readTime: "5 menit",
      featured: true
    },
    2: {
      id: 2,
      title: "Tips Praktis Mengajarkan Pendidikan Seksual pada Anak Usia Remaja",
      excerpt: "Panduan lengkap untuk orang tua dalam memberikan edukasi seksual yang tepat dan sesuai usia anak...",
      content: `
        <p>Pendidikan seksual merupakan aspek penting dalam perkembangan remaja yang seringkali diabaikan atau dianggap tabu oleh orang tua. Padahal, memberikan edukasi seksual yang tepat dapat membantu remaja memahami perubahan tubuh mereka dan membuat keputusan yang bijak.</p>

        <h3>Mengapa Pendidikan Seksual Penting?</h3>
        <p>Pendidikan seksual yang komprehensif membantu remaja untuk:</p>
        <ul>
          <li>Memahami perubahan fisik dan emosional selama pubertas</li>
          <li>Mengembangkan sikap positif terhadap tubuh mereka</li>
          <li>Membuat keputusan yang bertanggung jawab tentang kesehatan reproduksi</li>
          <li>Melindungi diri dari pelecehan seksual dan kekerasan</li>
        </ul>

        <h3>Tips Praktis untuk Orang Tua</h3>
        <ol>
          <li><strong>Mulai dari Usia Dini:</strong> Pendidikan seksual tidak harus menunggu anak remaja. Mulai dengan konsep dasar tentang tubuh sejak usia dini.</li>
          <li><strong>Ciptakan Lingkungan Terbuka:</strong> Pastikan anak merasa nyaman untuk bertanya tanpa takut dihakimi.</li>
          <li><strong>Gunakan Bahasa yang Tepat:</strong> Gunakan istilah yang benar untuk bagian tubuh dan fungsinya.</li>
          <li><strong>Sesuaikan dengan Usia:</strong> Berikan informasi yang sesuai dengan tingkat perkembangan anak.</li>
        </ol>

        <h3>Topik yang Perlu Dibahas</h3>
        <p>Beberapa topik penting yang perlu dibahas dengan remaja meliputi:</p>
        <ul>
          <li>Anatomi dan fisiologi reproduksi</li>
          <li>Pubertas dan perubahan hormonal</li>
          <li>Menstruasi dan mimpi basah</li>
          <li>Konsep consent dan batasan personal</li>
          <li>Penyakit menular seksual dan pencegahannya</li>
          <li>Kontrasepsi dan keluarga berencana</li>
        </ul>

        <p>Ingatlah bahwa pendidikan seksual adalah proses berkelanjutan yang memerlukan kesabaran dan konsistensi. Dengan pendekatan yang tepat, orang tua dapat membantu remaja mengembangkan pemahaman yang sehat tentang seksualitas.</p>
      `,
      category: "Panduan Orang Tua",
      author: "Dr. Sarah Wijaya",
      date: "2024-01-12",
      readTime: "8 menit",
      featured: false
    }
  };

  const article = articles[parseInt(id || "1")];

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-2xl font-bold text-primary mb-4">Artikel Tidak Ditemukan</h1>
        <p className="text-muted-foreground mb-6">Artikel yang Anda cari tidak tersedia.</p>
        <Button asChild>
          <Link to="/articles">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Kembali ke Artikel
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      {/* Back Button */}
      <Button asChild variant="outline" className="mb-4">
        <Link to="/articles">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Kembali ke Artikel
        </Link>
      </Button>

      {/* Article Header */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2 mb-4">
            <Badge className="w-fit">
              {article.category}
            </Badge>
            {article.featured && (
              <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-300">
                Featured
              </Badge>
            )}
          </div>
          <CardTitle className="text-3xl leading-tight">
            {article.title}
          </CardTitle>
          <CardDescription className="text-lg">
            {article.excerpt}
          </CardDescription>
          
          {/* Article Meta */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                {article.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(article.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {article.readTime}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <BookmarkPlus className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Article Content */}
      <Card>
        <CardContent className="pt-6">
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </CardContent>
      </Card>

      {/* Discussion Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-3">
            <MessageCircle className="h-6 w-6" />
            Diskusi Artikel
          </CardTitle>
          <CardDescription>
            Bagikan pendapat Anda tentang artikel ini
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg mb-2">Fitur Diskusi Segera Hadir</p>
            <p>Kami sedang mengembangkan fitur diskusi untuk memfasilitasi pertukaran pendapat yang konstruktif.</p>
          </div>
        </CardContent>
      </Card>

      {/* Related Articles */}
      <Card>
        <CardHeader>
          <CardTitle>Artikel Terkait</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            <p>Artikel terkait akan ditampilkan di sini.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ArticleDetail;
