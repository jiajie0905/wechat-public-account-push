export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID
  APP_ID: "of0BF6AMGZgWDKq68n6PguJycAsM",

  // 公众号APP_SECRET
  APP_SECRET: "29c37b9c18ee4b64727c777e4c295559",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "ohxOO6VskYv0Kuf-ywIZVRMpuXhk",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "杰哥",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "of0BF6AMGZgWDKq68n6PguJycAsM",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "D3l2XrHwbRxA2wIjPEcBBT5kIHbwQxa-DoXe2XhxVl4",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://music.163.com/"
    }, 
    {
      name: "小胡", 
      id: "of0BF6D2XBM1QAbss6fCtcgHgs7w",
      useTemplateId: "D3l2XrHwbRxA2wIjPEcBBT5kIHbwQxa-DoXe2XhxVl4",
      openUrl: "https://music.163.com/"
    }, 
    {
      name: "老婆2",
      id: "ohxOO6VskYv30Kuf-ywIZV3RMpuXhk",
      useTemplateId: "zjVglIuCXo4CsraXW3Eio1iP7sZJ7IQEES9lDsgc4yOU",
      openUrl: "https://weibo.com"
    }, 
    {
      name: "老婆3", 
      id: "ohxOO63VskYv0Kuf-ywIZV3RMpuXhk", 
      useTemplateId: "Wue80GrtY1nA3ia4tam-FDxZF9WNx9pw3cBc0LMpANnu8",
      openUrl: "https://wangxinleo.cn"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "D3l2XrHwbRxA2wIjPEcBBT5kIHbwQxa-DoXe2XhxVl4",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "杰哥",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "of0BF6AMGZgWDKq68n6PguJycAsM",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 所在省份
  PROVINCE: "河南",
  // 所在城市
  CITY: "郑州",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "杰哥", "year": "1996", "date": "09-02"},
    {"type": "节日", "name": "生日", "year": "2002", "date": "05-11"},
    {"type": "生日", "name": "胡八", "year": "1996", "date": "09-31"},
    {"type": "节日", "name": "吃粑粑纪念日", "year": "2022", "date": "09-02"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 我自己的生日
    {"keyword": "know_day", date: "2002-05-11"},
    // 退伍日, 不用可以删掉
    {"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "先穿袜子在穿鞋，先当孙子再当爷",
      "花花世界迷人眼，没有实力你别赛脸。",
      "少年闰土身上纹，掌声送给周树人",
      "做人不要太攀比，要比就比激光雨",
      "URBBRGRPUGAI",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
