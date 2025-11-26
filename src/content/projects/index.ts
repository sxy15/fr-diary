export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  tags?: string[];
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'github image upload',
    description: 'vscode 插件，用于上传图片到 github 并获取 markdown 链接。',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=800&q=80',
    url: 'https://github.com/sxy15/github-image-upload',
    tags: ['vscode', 'extension']
  },
  {
    id: '2',
    title: 'font subset',
    description: 'create a font-subset from a font file.',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/a7c41232-f50c-56ad-37c6-7593a25c18bc.png',
    url: 'https://github.com/sxy15/font-subset',
    tags: ['font', 'subset']
  }
];
