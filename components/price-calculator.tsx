"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

interface CalculatorState {
  legalForm: string
  activityType: string
  wasteCount: string
}

export function PriceCalculator({ onConsultation }: { onConsultation: () => void }) {
  const [state, setState] = useState<CalculatorState>({
    legalForm: "",
    activityType: "",
    wasteCount: "",
  })

  const calculatePrice = (): { min: number; max: number } | null => {
    if (!state.legalForm || !state.activityType || !state.wasteCount) {
      return null
    }

    let basePrice = 0

    // Base price by legal form
    if (state.legalForm === "ip") {
      basePrice = 10000
    } else {
      basePrice = 25000
    }

    // Adjust by activity type
    if (state.activityType === "production") {
      basePrice += 15000
    } else if (state.activityType === "catering") {
      basePrice += 5000
    } else if (state.activityType === "retail") {
      basePrice += 3000
    }

    // Adjust by waste count
    if (state.wasteCount === "1-3") {
      return { min: basePrice, max: basePrice + 5000 }
    } else if (state.wasteCount === "4-6") {
      return { min: basePrice + 5000, max: basePrice + 15000 }
    } else {
      return { min: basePrice + 15000, max: basePrice + 30000 }
    }
  }

  const price = calculatePrice()
  const isComplete = state.legalForm && state.activityType && state.wasteCount

  return (
    <Card className="p-8 max-w-3xl mx-auto">
      <div className="space-y-8">
        {/* Step 1 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold">
              1
            </div>
            <h3 className="text-lg font-semibold">Организационно-правовая форма</h3>
          </div>
          <RadioGroup value={state.legalForm} onValueChange={(value) => setState({ ...state, legalForm: value })}>
            <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="ip" id="ip" />
              <Label htmlFor="ip" className="flex-1 cursor-pointer">
                Индивидуальный предприниматель (ИП)
              </Label>
              {state.legalForm === "ip" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
            </div>
            <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="ooo" id="ooo" />
              <Label htmlFor="ooo" className="flex-1 cursor-pointer">
                Общество с ограниченной ответственностью (ООО/АО)
              </Label>
              {state.legalForm === "ooo" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
            </div>
          </RadioGroup>
        </div>

        {/* Step 2 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold">
              2
            </div>
            <h3 className="text-lg font-semibold">Основной вид деятельности</h3>
          </div>
          <Select value={state.activityType} onValueChange={(value) => setState({ ...state, activityType: value })}>
            <SelectTrigger className="w-full h-12">
              <SelectValue placeholder="Выберите вид деятельности" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="office">Офис/торговля (офисный мусор, бумага)</SelectItem>
              <SelectItem value="catering">Общественное питание (кафе, ресторан)</SelectItem>
              <SelectItem value="retail">Розничная торговля (упаковка, тара)</SelectItem>
              <SelectItem value="production">Небольшое производство</SelectItem>
              <SelectItem value="other">Другое (уточним)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Step 3 */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-semibold">
              3
            </div>
            <h3 className="text-lg font-semibold">Количество видов отходов (примерно)</h3>
          </div>
          <RadioGroup value={state.wasteCount} onValueChange={(value) => setState({ ...state, wasteCount: value })}>
            <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="1-3" id="1-3" />
              <Label htmlFor="1-3" className="flex-1 cursor-pointer">
                1-3 вида (например, бумага, пластик, пищевые отходы)
              </Label>
              {state.wasteCount === "1-3" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
            </div>
            <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="4-6" id="4-6" />
              <Label htmlFor="4-6" className="flex-1 cursor-pointer">
                4-6 видов
              </Label>
              {state.wasteCount === "4-6" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
            </div>
            <div className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50 transition-colors cursor-pointer">
              <RadioGroupItem value="7+" id="7+" />
              <Label htmlFor="7+" className="flex-1 cursor-pointer">
                Более 6 видов (сложный учёт)
              </Label>
              {state.wasteCount === "7+" && <CheckCircle2 className="w-5 h-5 text-secondary" />}
            </div>
          </RadioGroup>
        </div>

        {/* Result */}
        {price && (
          <div className="border-t pt-8 mt-8">
            <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-6 text-center space-y-4">
              <p className="text-muted-foreground">Ориентировочная стоимость:</p>
              <p className="text-4xl font-bold text-secondary">
                {price.min.toLocaleString("ru-RU")} - {price.max.toLocaleString("ru-RU")} ₽
              </p>
              <p className="text-sm text-muted-foreground">
                Точная стоимость определяется после анализа вашей ситуации
              </p>
              <Button size="lg" onClick={onConsultation} className="mt-4">
                Обсудить детали и заказать
              </Button>
            </div>
          </div>
        )}

        {!isComplete && (
          <p className="text-center text-muted-foreground text-sm">
            Ответьте на все вопросы, чтобы увидеть ориентировочную стоимость
          </p>
        )}
      </div>
    </Card>
  )
}
