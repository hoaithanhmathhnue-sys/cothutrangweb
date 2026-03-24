/**
 * Kho Công cụ AI - Cô Thu Trang
 * Website cá nhân giới thiệu các ứng dụng AI hỗ trợ giảng dạy
 * Trường THPT Sơn Dương
 */

import React, { useState } from 'react';
import { 
  FlaskConical, 
  Gamepad2, 
  GraduationCap, 
  ExternalLink,
  Sparkles,
  Search,
  BookOpen,
  Monitor,
  Cpu,
  ArrowRight,
  Heart
} from 'lucide-react';
import { motion } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { Tool, TOOLS_DATA } from './types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Icon mapping
const IconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  FlaskConical,
  Gamepad2,
  GraduationCap,
  BookOpen,
  Monitor,
  Cpu,
};

function ToolIcon({ iconName, size = 24, className = '' }: { iconName: string; size?: number; className?: string }) {
  const Icon = IconMap[iconName] || Sparkles;
  return <Icon size={size} className={className} />;
}

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');

  // Get unique categories
  const categories = ['Tất cả', ...Array.from(new Set(TOOLS_DATA.map(t => t.category)))];

  // Filter tools
  const filteredTools = TOOLS_DATA.filter(tool => {
    const matchSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        tool.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchCategory = selectedCategory === 'Tất cả' || tool.category === selectedCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#f0f4f8]">
      {/* ===== HEADER ===== */}
      <header className="gradient-header text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center">
                <Cpu size={22} className="text-white" />
              </div>
              <div>
                <h1 className="font-bold text-lg leading-tight tracking-tight">KHO CÔNG CỤ AI</h1>
                <p className="text-white/70 text-[11px] font-medium">Cô Thu Trang — THPT Sơn Dương</p>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <GraduationCap size={16} className="text-white/70" />
              <span className="text-sm font-medium text-white/90">Các công cụ hỗ trợ dạy học AI hiệu quả</span>
            </div>
          </div>
        </div>
      </header>

      {/* ===== HERO SECTION ===== */}
      <section className="gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-1.5 mb-6 border border-white/10">
                <Sparkles size={14} className="text-amber-300" />
                <span className="text-sm font-medium text-white/90">Phát triển bởi cô Thu Trang — Trường THPT Sơn Dương</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
                Kho Công cụ AI<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">Hỗ trợ Giảng dạy</span>
              </h2>
              <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
                Tổng hợp các ứng dụng AI thông minh, hỗ trợ giáo viên trong việc giảng dạy và mang lại trải nghiệm học tập thú vị cho học sinh.
              </p>
              <div className="flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-white/80">{TOOLS_DATA.length} công cụ</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span className="text-white/80">Miễn phí 100%</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-white/80">Cập nhật liên tục</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== SEARCH & FILTER BAR ===== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-200/80 p-4 flex flex-col sm:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm công cụ..."
              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-11 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all text-sm"
            />
          </div>
          {/* Category Filter */}
          <div className="flex gap-2 flex-wrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-sm font-semibold transition-all whitespace-nowrap",
                  selectedCategory === cat
                    ? "bg-primary text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ===== TOOLS GRID ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h3 className="text-2xl font-bold text-slate-800">Công cụ AI</h3>
            <p className="text-slate-500 text-sm mt-1">Chọn công cụ để bắt đầu sử dụng</p>
          </div>
          <span className="text-sm text-slate-400 font-medium">{filteredTools.length} công cụ</span>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredTools.map((tool, index) => (
              <motion.a
                key={tool.id}
                href={tool.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="tool-card group block no-underline"
              >
                {/* Card Header - Gradient */}
                <div className={cn("h-36 bg-gradient-to-br flex items-center justify-center relative", tool.color)}>
                  <div className="tool-card-icon transition-transform duration-300">
                    <ToolIcon iconName={tool.icon} size={56} className="text-white/90" />
                  </div>
                  {tool.isNew && (
                    <span className="absolute top-3 right-3 badge-new text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-lg">
                      Mới
                    </span>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-bold text-primary/70 uppercase tracking-wider">{tool.category}</span>
                    <h4 className="text-base font-bold text-slate-800 mt-1 leading-snug group-hover:text-primary transition-colors line-clamp-2">
                      {tool.name}
                    </h4>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="tool-card-btn flex items-center justify-center gap-2 bg-slate-100 text-slate-700 py-2.5 rounded-xl font-bold text-sm transition-all">
                    <span>Truy cập</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={28} className="text-slate-400" />
            </div>
            <p className="text-slate-500 font-medium">Không tìm thấy công cụ nào phù hợp</p>
            <button onClick={() => { setSearchQuery(''); setSelectedCategory('Tất cả'); }} className="text-primary font-semibold text-sm mt-2 hover:underline">
              Xóa bộ lọc
            </button>
          </div>
        )}
      </section>

      {/* ===== COMING SOON ===== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-3xl p-8 md:p-12 border border-slate-200/60 text-center">
          <div className="animate-float inline-block mb-4">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center">
              <Sparkles size={32} className="text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-2">Sắp có thêm công cụ mới!</h3>
          <p className="text-slate-500 max-w-lg mx-auto">
            Cô Thu Trang đang phát triển thêm nhiều công cụ AI thú vị khác. Hãy quay lại thường xuyên để khám phá nhé!
          </p>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-cyan-500 rounded-xl flex items-center justify-center">
                <Cpu size={20} className="text-white" />
              </div>
              <div>
                <p className="font-bold text-slate-800">Kho Công cụ AI</p>
                <p className="text-xs text-slate-500">Cô Thu Trang — Trường THPT Sơn Dương</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-slate-500">
              <span>Được tạo với</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>cho giáo dục Việt Nam</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
