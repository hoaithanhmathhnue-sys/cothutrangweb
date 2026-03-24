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
