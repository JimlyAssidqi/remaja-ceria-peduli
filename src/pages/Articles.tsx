
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Newspaper, Calendar, User, Search, TrendingUp, Clock } from "lucide-react";
import { useState } from "react";

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('semua');

  const articles = [
    {
      id: 1,
      title: "Survei Terbaru: 65% Remaja Indonesia Terpapar Konten Dewasa Melalui Media Sosial",
      excerpt: "Penelitian terbaru dari Universitas Indonesia menunjukkan peningkatan signifikan exposure konten dewasa di kalangan remaja...",
      category: "Penelitian",
      author: "Tim Riset UI",
      date: "2024-01-15",
      readTime: "5 menit",
      featured: true
    },
    {
      id: 2,
      title: "Tips Praktis Mengajarkan Pendidikan Seksual pada Anak Usia Remaja",
      excerpt: "Panduan lengkap untuk orang tua dalam memberikan edukasi seksual yang tepat dan sesuai usia anak...",
      category: "Panduan Orang Tua",
      author: "Dr. Sarah Wijaya",
      date: "2024-01-12",
      readTime: "8 menit",
      featured: false
    },
    {
      id: 3,
      title: "Dampak Psikologis Jangka Panjang dari Pergaulan Bebas pada Remaja",
      excerpt: "Studi longitudinal selama 5 tahun mengungkap berbagai konsekuensi psikologis yang dialami remaja...",
      category: "Kesehatan Mental",
      author: "Prof. Ahmad Fauzi",
      date: "2024-01-10",
      readTime: "12 menit",
      featured: true
    },
    {
      id: 4,
      title: "Program Pencegahan Pergaulan Bebas di SMA Jakarta Turunkan Angka Kasus 40%",
      excerpt: "Inovasi program pendidikan karakter terintegrasi berhasil menciptakan dampak positif signifikan...",
      category: "Berita",
      author: "Reporter Pendidikan",
      date: "2024-01-08",
      readTime: "6 menit",
      featured: false
    },
    {
      id: 5,
      title: "Peran Media Sosial dalam Membentuk Persepsi Remaja tentang Hubungan",
      excerpt: "Analisis mendalam tentang bagaimana platform digital mempengaruhi cara pandang remaja terhadap relationship...",
      category: "Teknologi",
      author: "Dr. Maya Sari",
      date: "2024-01-05",
      readTime: "10 menit",
      featured: false
    },
    {
      id: 6,
      title: "Kasus Kehamilan Remaja di Indonesia Meningkat 15% dalam 2 Tahun Terakhir",
      excerpt: "Data dari Kementerian Kesehatan menunjukkan tren yang mengkhawatirkan dan memerlukan perhatian serius...",
      category: "Berita",
      author: "Tim Kesehatan Nasional",
      date: "2024-01-03",
      readTime: "7 menit",
      featured: true
    }
  ];

  const categories = [
    { value: 'semua', label: 'Semua Kategori' },
    { value: 'Berita', label: 'Berita Terkini' },
    { value: 'Penelitian', label: 'Hasil Penelitian' },
    { value: 'Panduan Orang Tua', label: 'Panduan Orang Tua' },
    { value: 'Kesehatan Mental', label: 'Kesehatan Mental' },
    { value: 'Teknologi', label: 'Teknologi & Media' }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'semua' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Artikel & Berita</h1>
        <p className="text-xl text-muted-foreground">
          Informasi terkini, penelitian, dan panduan edukatif seputar pergaulan remaja
        </p>
      </div>

      {/* Search and Filter */}
      <Card className="border-blue-200">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardTitle className="text-xl flex items-center gap-3 text-blue-700">
            <Search className="h-6 w-6" />
            Cari Artikel
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 pt-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Cari berdasarkan judul atau konten..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="w-full md:w-64">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">
            Ditemukan {filteredArticles.length} artikel
          </div>
        </CardContent>
      </Card>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
            <TrendingUp className="h-6 w-6" />
            Artikel Unggulan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer border-orange-200">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
                  <div className="flex items-start justify-between">
                    <Badge className="bg-orange-100 text-orange-800 border-orange-300 mb-2">
                      {article.category}
                    </Badge>
                    <Badge variant="secondary" className="bg-red-100 text-red-800 border-red-300">
                      Featured
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-orange-800 leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-orange-700">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(article.date).toLocaleDateString('id-ID')}
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Baca Selengkapnya
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Regular Articles */}
      {regularArticles.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-primary flex items-center gap-3">
            <Newspaper className="h-6 w-6" />
            Artikel Terbaru
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <Badge className="w-fit mb-2" variant="outline">
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg leading-tight">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      {new Date(article.date).toLocaleDateString('id-ID')}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Baca Artikel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredArticles.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="text-4xl">📰</div>
              <h3 className="text-xl font-semibold text-muted-foreground">Artikel Tidak Ditemukan</h3>
              <p className="text-muted-foreground">
                Coba ubah kata kunci pencarian atau filter kategori Anda.
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('semua');
                }}
              >
                Reset Pencarian
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Newsletter Subscription */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl text-purple-700">
            Berlangganan Newsletter
          </CardTitle>
          <CardDescription className="text-purple-600">
            Dapatkan artikel terbaru dan update penting langsung di email Anda
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <Input
              placeholder="Masukkan email Anda"
              type="email"
              className="flex-1"
            />
            <Button className="bg-purple-600 hover:bg-purple-700">
              Berlangganan
            </Button>
          </div>
          <p className="text-center text-xs text-purple-600">
            Kami mengirim maksimal 2 email per minggu. Tidak ada spam.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Articles;
