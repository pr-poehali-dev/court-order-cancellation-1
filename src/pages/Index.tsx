import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── TYPES ───────────────────────────────────────────────
interface FormData {
  lastName: string;
  firstName: string;
  middleName: string;
  birthDate: string;
  address: string;
  court: string;
  caseNumber: string;
  orderDate: string;
  claimant: string;
  amount: string;
  reason: string;
}

interface FormErrors {
  [key: string]: string;
}

// ─── NAV ─────────────────────────────────────────────────
function Nav({ active, setActive }: { active: string; setActive: (s: string) => void }) {
  const links = [
    { id: "home", label: "Главная" },
    { id: "info", label: "О процедуре" },
    { id: "constructor", label: "Конструктор" },
    { id: "samples", label: "Образцы" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(244,247,251,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(14,135,200,0.12)" }}>
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActive("home")}>
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0e87c8, #0da87a)" }}>
            <Icon name="Scale" size={16} className="text-white" />
          </div>
          <span className="font-oswald font-bold text-slate-800 text-lg tracking-wide">ОТМЕНА<span className="neon-text">ПРИКАЗА</span></span>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {links.map(l => (
            <button
              key={l.id}
              onClick={() => setActive(l.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 font-golos ${active === l.id ? "text-[#0e87c8] bg-[rgba(14,135,200,0.1)]" : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"}`}
            >
              {l.label}
            </button>
          ))}
        </nav>
        <button
          onClick={() => setActive("constructor")}
          className="btn-neon px-4 py-2 rounded-lg text-sm font-oswald font-semibold tracking-wider"
        >
          Создать заявление
        </button>
      </div>
      <div className="md:hidden flex gap-1 px-4 pb-2 overflow-x-auto">
        {links.map(l => (
          <button
            key={l.id}
            onClick={() => setActive(l.id)}
            className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${active === l.id ? "text-[#0e87c8] bg-[rgba(14,135,200,0.1)]" : "text-slate-500 bg-slate-100"}`}
          >
            {l.label}
          </button>
        ))}
      </div>
    </header>
  );
}

// ─── HOME ─────────────────────────────────────────────────
function HomePage({ setActive }: { setActive: (s: string) => void }) {
  const stats = [
    { value: "10 дней", label: "срок подачи возражения", icon: "Clock" },
    { value: "100%", label: "бесплатная процедура", icon: "BadgeCheck" },
    { value: "5 минут", label: "на создание заявления", icon: "Zap" },
  ];

  const steps = [
    { num: "01", title: "Узнайте о приказе", desc: "Судебный приказ мог быть вынесен без вашего ведома. Проверьте наличие приказа на сайте суда или через Госуслуги.", icon: "Search" },
    { num: "02", title: "Заполните форму", desc: "Используйте наш конструктор — введите данные, система автоматически проверит их корректность.", icon: "FileEdit" },
    { num: "03", title: "Получите заявление", desc: "Скачайте готовое заявление об отмене судебного приказа и подайте его в суд.", icon: "Download" },
  ];

  return (
    <div className="min-h-screen pt-20">
      <section className="relative overflow-hidden pt-16 pb-24 px-4">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-64 h-64 rounded-full opacity-20 animate-float" style={{ background: "radial-gradient(circle, #0e87c8, transparent)" }} />
          <div className="absolute bottom-20 right-1/4 w-48 h-48 rounded-full opacity-15 animate-float" style={{ background: "radial-gradient(circle, #0da87a, transparent)", animationDelay: "3s" }} />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6" style={{ background: "rgba(14,135,200,0.1)", border: "1px solid rgba(14,135,200,0.2)" }}>
            <div className="w-2 h-2 rounded-full animate-pulse-neon" style={{ background: "#0e87c8" }} />
            <span className="text-xs font-golos text-[#0e87c8] tracking-widest uppercase font-semibold">Защита прав граждан</span>
          </div>
          <h1 className="font-oswald text-5xl md:text-7xl font-bold text-slate-800 mb-4 leading-tight">
            ОТМЕНИТЕ<br /><span className="gradient-text">СУДЕБНЫЙ ПРИКАЗ</span><br />БЕСПЛАТНО
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-golos leading-relaxed">
            Узнайте о своих правах и создайте заявление об отмене судебного приказа за 5 минут — без юристов и лишних расходов
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setActive("constructor")}
              className="btn-neon px-8 py-4 rounded-xl text-base font-oswald tracking-wider flex items-center gap-2 justify-center"
            >
              <Icon name="FileEdit" size={18} />
              Создать заявление
            </button>
            <button
              onClick={() => setActive("info")}
              className="btn-outline-neon px-8 py-4 rounded-xl text-base font-oswald tracking-wider flex items-center gap-2 justify-center"
            >
              <Icon name="BookOpen" size={18} />
              Узнать подробнее
            </button>
          </div>
        </div>
      </section>

      <hr className="section-divider mx-8" />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => (
            <div key={i} className="card-glass rounded-2xl p-6 text-center neon-border hover:shadow-md transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center" style={{ background: "rgba(14,135,200,0.1)" }}>
                <Icon name={s.icon} size={22} className="text-[#0e87c8]" />
              </div>
              <div className="font-oswald text-3xl font-bold gradient-text mb-1">{s.value}</div>
              <div className="text-sm text-slate-500 font-golos">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <hr className="section-divider mx-8" />

      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="tag tag-blue mb-4 inline-block">Как это работает</span>
            <h2 className="font-oswald text-4xl font-bold text-slate-800">ТРИ ПРОСТЫХ ШАГА</h2>
          </div>
          <div className="space-y-6">
            {steps.map((step, i) => (
              <div key={i} className="card-glass rounded-2xl p-6 neon-border hover:shadow-md transition-all duration-300 flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, rgba(14,135,200,0.12), rgba(13,168,122,0.08))", border: "1px solid rgba(14,135,200,0.2)" }}>
                    <Icon name={step.icon} size={24} className="text-[#0e87c8]" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-oswald text-4xl font-bold text-[rgba(14,135,200,0.2)]">{step.num}</span>
                    <h3 className="font-oswald text-xl font-semibold text-slate-800">{step.title}</h3>
                  </div>
                  <p className="text-slate-500 font-golos leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-3xl p-10 relative overflow-hidden" style={{ background: "linear-gradient(135deg, rgba(14,135,200,0.08), rgba(13,168,122,0.05))", border: "1px solid rgba(14,135,200,0.15)" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(14,135,200,0.04), transparent 70%)" }} />
            <Icon name="Shield" size={40} className="text-[#0e87c8] mx-auto mb-4" />
            <h2 className="font-oswald text-3xl font-bold text-slate-800 mb-3">ГОТОВЫ ЗАЩИТИТЬ СВОИ ПРАВА?</h2>
            <p className="text-slate-500 font-golos mb-6">Создайте заявление прямо сейчас — это займёт не более 5 минут</p>
            <button
              onClick={() => setActive("constructor")}
              className="btn-neon px-8 py-4 rounded-xl text-base font-oswald tracking-wider inline-flex items-center gap-2"
            >
              <Icon name="ArrowRight" size={18} />
              Начать бесплатно
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

// ─── INFO ─────────────────────────────────────────────────
function InfoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "Что такое судебный приказ?",
      a: "Судебный приказ — это судебное постановление, вынесенное судьёй единолично по заявлению взыскателя о взыскании денежных сумм или истребовании движимого имущества. Он выносится без вызова сторон и без проведения судебного заседания.",
    },
    {
      q: "В какой срок нужно подать возражение?",
      a: "Возражение относительно исполнения судебного приказа необходимо подать в течение 10 дней с момента получения его копии должником. Если срок пропущен по уважительной причине, его можно восстановить.",
    },
    {
      q: "Нужно ли обосновывать возражение?",
      a: "Нет — при отмене судебного приказа вам не нужно указывать причины или обосновывать своё несогласие. Достаточно просто выразить несогласие с приказом. Суд обязан его отменить.",
    },
    {
      q: "Что происходит после отмены приказа?",
      a: "После отмены судебного приказа взыскатель имеет право обратиться в суд с иском в общем порядке. Однако в этом случае у вас будет возможность защищать свои интересы полноценно — с вызовом сторон и рассмотрением всех аргументов.",
    },
    {
      q: "Куда подаётся возражение?",
      a: "Возражение подаётся в суд, вынесший судебный приказ. Это может быть мировой суд (приказы на сумму до 500 000 руб.) или районный суд.",
    },
  ];

  const timeline = [
    { step: "Вынесение приказа", desc: "Суд выносит приказ без участия должника", color: "#0e87c8", icon: "FileText" },
    { step: "Направление копии", desc: "Должнику направляется копия по почте", color: "#0e87c8", icon: "Mail" },
    { step: "10-дневный срок", desc: "Срок для подачи возражения с момента получения", color: "#e05020", icon: "Clock" },
    { step: "Подача возражения", desc: "Вы подаёте возражение в суд", color: "#0da87a", icon: "Send" },
    { step: "Отмена приказа", desc: "Суд обязан отменить приказ", color: "#0da87a", icon: "CheckCircle" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="tag tag-blue mb-4 inline-block">Правовая информация</span>
          <h1 className="font-oswald text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            ПРОЦЕДУРА <span className="gradient-text">ОТМЕНЫ</span>
          </h1>
          <p className="text-slate-500 font-golos max-w-2xl mx-auto">
            Всё, что нужно знать об отмене судебного приказа — простым языком
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          <div className="card-glass rounded-2xl p-6 neon-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(14,135,200,0.1)" }}>
                <Icon name="Scale" size={18} className="text-[#0e87c8]" />
              </div>
              <h3 className="font-oswald text-lg font-semibold text-slate-800">Правовая основа</h3>
            </div>
            <p className="text-slate-500 font-golos text-sm leading-relaxed">
              Право на отмену судебного приказа закреплено в <span className="text-[#0e87c8] font-semibold">статье 129 ГПК РФ</span>.
              Должник вправе в течение 10 дней со дня получения копии приказа представить возражения относительно его исполнения.
            </p>
          </div>
          <div className="card-glass rounded-2xl p-6 neon-border-green">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: "rgba(13,168,122,0.1)" }}>
                <Icon name="AlertTriangle" size={18} className="text-[#0da87a]" />
              </div>
              <h3 className="font-oswald text-lg font-semibold text-slate-800">Важно знать</h3>
            </div>
            <p className="text-slate-500 font-golos text-sm leading-relaxed">
              Если вы не получили копию приказа, <span className="text-[#0da87a] font-semibold">срок не начал течь</span>.
              При обнаружении удержаний у приставов можно восстановить срок, указав дату фактического обнаружения.
            </p>
          </div>
        </div>

        <div className="card-glass rounded-2xl p-6 neon-border mb-8">
          <h2 className="font-oswald text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Icon name="GitBranch" size={22} className="text-[#0e87c8]" />
            СХЕМА ПРОЦЕДУРЫ
          </h2>
          <div className="space-y-0">
            {timeline.map((item, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{
                    background: `${item.color}18`,
                    border: `1px solid ${item.color}60`
                  }}>
                    <Icon name={item.icon} size={16} style={{ color: item.color }} />
                  </div>
                  {i < timeline.length - 1 && (
                    <div className="w-0.5 h-8 my-1 step-line opacity-40" />
                  )}
                </div>
                <div className="pb-6">
                  <div className="font-oswald font-semibold text-slate-800 text-sm">{item.step}</div>
                  <div className="text-slate-500 font-golos text-sm mt-0.5">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-oswald text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <Icon name="HelpCircle" size={22} className="text-[#0e87c8]" />
            ЧАСТЫЕ ВОПРОСЫ
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`card-glass rounded-xl overflow-hidden transition-all duration-300 cursor-pointer ${openFaq === i ? "neon-border" : "border border-slate-200 hover:border-[rgba(14,135,200,0.3)]"}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="p-5 flex items-center justify-between gap-4">
                  <span className="font-golos font-semibold text-slate-800 text-sm">{faq.q}</span>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${openFaq === i ? "bg-[rgba(14,135,200,0.15)] text-[#0e87c8]" : "text-slate-400"}`}>
                    <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={14} />
                  </div>
                </div>
                {openFaq === i && (
                  <div className="px-5 pb-5 animate-fade-in">
                    <div className="w-full h-px bg-slate-100 mb-4" />
                    <p className="text-slate-500 font-golos text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── CONSTRUCTOR ──────────────────────────────────────────
function ConstructorPage() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FormData>({
    lastName: "", firstName: "", middleName: "", birthDate: "",
    address: "", court: "", caseNumber: "", orderDate: "",
    claimant: "", amount: "", reason: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [generated, setGenerated] = useState(false);

  const totalSteps = 3;
  const progress = (step / totalSteps) * 100;

  const validators: { [key: string]: (v: string) => string } = {
    lastName: v => !v.trim() ? "Введите фамилию" : !/^[А-ЯЁа-яёA-Za-z-]+$/.test(v.trim()) ? "Только буквы и дефис" : "",
    firstName: v => !v.trim() ? "Введите имя" : !/^[А-ЯЁа-яёA-Za-z-]+$/.test(v.trim()) ? "Только буквы и дефис" : "",
    middleName: () => "",
    birthDate: v => {
      if (!v) return "Укажите дату рождения";
      const d = new Date(v);
      const now = new Date();
      if (d > now) return "Дата не может быть в будущем";
      const age = (now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24 * 365);
      if (age < 14) return "Возраст должен быть не менее 14 лет";
      return "";
    },
    address: v => !v.trim() ? "Введите адрес" : v.trim().length < 10 ? "Укажите полный адрес" : "",
    court: v => !v.trim() ? "Введите наименование суда" : "",
    caseNumber: v => !v.trim() ? "Введите номер дела" : "",
    orderDate: v => !v ? "Укажите дату приказа" : new Date(v) > new Date() ? "Дата не может быть в будущем" : "",
    claimant: v => !v.trim() ? "Введите наименование взыскателя" : "",
    amount: v => {
      if (!v.trim()) return "Укажите сумму";
      const num = parseFloat(v.replace(/\s/g, "").replace(",", "."));
      if (isNaN(num) || num <= 0) return "Введите корректную сумму";
      return "";
    },
    reason: () => "",
  };

  const stepFields: { [key: number]: string[] } = {
    1: ["lastName", "firstName", "middleName", "birthDate", "address"],
    2: ["court", "caseNumber", "orderDate", "claimant", "amount"],
    3: ["reason"],
  };

  const fieldLabels: { [key: string]: string } = {
    lastName: "Фамилия *", firstName: "Имя *", middleName: "Отчество",
    birthDate: "Дата рождения *", address: "Адрес проживания *",
    court: "Наименование суда *", caseNumber: "Номер дела *",
    orderDate: "Дата судебного приказа *", claimant: "Наименование взыскателя *",
    amount: "Сумма взыскания (руб.) *", reason: "Основание для отмены (необязательно)",
  };

  const validate = (field: string, value: string) => {
    const err = validators[field]?.(value) ?? "";
    setErrors(prev => ({ ...prev, [field]: err }));
    return err === "";
  };

  const handleChange = (field: string, value: string) => {
    setData(prev => ({ ...prev, [field]: value }));
    if (touched.has(field)) validate(field, value);
  };

  const handleBlur = (field: string) => {
    setTouched(prev => new Set(prev).add(field));
    validate(field, data[field as keyof FormData]);
  };

  const validateStep = () => {
    const fields = stepFields[step];
    let valid = true;
    const newTouched = new Set(touched);
    const newErrors = { ...errors };
    fields.forEach(f => {
      newTouched.add(f);
      const err = validators[f]?.(data[f as keyof FormData]) ?? "";
      newErrors[f] = err;
      if (err) valid = false;
    });
    setTouched(newTouched);
    setErrors(newErrors);
    return valid;
  };

  const nextStep = () => {
    if (validateStep()) setStep(s => Math.min(s + 1, totalSteps));
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const generate = () => {
    if (validateStep()) setGenerated(true);
  };

  const getInputClass = (field: string) => {
    const base = "input-neon w-full px-4 py-3 rounded-xl font-golos text-sm";
    if (!touched.has(field)) return base;
    if (errors[field]) return `${base} input-error`;
    return `${base} input-success`;
  };

  const renderField = (field: string) => {
    const value = data[field as keyof FormData];
    const isDate = field === "birthDate" || field === "orderDate";
    const isTextarea = field === "reason";

    return (
      <div key={field} className="space-y-1.5">
        <label className="text-xs font-golos font-semibold text-slate-600 uppercase tracking-wider block">
          {fieldLabels[field]}
        </label>
        {isTextarea ? (
          <textarea
            value={value}
            onChange={e => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            rows={4}
            placeholder="Например: не получал копию судебного приказа, оспариваю взысканную сумму..."
            className={getInputClass(field) + " resize-none"}
          />
        ) : (
          <input
            type={isDate ? "date" : "text"}
            value={value}
            onChange={e => handleChange(field, e.target.value)}
            onBlur={() => handleBlur(field)}
            placeholder={isDate ? "" : fieldLabels[field].replace(" *", "").replace(" (необязательно)", "")}
            className={getInputClass(field)}
          />
        )}
        {touched.has(field) && errors[field] && (
          <p className="text-xs font-golos flex items-center gap-1" style={{ color: "#dc4628" }}>
            <Icon name="AlertCircle" size={12} />
            {errors[field]}
          </p>
        )}
        {touched.has(field) && !errors[field] && value && (
          <p className="text-xs font-golos flex items-center gap-1" style={{ color: "#0da87a" }}>
            <Icon name="CheckCircle" size={12} />
            Заполнено верно
          </p>
        )}
      </div>
    );
  };

  if (generated) {
    const text = `В ${data.court}
от ${data.lastName} ${data.firstName} ${data.middleName}
проживающего(ей) по адресу: ${data.address}
дата рождения: ${data.birthDate}

ВОЗРАЖЕНИЕ
относительно исполнения судебного приказа

${new Date().toLocaleDateString("ru-RU")} г.

${data.court} был вынесен судебный приказ №${data.caseNumber} от ${data.orderDate ? new Date(data.orderDate).toLocaleDateString("ru-RU") : ""} о взыскании с меня в пользу ${data.claimant} денежной суммы в размере ${data.amount} рублей.

Настоящим заявляю о своём несогласии с вынесенным судебным приказом и возражаю против его исполнения.${data.reason ? `\n\nОснование: ${data.reason}` : ""}

В соответствии со статьёй 129 ГПК РФ прошу:
Отменить судебный приказ №${data.caseNumber} от ${data.orderDate ? new Date(data.orderDate).toLocaleDateString("ru-RU") : ""}.

___________________ ${data.lastName} ${data.firstName[0] || ""}.${data.middleName[0] || ""}.
«___» ________________ 202__ г.`;

    return (
      <div className="min-h-screen pt-24 pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center animate-scale-in" style={{ background: "linear-gradient(135deg, rgba(13,168,122,0.15), rgba(14,135,200,0.1))", border: "1px solid rgba(13,168,122,0.3)" }}>
              <Icon name="CheckCheck" size={28} className="text-[#0da87a]" />
            </div>
            <h1 className="font-oswald text-3xl font-bold text-slate-800 mb-2">ЗАЯВЛЕНИЕ ГОТОВО!</h1>
            <p className="text-slate-500 font-golos">Скопируйте текст, распечатайте и подайте в суд</p>
          </div>

          <div className="card-glass rounded-2xl p-6 neon-border mb-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-oswald text-lg font-semibold text-slate-800">Текст заявления</h2>
              <button
                onClick={() => navigator.clipboard.writeText(text)}
                className="btn-outline-neon px-4 py-2 rounded-lg text-xs font-oswald tracking-wider flex items-center gap-1.5"
              >
                <Icon name="Copy" size={14} />
                Скопировать
              </button>
            </div>
            <pre className="text-slate-700 font-golos text-sm leading-relaxed whitespace-pre-wrap p-4 rounded-xl" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
              {text}
            </pre>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="card-glass rounded-xl p-4 neon-border-green flex gap-3 items-start">
              <Icon name="Info" size={18} className="text-[#0da87a] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-500 font-golos">Подайте заявление лично или направьте заказным письмом с уведомлением</p>
            </div>
            <div className="card-glass rounded-xl p-4 neon-border flex gap-3 items-start">
              <Icon name="Clock" size={18} className="text-[#0e87c8] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-500 font-golos">Суд обязан отменить приказ и направить вам копию определения об отмене</p>
            </div>
          </div>

          <button
            onClick={() => {
              setGenerated(false);
              setStep(1);
              setData({ lastName: "", firstName: "", middleName: "", birthDate: "", address: "", court: "", caseNumber: "", orderDate: "", claimant: "", amount: "", reason: "" });
              setErrors({});
              setTouched(new Set());
            }}
            className="w-full btn-outline-neon px-6 py-3 rounded-xl font-oswald tracking-wider text-sm"
          >
            Создать новое заявление
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <span className="tag tag-blue mb-3 inline-block">Конструктор заявлений</span>
          <h1 className="font-oswald text-3xl font-bold text-slate-800">СОЗДАЙТЕ <span className="gradient-text">ЗАЯВЛЕНИЕ</span></h1>
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-slate-500 font-golos">Шаг {step} из {totalSteps}</span>
            <span className="text-xs font-golos text-[#0e87c8]">{Math.round(progress)}% заполнено</span>
          </div>
          <div className="h-2 rounded-full w-full bg-slate-200">
            <div className="h-full rounded-full progress-bar" style={{ width: `${progress}%` }} />
          </div>
          <div className="flex justify-between mt-3">
            {["Личные данные", "О приказе", "Основание"].map((label, i) => (
              <div key={i} className="flex flex-col items-center gap-1">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-oswald font-bold transition-all duration-300"
                  style={{
                    background: step > i + 1 ? "#0da87a" : step === i + 1 ? "#0e87c8" : "#e2e8f0",
                    color: step > i + 1 || step === i + 1 ? "#ffffff" : "#94a3b8",
                    border: step === i + 1 ? "2px solid rgba(14,135,200,0.4)" : "none",
                    boxShadow: step === i + 1 ? "0 2px 10px rgba(14,135,200,0.3)" : "none"
                  }}>
                  {step > i + 1 ? <Icon name="Check" size={12} /> : i + 1}
                </div>
                <span className={`text-xs font-golos hidden sm:block ${step === i + 1 ? "text-[#0e87c8]" : "text-slate-400"}`}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card-glass rounded-2xl p-6 neon-border animate-fade-in">
          <h2 className="font-oswald text-xl font-bold text-slate-800 mb-6">
            {step === 1 && "Ваши личные данные"}
            {step === 2 && "Данные о судебном приказе"}
            {step === 3 && "Основание для отмены"}
          </h2>
          <div className="space-y-4">
            {stepFields[step].map(field => renderField(field))}
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          {step > 1 && (
            <button onClick={prevStep} className="btn-outline-neon px-6 py-3 rounded-xl font-oswald tracking-wider text-sm flex items-center gap-2">
              <Icon name="ArrowLeft" size={16} />
              Назад
            </button>
          )}
          <button
            onClick={step === totalSteps ? generate : nextStep}
            className="btn-neon flex-1 py-3 rounded-xl font-oswald tracking-wider text-sm flex items-center gap-2 justify-center"
          >
            {step === totalSteps ? (
              <><Icon name="Sparkles" size={16} />Создать заявление</>
            ) : (
              <><span>Далее</span><Icon name="ArrowRight" size={16} /></>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── SAMPLES ──────────────────────────────────────────────
function SamplesPage({ setActive }: { setActive: (s: string) => void }) {
  const [open, setOpen] = useState<number | null>(null);

  const samples = [
    {
      title: "Стандартное возражение",
      desc: "Простая форма отмены без указания оснований — подходит в большинстве случаев",
      tag: "Универсальный",
      tagType: "tag-blue",
      icon: "FileText",
      preview: `В [наименование суда]
от [ФИО должника],
проживающего по адресу: [адрес]

ВОЗРАЖЕНИЕ
относительно исполнения судебного приказа

Судом вынесен судебный приказ №[номер] от [дата] о взыскании
с меня суммы в размере [сумма] рублей в пользу [взыскатель].

Возражаю против исполнения данного судебного приказа.

На основании ст. 129 ГПК РФ прошу:
Отменить судебный приказ №[номер] от [дата].

_________________ [ФИО]
«__»________202__г.`,
    },
    {
      title: "Возражение по задолженности ЖКХ",
      desc: "Для случаев взыскания задолженности за коммунальные услуги",
      tag: "ЖКХ",
      tagType: "tag-green",
      icon: "Home",
      preview: `В [наименование суда]
от [ФИО должника]

ВОЗРАЖЕНИЕ
относительно исполнения судебного приказа

Судебный приказ №[номер] вынесен о взыскании задолженности
по оплате жилищно-коммунальных услуг в размере [сумма] руб.

С вынесенным приказом не согласен, поскольку не был
уведомлён о его вынесении, расчёт задолженности
считаю некорректным.

Прошу: отменить судебный приказ №[номер] от [дата].

_________________ [ФИО]`,
    },
    {
      title: "Возражение по кредитному долгу",
      desc: "При взыскании банком или МФО задолженности по кредиту",
      tag: "Кредит",
      tagType: "tag-orange",
      icon: "CreditCard",
      preview: `В [наименование суда]
от [ФИО должника]

ВОЗРАЖЕНИЕ
относительно исполнения судебного приказа

[Дата] был вынесен судебный приказ №[номер] о взыскании
с меня в пользу [кредитор] задолженности по кредитному
договору в сумме [сумма] рублей.

Возражаю против исполнения приказа. Считаю размер
начисленных процентов и штрафов несоразмерным основному
долгу, что нарушает принцип соразмерности.

Прошу: отменить судебный приказ №[номер] от [дата].

_________________ [ФИО]`,
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="tag tag-green mb-4 inline-block">Образцы документов</span>
          <h1 className="font-oswald text-4xl font-bold text-slate-800 mb-4">
            ГОТОВЫЕ <span className="gradient-text">ШАБЛОНЫ</span>
          </h1>
          <p className="text-slate-500 font-golos max-w-xl mx-auto">
            Выберите подходящий образец или воспользуйтесь конструктором для создания персонального заявления
          </p>
        </div>

        <div className="grid gap-6">
          {samples.map((s, i) => (
            <div key={i} className={`card-glass rounded-2xl overflow-hidden transition-all duration-300 ${open === i ? "neon-border" : "border border-slate-200 hover:border-[rgba(14,135,200,0.3)]"}`}>
              <div className="p-6 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(14,135,200,0.08)", border: "1px solid rgba(14,135,200,0.15)" }}>
                      <Icon name={s.icon} size={22} className="text-[#0e87c8]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`tag ${s.tagType}`}>{s.tag}</span>
                      </div>
                      <h3 className="font-oswald text-xl font-semibold text-slate-800">{s.title}</h3>
                      <p className="text-slate-500 font-golos text-sm mt-1">{s.desc}</p>
                    </div>
                  </div>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${open === i ? "bg-[rgba(14,135,200,0.1)]" : "bg-slate-100"}`}>
                    <Icon name={open === i ? "ChevronUp" : "ChevronDown"} size={16} className={open === i ? "text-[#0e87c8]" : "text-slate-400"} />
                  </div>
                </div>
              </div>

              {open === i && (
                <div className="px-6 pb-6 animate-fade-in">
                  <div className="w-full h-px mb-4 bg-slate-100" />
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-slate-400 font-golos uppercase tracking-widest">Текст образца</span>
                    <button
                      onClick={() => navigator.clipboard.writeText(s.preview)}
                      className="btn-outline-neon px-3 py-1.5 rounded-lg text-xs font-oswald tracking-wider flex items-center gap-1.5"
                    >
                      <Icon name="Copy" size={12} />
                      Скопировать
                    </button>
                  </div>
                  <pre className="text-slate-700 font-golos text-xs leading-relaxed whitespace-pre-wrap p-4 rounded-xl" style={{ background: "#f8fafc", border: "1px solid #e2e8f0" }}>
                    {s.preview}
                  </pre>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="card-glass rounded-2xl p-6 neon-border inline-block max-w-md w-full">
            <Icon name="Wand2" size={28} className="text-[#0e87c8] mx-auto mb-3" />
            <p className="text-slate-800 font-golos font-semibold mb-2">Нужно персональное заявление?</p>
            <p className="text-slate-500 font-golos text-sm mb-4">Конструктор подставит ваши данные автоматически</p>
            <button
              onClick={() => setActive("constructor")}
              className="btn-neon px-6 py-3 rounded-xl font-oswald tracking-wider text-sm inline-flex items-center gap-2"
            >
              <Icon name="Edit3" size={16} />
              Открыть конструктор
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── FOOTER ───────────────────────────────────────────────
function Footer({ setActive }: { setActive: (s: string) => void }) {
  return (
    <footer className="border-t mt-8 bg-white" style={{ borderColor: "#e2e8f0" }}>
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0e87c8, #0da87a)" }}>
                <Icon name="Scale" size={14} className="text-white" />
              </div>
              <span className="font-oswald font-bold text-slate-800">ОТМЕНА<span className="neon-text">ПРИКАЗА</span></span>
            </div>
            <p className="text-slate-500 text-sm font-golos max-w-xs">Сервис помощи гражданам в отмене судебных приказов</p>
          </div>
          <div className="flex gap-10">
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-golos mb-3">Разделы</div>
              {["home", "info", "constructor", "samples"].map((id, i) => (
                <div key={id} className="mb-1.5">
                  <button onClick={() => setActive(id)} className="text-sm text-slate-500 hover:text-[#0e87c8] transition-colors font-golos">
                    {["Главная", "О процедуре", "Конструктор", "Образцы"][i]}
                  </button>
                </div>
              ))}
            </div>
            <div>
              <div className="text-xs text-slate-400 uppercase tracking-widest font-golos mb-3">Правовая база</div>
              <div className="text-sm text-slate-500 font-golos space-y-1.5">
                <div>ст. 129 ГПК РФ</div>
                <div>Глава 11 ГПК РФ</div>
                <div>ФЗ «Об исполнительном производстве»</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-2" style={{ borderColor: "#f1f5f9" }}>
          <p className="text-xs text-slate-600 font-golos">Сайт носит информационный характер. Не является юридической консультацией.</p>
          <p className="text-xs text-slate-600 font-golos">© 2024 ОтменаПриказа</p>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────
export default function Index() {
  const [active, setActive] = useState("home");

  return (
    <div className="min-h-screen" style={{ background: "var(--dark-bg)" }}>
      <Nav active={active} setActive={setActive} />
      <main>
        {active === "home" && <HomePage setActive={setActive} />}
        {active === "info" && <InfoPage />}
        {active === "constructor" && <ConstructorPage />}
        {active === "samples" && <SamplesPage setActive={setActive} />}
      </main>
      <Footer setActive={setActive} />
    </div>
  );
}