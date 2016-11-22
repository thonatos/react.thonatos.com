const initialState = {
  name: 'Thonatos.Yang',
  detail: {
    email: 'thonatos.yang@gmail.com',
    career: 'Frontend Developer / 前端汪, DevOps / 运维开发',
    description: '→_→ 兼职写代码，专职：端茶倒水，如有怀疑，请戳下面链接',
    degree: '09/2011 - 06/2015, Department of Remote sensing science and technology, NUIST, NanJing'
  },
  links: [
    {
      name: 'github',
      href: 'https://github.com/MT-Libraries/',
      icon: '&#xe601;'
    },
    {
      name: 'weibo',
      href: 'http://weibo.com/thonatos',
      icon: '&#xe600;'
    },
    {
      name: 'hexo',
      href: 'http://blog.thonatos.com',
      icon: '&#xe602;'
    },
    {
      name: 'zhihu',
      href: 'https://zhuanlan.zhihu.com/a-log-cabin',
      icon: '&#xe604;'
    }
  ]
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOG':
      console.log(action)
      return state
    default:
      return state
  }
}
