"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ConsultationDialog } from "@/components/consultation-dialog"
import { PriceCalculator } from "@/components/price-calculator"
import {
  FileText,
  ClipboardList,
  Shield,
  BookOpen,
  CheckCircle2,
  Clock,
  Lock,
  BadgeRussianRuble,
  FileCheck,
  Headphones,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react"

export default function EcoEngineerLanding() {
  const [consultationOpen, setConsultationOpen] = useState(false)
  const [contactForm, setContactForm] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Contact form submitted:", contactForm)
    alert("Спасибо! Я свяжусь с вами в ближайшее время.")
    setContactForm({ name: "", phone: "", message: "" })
  }

  const scrollToCalculator = () => {
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-primary/20 shadow-sm">
              <CheckCircle2 className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-foreground">Более 5 лет экологического сопровождения</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance text-foreground">
              Отчёты по отходам для вашего бизнеса.{" "}
              <span className="text-primary">Легально, быстро и без вашего участия.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Профессиональное составление и сдача отчётности для малого и среднего бизнеса. Выполняю работу «под ключ»:
              от анализа до официальной сдачи в Росприроднадзор.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
              <Button
                size="lg"
                onClick={scrollToCalculator}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg h-auto rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                Рассчитать стоимость
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => setConsultationOpen(true)}
                className="bg-white hover:bg-gray-50 text-foreground border-2 px-8 py-6 text-lg h-auto rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                Заказать консультацию
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-secondary" />
                <span>100+ отчётов сдано</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-secondary" />
                <span>Работа за 5-7 дней</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-secondary" />
                <span>Гарантия качества</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">
                Из чего состоит отчёт и почему это обязательно?
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                По закону «Об отходах производства и потребления» любой бизнес, образующий отходы, обязан вести учёт,
                разрабатывать документацию и отчитываться перед государством. Это касается офисного мусора, пищевых
                отходов, упаковки и т.д.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Расчёт нормативов (ПНООЛР)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Проект нормативов образования отходов и лимитов на их размещение — для юридических лиц и ИП.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <ClipboardList className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Отчётность 2-ТП (отходы)</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Ежегодная статистическая отчётность по обращению с отходами производства и потребления.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Паспорта опасных отходов</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Обязательные документы на каждый вид отходов I-IV классов опасности с официальным оформлением.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary/50 transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Журнал учёта отходов</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Первичный документ для фиксации движения отходов, обязателен для всех хозяйствующих субъектов.
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-lg font-medium mt-12 text-primary">
              Я помогаю подготовить полный комплект документов, соответствующий всем требованиям законодательства.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section id="calculator" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Предварительный расчёт стоимости услуги</h2>
              <p className="text-lg text-muted-foreground">
                Ответьте на 3 вопроса, чтобы получить ориентировочную стоимость подготовки вашего отчёта
              </p>
            </div>
            <PriceCalculator onConsultation={() => setConsultationOpen(true)} />
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Порядок работы</h2>

            <div className="space-y-8">
              {[
                {
                  number: 1,
                  title: "Заявка и анализ",
                  description:
                    "Вы оставляете заявку, я бесплатно анализирую вашу ситуацию и предлагаю оптимальное решение.",
                },
                {
                  number: 2,
                  title: "Договор и данные",
                  description:
                    "Заключаем договор с фиксированной ценой, вы предоставляете необходимые реквизиты и данные о деятельности.",
                },
                {
                  number: 3,
                  title: "Подготовка отчёта",
                  description:
                    "Я провожу все необходимые расчёты и формирую комплект документов в соответствии с требованиями законодательства.",
                },
                {
                  number: 4,
                  title: "Согласование",
                  description: "Вы получаете черновик документов для проверки и вносите необходимые корректировки.",
                },
                {
                  number: 5,
                  title: "Сдача отчётности",
                  description: "Отправляю готовый отчёт в контролирующий орган в электронном виде (при необходимости).",
                },
              ].map((step) => (
                <div key={step.number} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <div className="flex-1 pt-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Me Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Ваш отчёт в надёжных руках</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Опыт</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Более 5 лет в сфере экологического сопровождения бизнеса
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Под ключ</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Беру на себя весь процесс: от сбора данных до электронной сдачи
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Конфиденциальность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Гарантирую полную сохранность ваших данных и коммерческой информации
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <BadgeRussianRuble className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Экономия</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Вам не нужно держать эколога в штате. Оплата только за результат
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <FileCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Прозрачность</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Чёткий договор, фиксированная цена, никаких скрытых платежей
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 space-y-3">
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold">Сопровождение</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Отвечаю на вопросы контролирующих органов по вашим документам
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/90 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Готовы привести вашу отчётность в порядок?</h2>
            <p className="text-xl text-blue-100 leading-relaxed">
              Свяжитесь со мной для бесплатной первичной консультации
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
              <a
                href="tel:+79001234567"
                className="flex items-center gap-3 text-lg hover:text-blue-100 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a
                href="mailto:eco.otchet@domain.ru"
                className="flex items-center gap-3 text-lg hover:text-blue-100 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>eco.otchet@domain.ru</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-center">Форма для быстрой связи</h3>
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Ваше имя</Label>
                    <Input
                      id="contact-name"
                      placeholder="Иван Иванов"
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      type="tel"
                      placeholder="+7 (900) 123-45-67"
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Краткое сообщение</Label>
                    <Textarea
                      id="contact-message"
                      placeholder="Расскажите о вашем бизнесе и потребностях..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить сообщение
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-2">
            <p className="text-sm text-blue-100">ИП Иванов Иван Иванович | ОГРНИП 123456789012345</p>
            <p className="text-xs text-blue-200">
              © 2025 Все права защищены. Профессиональное экологическое сопровождение бизнеса
            </p>
          </div>
        </div>
      </footer>

      <ConsultationDialog open={consultationOpen} onOpenChange={setConsultationOpen} />
    </div>
  )
}
