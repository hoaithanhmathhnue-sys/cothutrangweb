export interface Tool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  color: string;
  category: string;
  isNew?: boolean;
}

export const TOOLS_DATA: Tool[] = [
  {
    id: 'tro-ly-mo-phong-kh',
    name: 'Trợ lý Mô phỏng Khoa học Lớp 4-5',
    description: 'Ứng dụng AI hỗ trợ mô phỏng các thí nghiệm khoa học cho học sinh lớp 4-5 theo chương trình Kết nối tri thức.',
    url: 'https://trolymophongkhoahoc.vercel.app/',
    icon: 'FlaskConical',
    color: 'from-emerald-500 to-teal-600',
    category: 'Khoa học',
    isNew: true,
  },
  {
    id: 'ai-la-trieu-phu-mini',
    name: 'AI Là Triệu Phú Mini',
    description: 'Trò chơi kiến thức dạng "Ai là triệu phú" được tạo bởi AI. Thú vị, hấp dẫn và bổ ích cho học sinh.',
    url: 'https://trochoigame.vercel.app/',
    icon: 'Gamepad2',
    color: 'from-amber-500 to-orange-600',
    category: 'Trò chơi',
    isNew: true,
  },
  {
    id: 'tro-ly-sinh-de-tieng-anh',
    name: 'Trợ lý sinh đề Tiếng Anh chuyên nghiệp',
    description: 'AI hỗ trợ giáo viên soạn đề thi Tiếng Anh chuẩn cấu trúc Ma trận, Đặc tả cho lớp 10, 11, 12 – Global Success.',
    url: 'https://trolydethitienganh.vercel.app/',
    icon: 'BookOpen',
    color: 'from-violet-500 to-indigo-600',
    category: 'Tiếng Anh',
    isNew: true,
  },
  {
    id: 'tro-ly-trac-nghiem-tieng-anh',
    name: 'Trợ lý trắc nghiệm Tiếng Anh',
    description: 'Tạo bài trắc nghiệm Tiếng Anh tương tác với nhiều giao diện game hấp dẫn, xuất file HTML dùng offline.',
    url: 'https://trolytracnghiemtienganh.vercel.app/',
    icon: 'GraduationCap',
    color: 'from-pink-500 to-rose-600',
    category: 'Tiếng Anh',
    isNew: true,
  },
];
