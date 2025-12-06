"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ConsultationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ConsultationDialog({ open, onOpenChange }: ConsultationDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    comment: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("[v0] Consultation form submitted:", formData)
    // Here you would typically send the form data to your backend
    alert("Спасибо! Я свяжусь с вами в ближайшее время.")
    onOpenChange(false)
    setFormData({ name: "", phone: "", comment: "" })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Заказать консультацию</DialogTitle>
          <DialogDescription>Оставьте свои контакты, и я свяжусь с вами для бесплатной консультации</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Ваше имя</Label>
            <Input
              id="name"
              placeholder="Иван Иванов"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Телефон</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+7 (900) 123-45-67"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comment">Комментарий (необязательно)</Label>
            <Textarea
              id="comment"
              placeholder="Расскажите о вашем бизнесе..."
              value={formData.comment}
              onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
              rows={4}
            />
          </div>
          <Button type="submit" className="w-full" size="lg">
            Отправить заявку
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
