
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Brain, RefreshCw, CheckCircle, AlertTriangle, Heart } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  weights: number[]; // Different weights for psychological scoring
}

const questions: Question[] = [
  {
    id: 1,
    question: "Bagaimana perasaan Anda ketika berada di kelompok teman sebaya?",
    options: [
      "Sangat nyaman dan percaya diri",
      "Cukup nyaman tetapi kadang ragu",
      "Sering merasa tidak cocok",
      "Sangat tidak nyaman dan cemas"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 2,
    question: "Seberapa sering Anda merasa tertekan untuk mengikuti perilaku teman-teman?",
    options: [
      "Tidak pernah, saya mandiri dalam keputusan",
      "Jarang, hanya pada situasi tertentu",
      "Sering merasa harus mengikuti",
      "Selalu merasa tertekan untuk mengikuti"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 3,
    question: "Bagaimana cara Anda mengatasi stres atau masalah pribadi?",
    options: [
      "Berbicara dengan orang tua atau konselor",
      "Melakukan hobi atau aktivitas positif",
      "Menyendiri dan merenungkan",
      "Mencari pelarian yang bisa merugikan"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 4,
    question: "Seberapa mudah Anda menolak ajakan yang menurut Anda tidak baik?",
    options: [
      "Sangat mudah, saya tegas dalam pendirian",
      "Cukup mudah dengan penjelasan",
      "Sulit, saya tidak ingin dikucilkan",
      "Sangat sulit, saya selalu ikut"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 5,
    question: "Bagaimana hubungan Anda dengan keluarga?",
    options: [
      "Sangat dekat dan terbuka",
      "Cukup baik dengan komunikasi rutin",
      "Biasa saja, jarang berkomunikasi",
      "Tidak dekat dan sering konflik"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 6,
    question: "Apa yang Anda lakukan saat merasa kesepian atau sedih?",
    options: [
      "Mencari dukungan dari keluarga atau teman baik",
      "Melakukan aktivitas yang saya sukai",
      "Menghabiskan waktu di media sosial",
      "Mencoba hal-hal baru yang berisiko"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 7,
    question: "Seberapa penting persetujuan teman-teman bagi Anda?",
    options: [
      "Tidak terlalu penting, saya punya prinsip sendiri",
      "Cukup penting tapi tidak mengubah nilai saya",
      "Sangat penting, saya ingin diterima",
      "Paling penting, saya akan melakukan apapun"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 8,
    question: "Bagaimana Anda memandang masa depan Anda?",
    options: [
      "Optimis dan punya rencana jelas",
      "Cukup optimis dengan beberapa rencana",
      "Tidak yakin tentang masa depan",
      "Pesimis dan tidak punya arah"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 9,
    question: "Apa yang Anda lakukan ketika menghadapi tekanan akademik?",
    options: [
      "Membuat jadwal belajar dan minta bantuan",
      "Berusaha sendiri dengan manajemen waktu",
      "Menunda-nunda dan merasa cemas",
      "Mencari pelarian dari belajar"
    ],
    weights: [3, 2, 1, 0]
  },
  {
    id: 10,
    question: "Seberapa nyaman Anda dengan diri sendiri?",
    options: [
      "Sangat nyaman dan menerima diri apa adanya",
      "Cukup nyaman meski ada hal yang ingin diperbaiki",
      "Kurang nyaman dan sering membanding diri",
      "Tidak nyaman dan sering merasa rendah diri"
    ],
    weights: [3, 2, 1, 0]
  }
];

interface PsychResult {
  category: string;
  score: number;
  description: string;
  recommendations: string[];
  color: string;
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>(new Array(questions.length).fill(-1));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers(new Array(questions.length).fill(-1));
    setShowResults(false);
  };

  const calculatePsychResult = (): PsychResult => {
    const totalScore = selectedAnswers.reduce((sum, answerIndex, questionIndex) => {
      if (answerIndex >= 0) {
        return sum + questions[questionIndex].weights[answerIndex];
      }
      return sum;
    }, 0);

    const maxScore = questions.length * 3;
    const percentage = Math.round((totalScore / maxScore) * 100);

    if (percentage >= 80) {
      return {
        category: "Kesehatan Mental Sangat Baik",
        score: percentage,
        description: "Anda memiliki ketahanan mental yang sangat baik dan kemampuan coping yang sehat. Anda mampu membuat keputusan independen dan memiliki dukungan sosial yang kuat.",
        recommendations: [
          "Pertahankan pola komunikasi yang baik dengan keluarga",
          "Terus kembangkan hobi dan minat positif Anda",
          "Jadilah mentor bagi teman-teman yang membutuhkan",
          "Jaga keseimbangan antara kehidupan sosial dan pribadi"
        ],
        color: "text-green-600"
      };
    } else if (percentage >= 60) {
      return {
        category: "Kesehatan Mental Baik",
        score: percentage,
        description: "Anda memiliki kondisi mental yang cukup stabil dengan beberapa area yang bisa diperkuat. Anda umumnya dapat mengatasi tekanan dengan baik.",
        recommendations: [
          "Tingkatkan komunikasi dengan orang tua atau wali",
          "Praktikkan teknik relaksasi seperti meditasi atau olahraga",
          "Bergabung dengan kegiatan positif di sekolah atau komunitas",
          "Jangan ragu meminta bantuan saat menghadapi masalah"
        ],
        color: "text-blue-600"
      };
    } else if (percentage >= 40) {
      return {
        category: "Perlu Perhatian Khusus",
        score: percentage,
        description: "Anda mungkin mengalami beberapa tantangan dalam kesehatan mental dan tekanan dari lingkungan. Perlu strategi yang lebih baik untuk mengatasi stres.",
        recommendations: [
          "Cari bantuan dari konselor sekolah atau psikolog",
          "Identifikasi dan hindari situasi yang memicu stres berlebihan",
          "Bangun circle pertemanan yang supportif dan positif",
          "Kembangkan hobi atau aktivitas yang memberikan ketenangan",
          "Belajar teknik komunikasi asertif untuk menolak tekanan negatif"
        ],
        color: "text-yellow-600"
      };
    } else {
      return {
        category: "Memerlukan Bantuan Segera",
        score: percentage,
        description: "Anda mungkin mengalami tekanan mental yang cukup berat dan rentan terhadap pengaruh negatif. Sangat disarankan untuk mencari bantuan profesional.",
        recommendations: [
          "Segera hubungi psikolog atau konselor profesional",
          "Bicarakan kondisi Anda dengan orang tua atau wali",
          "Hindari lingkungan atau teman yang memberikan tekanan negatif",
          "Pertimbangkan untuk bergabung dengan support group",
          "Jangan malu untuk meminta bantuan - ini adalah langkah yang berani",
          "Fokus pada self-care dan aktivitas yang menenangkan"
        ],
        color: "text-red-600"
      };
    }
  };

  if (showResults) {
    const result = calculatePsychResult();

    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary flex items-center justify-center gap-3">
              <Brain className="h-8 w-8" />
              Hasil Tes Psikologi Anda
            </CardTitle>
            <CardDescription className="text-lg">
              Analisis Kesehatan Mental dan Ketahanan Diri
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-6xl font-bold text-primary">
                {result.score}%
              </div>
              <div className={`text-2xl font-semibold ${result.color}`}>
                {result.category}
              </div>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {result.description}
              </p>
              <Button onClick={resetQuiz} className="mt-6">
                <RefreshCw className="mr-2 h-4 w-4" />
                Ulangi Tes
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-6 w-6 text-red-500" />
              Rekomendasi untuk Anda
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {result.recommendations.map((recommendation, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-accent/50">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <p className="text-sm leading-relaxed">{recommendation}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-blue-700">
              <AlertTriangle className="h-6 w-6" />
              Catatan Penting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-blue-700">
              Tes ini hanya untuk tujuan edukatif dan bukan pengganti konsultasi dengan profesional kesehatan mental. 
              Jika Anda merasa membutuhkan bantuan lebih lanjut, jangan ragu untuk menghubungi psikolog, konselor, 
              atau layanan kesehatan mental profesional.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center mb-4">
            <CardTitle className="text-xl md:text-2xl text-primary flex items-center gap-3">
              <Brain className="h-6 w-6" />
              Tes Psikologi: Ketahanan Mental Remaja
            </CardTitle>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} dari {questions.length}
            </span>
          </div>
          <div className="w-full bg-secondary rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            ></div>
          </div>
          <CardDescription className="text-center mt-4">
            Jawablah pertanyaan berikut dengan jujur sesuai dengan kondisi Anda saat ini
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">
              {currentQuestion + 1}. {question.question}
            </h3>
            
            <RadioGroup 
              value={selectedAnswers[currentQuestion]?.toString() || ""} 
              onValueChange={(value) => handleAnswerSelect(parseInt(value))}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg hover:bg-accent border border-transparent hover:border-accent-foreground/20">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer leading-relaxed">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between pt-6">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
              >
                Sebelumnya
              </Button>
              <Button 
                onClick={handleNext}
                disabled={selectedAnswers[currentQuestion] === -1}
              >
                {currentQuestion === questions.length - 1 ? "Lihat Hasil" : "Selanjutnya"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Quiz;
