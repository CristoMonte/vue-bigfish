import * as types from '../mutation_types'

const state = {
  places: [
    {
      place: '台湾',
      englishName: 'Taiwan',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: true,
      cities: [
      {name: '九份'},
      {name: '兰屿'},
      {name: '南投'},
      {name: '台东'},
      {name: '台中'},
      {name: '台北'},
      {name: '台南'},
      {name: '嘉义'},
      {name: '垦丁'},
      {name: '宜兰'},
      {name: '小琉球'},
      {name: '彰化'},
      {name: '新北'},
      {name: '新竹'},
      {name: '日月潭'},
      {name: '桃园'},
      {name: '清境农场'},
      {name: '澎湖'},
      {name: '绿岛'},
      {name: '花莲'},
      {name: '苗栗'},
      {name: '金门'},
      {name: '阿里山'},
      {name: '高雄'}
      ]
    },
    {
      place: '日本',
      englishName: 'Japan',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '东京'},
        {name: '东北地区'},
        {name: '中国地区'},
        {name: '中部地区'},
        {name: '九州地区'},
        {name: '京都'},
        {name: '关东地区'},
        {name: '关西地区'},
        {name: '冲绳'},
        {name: '函馆'},
        {name: '北海道'},
        {name: '名古屋'},
        {name: '四国地区'},
        {name: '大阪'},
        {name: '奈良'},
        {name: '富士河口湖'},
        {name: '富良野'},
        {name: '旭川'},
        {name: '札幌'},
        {name: '神户'},
        {name: '福冈'}
      ]
    },
    {
      place: '越南',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      englishName: 'Vienam',
      isActive: false,
      cities: [
        {name: '下龙湾'},
        {name: '会安'},
        {name: '大叻'},
        {name: '头顿'},
        {name: '富国岛'},
        {name: '岘港'},
        {name: '河内'},
        {name: '藩切'},
        {name: '美奈'},
        {name: '老采'},
        {name: '胡志明市'},
        {name: '芽庄'},
        {name: '顺化'}
      ]
    },
    {
      place: '马来西亚',
      englishName: 'Malaysia',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '兰卡威'},
        {name: '吉隆坡'},
        {name: '哥打京那巴鲁'},
        {name: '槟城'},
        {name: '马六甲'}
      ]
    },
    {
      place: '泰国',
      englishName: 'Thailand',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '丽贝岛'},
        {name: '华欣/七岩'},
        {name: '帕岸岛'},
        {name: '拜县'},
        {name: '普吉岛'},
        {name: '曼谷'},
        {name: '沙美岛'},
        {name: '清莱'},
        {name: '清迈'},
        {name: '甲米'},
        {name: '皮皮岛'},
        {name: '芭提雅'},
        {name: '苏梅岛'},
        {name: '象岛'},
        {name: '龟岛'}
      ]
    },
    {
      place: '印度尼西亚',
      englishName: 'Indonesia',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '万隆'},
        {name: '三宝拢'},
        {name: '巴厘岛'},
        {name: '巴图'},
        {name: '巴淡岛'},
        {name: '日惹'},
        {name: '棉兰'},
        {name: '泗水'},
        {name: '玛琅'},
        {name: '雅加达'},
        {name: '马卡萨'},
        {name: '龙目岛'}
      ]
    },
    {
      place: '韩国',
      englishName: 'Korea',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '仁川'},
        {name: '济州岛'},
        {name: '釜山'},
        {name: '首尔'}
      ]
    },
    {
      place: '柬埔寨',
      englishName: 'Cambodia',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '暹粒'},
        {name: '金边'}
      ]
    },
    {
      place: '斯里卡兰',
      englishName: 'Srilanka',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '努沃勒埃利耶'},
        {name: '尼甘布'},
        {name: '康提'},
        {name: '科伦坡'}
      ]
    },
    {
      place: '菲律宾',
      englishName: 'Philippines',
      img: 'http://qn-fishtrip-img01.fishtrip.cn/o_1b98r172ifimk981rno1hbc14bv0.jpeg-fishmedium',
      isActive: false,
      cities: [
        {name: '宿务'},
        {name: '巴拉望'},
        {name: '普林塞萨港'},
        {name: '薄荷岛'},
        {name: '长滩岛'},
        {name: '马尼拉'}
      ]
    }
  ]
}
const actions = {
  changeCitys: ({ commit }, index) => {
    commit(types.CHANGE_COUNTRY, index)
  }

}
const mutations = {
  [types.CHANGE_COUNTRY] (state, index) {
    state.places.forEach(place => {
      place.isActive = false
    })
    state.places[index].isActive = true
  }
}
const getters = {
  places: state => state.places
  // cities: state => state.places.cities
}
export default {
  state,
  getters,
  actions,
  mutations
}
