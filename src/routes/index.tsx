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
      { title: "ROSY AI — Đội ngũ AI cho người kinh doanh nhỏ" },
      {
        name: "description",
        content:
          "ROSY AI gồm 5 nhóm trợ lý AI hỗ trợ chiến lược, nghiên cứu, nội dung, tối ưu kênh và chăm sóc tương tác.",
      },
      { property: "og:title", content: "ROSY AI — Đừng thuê thêm người. Hãy xây một đội ngũ AI." },
      {
        property: "og:description",
        content: "Biến công việc xây kênh và marketing thành một quy trình có đội ngũ AI hỗ trợ từng bước.",
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
    text: "Biến mục tiêu thành các ưu tiên và việc cần làm rõ ràng.",
    tone: "bg-soft-rose text-brand",
  },
  {
    icon: Search,
    title: "Nghiên cứu",
    text: "Tìm insight khách hàng, chủ đề, đối thủ và xu hướng nội dung.",
    tone: "bg-mint/20 text-ink",
  },
  {
    icon: Lightbulb,
    title: "Nội dung",
    text: "Phát triển ý tưởng, bài viết, kịch bản video, caption và CTA.",
    tone: "bg-accent-warm/30 text-ink",
  },
  {
    icon: BarChart3,
    title: "Tối ưu kênh",
    text: "Hỗ trợ hook, tiêu đề, từ khóa và lịch đăng Facebook, YouTube.",
    tone: "bg-soft-rose text-brand",
  },
  {
    icon: MessageCircleHeart,
    title: "Chăm sóc tương tác",
    text: "Gợi ý phản hồi bình luận, tin nhắn và nuôi dưỡng khách hàng.",
    tone: "bg-mint/20 text-ink",
  },
];

const transformations = [
  ["Một người phải tự làm tất cả", "Có hệ thống AI hỗ trợ từng nhóm việc"],
  ["Không biết hôm nay đăng gì", "Có chủ đề và kế hoạch rõ ràng"],
  ["Bí ý tưởng, nội dung ngắt quãng", "Có AI nghiên cứu và phát triển nội dung"],
  ["Xây Facebook, YouTube rời rạc", "Có quy trình tối ưu kênh"],
  ["Dễ bỏ sót bình luận, khách tiềm năng", "Có gợi ý chăm sóc tương tác"],
];

const faqs = [
  [
    "Tôi không rành công nghệ có dùng được không?",
    "Có. ROSY AI được thiết kế cho người không chuyên công nghệ và có Thủy & Hồng đồng hành hướng dẫn theo cách dễ hiểu.",
  ],
  [
    "ROSY AI có phải là một chatbot không?",
    "Không. Đây là hệ thống gồm 5 nhóm Sub Agent có vai trò khác nhau, phối hợp theo một quy trình công việc thống nhất.",
  ],
  [
    "ROSY AI có tự đăng bài không?",
    "Hiện ROSY AI được giới thiệu ở vai trò hỗ trợ nghiên cứu, xây nội dung và tối ưu. Khả năng tự động đăng bài chưa nằm trong cam kết của chương trình.",
  ],
  [
    "ROSY AI có tự tìm khách và bán hàng thay tôi không?",
    "Không. Hệ thống hỗ trợ bạn làm việc có quy trình hơn; không cam kết doanh số và không thay thế quyết định của người dùng.",
  ],
];

function Index() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream font-body text-ink antialiased">
      <header className="border-b-2 border-ink/10 bg-cream/95">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between sm:px-6">
          <a href="#top" className="flex min-w-0 items-center gap-2" aria-label="ROSY AI - về đầu trang">
            <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-brand font-display text-xl font-extrabold text-primary-foreground">R</span>
            <span className="truncate font-display text-xl font-extrabold">ROSY AI</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-bold md:flex" aria-label="Điều hướng chính">
            <a href="#loi-ich" className="transition-colors hover:text-brand">Lợi ích</a>
            <a href="#doi-ngu" className="transition-colors hover:text-brand">5 nhóm AI</a>
            <a href="#goi" className="transition-colors hover:text-brand">Gói & giá</a>
            <a href="#faq" className="transition-colors hover:text-brand">Hỏi đáp</a>
          </nav>
          <a href="#goi" className="pop-shadow-small shrink-0 rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-0.5">
            Xem ưu đãi
          </a>
        </div>
      </header>

      <main id="top">
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:px-6 lg:pb-24 lg:pt-16">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent-warm px-4 py-2 text-sm font-bold">
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
              <p className="mt-7 max-w-2xl text-lg font-medium leading-relaxed text-ink/70 md:text-xl">
                Bạn không cần thêm một công cụ AI. Bạn cần một đội ngũ AI biết mình phải làm gì — từ chiến lược, nghiên cứu, nội dung đến tối ưu kênh và chăm sóc tương tác.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a href="#goi" className="pop-shadow-brand rounded-full bg-brand px-8 py-4 text-center text-lg font-extrabold text-primary-foreground transition-transform hover:-translate-y-1">
                  Sở hữu ROSY AI — 499K
                </a>
                <a href="#doi-ngu" className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink px-8 py-4 text-lg font-bold transition-colors hover:bg-ink hover:text-primary-foreground">
                  Xem 5 nhóm AI <ArrowDown className="size-5" />
                </a>
              </div>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-3">
                  <span className="grid size-11 place-items-center rounded-full bg-mint font-bold ring-4 ring-cream">T</span>
                  <span className="grid size-11 place-items-center rounded-full bg-accent-warm font-bold ring-4 ring-cream">H</span>
                </div>
                <p className="text-sm font-semibold text-ink/65">Đồng hành cùng <strong className="text-ink">Thủy & Hồng</strong></p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md">
                <div className="absolute -inset-3 rotate-3 rounded-[2.5rem] bg-accent-warm" />
                <div className="pop-shadow relative rounded-[2.5rem] bg-surface p-5 sm:p-6">
                  <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-display text-xl font-extrabold">Đội ngũ ROSY</p>
                      <p className="text-xs font-semibold text-ink/50">5 vai trò • 1 quy trình</p>
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
                          <p className="truncate text-xs text-ink/55">{index === 0 ? "Xác định hướng đi" : index === 1 ? "Tìm đúng insight" : index === 2 ? "Tạo nội dung đều" : index === 3 ? "Xây kênh bài bản" : "Gợi ý phản hồi"}</p>
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
              <h2 className="font-display text-4xl font-extrabold leading-tight md:text-5xl">Bạn biết mình cần làm content, xây kênh và chăm khách… nhưng một mình phải làm quá nhiều.</h2>
              <p className="text-lg leading-relaxed text-primary-foreground/70">Mỗi ngày bắt đầu bằng câu hỏi “Hôm nay đăng gì?”, rồi kết thúc khi vẫn còn tin nhắn chưa trả lời, kênh chưa tối ưu và kế hoạch ngày mai chưa có.</p>
            </div>
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {["Thiếu thời gian, thiếu ý tưởng", "Nội dung đăng không đều", "Quá nhiều công cụ, không có quy trình"].map((item, index) => (
                <div key={item} className="rounded-3xl border-2 border-primary-foreground/10 bg-primary-foreground/5 p-6">
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
              <span className="inline-flex rounded-full bg-soft-rose px-4 py-2 text-sm font-extrabold text-brand">Vấn đề không phải là thiếu công cụ</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Điều bạn thiếu là một <span className="text-brand">hệ thống biết chia việc.</span></h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/65">ROSY AI không cố làm mọi thứ bằng một chatbot. Mỗi nhóm AI được chia vai để hỗ trợ đúng việc, theo đúng trình tự.</p>
            </div>
            <div className="mt-12 grid items-center gap-5 lg:grid-cols-[1fr_auto_1.2fr]">
              <div className="rounded-3xl border-2 border-ink/10 bg-surface p-7">
                <p className="text-sm font-extrabold uppercase text-ink/45">Cách cũ</p>
                <p className="mt-3 font-display text-2xl font-extrabold">Một người → nhiều việc → nhiều công cụ → quá tải</p>
              </div>
              <ArrowRight className="mx-auto size-8 rotate-90 text-brand lg:rotate-0" />
              <div className="pop-shadow rounded-3xl bg-accent-warm p-7">
                <p className="text-sm font-extrabold uppercase text-ink/55">Cơ chế ROSY AI</p>
                <p className="mt-3 font-display text-2xl font-extrabold">Một người → ROSY AI điều phối → 5 nhóm hỗ trợ → quy trình rõ ràng</p>
              </div>
            </div>
          </div>
        </section>

        <section id="doi-ngu" className="bg-soft-rose py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div className="max-w-3xl">
                <p className="text-sm font-extrabold uppercase text-brand">5 nhóm Sub Agent phối hợp</p>
                <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Một đội ngũ. Năm vai trò. Một mục tiêu chung.</h2>
              </div>
              <p className="max-w-sm text-ink/65">Giúp bạn làm việc có định hướng hơn, đều hơn và bớt thủ công hơn.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {agents.map((agent, index) => (
                <article key={agent.title} className={`rounded-3xl p-7 ${index === 1 ? "pop-shadow bg-ink text-primary-foreground" : "pop-shadow bg-surface"}`}>
                  <div className={`grid size-14 place-items-center rounded-2xl ${index === 1 ? "bg-accent-warm text-ink" : agent.tone}`}>
                    <agent.icon className="size-7" />
                  </div>
                  <p className={`mt-5 text-xs font-extrabold uppercase ${index === 1 ? "text-accent-warm" : "text-brand"}`}>Nhóm 0{index + 1}</p>
                  <h3 className="mt-1 font-display text-2xl font-extrabold">{agent.title}</h3>
                  <p className={`mt-2 leading-relaxed ${index === 1 ? "text-primary-foreground/70" : "text-ink/65"}`}>{agent.text}</p>
                </article>
              ))}
              <article className="pop-shadow-brand flex flex-col justify-center rounded-3xl bg-brand p-7 text-primary-foreground">
                <Sparkles className="size-9 text-accent-warm" />
                <h3 className="mt-4 font-display text-3xl font-extrabold">Bạn vẫn là người quyết định.</h3>
                <p className="mt-2 text-primary-foreground/80">AI hỗ trợ chuẩn bị và gợi ý. Bạn giữ quyền kiểm soát định hướng cuối cùng.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-6xl px-5 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-extrabold uppercase text-brand">Từ xoay xở sang có hệ thống</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold md:text-5xl">Bạn không cần làm ít đi vì bỏ việc. Bạn làm nhẹ hơn vì có hỗ trợ.</h2>
            </div>
            <div className="mt-10 overflow-hidden rounded-3xl border-2 border-ink/10 bg-surface">
              <div className="grid grid-cols-2 bg-ink px-5 py-4 font-extrabold text-primary-foreground sm:px-8">
                <span>Trước ROSY AI</span><span className="text-accent-warm">Khi có ROSY AI</span>
              </div>
              {transformations.map(([before, after]) => (
                <div key={before} className="grid grid-cols-2 gap-4 border-t-2 border-ink/10 px-5 py-5 text-sm sm:px-8 sm:text-base">
                  <p className="text-ink/55">{before}</p>
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
              <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Từ một ý tưởng đến cả quy trình nội dung.</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink/70">Thay vì hỏi AI từng câu rời rạc, ROSY AI giúp công việc chạy theo một chuỗi có logic.</p>
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
            <div className="relative overflow-hidden rounded-[2.5rem] bg-brand p-7 text-primary-foreground md:p-12">
              <div className="relative grid gap-10 lg:grid-cols-[1fr_.9fr] lg:items-center">
                <div>
                  <span className="inline-flex rounded-full bg-primary-foreground/15 px-4 py-2 text-sm font-extrabold">Ưu đãi mở bán đầu tiên</span>
                  <h2 className="mt-5 font-display text-4xl font-extrabold leading-tight md:text-5xl">Sở hữu đội ngũ ROSY AI của riêng bạn.</h2>
                  <p className="mt-4 max-w-xl text-lg leading-relaxed text-primary-foreground/80">Hệ thống 5 nhóm Sub Agent, hướng dẫn sử dụng và sự đồng hành của Thủy & Hồng — dành cho cả người chưa rành công nghệ.</p>
                  <div className="mt-7 grid gap-3 sm:grid-cols-2">
                    {["5 nhóm Sub Agent rõ vai trò", "Hướng dẫn sử dụng dễ hiểu", "Quy trình content & xây kênh", "Đồng hành cùng Thủy & Hồng"].map((item) => (
                      <div key={item} className="flex items-center gap-2 font-semibold"><span className="grid size-6 shrink-0 place-items-center rounded-full bg-accent-warm text-ink"><Check className="size-4" /></span>{item}</div>
                    ))}
                  </div>
                </div>
                <div className="pop-shadow rounded-3xl bg-surface p-7 text-ink md:p-8">
                  <p className="text-sm font-bold text-ink/50">Giá niêm yết</p>
                  <p className="text-xl font-bold text-ink/40 line-through">1.999.000đ</p>
                  <p className="mt-4 text-sm font-extrabold uppercase text-brand">Giá mở bán</p>
                  <p className="font-display text-5xl font-extrabold leading-none sm:text-6xl">499.000đ</p>
                  <p className="mt-2 font-bold text-brand">Tiết kiệm 1.500.000đ (~75%)</p>
                  <a href="#lien-he" className="pop-shadow-small mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-center text-lg font-extrabold text-primary-foreground transition-transform hover:-translate-y-0.5">
                    Tôi muốn sở hữu ROSY AI <ArrowRight className="size-5" />
                  </a>
                  <p className="mt-4 text-center text-xs leading-relaxed text-ink/50">Mức 499.000đ áp dụng trong đợt mở bán đầu tiên. Không sử dụng đồng hồ đếm ngược giả.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-soft-rose py-16 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-6 lg:grid-cols-[.75fr_1.25fr]">
            <div>
              <p className="text-sm font-extrabold uppercase text-brand">Câu hỏi thường gặp</p>
              <h2 className="mt-3 font-display text-4xl font-extrabold leading-tight md:text-5xl">Bạn đang băn khoăn điều gì?</h2>
              <p className="mt-4 text-ink/65">ROSY AI là hệ thống hỗ trợ công việc, không phải lời hứa “AI làm mọi thứ”.</p>
            </div>
            <div className="space-y-4">
              {faqs.map(([question, answer]) => (
                <details key={question} className="group rounded-2xl border-2 border-ink/10 bg-surface p-5">
                  <summary className="grid cursor-pointer list-none grid-cols-[minmax(0,1fr)_auto] items-center gap-4 font-bold">
                    <span className="min-w-0">{question}</span>
                    <ChevronDown className="size-5 shrink-0 transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-4 border-t-2 border-ink/10 pt-4 leading-relaxed text-ink/65">{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="lien-he" className="bg-ink py-16 text-center text-primary-foreground lg:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            <div className="mx-auto grid size-16 place-items-center rounded-2xl bg-brand"><Sparkles className="size-8" /></div>
            <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight md:text-6xl">Bạn không cần trở thành chuyên gia AI.</h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">Bạn chỉ cần một đội ngũ AI biết hỗ trợ đúng việc — và Thủy & Hồng đồng hành để bắt đầu dễ dàng hơn.</p>
            <div className="mx-auto mt-8 max-w-xl rounded-3xl border-2 border-primary-foreground/10 bg-primary-foreground/5 p-6">
              <p className="font-display text-2xl font-extrabold">Sẵn sàng sở hữu ROSY AI?</p>
              <p className="mt-2 text-sm text-primary-foreground/65">Kênh đăng ký và thanh toán đang được cập nhật. Hãy liên hệ trực tiếp Thủy & Hồng để được tư vấn.</p>
              <span className="mt-5 inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-primary-foreground/15 px-7 py-3.5 font-bold text-primary-foreground/60" aria-disabled="true">
                Link đăng ký đang cập nhật
              </span>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-ink/10 bg-cream">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-center sm:flex-row sm:px-6 sm:text-left">
          <div className="flex items-center gap-2"><span className="grid size-9 place-items-center rounded-xl bg-brand font-display font-extrabold text-primary-foreground">R</span><span className="font-display font-extrabold">ROSY AI</span></div>
          <p className="text-sm text-ink/50">Đội ngũ AI đồng hành cùng người kinh doanh nhỏ.</p>
        </div>
      </footer>

      <a href="#goi" className="fixed bottom-4 left-4 right-4 z-40 flex items-center justify-center gap-2 rounded-full bg-brand px-5 py-3.5 text-sm font-extrabold text-primary-foreground shadow-xl md:hidden">
        Sở hữu ROSY AI — 499K <ArrowRight className="size-4" />
      </a>
    </div>
  );
}
