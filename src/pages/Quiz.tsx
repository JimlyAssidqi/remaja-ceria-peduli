
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { CheckCircle, XCircle, RefreshCw } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

const questions: Question[] = [
  {
    id: 1,
    question: "Apa yang dimaksud dengan pergaulan bebas?",
    options: [
      "Bergaul dengan siapa saja tanpa batasan",
      "Perilaku yang melampaui batas norma sosial dan agama",
      "Bermain dengan teman sebaya",
      "Mengikuti kegiatan ekstrakurikuler"
    ],
    correctAnswer: 1,
    explanation: "Pergaulan bebas adalah perilaku yang melampaui batas-batas norma sosial, agama, dan moral yang berlaku di masyarakat."
  },
  {
    id: 2,
    question: "Manakah yang BUKAN dampak negatif pergaulan bebas?",
    options: [
      "Penyakit menular seksual",
      "Kehamilan tidak diinginkan",
      "Prestasi akademik meningkat",
      "Depresi dan trauma psikologis"
    ],
    correctAnswer: 2,
    explanation: "Prestasi akademik meningkat bukan dampak negatif, malah pergaulan bebas cenderung menurunkan prestasi akademik."
  },
  {
    id: 3,
    question: "Faktor utama penyebab pergaulan bebas pada remaja adalah:",
    options: [
      "Terlalu banyak belajar",
      "Kurangnya pengawasan orang tua",
      "Rajin beribadah",
      "Aktif dalam organisasi"
    ],
    correctAnswer: 1,
    explanation: "Kurangnya pengawasan dan komunikasi dari orang tua merupakan salah satu faktor utama pergaulan bebas pada remaja."
  },
  {
    id: 4,
    question: "Cara terbaik menolak ajakan teman untuk melakukan hal negatif:",
    options: [
      "Ikut saja agar tidak dikucilkan",
      "Tegas menolak dan memberikan alasan",
      "Diam saja",
      "Pura-pura sakit"
    ],
    correctAnswer: 1,
    explanation: "Menolak dengan tegas dan memberikan alasan yang jelas adalah cara terbaik untuk menghindari pengaruh negatif."
  },
  {
    id: 5,
    question: "Peran orang tua dalam mencegah pergaulan bebas:",
    options: [
      "Melarang anak bergaul sama sekali",
      "Memberikan kebebasan penuh",
      "Komunikasi terbuka dan pengawasan bijak",
      "Tidak perlu ikut campur"
    ],
    correctAnswer: 2,
    explanation: "Komunikasi terbuka dan pengawasan yang bijaksana membantu anak membuat keputusan yang tepat."
  },
  {
    id: 6,
    question: "Media sosial dapat mempengaruhi pergaulan bebas karena:",
    options: [
      "Memudahkan belajar online",
      "Akses mudah ke konten dewasa",
      "Membantu komunikasi keluarga",
      "Menyediakan hiburan positif"
    ],
    correctAnswer: 1,
    explanation: "Media sosial dapat memberikan akses mudah ke konten dewasa yang tidak sesuai untuk remaja."
  },
  {
    id: 7,
    question: "Tanda-tanda remaja terjerumus pergaulan bebas:",
    options: [
      "Nilai akademik menurun drastis",
      "Rajin membantu orang tua",
      "Aktif dalam kegiatan positif",
      "Selalu jujur pada orang tua"
    ],
    correctAnswer: 0,
    explanation: "Penurunan nilai akademik yang drastis bisa menjadi salah satu indikator remaja terjerumus pergaulan negatif."
  },
  {
    id: 8,
    question: "Pendidikan seks yang tepat untuk remaja sebaiknya:",
    options: [
      "Tidak perlu diberikan",
      "Hanya dari teman sebaya",
      "Dari sumber yang kredibel dan sesuai usia",
      "Dari internet saja"
    ],
    correctAnswer: 2,
    explanation: "Pendidikan seks harus diberikan dari sumber yang kredibel dan disesuaikan dengan tahap perkembangan remaja."
  },
  {
    id: 9,
    question: "Dampak pergaulan bebas terhadap masa depan remaja:",
    options: [
      "Membuat lebih sukses",
      "Merusak reputasi dan peluang masa depan",
      "Tidak ada dampak",
      "Meningkatkan popularitas"
    ],
    correctAnswer: 1,
    explanation: "Pergaulan bebas dapat merusak reputasi dan mengurangi peluang masa depan remaja dalam pendidikan dan karir."
  },
  {
    id: 10,
    question: "Solusi terbaik jika remaja sudah terlanjur terjerumus:",
    options: [
      "Menyembunyikan dari orang tua",
      "Mencari bantuan profesional dan dukungan keluarga",
      "Melanjutkan perilaku tersebut",
      "Menyalahkan orang lain"
    ],
    correctAnswer: 1,
    explanation: "Mencari bantuan profesional dan mendapat dukungan keluarga adalah langkah terbaik untuk pemulihan."
  }
];

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

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  const getScoreCategory = (score: number) => {
    if (score >= 8) return { category: "Excellent", color: "text-green-600", message: "Pemahaman Anda sangat baik!" };
    if (score >= 6) return { category: "Good", color: "text-blue-600", message: "Pemahaman Anda cukup baik, terus belajar!" };
    if (score >= 4) return { category: "Fair", color: "text-yellow-600", message: "Perlu meningkatkan pemahaman lagi." };
    return { category: "Poor", color: "text-red-600", message: "Perlu belajar lebih banyak tentang topik ini." };
  };

  if (showResults) {
    const score = calculateScore();
    const scoreInfo = getScoreCategory(score);

    return (
      <div className="max-w-4xl mx-auto space-y-6 animate-fade-in">
        <Card className="text-center">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-primary">
              Hasil Kuis Anda
            </CardTitle>
            <CardDescription className="text-lg">
              Quiz tentang Pergaulan Bebas di Kalangan Remaja
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-6xl font-bold text-primary">
                {score}/{questions.length}
              </div>
              <div className={`text-xl font-semibold ${scoreInfo.color}`}>
                {scoreInfo.category} - {Math.round((score / questions.length) * 100)}%
              </div>
              <p className="text-lg text-muted-foreground">
                {scoreInfo.message}
              </p>
              <Button onClick={resetQuiz} className="mt-6">
                <RefreshCw className="mr-2 h-4 w-4" />
                Ulangi Kuis
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pembahasan Jawaban</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {questions.map((question, index) => (
                <div key={question.id} className="border rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    {selectedAnswers[index] === question.correctAnswer ? (
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">
                        {index + 1}. {question.question}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Jawaban Anda: {selectedAnswers[index] >= 0 ? question.options[selectedAnswers[index]] : "Tidak dijawab"}
                      </p>
                      <p className="text-sm font-medium text-green-600 mb-2">
                        Jawaban Benar: {question.options[question.correctAnswer]}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {question.explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
            <CardTitle className="text-xl md:text-2xl text-primary">
              Quiz: Pergaulan Bebas di Kalangan Remaja
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
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-accent">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
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
