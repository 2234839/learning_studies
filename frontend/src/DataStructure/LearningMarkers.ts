export enum LanguageType {
  zh = 'zh',
  en = 'en',
}
export class LearningMarkers {
  type = {
    origin: <LanguageType>LanguageType.en,
    target: <LanguageType>LanguageType.zh,
  } // 表明此次翻译的类型是 en-> zh
  originalText = ''
  myTranslation = ''
  correctTranslation = ''
  mark: {
    start: {
      filed: 'originalText' | 'myTranslation' | 'correctTranslation'
      position: [number, number]
    }
    end: {
      filed: 'originalText' | 'myTranslation' | 'correctTranslation'
      position: [number, number]
    }
  }[] = []
  markUnit: string[] = []
}

export function textToUnit(type: LanguageType, text: string): string[] {
  if (type === LanguageType.en) {
    return text.split(/[^a-zA-Z0-9]/)
  } else {
    console.log('未实现')
    return []
  }
}

// 示例
const LearningMarkers1 = {
  type: { origin: 'en', target: 'zh' }, // 表明此次翻译的类型是 en-> zh
  originalText:
    "Okay, so it is on the map, it's just not at the right coords. Interesting.",
  myTranslation: '好的，所以他在一个地图上，他仅仅不是一个好点子',
  correctTranslation: '好吧，所以它是在地图上，只是没有在正确的坐标上。有趣。',
  mark: [
    {
      target: 'originalText', // 这里指定标记的是哪个字段，值还可以是 correctTranslation 或 myTranslation
      position: [
        [0, 4],
        [9, 11],
        [27, 74],
      ], // [0,4] 表明标记了target指向字段的第 0 到第 4 个字符 'Okay'
    },
  ],
  markUnit: [
    'Okay',
    'it',
    "it's",
    'just',
    'not',
    'at',
    'the',
    'right',
    'coords.',
    'Interesting',
  ],
}
