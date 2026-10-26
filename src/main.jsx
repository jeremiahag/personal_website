import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowDownRight, ArrowRight, ArrowUpRight, MoveUpRight, Sparkles, Layers3, Box, Aperture, Menu, X } from "lucide-react";
import "./style.css";

const projects = [
  { id:"01", category:"ecommerce", categoryLabel:"E-COMMERCE VISUAL", title:"Objects, made desirable.", subtitle:"产品视觉 / 电商创意 / Art Direction", image:"https://images.unsplash.com/photo-1490312278390-ab64016e0aa9?auto=format&fit=crop&w=1600&q=85", year:"2026", size:"wide" },
  { id:"02", category:"3d", categoryLabel:"3D / REALTIME", title:"A world built from light.", subtitle:"3D 场景 / PBR 材质 / Unreal Engine", image:"https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1200&q=85", year:"2024", size:"tall" },
  { id:"03", category:"brand", categoryLabel:"BRAND / EDITORIAL", title:"Clarity in every detail.", subtitle:"品牌视觉 / 平面设计 / 编辑设计", image:"https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=85", year:"2022", size:"tall" },
  { id:"04", category:"ai", categoryLabel:"AI / MOVING IMAGE", title:"Beyond the expected.", subtitle:"AI 影像 / 概念探索 / 动态视觉", image:"https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1600&q=85", year:"2026", size:"wide" },
  { id:"05", category:"ecommerce", categoryLabel:"PRODUCT STORYTELLING", title:"A closer look at the details.", subtitle:"商品详情页 / 卖点可视化 / 内容体系", image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=85", year:"2025", size:"normal" },
  { id:"06", category:"brand", categoryLabel:"GRAPHIC / CAMPAIGN", title:"A system with a point of view.", subtitle:"传播物料 / 版式系统 / 品牌延展", image:"https://images.unsplash.com/photo-1504274066651-8d31a536b11a?auto=format&fit=crop&w=1200&q=85", year:"2021", size:"normal" }
];
const categories = [
  { id:"all", label:"全部作品", count:"06" },
  { id:"ecommerce", label:"电商视觉", count:"02" },
  { id:"3d", label:"3D / 实时场景", count:"01" },
  { id:"brand", label:"品牌与平面", count:"02" },
  { id:"ai", label:"AI 创意", count:"01" }
];
const capabilities = [
  { icon:Sparkles, number:"01", title:"AI-native creative", text:"把生成式 AI 融入创意流程，用更快的迭代探索视觉可能性，让想法更快成为可以被体验的内容。", tags:["AI Visual","Image & Video"] },
  { icon:Layers3, number:"02", title:"Visual systems", text:"从单张画面到完整视觉系统，兼顾品牌识别、信息层级、内容一致性与商业目标。", tags:["Branding","Graphic Design"] },
  { icon:Box, number:"03", title:"3D & real-time", text:"熟悉 PBR 建模、Blender 与 Unreal Engine，能够把空间、材质和灯光转化为可信的视觉表达。", tags:["3D / PBR","Unreal Engine"] },
  { icon:Aperture, number:"04", title:"Craft meets context", text:"理解电商转化、教育传播与数字内容的不同语境，让设计不止好看，也能解决真实问题。", tags:["E-commerce","Art Direction"] }
];
const timelines = [
  ["2025 — NOW","E-commerce Visual Design","跨境电商视觉 / 全球商品内容"],
  ["2023 — 2025","Embodied AI · Visual Assets","机器人虚拟环境 / 3D 资产制作"],
  ["2021 — 2023","3D Artist · Game Studio","摩托车场景 / 模型与材质"],
  ["2017 — 2021","Graphic Design · Education","教育品牌 / 出版物 / 数字与线下传播"]
];
function App() {
  const [menuOpen,setMenuOpen] = React.useState(false);
  const [activeCategory,setActiveCategory] = React.useState("all");
  const [scrolled,setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll",onScroll,{passive:true});
    return () => window.removeEventListener("scroll",onScroll);
  },[]);
  const visibleProjects = activeCategory === "all" ? projects : projects.filter(p => p.category === activeCategory);
  const closeMenu = () => setMenuOpen(false);
  return <main>
    <header className={"site-header " + (scrolled ? "is-scrolled" : "")}>
      <div className="header-inner">
        <a href="#top" className="wordmark" onClick={closeMenu}>NORTH<span>®</span></a>
        <nav className={"nav-links " + (menuOpen ? "open" : "")}>
          <a href="#work" onClick={closeMenu}>作品集 <i>01</i></a>
          <a href="#about" onClick={closeMenu}>关于我 <i>02</i></a>
          <a href="#capabilities" onClick={closeMenu}>能力 <i>03</i></a>
        </nav>
        <a className="nav-contact" href="#contact">联系我 <ArrowUpRight size={15}/></a>
        <button className="menu-toggle" aria-label={menuOpen ? "关闭导航" : "打开导航"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={21}/> : <Menu size={21}/>}</button>
      </div>
    </header>
    <section className="hero" id="top">
      <img className="hero-image" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2200&q=90" alt="山脉与旷野的电影感风景"/>
      <div className="hero-shade"/>
      <div className="hero-content page-wrap">
        <p className="eyebrow"><span className="live-dot"/> INDEPENDENT DESIGNER / SHANGHAI · AVAILABLE WORLDWIDE</p>
        <h1>Ideas into<br/><em>impact.</em></h1>
        <p className="hero-description">视觉设计 × 品牌思维 × AI 创意<br/><span>Designing visuals that make people feel, think, and act.</span></p>
        <a className="hero-scroll" href="#work"><span>向下探索作品</span><ArrowDownRight size={19}/></a>
      </div>
      <div className="hero-bottom-line page-wrap"><span>VISUAL DESIGN / AI CREATIVE</span><span>SHANGHAI, CHINA</span><span>© 2026 NORTH</span></div>
      <div className="hero-title-note">CREATIVE PORTFOLIO<br/>SELECTED WORKS — 2021 / 2026</div>
    </section>
    <section className="work-section page-wrap" id="work">
      <div className="section-topline"><span>01 / SELECTED WORK</span><span>THOUGHTFUL BY DESIGN</span></div>
      <div className="section-heading-row"><div><p className="overline">A SELECTION OF RECENT PROJECTS</p><h2>Selected <em>works.</em></h2></div><p className="section-intro">不同媒介，同一种追求。<br/>让视觉更清晰、更有记忆点，也更有价值。</p></div>
      <div className="category-tabs" role="tablist" aria-label="作品分类">{categories.map(c=><button key={c.id} className={activeCategory===c.id?"active":""} onClick={()=>setActiveCategory(c.id)} role="tab" aria-selected={activeCategory===c.id}>{c.label}<span>{c.count}</span></button>)}</div>
      <div className="project-grid">{visibleProjects.map(p=><article className={"project-card " + p.size} key={p.id}><a className="project-image" href="#contact" aria-label={"咨询项目："+p.title}><img src={p.image} alt={p.title}/><span className="image-index">/{p.id}</span><span className="image-year">{p.year}</span><span className="project-open"><MoveUpRight size={20}/></span></a><div className="project-info"><div><span className="project-type">{p.categoryLabel}</span><h3>{p.title}</h3><p>{p.subtitle}</p></div><ArrowUpRight className="project-arrow" size={19}/></div></article>)}</div>
      <div className="work-footnote"><span>NOTE FROM THE STUDIO</span><p>目前展示的是网站结构与视觉方向示意。下一步将替换成真实项目图，并为每个案例补充背景、设计过程与交付成果。</p></div>
    </section>
    <section className="category-feature ecommerce-feature" id="ecommerce">
      <div className="category-feature-image"><img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=90" alt="产品视觉方向示意"/></div>
      <div className="category-feature-shade"/>
      <div className="category-feature-content page-wrap"><span className="feature-index">02 / E-COMMERCE VISUAL</span><div><p className="overline">PRODUCT · STORY · CONVERSION</p><h2>让产品，<br/><em>更值得被看见。</em></h2><p className="feature-copy">以产品本身为核心，结合光影、构图和信息层级，建立清晰、有质感、适用于全球电商平台的商品视觉表达。</p><a className="text-link" href="#contact">探索电商视觉项目 <ArrowRight size={17}/></a></div></div>
    </section>
    <section className="category-feature three-d-feature" id="three-d">
      <div className="category-feature-image"><img src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1800&q=90" alt="3D 场景与实时渲染方向示意"/></div>
      <div className="category-feature-shade"/>
      <div className="category-feature-content page-wrap"><span className="feature-index">03 / 3D & REALTIME</span><div><p className="overline">FORM · MATERIAL · LIGHT</p><h2>从模型出发，<br/><em>构建一个世界。</em></h2><p className="feature-copy">基于 Blender、PBR 工作流与 Unreal Engine 的场景制作经验，关注真实材质、环境叙事与实时视觉表现。</p><a className="text-link" href="#contact">探索 3D 项目 <ArrowRight size={17}/></a></div></div>
    </section>
    <section className="category-feature brand-feature" id="brand">
      <div className="category-feature-image"><img src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1800&q=90" alt="品牌与编辑设计方向示意"/></div>
      <div className="category-feature-shade"/>
      <div className="category-feature-content page-wrap"><span className="feature-index">04 / BRAND & GRAPHIC</span><div><p className="overline">IDENTITY · EDITORIAL · CAMPAIGN</p><h2>建立视觉秩序，<br/><em>让品牌被记住。</em></h2><p className="feature-copy">从品牌传播、出版物到线上线下物料，以清晰的信息结构和统一的视觉语言，形成有识别度的沟通体验。</p><a className="text-link" href="#contact">探索品牌与平面项目 <ArrowRight size={17}/></a></div></div>
    </section>
    <section className="about-section page-wrap" id="about">
      <div className="section-topline"><span>05 / THE PERSON</span><span>PROFILE & APPROACH</span></div>
      <div className="about-grid">
        <div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85" alt="人物肖像占位图"/><span className="portrait-note">A LITTLE HUMAN<br/>BEHIND THE PIXELS ↗</span><span className="portrait-mark">N.</span></div>
        <div className="about-copy"><p className="overline">HELLO, I'M NORTH.</p><h2>不止于制作画面。<br/><span>我设计视觉如何发挥作用。</span></h2><p className="body-copy">我是一名横跨品牌平面、电商视觉、3D 场景与 AI 内容创作的视觉设计师。过去的工作让我既理解视觉表达，也理解内容如何服务于真实的业务场景。</p><p className="body-copy muted">我相信好的设计不是堆砌效果，而是用准确的判断、清晰的系统和恰到好处的细节，把复杂的想法变得可感知。</p>
          <div className="timeline">{timelines.map(t=><div key={t[0]}><span>{t[0]}</span><strong>{t[1]}</strong><small>{t[2]}</small></div>)}</div>
          <div className="stats"><div><strong>09<span>+</span></strong><small>YEARS IN VISUALS*</small></div><div><strong>04</strong><small>CREATIVE DISCIPLINES</small></div><div><strong>∞</strong><small>WAYS TO EXPLORE</small></div></div><p className="fineprint">*相关经历年限为初稿估算，正式发布前可按实际履历校准。</p>
        </div>
      </div>
    </section>
    <section className="capabilities-section page-wrap" id="capabilities">
      <div className="section-topline"><span>06 / WHAT I BRING</span><span>CAPABILITIES, NOT JUST TOOLS</span></div>
      <div className="capability-heading"><div><p className="overline">A CROSS-DISCIPLINARY PRACTICE</p><h2>Good taste.<br/><em>Useful thinking.</em></h2></div><p>把审美、技术和业务目标，<br/>放在同一张桌子上。</p></div>
      <div className="capability-grid">{capabilities.map(c=><article className="capability-card" key={c.number}><div className="capability-card-top"><span>{c.number} / 04</span><c.icon size={24} strokeWidth={1.4}/></div><h3>{c.title}</h3><p>{c.text}</p><div className="tags">{c.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div>
      <div className="tools-row"><span>TOOLS I SPEAK</span><p>BLENDER <b>·</b> UNREAL ENGINE <b>·</b> PHOTOSHOP <b>·</b> ILLUSTRATOR <b>·</b> PREMIERE PRO <b>·</b> AI WORKFLOWS</p></div>
    </section>
    <section className="contact-section" id="contact"><div className="contact-glow"/><div className="page-wrap contact-inner"><div className="section-topline"><span>07 / YOUR NEXT MOVE</span><span>OPEN FOR COLLABORATION</span></div><p className="overline">HAVE A GOOD ONE IN MIND?</p><h2>Let's make<br/><em>it matter.</em></h2><div className="contact-bottom"><p>如果你正在寻找一个能理解视觉，也愿意一起思考问题的人，<br/>欢迎聊聊你的项目。</p><a className="contact-cta" href="mailto:hello@north.design">开始一次交流 <ArrowUpRight size={18}/></a></div><div className="contact-details"><a href="mailto:hello@north.design">HELLO@NORTH.DESIGN</a><span>SHANGHAI, CHINA · WORKING WORLDWIDE</span><a href="#top">返回顶部 ↑</a></div><footer><span>NORTH® — VISUAL DESIGN / AI CREATIVE</span><span>VERSION 0.2.0 · © 2026</span></footer></div></section>
  </main>;
}
createRoot(document.getElementById("root")).render(<App />);
