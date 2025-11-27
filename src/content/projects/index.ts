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
    description: '创建字体子集，包含指定的字符。',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/6bf7f7d6-45cc-a950-ec4b-917505d0c583.png',
    url: 'https://github.com/sxy15/font-subset',
    tags: ['font', 'subset']
  },
  {
    id: '3',
    title: 'github switch config',
    description: '切换不同的 github 账号配置。',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/3a9824a8-c579-017e-658b-9dca180746f8.png',
    url: 'https://github.com/sxy15/git-ue',
    tags: ['github']
  },
  {
    id: '4',
    title: '硬字幕合成',
    description: '将 mp4 视频和 srt 字幕合成一个新的 mp4 视频。',
    image: 'https://raw.githubusercontent.com/sxy15/bbb/main/assets/3a8e0e56-b09b-874b-0f6d-c8bf5f9d9184.png',
    url: 'https://github.com/sxy15/ms2mp4',
    tags: ['mp4', 'srt']
  }
];
