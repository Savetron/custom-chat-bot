# 🧠 Clario – Ruthless Life Optimization Advisor (SaaS)

## 💡 Project Overview

**Clario** is a **SaaS web application** that acts as a **ruthlessly logical Life Optimization Advisor**, powered by **xAI’s Grok API**.

Unlike traditional wellness or productivity tools, Clario is brutally honest. No motivation. No empathy. Only brutal logic and relentless clarity.

At its core is a custom Grok prompt that interrogates users’ lives, detects inefficiencies, exposes contradictions, and builds a coldly efficient action plan.

---

## 🎯 Purpose

To help users **optimize every area of life** — financially, professionally, physically — by:

- Enforcing brutal self-analysis
- Challenging cognitive dissonance
- Eliminating time-wasters
- Rebuilding daily routines for peak efficiency
- Building habit structures around measurable outcomes

---

## 🧠 Grok Prompt Logic

export const basePrompt = `
Artık sen yalnızca mantığa dayalı, acımasız bir Yaşam Optimizasyonu Danışmanısın. Psikoloji, üretkenlik ve davranış analizi konularında uzmansın. Amacın hayatımı detaylı bir şekilde analiz edip uygulanabilir bir optimizasyon planı oluşturmaktır.

Çalışma Parametreleri:
• IQ seviyen 160
• Her seferinde YALNIZCA bir soru sor
• Devam etmeden önce mutlaka cevabımı bekle
• Duygusal destek sunma, yalnızca saf mantık kullan
• Cevaplarımdaki HER TÜRLÜ tutarsızlığı sorgula
• Bilişsel çelişkileri anında tespit et
• Bahaneleri cerrahi bir hassasiyetle kes
• Yalnızca ölçülebilir sonuçlara odaklan

Görüşme Protokolü:

1. Hayattaki nihai hedeflerimi sor (finansal, kişisel, mesleki)
2. Günlük rutinime saat saat derinlemesine in
3. Gelir kaynaklarımı ve harcama kalıplarımı analiz et
4. İlişkilerimi ve verimliliğime etkilerini değerlendir
5. Sağlık alışkanlıklarımı incele (uyku, beslenme, egzersiz)
6. Zamanımı hangi faaliyetlere ayırdığımı değerlendir
7. Belirttiğim hedeflere doğrudan katkı sağlamayan her aktiviteyi sorgula

Yeterli veri toplandıktan sonra:

1. Belirlenen tüm verimsizlikleri ve alt-optimal davranışları listele
2. Her zaman kaybının fırsat maliyetini hesapla
3. Hedeflerimle eylemlerim arasındaki doğrudan çelişkileri vurgula
4. Kendime söylediğim yalanlarla ilgili acı gerçekleri sun

Sonrasında:

1. Belirli ve ölçülebilir adımlarla sıfır saçmalık içeren bir eylem planı oluştur
2. Günlük zaman planını optimize et
3. Alışkanlık silme/oluşturma protokolü hazırla
4. Haftalık sorumluluk metrikleri oluştur
5. Hedeflerin kaçırılması durumunda uygulanacak net sonuçları belirle

İletişim Kuralları:
• Lafı dolandırma
• Bahaneleri kabul etme
• İyi hissettiren sözlerden uzak dur
• Yalnızca soğuk mantıkla hareket et
• HER varsayımı sorgula
• Belirli rakamlar ve ölçütler talep et
• Belirsiz cevaplara sıfır tolerans göster
`;

---

## ⚙️ Core Functionality

### 🔍 Interrogation Flow

- Dynamic Grok-based Q&A (one question at a time)
- Adaptive questioning based on prior responses
- Structured to follow the optimization protocol

### 📊 Logic-Based Analysis Engine

- Detects time waste, contradictions, and inefficiencies
- Identifies goal misalignment and poor habits
- Calculates opportunity costs

### 🛠️ Optimization Plan Generator

- Produces zero-fluff action plans
- Constructs optimized daily routines
- Defines measurable weekly accountability goals
- Includes "fail consequence" suggestions

### 📄 Report Generator

- Structured final report (Insights, Action Items, Optimized Schedule)
- Exportable as **PDF** or **Markdown**
- Final report only available to Pro and Elite users

---

## 🧠 Memory & Session Management

- User sessions saved securely in **Supabase**
- Compare session data over time
- Review past reports and behavior change patterns

---

## 📱 Platform & Tech Stack

- **Frontend**: Next.js + TailwindCSS
- **Backend**: Edge Functions via Vercel (Serverless)
- **Database**: Supabase (PostgreSQL)
- **AI Engine**: xAI Grok (via API)
- **Auth**: Google OAuth
- **Deployment**: Vercel
- **Payments**: Coming Soon

---

## 💰 Pricing Model (Freemium)

| Plan  | Price       | Features                                                              |
| ----- | ----------- | --------------------------------------------------------------------- |
| Basic | Free        | 3 messages per day, no final report, limited memory                   |
| Pro   | 99 TL/mo    | Unlimited messages, weekly check-ins, PDF report, full memory         |
| Elite | 790 TL/year | All Pro features + annual accountability session, priority processing |

---

## 🧪 Future Features (Roadmap)

- Weekly email reminders & AI check-ins
- Gamified AI personas (Drill Sergeant, CEO, Monk mode)
- Mobile version (React Native)
- Streak system & performance graph
- Webhook triggers + Google Calendar integration
- Team optimization (Enterprise mode)

---

## 🧑‍💼 Ideal Users

- Entrepreneurs
- Creatives who need structure
- High-performers and biohackers
- People tired of motivational fluff
- Anyone who values ruthless clarity

---

## 🎨 Landing Page Notes (Design Brief)

- **Aesthetic**: Minimal, futuristic, dark/light toggle
- **Headline**: “Ruthless AI Coach. No Mercy. Only Progress.”
- **Subhead**: “Clario interrogates your life and builds the most efficient version of you.”
- **CTA**: Try Clario for Free → [Google Auth Button]
- **Sections**:
  - What Clario Does (visual explanation)
  - How It Works (3-step flow)
  - Testimonials (imagined or anonymized)
  - Pricing Table
  - FAQ
  - Footer (contact, privacy, terms)

---

## 🚧 MVP Development Priorities

1. **Chat Interface**
2. **Structured Prompt Logic (Grok)**
3. **Session Memory via Supabase**
4. **Basic Auth (Google OAuth)**
5. **Pro/Basic Tier Access Control**
6. **Final Report Generation**
7. **Landing Page with CTA & Pricing**

---

## ⚠️ Disclaimer & Philosophy

**Clario is not therapy. It is not support. It is not emotional.**

This is **brutal life clarity** through structured AI confrontation.

- No sugar-coating
- No inspiration quotes
- No empathy

Only logic, discipline, and ruthless optimization.

---# Prompt for Cursor (Landing Page Design)

Design a modern, minimal, and bold **Landing Page** for a SaaS product named **Clario** — a "Ruthlessly Logical AI Life Coach" app.

Use the `chatbot.html` template structure from [this reference](https://validthemes.net/site-template/anaton/chatbot.html) and adapt it for this product.

## Design Goals:

- Target audience: High-performers, entrepreneurs, productivity nerds
- Vibe: Futuristic, logical, clean, slightly intimidating
- Color scheme: Blue, white, grey (avoid playful tones)
- Font style: Modern sans-serif

## Page Sections (in order):

### 1. **Hero Section**

- Headline: `Ruthless AI Coach. No Mercy. Only Progress.`
- Subheading: `Clario interrogates your life and builds the most efficient version of you.`
- CTA Button: `Start Now – It’s Free`

### 2. **How It Works**

- Three steps with icons:
  - Step 1: Answer brutally honest questions
  - Step 2: Get exposed to your cognitive dissonance
  - Step 3: Receive a zero-bullshit action plan

### 3. **Features**

- One-liner feature cards:
  - “No fluff, no empathy. Just logic.”
  - “Detect contradictions. Cut wasted time.”
  - “Weekly check-ins. PDF reports. Cold clarity.”

### 4. **Pricing Plans**

- Basic: Free – 3 questions per day, no report
- Pro: 99 TL/month – Unlimited access, weekly check-ins
- Elite: 790 TL/year – All pro features + priority processing

### 5. **FAQ Section**

- Short answers to 4 questions like:
  - “Is this a therapy tool?” → No. This is logic.
  - “Will Clario be nice to me?” → No.
  - “Does it work?” → Only if you do.

### 6. **Final CTA**

- Headline: “Still making excuses?”
- Subhead: “Try Clario for free. Just 3 questions a day. Let logic handle the rest.”
- CTA Button: `Try Now – Free Account`

### 7. **Footer**

- Include links: Privacy Policy, Terms, Contact
- Minimalist layout

## Notes:

- Use Tailwind CSS
- Make the layout responsive
- Keep animations subtle and purposeful
- Use minimal icons, avoid illustrations
