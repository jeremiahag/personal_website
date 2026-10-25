import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowUpRight, MoveUpRight, Sparkles, Layers3, Box, Aperture, Menu } from "lucide-react";
import "./style.css";

const projects = [
  { id: "01", type: "E-COMMERCE / ART DIRECTION", title: "Objects, made desirable.", sub: "电商视觉 · 产品呈现 · 视觉系统", image: "https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1600&q=85", cls: "project-wide", year: "2026" },
  { id: "02", type: "3D / REALTIME ENVIRONMENT", title: "A world built from light.", sub: "3D 场景 · PBR 流程 · Unreal Engine", image: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85", cls: "project-tall", year: "2024" },
  { id: "03", type: "BRAND / EDITORIAL", title: "Clarity in every detail.", sub: "品牌视觉 · 平面设计 · 编辑设计", image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85", cls: "project-tall", year: "2022" },
  { id: "04", type: "AI / MOVING IMAGE", title: "Beyond the expected.", sub: "AI 影像 · 概念探索 · 动态视觉", image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=85", cls: "project-wide", year: "2026" }
];
const strengths = [
  { icon: Sparkles, no: "01", title: "AI-native thinking", text: "把生成式 AI 融入创意流程，用更快的迭代探索视觉可能性，而不是只追逐工具本身。", tags: ["AI Visual", "Image & Video"] },
  { icon: Layers3, no: "02", title: "Visual systems", text: "从单张画面到完整视觉系统，兼顾品牌识别、信息层级、内容一致性与商业目标。", tags: ["Branding", "Graphic Design"] },
  { icon: Box, no: "03", title: "3D & real-time", text: "熟悉 PBR 建模、Blender 与 Unreal Engine，能把空间、材质、灯光转化为可信的视觉表达。", tags: ["3D / PBR", "Unreal Engine"] },
  { icon: Aperture, no: "04", title: "Craft meets context", text: "理解电商转化、教育传播与数字内容的不同语境，让设计不止好看，也能解决实际问题。", tags: ["E-commerce", "Art Direction"] }
];
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return <main>
    <section className="hero" id="top">
      <video className="hero-video" autoPlay muted loop playsInline poster="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=2000&q=85">
        <source src="https://videos.pexels.com/video-files/3130284/3130284-hd_1920_1080_30fps.mp4" type="video/mp4" />
      </video>
      <div className="hero-shade" />
      <header className="nav shell">
        <a href="#top" className="wordmark">NORTH<span>®</span></a>
        <div className={"nav-links " + (menuOpen ? "open" : "")}>
          <a href="#work" onClick={() => setMenuOpen(false)}>SELECTED WORK <i>01</i></a>
          <a href="#about" onClick={() => setMenuOpen(false)}>ABOUT <i>02</i></a>
          <a href="#strengths" onClick={() => setMenuOpen(false)}>CAPABILITIES <i>03</i></a>
        </div>
        <a className="nav-contact" href="#contact">LET'S TALK <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label="打开导航" onClick={() => setMenuOpen(!menuOpen)}><Menu size={21}/></button>
      </header>
      <div className="hero-content shell">
        <div className="eyebrow"><span className="live-dot"/> INDEPENDENT DESIGNER / SHANGHAI · AVAILABLE WORLDWIDE</div>
        <h1>Ideas into<br/><em>impact.</em></h1>
        <div className="hero-bottom">
          <p>视觉设计 × 品牌思维 × AI 创意<br/><span>Designing visuals that make people feel, think, and act.</span></p>
          <a className="round-link" href="#work" aria-label="查看作品"><ArrowDownRight size={23}/></a>
        </div>
      </div>
      <div className="hero-index"><span>SCROLL TO EXPLORE</span><span>31°11' N / 121°26' E</span><span>© 2026 NORTH</span></div>
    </section>
    <section className="intro section-pad shell" id="about">
      <div className="section-label"><span>01 / THE PERSON</span><span>PROFILE & APPROACH</span></div>
      <div className="intro-grid">
        <div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85" alt="人物肖像占位图"/><span className="portrait-note">A LITTLE HUMAN<br/>BEHIND THE PIXELS ↗</span><div className="portrait-mark">N.</div></div>
        <div className="intro-copy">
          <p className="kicker">HELLO, I'M NORTH.</p>
          <h2>不止于制作画面。<br/><span>我设计视觉如何发挥作用。</span></h2>
          <p className="body-copy">我是一名横跨品牌平面、电商视觉、3D 场景与 AI 内容创作的视觉设计师。过去的工作让我既理解视觉表达，也理解内容如何服务于真实的业务场景。</p>
          <p className="body-copy muted">我相信好的设计不是堆砌效果，而是用准确的判断、清晰的系统和恰到好处的细节，把复杂的想法变得可感知。</p>
          <div className="timeline">
            <div><span>2025 — NOW</span><strong>E-commerce Visual Design</strong><small>跨境电商视觉 / 全球商品内容</small></div>
            <div><span>2023 — 2025</span><strong>Embodied AI · Visual Assets</strong><small>机器人虚拟环境 / 3D 资产制作</small></div>
            <div><span>2021 — 2023</span><strong>3D Artist · Game Studio</strong><small>摩托车场景 / 模型与材质</small></div>
            <div><span>2017 — 2021</span><strong>Graphic Design · Education</strong><small>教育品牌 / 出版物 / 数字与线下传播</small></div>
          </div>
          <div className="stats"><div><strong>09<span>+</span></strong><small>YEARS IN VISUALS*</small></div><div><strong>04</strong><small>CREATIVE DISCIPLINES</small></div><div><strong>∞</strong><small>WAYS TO EXPLORE</small></div></div>
          <p className="fineprint">*按相关设计工作经历累计估算；可根据真实履历调整。</p>
        </div>
      </div>
    </section>
    <section className="work-section section-pad" id="work"><div className="shell">
      <div className="section-label"><span>02 / SELECTED WORK</span><span>THOUGHTFUL BY DESIGN</span></div>
      <div className="work-heading"><h2>Selected<br/><em>experiments.</em></h2><p>不同媒介，同一种追求：<br/>让视觉更清晰、更有记忆点、更有价值。</p></div>
      <div className="project-grid">{projects.map(p => <article className={"project " + p.cls} key={p.id}><a href="#contact" className="project-image"><img src={p.image} alt={p.title}/><div className="image-overlay"/><span className="project-number">/{p.id}</span><span className="project-open"><MoveUpRight size={21}/></span><span className="project-year">{p.year}</span></a><div className="project-meta"><div><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.sub}</p></div><span className="meta-arrow"><ArrowUpRight size={19}/></span></div></article>)}</div>
      <div className="work-note"><span>NOTE FROM THE STUDIO</span><p>以上为视觉方向示意与版式占位。下一步可替换为你的真实项目、过程图与项目结果，建立可信的个人作品叙事。</p></div>
    </div></section>
    <section className="strength-section section-pad shell" id="strengths">
      <div className="section-label"><span>03 / WHAT I BRING</span><span>CAPABILITIES, NOT JUST TOOLS</span></div>
      <div className="strength-head"><h2>Good taste.<br/><em>Useful thinking.</em></h2><p>把审美、技术和业务目标放在同一张桌子上。</p></div>
      <div className="strength-grid">{strengths.map(s => <article className="strength-card" key={s.no}><div className="card-top"><span>{s.no} / 04</span><s.icon size={24} strokeWidth={1.4}/></div><h3>{s.title}</h3><p>{s.text}</p><div className="tags">{s.tags.map(t => <span key={t}>{t}</span>)}</div></article>)}</div>
      <div className="tools-row"><span>TOOLS I SPEAK</span><p>BLENDER <b>·</b> UNREAL ENGINE <b>·</b> PHOTOSHOP <b>·</b> ILLUSTRATOR <b>·</b> PREMIERE PRO <b>·</b> AI WORKFLOWS</p></div>
    </section>
    <section className="contact-section" id="contact"><div className="contact-glow"/><div className="shell contact-inner">
      <div className="section-label"><span>04 / YOUR NEXT MOVE</span><span>OPEN FOR COLLABORATION</span></div><p className="kicker">HAVE A GOOD ONE IN MIND?</p><h2>Let's make<br/><em>it matter.</em></h2>
      <div className="contact-bottom"><p>如果你正在寻找一个能理解视觉，也愿意一起思考问题的人，<br/>欢迎聊聊你的项目。</p><a className="contact-cta" href="mailto:hello@north.design">START A CONVERSATION <ArrowUpRight size={18}/></a></div>
      <div className="contact-details"><a href="mailto:hello@north.design">HELLO@NORTH.DESIGN</a><span>SHANGHAI, CHINA · WORKING WORLDWIDE</span><a href="#top">BACK TO TOP ↑</a></div>
      <footer><span>NORTH® — VISUAL DESIGN / AI CREATIVE</span><span>BUILT WITH CURIOSITY © 2026</span></footer>
    </div></section>
  </main>;
}
createRoot(document.getElementById("root")).render(<App />);
