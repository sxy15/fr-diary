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
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/e4af05de-5ec0-c4da-ad6d-aec1b9e5c98a.png',
    url: 'https://github.com/sxy15/github-image-upload',
    tags: ['vscode', 'extension']
  },
  {
    id: '2',
    title: 'font subset',
    description: 'create a font-subset from a font file.',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/6bf7f7d6-45cc-a950-ec4b-917505d0c583.png',
    url: 'https://github.com/sxy15/font-subset',
    tags: ['font', 'subset']
  },
  {
    id: '3',
    title: 'github switch config',
    description: 'switch between different github accounts.',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/3a9824a8-c579-017e-658b-9dca180746f8.png',
    url: 'https://github.com/sxy15/git-ue',
    tags: ['github']
  }
];
