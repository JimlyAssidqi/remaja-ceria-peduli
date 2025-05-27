
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertTriangle, Heart, Users, BookOpen, ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-8 animate-fade-in">
      {/* Hero Section */}
      <div className="text-center space-y-6 py-12 px-4 bg-gradient-to-r from-soft-blue to-soft-green rounded-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
          Pergaulan Bebas di Kalangan Remaja
        </h1>
        <p className="text-xl md:text-2xl text-primary/80 font-medium">
          Fakta, Dampak, dan Solusi
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Website edukatif yang menyediakan informasi lengkap tentang pergaulan bebas di kalangan remaja, 
          dampaknya, dan cara pencegahan untuk remaja, orang tua, dan pendidik.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg" className="text-lg px-8">
            <Link to="/about">
              Pelajari Lebih Lanjut
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="text-lg px-8">
            <Link to="/counseling">
              Butuh Bantuan?
              <Heart className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <AlertTriangle className="h-12 w-12 text-orange-500 mb-4" />
            <CardTitle className="text-xl">Apa itu Pergaulan Bebas?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Pergaulan bebas adalah perilaku remaja yang melampaui batas-batas norma sosial dan agama, 
              termasuk hubungan intim di luar nikah, konsumsi alkohol, dan perilaku berisiko lainnya.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <Users className="h-12 w-12 text-blue-500 mb-4" />
            <CardTitle className="text-xl">Mengapa Ini Penting?</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Fenomena ini mempengaruhi masa depan generasi muda Indonesia. Edukasi yang tepat dapat 
              membantu remaja membuat keputusan yang lebih baik untuk kehidupan mereka.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <BookOpen className="h-12 w-12 text-green-500 mb-4" />
            <CardTitle className="text-xl">Solusi Bersama</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-base leading-relaxed">
              Melalui kerjasama remaja, orang tua, sekolah, dan masyarakat, kita dapat mencegah 
              dan mengatasi masalah pergaulan bebas dengan pendekatan yang tepat.
            </CardDescription>
          </CardContent>
        </Card>
      </div>

      {/* Statistics Section */}
      <Card className="bg-gradient-to-r from-warm-orange to-calm-purple">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl md:text-3xl text-primary">
            Fakta dan Statistik
          </CardTitle>
          <CardDescription className="text-lg">
            Data penting tentang pergaulan bebas di Indonesia
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">62%</div>
              <p className="text-muted-foreground">
                Remaja terpapar konten dewasa melalui internet
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">45%</div>
              <p className="text-muted-foreground">
                Kasus kehamilan remaja di perkotaan
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">38%</div>
              <p className="text-muted-foreground">
                Remaja mengalami depresi akibat pergaulan negatif
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-primary">
          Jelajahi Lebih Dalam
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button asChild variant="outline" size="lg" className="h-auto p-6 justify-start">
            <Link to="/impact" className="flex items-center space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-500" />
              <div className="text-left">
                <div className="font-semibold text-lg">Dampak Pergaulan Bebas</div>
                <div className="text-muted-foreground">Kesehatan, psikologi, dan sosial</div>
              </div>
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="h-auto p-6 justify-start">
            <Link to="/solutions" className="flex items-center space-x-4">
              <Lightbulb className="h-8 w-8 text-yellow-500" />
              <div className="text-left">
                <div className="font-semibold text-lg">Solusi & Pencegahan</div>
                <div className="text-muted-foreground">Tips praktis untuk remaja dan orang tua</div>
              </div>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
