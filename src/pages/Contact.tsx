
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Users, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    toast({
      title: "Pesan Terkirim",
      description: "Terima kasih! Tim kami akan merespons dalam 24 jam.",
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      category: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Hubungi Kami</h1>
        <p className="text-xl text-muted-foreground">
          Kami siap membantu Anda. Jangan ragu untuk menghubungi tim kami
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-2xl flex items-center gap-3 text-blue-700">
              <Send className="h-8 w-8" />
              Kirim Pesan
            </CardTitle>
            <CardDescription className="text-blue-600">
              Isi form di bawah ini dan kami akan merespons secepatnya
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap *</Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor Telepon</Label>
                  <Input
                    id="phone"
                    placeholder="08xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Kategori Pesan</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="umum">Pertanyaan Umum</SelectItem>
                      <SelectItem value="kerjasama">Kerjasama & Partnership</SelectItem>
                      <SelectItem value="media">Media & Press</SelectItem>
                      <SelectItem value="saran">Saran & Kritik</SelectItem>
                      <SelectItem value="teknis">Masalah Teknis Website</SelectItem>
                      <SelectItem value="edukasi">Materi Edukasi</SelectItem>
                      <SelectItem value="lainnya">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">Subjek *</Label>
                <Input
                  id="subject"
                  placeholder="Ringkasan singkat pesan Anda"
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Pesan *</Label>
                <Textarea
                  id="message"
                  placeholder="Tuliskan pesan, pertanyaan, atau saran Anda dengan detail..."
                  rows={6}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Perhatian:</strong> Untuk masalah darurat atau konseling krisis, 
                  gunakan kontak darurat di halaman Konseling atau hubungi hotline 119.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                <Send className="mr-2 h-5 w-5" />
                Kirim Pesan
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          {/* Main Contact Info */}
          <Card className="border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-xl flex items-center gap-3 text-green-700">
                <Phone className="h-6 w-6" />
                Informasi Kontak
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                  <Mail className="h-5 w-5 text-green-600 mt-1" />
                  <div>
                    <p className="font-semibold text-green-800">Email</p>
                    <p className="text-green-700 text-sm">info@edukasiremaja.id</p>
                    <p className="text-green-600 text-xs">Respon dalam 24 jam</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-blue-800">Telepon</p>
                    <p className="text-blue-700 text-sm">021-1234-5678</p>
                    <p className="text-blue-600 text-xs">Senin-Jumat, 09:00-17:00 WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                  <MessageSquare className="h-5 w-5 text-purple-600 mt-1" />
                  <div>
                    <p className="font-semibold text-purple-800">WhatsApp</p>
                    <p className="text-purple-700 text-sm">0812-3456-7890</p>
                    <p className="text-purple-600 text-xs">Chat only, 24/7</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-orange-50 rounded-lg">
                  <MapPin className="h-5 w-5 text-orange-600 mt-1" />
                  <div>
                    <p className="font-semibold text-orange-800">Alamat</p>
                    <p className="text-orange-700 text-sm">
                      Jl. Pendidikan No. 123<br />
                      Jakarta Selatan 12345
                    </p>
                    <p className="text-orange-600 text-xs">Hanya untuk surat menyurat</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Office Hours */}
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-xl flex items-center gap-3 text-purple-700">
                <Clock className="h-6 w-6" />
                Jam Operasional
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="space-y-2">
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="font-medium text-purple-800">Senin - Jumat</span>
                  <Badge className="bg-green-100 text-green-800 border-green-300">
                    09:00 - 17:00
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="font-medium text-purple-800">Sabtu</span>
                  <Badge className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    09:00 - 13:00
                  </Badge>
                </div>
                <div className="flex justify-between items-center p-2 bg-purple-50 rounded">
                  <span className="font-medium text-purple-800">Minggu</span>
                  <Badge variant="secondary">
                    Tutup
                  </Badge>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-700 text-sm">
                  <strong>Catatan:</strong> Untuk konseling darurat, layanan tersedia 24/7 
                  melalui hotline crisis di halaman Konseling.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Social Media */}
          <Card className="border-orange-200">
            <CardHeader className="bg-gradient-to-r from-orange-50 to-yellow-50">
              <CardTitle className="text-xl flex items-center gap-3 text-orange-700">
                <Users className="h-6 w-6" />
                Media Sosial
              </CardTitle>
              <CardDescription className="text-orange-600">
                Ikuti kami untuk update dan tips harian
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" className="justify-start" size="sm">
                  <div className="mr-2">📘</div>
                  Facebook
                </Button>
                <Button variant="outline" className="justify-start" size="sm">
                  <div className="mr-2">📷</div>
                  Instagram
                </Button>
                <Button variant="outline" className="justify-start" size="sm">
                  <div className="mr-2">🐦</div>
                  Twitter
                </Button>
                <Button variant="outline" className="justify-start" size="sm">
                  <div className="mr-2">📺</div>
                  YouTube
                </Button>
              </div>
              <div className="text-center pt-2">
                <p className="text-orange-700 text-sm">
                  @EdukasiRemajaID di semua platform
                </p>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Quick Links */}
          <Card className="border-gray-200">
            <CardHeader className="bg-gradient-to-r from-gray-50 to-blue-50">
              <CardTitle className="text-xl flex items-center gap-3 text-gray-700">
                <Heart className="h-6 w-6" />
                Pertanyaan Umum
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-4">
              <div className="space-y-2">
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <p className="font-medium">Apakah layanan konseling benar-benar gratis?</p>
                    <p className="text-sm text-muted-foreground">Konsultasi awal 30 menit gratis via WhatsApp</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <p className="font-medium">Bagaimana jika saya ingin kerjasama?</p>
                    <p className="text-sm text-muted-foreground">Kirim proposal ke email partnership@edukasiremaja.id</p>
                  </div>
                </Button>
                <Button variant="ghost" className="w-full justify-start text-left h-auto p-3">
                  <div>
                    <p className="font-medium">Bisakah orang tua berkonsultasi?</p>
                    <p className="text-sm text-muted-foreground">Tentu! Kami melayani remaja, orang tua, dan pendidik</p>
                  </div>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
