import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  Lightbulb,
  MessageCircleHeart,
  Search,
  Sparkles,
  Target,
  Youtube,
} from "lucide-react";

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

function Index() {
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
                <span className="size-2 rounded-full bg-brand" /> Giá mở bán chỉ 499.000đ
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
                  Sở hữu ĐỘI NGŨ SUB AGENT — 499K
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
                <div className="pop-shadow relative rounded-2xl bg-surface p-5 sm:p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-display text-xl font-extrabold">Đội ngũ ROSY</p>
                      <p className="text-xs font-semibold text-ink/65">5 vai trò • 1 quy trình</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-mint/20 px-3 py-1 text-xs font-bold">Sẵn sàng</span>
                  </div>
                  <div className="mt-5 space-y-3">
                    {agents.map((agent, index) => (
                      <div key={agent.title} className="grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl bg-cream p-3">
                        <span className={`grid size-10 shrink-0 place-items-center rounded-xl ${agent.tone}`}>
                          <agent.icon className="size-5" />
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-sm font-extrabold">{agent.title}</p>
                          <p className="truncate text-xs text-ink/70">{index === 0 ? "Xác định hướng đi" : index === 1 ? "Tìm đúng insight" : index === 2 ? "Tạo nội dung đều" : index === 3 ? "Xây kênh bài bản" : "Gợi ý phản hồi"}</p>
                        </div>
                        <Check className="size-5 shrink-0 text-brand" />
                      </div>
                    ))}
                  </div>
                  <div className="rosy-bob absolute -right-5 -top-6 grid size-16 place-items-center rounded-2xl bg-brand text-primary-foreground shadow-lg sm:-right-8">
                    <Sparkles className="size-8" />
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
                  <p className="font-display text-5xl font-extrabold leading-none sm:text-6xl">499.000đ</p>
                  <p className="mt-2 font-bold text-brand">Tiết kiệm 1.500.000đ (~75%)</p>
                  <a href="#lien-he" className="mt-7 flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl bg-brand px-6 py-4 shadow-lg shadow-brand/20 text-center text-lg font-extrabold text-primary-foreground transition-transform active:scale-[0.98] sm:hover:-translate-y-0.5">
                    Tôi muốn sở hữu ĐỘI NGŨ SUB AGENT <ArrowRight className="size-5" />
                  </a>
                  <p className="mt-4 text-center text-xs leading-relaxed text-ink/65">499.000đ áp dụng trong đợt mở bán đầu tiên.</p>
                </div>
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

        <section id="lien-he" className="bg-ink py-16 text-center text-primary-foreground lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <div className="mx-auto grid size-16 place-items-center rounded-xl bg-brand"><Sparkles className="size-8" /></div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">Không cần giỏi AI. Cần đúng đội ngũ.</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/80">Năm nhóm AI hỗ trợ đúng việc. Thủy & Hồng giúp bạn bắt đầu.</p>
            <div className="mx-auto mt-8 max-w-xl rounded-2xl border border-primary-foreground/15 bg-primary-foreground/5 p-6">
              <p className="font-display text-2xl font-extrabold">Sẵn sàng sở hữu ĐỘI NGŨ SUB AGENT?</p>
              <p className="mt-2 text-sm text-primary-foreground/75">Kênh thanh toán đang cập nhật. Hãy liên hệ Thủy & Hồng.</p>
              <span className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary-foreground/15 px-7 py-3.5 font-bold text-primary-foreground/60" aria-disabled="true">
                Link đăng ký đang cập nhật
              </span>
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

      <a href="#goi" className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] left-4 right-4 z-[60] flex min-h-14 items-center justify-center gap-2 rounded-2xl border border-primary-foreground/15 bg-brand px-5 py-3.5 text-sm font-extrabold text-primary-foreground shadow-xl md:hidden">
        Sở hữu ĐỘI NGŨ SUB AGENT — 499K <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
