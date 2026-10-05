import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { z } from "zod";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Copy,
  ExternalLink,
  Lightbulb,
  LockKeyhole,
  MessageCircleHeart,
  Search,
  Sparkles,
  Target,
  Youtube,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import subagentIllustration from "@/assets/subagent-illustration.svg";
import bidvLogo from "@/assets/bidv-logo.svg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ĐỘI NGŨ SUB AGENT — Đội ngũ AI cho người kinh doanh nhỏ" },
      {
        name: "description",
        content: "ĐỘI NGŨ SUB AGENT gồm 5 nhóm trợ lý AI được chia vai rõ ràng.",
      },
      { property: "og:title", content: "ĐỘI NGŨ SUB AGENT — Đừng thuê thêm người. Hãy xây một đội ngũ AI." },
      {
        property: "og:description",
        content: "Xây một đội ngũ AI hỗ trợ đúng việc, đúng quy trình.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

const agents = [
  {
    icon: Target,
    title: "Chiến lược",
    text: "Biến mục tiêu thành việc cần làm.",
    tone: "bg-soft-rose text-brand",
  },
  {
    icon: Search,
    title: "Nghiên cứu",
    text: "Tìm insight, chủ đề và xu hướng.",
    tone: "bg-mint/20 text-ink",
  },
  {
    icon: Lightbulb,
    title: "Nội dung",
    text: "Tạo bài viết, video, caption và CTA.",
    tone: "bg-accent-warm/30 text-ink",
  },
  {
    icon: BarChart3,
    title: "Tối ưu kênh",
    text: "Tối ưu hook, từ khóa và lịch đăng.",
    tone: "bg-soft-rose text-brand",
  },
  {
    icon: MessageCircleHeart,
    title: "Chăm sóc tương tác",
    text: "Gợi ý phản hồi và chăm khách.",
    tone: "bg-mint/20 text-ink",
  },
];

const transformations = [
  ["Tự làm tất cả", "AI hỗ trợ từng nhóm việc"],
  ["Không biết đăng gì", "Có chủ đề và kế hoạch"],
  ["Bí ý tưởng", "Có AI phát triển nội dung"],
  ["Xây kênh rời rạc", "Có quy trình tối ưu"],
  ["Bỏ sót khách", "Có gợi ý chăm sóc"],
];

const faqs = [
  [
    "Tôi không rành công nghệ có dùng được không?",
    "Có. ĐỘI NGŨ SUB AGENT được thiết kế cho người không chuyên công nghệ và có Thủy & Hồng đồng hành hướng dẫn theo cách dễ hiểu.",
  ],
  [
    "ĐỘI NGŨ SUB AGENT có phải là một chatbot không?",
    "Không. Đây là hệ thống gồm 5 nhóm Sub Agent có vai trò khác nhau, phối hợp theo một quy trình công việc thống nhất.",
  ],
  [
    "ĐỘI NGŨ SUB AGENT có tự đăng bài không?",
    "Hiện ĐỘI NGŨ SUB AGENT được giới thiệu ở vai trò hỗ trợ nghiên cứu, xây nội dung và tối ưu. Khả năng tự động đăng bài chưa nằm trong cam kết của chương trình.",
  ],
  [
    "ĐỘI NGŨ SUB AGENT có tự tìm khách và bán hàng thay tôi không?",
    "Không. Hệ thống hỗ trợ bạn làm việc có quy trình hơn; không cam kết doanh số và không thay thế quyết định của người dùng.",
  ],
];

const checkoutSchema = z.object({
  name: z.string().trim().min(2, "Vui lòng nhập họ tên.").max(100, "Họ tên tối đa 100 ký tự."),
  zalo: z
    .string()
    .trim()
    .regex(/^(?:\+?84|0)[0-9]{9,10}$/, "Vui lòng nhập đúng số Zalo Việt Nam."),
  email: z.string().trim().email("Vui lòng nhập đúng địa chỉ Gmail.").max(255, "Email tối đa 255 ký tự.").refine((value) => value.toLowerCase().endsWith("@gmail.com"), "Vui lòng sử dụng địa chỉ @gmail.com."),
});

type CheckoutForm = z.infer<typeof checkoutSchema>;

const sampleFeedback = [
  {
    name: "Chị Mai",
    time: "09:18",
    message: "Trước đây chị hay bí ý tưởng. Có quy trình chia từng nhóm việc như vậy thì dễ bắt đầu hơn nhiều.",
  },
  {
    name: "Chị Lan",
    time: "20:42",
    message: "Phần hướng dẫn rất dễ hiểu. Chị không rành công nghệ nhưng vẫn biết nên giao việc gì cho từng trợ lý.",
  },
  {
    name: "Anh Minh",
    time: "14:05",
    message: "Điểm chị thích là không hỏi AI lan man nữa. Mỗi bước đều rõ mục tiêu và đầu ra cần có.",
  },
];

function Index() {
  const [form, setForm] = useState<CheckoutForm>({ name: "", zalo: "", email: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof CheckoutForm, string>>>({});
  const [showPayment, setShowPayment] = useState(false);
  const [copied, setCopied] = useState<"account" | "content" | null>(null);
  const [checkoutVisible, setCheckoutVisible] = useState(false);
  const paymentContent = `${form.zalo.trim()} SUBAGENT`;

  useEffect(() => {
    const checkout = document.getElementById("lien-he");
    if (!checkout) return;
    const observer = new IntersectionObserver(([entry]) => setCheckoutVisible(Boolean(entry?.isIntersecting)), { threshold: 0.05 });
    observer.observe(checkout);
    return () => observer.disconnect();
  }, []);

  function handleCheckout(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const result = checkoutSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      const nextErrors: Partial<Record<keyof CheckoutForm, string>> = {};
      if (fieldErrors.name?.[0]) nextErrors.name = fieldErrors.name[0];
      if (fieldErrors.zalo?.[0]) nextErrors.zalo = fieldErrors.zalo[0];
      if (fieldErrors.email?.[0]) nextErrors.email = fieldErrors.email[0];
      setErrors(nextErrors);
      setShowPayment(false);
      return;
    }

    setForm(result.data);
    setErrors({});
    setShowPayment(true);
    requestAnimationFrame(() => document.getElementById("thanh-toan")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  async function copyPayment(value: string, type: "account" | "content") {
    await navigator.clipboard.writeText(value);
    setCopied(type);
    window.setTimeout(() => setCopied(null), 1600);
  }

  return (
    <div className="min-h-screen overflow-x-clip bg-cream pb-24 md:pb-0 font-body text-ink antialiased">
      <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/90 backdrop-blur-md">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-5 py-3 sm:flex sm:justify-between sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="ĐỘI NGŨ SUB AGENT - về đầu trang">
            <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-brand font-display text-xl font-extrabold text-primary-foreground">S</span>
            <span className="truncate font-display text-xl font-extrabold">ĐỘI NGŨ SUB AGENT</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold md:flex" aria-label="Điều hướng chính">
            <a href="#loi-ich" className="transition-colors hover:text-brand">Lợi ích</a>
            <a href="#doi-ngu" className="transition-colors hover:text-brand">5 nhóm AI</a>
            <a href="#goi" className="transition-colors hover:text-brand">Gói & giá</a>
            <a href="#faq" className="transition-colors hover:text-brand">Hỏi đáp</a>
          </nav>
          <a href="#goi" className="shrink-0 inline-flex min-h-11 items-center rounded-xl bg-brand px-4 py-2.5 text-sm font-bold text-primary-foreground transition-transform active:scale-[0.98] sm:hover:-translate-y-0.5">
            Xem ưu đãi
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-soft-rose px-4 py-2 text-brand text-sm font-bold">
                <span className="size-2 rounded-full bg-brand" /> Giá mở bán chỉ 999.000đ
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-5xl font-extrabold leading-[0.98] md:text-7xl">
                Đừng thuê thêm người. <span className="text-brand">Hãy xây một</span>{" "}
                <span className="relative inline-block">
                  đội ngũ AI
                  <svg className="absolute -bottom-2 left-0 w-full text-accent-warm" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none" aria-hidden="true">
                    <path d="M2 8 C 50 2, 150 2, 198 8" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                  </svg>
                </span>
                .
              </h1>
              <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-ink/70 md:text-xl">
                Không thêm công cụ. Hãy có một đội ngũ AI biết hỗ trợ đúng việc.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#goi" className="inline-flex min-h-14 items-center justify-center rounded-2xl bg-brand px-8 py-4 shadow-lg shadow-brand/20 text-center text-lg font-extrabold text-primary-foreground transition-transform active:scale-[0.98] sm:active:scale-[0.98] sm:hover:-translate-y-0.5">
                  Sở hữu ĐỘI NGŨ SUB AGENT — 999K
                </a>
                <a href="#doi-ngu" className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl border-2 border-ink/20 bg-surface px-8 py-4 text-lg font-bold transition-colors hover:bg-ink hover:text-primary-foreground">
                  Xem 5 nhóm AI <ArrowDown className="size-5" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3">
                  <span className="grid size-11 place-items-center rounded-full bg-mint font-bold ring-4 ring-cream">T</span>
                  <span className="grid size-11 place-items-center rounded-full bg-accent-warm font-bold ring-4 ring-cream">H</span>
                </div>
                <p className="text-sm font-semibold text-ink/75">Đồng hành cùng <strong className="text-ink">Thủy & Hồng</strong></p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 rotate-3 rounded-2xl bg-accent-warm" />
                <div className="pop-shadow relative overflow-hidden rounded-2xl bg-surface p-4 sm:p-5">
                  <img src={subagentIllustration} alt="Minh họa nữ chủ doanh nghiệp làm việc cùng năm trợ lý AI" className="aspect-[4/5] w-full rounded-xl object-cover" />
                  <div className="absolute inset-x-7 bottom-7 rounded-xl border border-ink/10 bg-surface/95 p-4 shadow-lg backdrop-blur-sm">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-display text-xl font-extrabold">ĐỘI NGŨ SUB AGENT</p>
                      <p className="text-xs font-semibold text-ink/65">5 vai trò • 1 quy trình</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-mint/20 px-3 py-1 text-xs font-bold">Sẵn sàng</span>
                  </div>
                    <div className="mt-3 flex gap-1.5" aria-label="Năm nhóm trợ lý đã sẵn sàng">
                      {agents.map((agent) => <span key={agent.title} className="h-2 flex-1 rounded-full bg-brand" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-16 text-primary-foreground lg:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <p className="text-sm font-extrabold uppercase text-accent-warm">Có phải đây là một ngày quen thuộc?</p>
            <div className="mt-4 grid gap-8 lg:grid-cols-[1fr_.9fr] lg:items-end">
              <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">Một mình bạn đang gánh quá nhiều.</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/80">Nội dung chưa đăng. Tin nhắn chưa trả lời. Kế hoạch vẫn bỏ ngỏ.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["Thiếu thời gian, bí ý tưởng", "Nội dung thiếu đều đặn", "Nhiều công cụ, thiếu quy trình"].map((item, index) => (
                <div key={item} className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
                  <span className="font-display text-4xl font-extrabold text-brand">0{index + 1}</span>
                  <p className="mt-3 text-lg font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="loi-ich" className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full bg-soft-rose px-4 py-2 text-sm font-extrabold text-brand">Không thiếu công cụ. Thiếu hệ thống.</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Một hệ thống <span className="text-brand">biết chia đúng việc.</span></h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/75">Năm nhóm AI. Năm vai trò. Một quy trình thống nhất.</p>
            </div>
            <div className="mt-12 grid items-center gap-5 lg:grid-cols-[1fr_auto_1.2fr]">
              <div className="rounded-2xl border border-ink/10 bg-surface p-7">
                <p className="text-sm font-extrabold uppercase text-ink/45">Cách cũ</p>
                <p className="mt-3 font-display text-2xl font-extrabold">Một người → nhiều việc → quá tải</p>
              </div>
              <ArrowRight className="mx-auto size-8 rotate-90 text-brand lg:rotate-0" />
              <div className="pop-shadow rounded-2xl bg-accent-warm p-7">
                <p className="text-sm font-extrabold uppercase text-ink/70">Cơ chế ĐỘI NGŨ SUB AGENT</p>
                <p className="mt-3 font-display text-2xl font-extrabold">Một người → 5 nhóm AI → đúng quy trình</p>
              </div>
            </div>
          </div>
        </section>

        <section id="doi-ngu" className="bg-soft-rose py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold uppercase text-brand">5 nhóm Sub Agent phối hợp</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Năm vai trò. Một đội ngũ AI.</h2>
              </div>
              <p className="max-w-sm text-ink/75">Đúng người, đúng việc, đúng trình tự.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent, index) => (
                <article key={agent.title} className={`rounded-2xl p-7 ${index === 1 ? "border border-ink bg-ink text-primary-foreground" : "border border-ink/10 bg-surface shadow-sm"}`}>
                  <div className={`grid size-14 place-items-center rounded-2xl ${index === 1 ? "bg-accent-warm text-ink" : agent.tone}`}>
                    <agent.icon className="size-7" />
                  </div>
                  <p className={`mt-5 text-xs font-extrabold uppercase ${index === 1 ? "text-accent-warm" : "text-brand"}`}>Nhóm 0{index + 1}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">{agent.title}</h3>
                  <p className={`mt-2 line-clamp-2 leading-relaxed ${index === 1 ? "text-primary-foreground/80" : "text-ink/75"}`}>{agent.text}</p>
                </article>
              ))}
              <article className="flex flex-col justify-center rounded-2xl bg-brand p-7 text-primary-foreground">
                <Sparkles className="size-9 text-accent-warm" />
                <h3 className="mt-4 font-display text-3xl font-extrabold">Bạn vẫn là người quyết định.</h3>
                <p className="mt-2 text-primary-foreground/80">AI chuẩn bị. Bạn kiểm soát.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase text-brand">Trước và sau ĐỘI NGŨ SUB AGENT</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Từ xoay xở đến có hệ thống.</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-2xl border border-ink/10 bg-surface">
              <div className="grid grid-cols-2 bg-ink px-5 py-4 font-extrabold text-primary-foreground sm:px-8">
                <span>Trước ĐỘI NGŨ SUB AGENT</span><span className="text-accent-warm">Khi có ĐỘI NGŨ SUB AGENT</span>
              </div>
              {transformations.map(([before, after]) => (
                <div key={before} className="grid grid-cols-2 gap-4 border-t border-ink/10 px-5 py-5 text-sm sm:px-8 sm:text-base">
                  <p className="text-ink/70">{before}</p>
                  <p className="font-bold">{after}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-accent-warm py-16 lg:py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
            <div>
              <Youtube className="size-12 text-brand" />
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Một ý tưởng. Cả quy trình nội dung.</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">Không còn những câu hỏi AI rời rạc.</p>
            </div>
            <div className="space-y-3">
              {["Chiến lược", "Nghiên cứu", "Nội dung", "Tối ưu kênh", "Chăm sóc tương tác"].map((step, index) => (
                <div key={step} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-4 rounded-2xl bg-surface px-5 py-4">
                  <span className="grid size-9 place-items-center rounded-full bg-ink text-sm font-extrabold text-primary-foreground">{index + 1}</span>
                  <strong className="min-w-0">{step}</strong>
                  {index < 4 ? <ArrowDown className="size-5 text-brand" /> : <Check className="size-5 text-brand" />}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="goi" className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="relative overflow-hidden rounded-2xl bg-brand p-7 text-primary-foreground md:p-12">
              <div className="relative grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
                <div>
                  <span className="inline-flex rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-extrabold">Ưu đãi mở bán đầu tiên</span>
                  <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Xây ĐỘI NGŨ SUB AGENT của bạn.</h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">5 nhóm AI, hướng dẫn dễ hiểu, đồng hành cùng Thủy & Hồng.</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {["5 nhóm AI rõ vai trò", "Hướng dẫn dễ hiểu", "Quy trình content & kênh", "Thủy & Hồng đồng hành"].map((item) => (
                      <div key={item} className="flex items-center gap-2 min-w-0 text-sm font-semibold"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-warm text-ink"><Check className="size-4" /></span>{item}</div>
                    ))}
                  </div>
                </div>
                <div className="pop-shadow rounded-2xl bg-surface p-7 text-ink md:p-8">
                  <p className="text-sm font-bold text-ink/65">Giá niêm yết</p>
                  <p className="text-xl font-bold text-ink/40 line-through">1.999.000đ</p>
                  <p className="mt-4 text-sm font-extrabold uppercase text-brand">Giá mở bán</p>
                  <p className="font-display text-5xl font-extrabold leading-none sm:text-6xl">999.000đ</p>
                  <p className="mt-2 font-bold text-brand">Tiết kiệm 1.000.000đ (~50%)</p>
                  <a href="#lien-he" className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 shadow-lg shadow-brand/20 text-center text-lg font-extrabold text-primary-foreground transition-transform active:scale-[0.98] sm:hover:-translate-y-0.5">
                    Tôi muốn sở hữu ĐỘI NGŨ SUB AGENT <ArrowRight className="size-5" />
                  </a>
                  <p className="mt-4 text-center text-xs leading-relaxed text-ink/65">999.000đ áp dụng trong đợt mở bán đầu tiên.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-cream py-16 lg:py-24" aria-labelledby="feedback-title">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase text-brand">Hình dung trải nghiệm sử dụng</p>
              <h2 id="feedback-title" className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Tin nhắn sau khi bắt đầu.</h2>
              <p className="mt-4 text-ink/75">Các đoạn dưới đây là tin nhắn minh họa, không phải đánh giá khách hàng thật.</p>
            </div>
            <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-ink/10 bg-surface shadow-sm">
              <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
                <div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full bg-brand font-bold text-primary-foreground">S</span><div><p className="font-bold">Cộng đồng SUB AGENT</p><p className="text-xs text-ink/60">Tin nhắn minh họa</p></div></div>
                <span className="rounded-full bg-mint/25 px-3 py-1 text-xs font-bold">Zalo</span>
              </div>
              <div className="space-y-5 bg-soft-rose/50 p-5 sm:p-8">
                {sampleFeedback.map((item, index) => (
                  <div key={item.name} className={`flex gap-3 ${index === 1 ? "sm:ml-12" : ""}`}>
                    <span className="grid size-10 shrink-0 place-items-center rounded-full bg-accent-warm text-sm font-extrabold">{item.name.slice(-1)}</span>
                    <div className="max-w-2xl min-w-0 rounded-2xl rounded-tl-sm bg-surface p-4 shadow-sm">
                      <div className="flex items-center justify-between gap-4"><strong className="text-sm">{item.name}</strong><span className="text-xs text-ink/50">{item.time}</span></div>
                      <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">{item.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-soft-rose py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-extrabold uppercase text-brand">Câu hỏi thường gặp</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Điều bạn cần biết.</h2>
              <p className="mt-4 text-ink/75">ĐỘI NGŨ SUB AGENT hỗ trợ công việc, không “làm mọi thứ”.</p>
            </div>
            <div className="space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-xl border border-ink/10 bg-surface p-5 shadow-sm">
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-bold">
                    <span className="min-w-0">{question}</span>
                    <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 border-t border-ink/10 pt-4 leading-relaxed text-ink/75">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lien-he" className="scroll-mt-24 bg-ink py-16 text-primary-foreground lg:py-24">
          <div className="mx-auto max-w-5xl px-5 sm:px-6">
            <div className="text-center">
            <div className="mx-auto grid size-16 place-items-center rounded-xl bg-brand"><Sparkles className="size-8" /></div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">Không cần giỏi AI. Cần đúng đội ngũ.</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">Điền thông tin để nhận đúng nội dung chuyển khoản.</p>
            </div>

            <div className="mx-auto mt-10 grid max-w-4xl gap-6 lg:grid-cols-[.9fr_1.1fr]">
              <form onSubmit={handleCheckout} noValidate className="rounded-2xl bg-surface p-6 text-left text-ink shadow-xl sm:p-8">
                <p className="font-display text-2xl font-extrabold">Thông tin của bạn</p>
                <p className="mt-2 text-sm text-ink/65">Dùng để đối chiếu khi xác nhận thanh toán.</p>
                <div className="mt-6 space-y-5">
                  <div className="space-y-2"><Label htmlFor="name">Họ và tên</Label><Input id="name" autoComplete="name" maxLength={100} className="min-h-12 bg-cream" placeholder="Nguyễn Thị Mai" value={form.name} onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "name-error" : undefined} />{errors.name && <p id="name-error" className="text-sm font-semibold text-destructive">{errors.name}</p>}</div>
                  <div className="space-y-2"><Label htmlFor="zalo">Số Zalo</Label><Input id="zalo" type="tel" inputMode="tel" autoComplete="tel" maxLength={12} className="min-h-12 bg-cream" placeholder="0912345678" value={form.zalo} onChange={(event) => setForm((current) => ({ ...current, zalo: event.target.value.replace(/[^0-9+]/g, "") }))} aria-invalid={Boolean(errors.zalo)} aria-describedby={errors.zalo ? "zalo-error" : undefined} />{errors.zalo && <p id="zalo-error" className="text-sm font-semibold text-destructive">{errors.zalo}</p>}</div>
                  <div className="space-y-2"><Label htmlFor="email">Gmail</Label><Input id="email" type="email" inputMode="email" autoComplete="email" maxLength={255} className="min-h-12 bg-cream" placeholder="tenban@gmail.com" value={form.email} onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? "email-error" : undefined} />{errors.email && <p id="email-error" className="text-sm font-semibold text-destructive">{errors.email}</p>}</div>
                </div>
                <Button type="submit" className="mt-7 min-h-14 w-full rounded-xl bg-brand px-6 text-base font-extrabold hover:bg-brand-deep">Tiếp tục đến thanh toán <ArrowRight /></Button>
                <p className="mt-4 text-center text-xs leading-relaxed text-ink/60">Thông tin chỉ dùng để đối chiếu đơn hàng.</p>
              </form>

              <div id="thanh-toan" className="scroll-mt-24">
                {!showPayment ? (
                  <div className="flex h-full min-h-72 flex-col items-center justify-center rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-7 text-center">
                    <div className="grid size-14 place-items-center rounded-xl bg-primary-foreground/10"><LockKeyhole className="size-7" /></div>
                    <p className="mt-5 font-display text-2xl font-extrabold">Thông tin thanh toán</p>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-primary-foreground/70">Hoàn tất biểu mẫu để hiển thị cú pháp chuyển khoản riêng của bạn.</p>
                  </div>
                ) : (
                  <div className="rounded-2xl bg-surface p-6 text-ink shadow-xl sm:p-8" aria-live="polite">
                    <div className="flex items-center justify-between gap-4"><img src={bidvLogo} alt="Ngân hàng BIDV" className="h-12 w-auto max-w-32" /><span className="rounded-full bg-mint/25 px-3 py-1 text-xs font-bold">Chuyển khoản</span></div>
                    <div className="mt-6 space-y-4">
                      <div><p className="text-xs font-bold uppercase text-ink/55">Chủ tài khoản</p><p className="mt-1 font-extrabold">PHẠM THỊ THU THỦY</p></div>
                      <div><p className="text-xs font-bold uppercase text-ink/55">Số tài khoản</p><div className="mt-1 flex items-center justify-between gap-3"><p className="font-display text-2xl font-extrabold">4831027136</p><Button type="button" variant="outline" size="icon" className="size-11 shrink-0" onClick={() => copyPayment("4831027136", "account")} aria-label="Sao chép số tài khoản"><Copy /></Button></div>{copied === "account" && <p className="mt-1 text-xs font-bold text-brand">Đã sao chép</p>}</div>
                      <div><p className="text-xs font-bold uppercase text-ink/55">Số tiền</p><p className="mt-1 font-display text-3xl font-extrabold text-brand">999.000đ</p></div>
                      <div className="rounded-xl border border-brand/20 bg-soft-rose p-4"><p className="text-xs font-bold uppercase text-brand">Nội dung chuyển khoản</p><div className="mt-2 flex items-center justify-between gap-3"><p className="min-w-0 break-all font-extrabold">{paymentContent}</p><Button type="button" variant="outline" size="icon" className="size-11 shrink-0 bg-surface" onClick={() => copyPayment(paymentContent, "content")} aria-label="Sao chép nội dung chuyển khoản"><Copy /></Button></div>{copied === "content" && <p className="mt-1 text-xs font-bold text-brand">Đã sao chép</p>}</div>
                    </div>
                    <div className="mt-6 border-t border-ink/10 pt-6"><p className="font-bold">Sau khi chuyển khoản</p><p className="mt-2 text-sm leading-relaxed text-ink/70">Chụp bill và gửi vào nhóm Zalo để Thủy xác nhận.</p><Button asChild className="mt-4 min-h-14 w-full rounded-xl bg-brand px-5 text-base font-extrabold hover:bg-brand-deep"><a href="https://zalo.me/g/1kudiz2qumbnnhjtcidj" target="_blank" rel="noopener noreferrer">Gửi bill vào nhóm Zalo <ExternalLink /></a></Button></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-lg bg-brand font-display font-extrabold text-primary-foreground">S</span><span className="font-display font-extrabold">ĐỘI NGŨ SUB AGENT</span></div>
          <p className="text-sm text-ink/65">Năm nhóm AI. Một quy trình.</p>
        </div>
      </footer>

      {!checkoutVisible && (
        <a href="#goi" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-[60] flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/15 bg-brand px-5 py-3.5 text-sm font-extrabold text-primary-foreground shadow-xl md:hidden">
          Sở hữu ĐỘI NGŨ SUB AGENT — 999K <ArrowRight className="size-4" />
        </a>
      )}
    </div>
  );
}
