import Mock from 'mockjs';

const result = {
  "categoryData": [
    {
      "title": "男生分类",
      "tid": "0",
      "queryParams": [
        {
          "channel": "男频"
        }
      ],
      "appendParams": [
        {
          "type": "cate2"
        }
      ],
      "cateList": [
        {
          "text": "东方玄幻",
          "sid": 35
        },
        {
          "text": "古典仙侠",
          "sid": 35
        },
        {
          "text": "现代修真",
          "sid": 35
        },
        {
          "text": "都市生活",
          "sid": 35
        },
        {
          "text": "都市超能",
          "sid": 35
        },
        {
          "text": "架空历史",
          "sid": 35
        },
        {
          "text": "军事战争",
          "sid": 35
        },
        {
          "text": "虚拟网游",
          "sid": 35
        },
        {
          "text": "时空穿梭",
          "sid": 35
        },
        {
          "text": "末世进化",
          "sid": 35
        }
      ]
    },
    {
      "title": "女生分类",
      "tid": "0",
      "queryParams": [
        {
          "channel": "女频"
        }
      ],
      "appendParams": [
        {
          "type": "cate2"
        }
      ],
      "cateList": [
        {
          "text": "古代言情",
          "sid": 35
        },
        {
          "text": "穿越重生",
          "sid": 35
        },
        {
          "text": "浪漫言情",
          "sid": 35
        },
        {
          "text": "烽火情缘",
          "sid": 35
        },
        {
          "text": "忧伤青春",
          "sid": 35
        },
        {
          "text": "玄幻仙侠",
          "sid": 35
        },
        {
          "text": "都市幻想",
          "sid": 35
        },
        {
          "text": "悬疑灵异",
          "sid": 35
        }
      ]
    },
    {
      "title": "男生背景",
      "tid": "0",
      "queryParams": [
        {
          "channel": "男频"
        }
      ],
      "appendParams": [
        {
          "type": "tag_name"
        }
      ],
      "cateList": [
        {
          "text": "穿越",
          "sid": 33
        },
        {
          "text": "重生",
          "sid": 33
        },
        {
          "text": "异界",
          "sid": 33
        },
        {
          "text": "修真",
          "sid": 33
        },
        {
          "text": "都市",
          "sid": 33
        },
        {
          "text": "异能",
          "sid": 33
        }
      ]
    },
    {
      "title": "男生情节",
      "tid": "0",
      "queryParams": [
        {
          "channel": "男频"
        }
      ],
      "appendParams": [
        {
          "type": "tag_name"
        }
      ],
      "cateList": [
        {
          "text": "修仙",
          "sid": 33
        },
        {
          "text": "奇遇",
          "sid": 33
        },
        {
          "text": "奋斗",
          "sid": 33
        },
        {
          "text": "争霸",
          "sid": 33
        },
        {
          "text": "权谋",
          "sid": 33
        },
        {
          "text": "升级文",
          "sid": 33
        }
      ]
    },
    {
      "title": "女生背景",
      "tid": "0",
      "queryParams": [
        {
          "channel": "女频"
        }
      ],
      "appendParams": [
        {
          "type": "tag_name"
        }
      ],
      "cateList": [
        {
          "text": "穿越",
          "sid": 33
        },
        {
          "text": "重生",
          "sid": 33
        },
        {
          "text": "宅斗",
          "sid": 33
        },
        {
          "text": "宫廷",
          "sid": 33
        }
      ]
    }
  ],
  "subpage": {
    "name": "《夜行歌》",
    "content": "那一只脆弱的蝴蝶，又是用怎样的毅力飞越了沧海。"
  }
}

Mock.mock('/api/getCateData', 'get', (url, type, body) => {
  return {
    success: true,
    data: result,
  }
})
