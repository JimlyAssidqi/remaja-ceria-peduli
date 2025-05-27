
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { MessageCircle, Phone, MapPin, Clock, Shield, Heart } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Counseling = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
    urgency: '',
    problem: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Permintaan Konseling Diterima",
      description: "Tim konselor kami akan menghubungi Anda dalam 24 jam. Terima kasih telah mempercayai kami.",
    });
    setFormData({
      name: '',
      age: '',
      phone: '',
      email: '',
      urgency: '',
      problem: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Konseling & Bantuan Profesional</h1>
        <p className="text-xl text-muted-foreground">
          Kami siap membantu Anda dengan layanan konseling yang aman, terpercaya, dan profesional
        </p>
      </div>

      {/* Safety Notice */}
      <Alert className="border-green-200 bg-green-50">
        <Shield className="h-4 w-4 text-green-600" />
        <AlertTitle className="text-green-800">Kerahasiaan Terjamin</AlertTitle>
        <AlertDescription className="text-green-700">
          Semua informasi yang Anda berikan akan dijaga kerahasiannnya sesuai dengan kode etik konseling profesional. 
          Anda tidak sendirian dalam menghadapi masalah ini.
        </AlertDescription>
      </Alert>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Consultation Form */}
        <Card className="border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50">
            <CardTitle className="text-2xl flex items-center gap-3 text-blue-700">
              <MessageCircle className="h-8 w-8" />
              Form Konsultasi Online
            </CardTitle>
            <CardDescription className="text-blue-600">
              Isi form di bawah ini untuk mendapatkan bantuan dari konselor profesional
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nama Lengkap</Label>
                  <Input
                    id="name"
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="age">Usia</Label>
                  <Select value={formData.age} onValueChange={(value) => handleInputChange('age', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih usia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="13-15">13-15 tahun</SelectItem>
                      <SelectItem value="16-18">16-18 tahun</SelectItem>
                      <SelectItem value="19-21">19-21 tahun</SelectItem>
                      <SelectItem value="22+">22+ tahun</SelectItem>
                      <SelectItem value="orangtua">Orang Tua/Wali</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Nomor WhatsApp</Label>
                  <Input
                    id="phone"
                    placeholder="08xxxxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (Opsional)</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Tingkat Urgensi</Label>
                <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih tingkat urgensi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rendah">Rendah - Konsultasi umum</SelectItem>
                    <SelectItem value="sedang">Sedang - Perlu bantuan dalam minggu ini</SelectItem>
                    <SelectItem value="tinggi">Tinggi - Perlu bantuan segera</SelectItem>
                    <SelectItem value="darurat">Darurat - Butuh bantuan sekarang</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Jenis Masalah</Label>
                <Select value={formData.problem} onValueChange={(value) => handleInputChange('problem', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Pilih jenis masalah" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pergaulan">Masalah pergaulan dan teman</SelectItem>
                    <SelectItem value="seksual">Pendidikan seksual dan reproduksi</SelectItem>
                    <SelectItem value="keluarga">Konflik dengan keluarga</SelectItem>
                    <SelectItem value="depresi">Depresi dan kecemasan</SelectItem>
                    <SelectItem value="trauma">Trauma atau pelecehan</SelectItem>
                    <SelectItem value="kecanduan">Kecanduan (alkohol, narkoba, pornografi)</SelectItem>
                    <SelectItem value="akademik">Masalah akademik/sekolah</SelectItem>
                    <SelectItem value="lainnya">Lainnya</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Ceritakan Masalah Anda</Label>
                <Textarea
                  id="message"
                  placeholder="Jelaskan situasi yang Anda hadapi. Semakin detail, semakin baik kami dapat membantu."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  required
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-700 text-sm">
                  <strong>Catatan:</strong> Konsultasi awal gratis melalui WhatsApp. 
                  Untuk sesi konseling mendalam, akan ada biaya yang akan dikomunikasikan terlebih dahulu.
                </p>
              </div>

              <Button type="submit" className="w-full" size="lg">
                Kirim Permintaan Konseling
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Directory & Emergency */}
        <div className="space-y-6">
          {/* Emergency Contacts */}
          <Card className="border-red-200">
            <CardHeader className="bg-gradient-to-r from-red-50 to-pink-50">
              <CardTitle className="text-xl flex items-center gap-3 text-red-700">
                <Phone className="h-6 w-6" />
                Kontak Darurat
              </CardTitle>
              <CardDescription className="text-red-600">
                Jika Anda dalam keadaan darurat, hubungi nomor berikut segera
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-red-800">Hotline Crisis</p>
                    <p className="text-red-700 text-sm">24 jam, gratis</p>
                  </div>
                  <Badge variant="destructive">119</Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-orange-800">Konseling Remaja</p>
                    <p className="text-orange-700 text-sm">Senin-Jumat, 08:00-20:00</p>
                  </div>
                  <Badge className="bg-orange-100 text-orange-800 border-orange-300">
                    021-1234567
                  </Badge>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="font-semibold text-blue-800">WhatsApp Konselor</p>
                    <p className="text-blue-700 text-sm">Respon dalam 2 jam</p>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                    0812-3456-7890
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Professional Directory */}
          <Card className="border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardTitle className="text-xl flex items-center gap-3 text-green-700">
                <MapPin className="h-6 w-6" />
                Direktori Psikolog & Konselor
              </CardTitle>
              <CardDescription className="text-green-600">
                Daftar profesional terpercaya di berbagai kota
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-4">
                <div className="p-4 border border-green-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-green-800">Dr. Sarah Wijaya, M.Psi</h3>
                      <p className="text-green-700 text-sm">Psikolog Klinis Remaja</p>
                      <div className="flex items-center gap-2 text-green-600 text-xs">
                        <MapPin className="h-3 w-3" />
                        Jakarta Selatan
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      Tersedia
                    </Badge>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-green-700 text-sm">📞 021-7654321</p>
                    <p className="text-green-700 text-sm">📧 sarah.wijaya@konseling.id</p>
                  </div>
                </div>

                <div className="p-4 border border-green-200 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-green-800">Ahmad Fauzi, S.Psi, M.A</h3>
                      <p className="text-green-700 text-sm">Konselor Keluarga & Remaja</p>
                      <div className="flex items-center gap-2 text-green-600 text-xs">
                        <MapPin className="h-3 w-3" />
                        Surabaya
                      </div>
                    </div>
                    <Badge className="bg-green-100 text-green-800 border-green-300">
                      Tersedia
                    </Badge>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-green-700 text-sm">📞 031-8765432</p>
                    <p className="text-green-700 text-sm">📧 ahmad.fauzi@konseling.id</p>
                  </div>
                </div>

                <div className="p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-semibold text-gray-600">Dr. Maya Sari, M.Psi</h3>
                      <p className="text-gray-500 text-sm">Psikolog Klinis Dewasa</p>
                      <div className="flex items-center gap-2 text-gray-500 text-xs">
                        <MapPin className="h-3 w-3" />
                        Bandung
                      </div>
                    </div>
                    <Badge variant="secondary">
                      Penuh
                    </Badge>
                  </div>
                  <div className="mt-3 space-y-1">
                    <p className="text-gray-500 text-sm">📞 022-1234567</p>
                    <p className="text-gray-500 text-sm">📧 maya.sari@konseling.id</p>
                  </div>
                </div>
              </div>

              <div className="text-center pt-4">
                <Button variant="outline" size="sm">
                  Lihat Semua Konselor (25+)
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Service Info */}
          <Card className="border-purple-200">
            <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50">
              <CardTitle className="text-xl flex items-center gap-3 text-purple-700">
                <Clock className="h-6 w-6" />
                Informasi Layanan
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 pt-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Heart className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-800">Konsultasi Gratis</p>
                    <p className="text-purple-700 text-sm">Sesi pertama 30 menit via WhatsApp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-800">Respon Cepat</p>
                    <p className="text-purple-700 text-sm">Maksimal 24 jam untuk kasus non-darurat</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium text-purple-800">100% Rahasia</p>
                    <p className="text-purple-700 text-sm">Sesuai kode etik psikologi Indonesia</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Counseling;
