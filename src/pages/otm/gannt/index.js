import React, { useCallback, useEffect, useState } from 'react';
import { Button, Typography, Form, Row, Col } from 'antd'
import { CloseOutlined } from '@ant-design/icons';
import cookie from 'react-cookies'
import GSTC from 'gantt-schedule-timeline-calendar';
import tippy from 'tippy.js'
import 'tippy.js/dist/tippy.css';
import { Plugin as TimelinePointer } from 'gantt-schedule-timeline-calendar/dist/plugins/timeline-pointer.esm.min.js';
import { Plugin as Selection } from 'gantt-schedule-timeline-calendar/dist/plugins/selection.esm.min.js';
import { Plugin as ItemTypes } from 'gantt-schedule-timeline-calendar/dist/plugins/item-types.esm.min.js';
import 'gantt-schedule-timeline-calendar/dist/style.css';
import './index.css';
let gstc, state;
const { Title, Text } = Typography;
function App() {

  const [form] = Form.useForm();

  const layout1 = {
    labelCol: { span: 8 },
    wrapperCol: { span: 20 },
  }

  const items = {};

  const [count, setCount] = useState(0)

  const [rows] = useState({
    "0": {
      id: '',
      name: ``,
    }
  })

  const onItemClick = (item) => {
    // setCount(1)
    // alert(item.description)
    console.log(item);
    cookie.save('data', [1, 2, 3, 4, 5])
    document.getElementById("shareLeft").setAttribute('style', 'display: \' \' ')
    // alert('Item ' + GSTC.api.sourceID(item.id) + ' clicked!');
  }

  function itemLabelContent({ item, vido }) {
    return vido.html`
      <div style="cursor:pointer;" @click=${() =>
        onItemClick(
          item
        )}><span style="width:12px;height:12px;background:black;border-radius:100%;display:inline-block;margin-right:4px;vertical-align:middle;"></span>${item.description}</div>
      `;
  }

  useEffect(() => {
    document.onkeydown = function () {
      if (window.event.keyCode == 27) {
        document.getElementById("shareLeft").setAttribute('style', 'display: none ')
      }
    }
  })

  const searchData = () => {
    if (rows != {}) {
      state.update('config.list.rows', () => {
        return {
          "0": {
            id: '0',
            parentId: '',
            project: `主线事件1`
          },
          "1": {
            id: '1',
            parentId: '',
            project: `副线事件2`
          },
          "2": {
            id: '2',
            parentId: '',
            project: `上新事件`
          },
          "3": {
            id: '3',
            parentId: '',
            project: `至美春日正式`
          },
          "4": {
            id: '4',
            parentId: '3',
            project: `素材维护：新品运营中心/银河素材库等`
          },
          "5": {
            id: '5',
            parentId: '3',
            project: `聚划算相关：报名/组队/楼层/发布`
          },
          "6": {
            id: '6',
            parentId: '3',
            project: `阿里妈妈(品销宝)`
          },
          "7": {
            id: '7',
            parentId: '3',
            project: `DEMO&铺款`
          },
          "8": {
            id: '8',
            parentId: '3',
            project: `专属客服&短信`
          },
          "9": {
            id: '9',
            parentId: '3',
            project: `直播`
          },
          "10": {
            id: '10',
            parentId: '3',
            project: `价格申请`
          },
          "11": {
            id: '11',
            parentId: '',
            project: `出游季预热`
          },
          "12": {
            id: '12',
            parentId: '11',
            project: `素材维护：新品运营中心/银河素材库等`
          },
          "13": {
            id: '13',
            parentId: '11',
            project: `聚划算相关:报名/组队/楼层/发布`
          },
          "14": {
            id: '14',
            parentId: '11',
            project: `DEMO&铺款`
          },
          // "5":{
          //   id:'5',
          //   parentId:'1',
          //   project:`至美春日正式事件4`
          // },
          // "6":{
          //   id:'6',
          //   parentId:'1',
          //   project:`至美春日正式事件5`
          // },
          // "7":{
          //   id:'7',
          //   parentId:'1',
          //   project:`至美春日正式事件6`
          // },
          // "8":{
          //   id:'8',
          //   parentId:'1',
          //   project:`至美春日正式事件7`
          // },
          // "9":{
          //   id:'9',
          //   project:`出游季预热`
          // },
          // "10":{
          //   id:'10',
          //   parentId:'9',
          //   project:`出游季预热事件1`
          // },
          // "11":{
          //   id:'11',
          //   parentId:'9',
          //   project:`出游季预热事件2`
          // }
        };
      });
      state.update('config.chart.items', () => {
        return {
          "0": {
            id: '0',
            //label: itemLabelContent,
            rowId: '0',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '至美春日正式',
            height:10,
          },
          "1": {
            id: '1',
            //label: itemLabelContent,
            rowId: '0',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-02 23:59:59').valueOf(),
            },
            description: '出游季预热',
          },
          "2": {
            id: '2',
            //label: itemLabelContent,
            rowId: '0',
            fill: `#DA3C78`,
            type: 'task',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-05 23:59:59').valueOf(),
            },
            description: '出游季正式',
          },
          "3": {
            id: '3',
            //label: itemLabelContent,
            type: 'task',
            rowId: '1',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-05  23:59:59').valueOf(),
            },
            description: '主题团',
          },
          "4": {
            id: '4',
            //label: itemLabelContent,
            type: 'task',
            rowId: '2',
            time: {
              start: GSTC.api.date('2021-03-30 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-30 23:59:59').valueOf(),
            },
            description: '专供当季',
          },
          "5": {
            id: '5',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-03 23:59:59').valueOf(),
            },
            description: '专供当季',
          },
          "6": {
            id: '6',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '新品详情页复查',
          },
          "7": {
            id: '7',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-30 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '主图优化',
          },
          "8": {
            id: '8',
            //label: itemLabelContent,
            rowId: '3',
            type: 'task',
            fill: '#07ABA0',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '至美春日正式',
          },
          "9": {
            id: '9',
            //label: itemLabelContent,
            rowId: '4',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "10": {
            id: '10',
            //label: itemLabelContent,
            rowId: '5',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-31').valueOf(),
            },
          },
          "11": {
            id: '11',
            //label: itemLabelContent,
            rowId: '6',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "12": {
            id: '12',
            //label: itemLabelContent,
            rowId: '7',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-30').valueOf(),
            },
          },
          "13": {
            id: '13',
            //label: itemLabelContent,
            rowId: '7',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-31').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "14": {
            id: '14',
            //label: itemLabelContent,
            rowId: '8',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-30').valueOf(),
            },
          },
          "15": {
            id: '15',
            //label: itemLabelContent,
            rowId: '9',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-30').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "16": {
            id: '16',
            //label: itemLabelContent,
            rowId: '10',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-31').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "17": {
            id: '17',
            //label: itemLabelContent,
            rowId: '11',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
            description: '出游季预热',
          },
          "18": {
            id: '18',
            //label: itemLabelContent,
            rowId: '12',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          },
          "19": {
            id: '19',
            //label: itemLabelContent,
            rowId: '13',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          },
          "20": {
            id: '20',
            //label: itemLabelContent,
            rowId: '14',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          }
          // "2": {
          //   id:'2',
          //   label: `Item ${2}`,
          //   rowId:'0',
          //   time: {
          //       start: GSTC.api.date('2020-11-26 01:00:00').valueOf(),
          //       end:  GSTC.api.date('2020-11-26 02:30:00').valueOf(),
          //   },
          // },
          // "3": {
          //   id:'3',
          //   label: `Item ${3}`,
          //   rowId:'0',
          //   time: {
          //       start: GSTC.api.date('2020-11-26 01:00:00').valueOf(),
          //       end:  GSTC.api.date('2020-11-26 02:30:00').valueOf(),
          //   },
          // },
        }
      });
    }
  }

  useEffect(() => {

    if (rows != {}) {
      state.update('config.list.rows', () => {
        return {
          "0": {
            id: '0',
            parentId: '',
            project: `主线事件`
          },
          "1": {
            id: '1',
            parentId: '',
            project: `副线事件`
          },
          "2": {
            id: '2',
            parentId: '',
            project: `上新事件`
          },
          "3": {
            id: '3',
            parentId: '',
            project: `商品`
          },
          "4": {
            id: '4',
            parentId: '3',
            project: `素材维护：新品运营中心/银河素材库等`
          },
          "5": {
            id: '5',
            parentId: '3',
            project: `聚划算相关：报名/组队/楼层/发布`
          },
          "6": {
            id: '6',
            parentId: '3',
            project: `阿里妈妈(品销宝)`
          },
          "7": {
            id: '7',
            parentId: '3',
            project: `DEMO&铺款`
          },
          "8": {
            id: '8',
            parentId: '3',
            project: `专属客服&短信`
          },
          "9": {
            id: '9',
            parentId: '3',
            project: `直播`
          },
          "10": {
            id: '10',
            parentId: '3',
            project: `价格申请`
          },
          "11": {
            id: '11',
            parentId: '',
            project: `运营`
          },
          "12": {
            id: '12',
            parentId: '11',
            project: `素材维护：新品运营中心/银河素材库等`
          },
          "13": {
            id: '13',
            parentId: '11',
            project: `聚划算相关:报名/组队/楼层/发布`
          },
          "14": {
            id: '14',
            parentId: '11',
            project: `DEMO&铺款`
          },
          // "5":{
          //   id:'5',
          //   parentId:'1',
          //   project:`至美春日正式事件4`
          // },
          // "6":{
          //   id:'6',
          //   parentId:'1',
          //   project:`至美春日正式事件5`
          // },
          // "7":{
          //   id:'7',
          //   parentId:'1',
          //   project:`至美春日正式事件6`
          // },
          // "8":{
          //   id:'8',
          //   parentId:'1',
          //   project:`至美春日正式事件7`
          // },
          // "9":{
          //   id:'9',
          //   project:`出游季预热`
          // },
          // "10":{
          //   id:'10',
          //   parentId:'9',
          //   project:`出游季预热事件1`
          // },
          // "11":{
          //   id:'11',
          //   parentId:'9',
          //   project:`出游季预热事件2`
          // }
        };
      });
      state.update('config.chart.items', () => {
        return {
          "0": {
            id: '0',
            //label: itemLabelContent,
            rowId: '0',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '至美春日正式,至美春日正式,至美春日正式,至美春日正式,至美春日正式,至美春日正式,至美春日正式',
          },
          "1": {
            id: '1',
            //label: itemLabelContent,
            rowId: '0',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-02 23:59:59').valueOf(),
            },
            description: '出游季预热',
          },
          "2": {
            id: '2',
            //label: itemLabelContent,
            rowId: '0',
            fill: `#DA3C78`,
            type: 'task',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-05 23:59:59').valueOf(),
            },
            description: '出游季正式',
          },
          "3": {
            id: '3',
            //label: itemLabelContent,
            type: 'task',
            rowId: '1',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-05  23:59:59').valueOf(),
            },
            description: '主题团',
          },
          "4": {
            id: '4',
            //label: itemLabelContent,
            type: 'task',
            rowId: '2',
            time: {
              start: GSTC.api.date('2021-03-30 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-30 23:59:59').valueOf(),
            },
            description: '专供当季',
          },
          "5": {
            id: '5',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-04-03 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-03 23:59:59').valueOf(),
            },
            description: '专供当季',
          },
          "6": {
            id: '6',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '新品详情页复查',
          },
          "7": {
            id: '7',
            //label: itemLabelContent,
            rowId: '2',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-30 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '主图优化',
          },
          "8": {
            id: '8',
            //label: itemLabelContent,
            rowId: '3',
            type: 'task',
            fill: '#07ABA0',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-03-31 23:59:59').valueOf(),
            },
            description: '至美春日正式',
          },
          "9": {
            id: '9',
            //label: itemLabelContent,
            rowId: '4',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "10": {
            id: '10',
            //label: itemLabelContent,
            rowId: '5',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-31').valueOf(),
            },
          },
          "11": {
            id: '11',
            //label: itemLabelContent,
            rowId: '6',
            fill: '#ffffff',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29 00:00:00').valueOf(),
              end: GSTC.api.date('2021-04-01 24:00:00').valueOf(),
            },
            description: '里程碑',
          },
          "12": {
            id: '12',
            //label: itemLabelContent,
            rowId: '7',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-30').valueOf(),
            },
          },
          "13": {
            id: '13',
            //label: itemLabelContent,
            rowId: '7',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-31').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "14": {
            id: '14',
            //label: itemLabelContent,
            rowId: '8',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-29').valueOf(),
              end: GSTC.api.date('2021-03-30').valueOf(),
            },
          },
          "15": {
            id: '15',
            //label: itemLabelContent,
            rowId: '9',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-30').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "16": {
            id: '16',
            //label: itemLabelContent,
            rowId: '10',
            fill: '#07ABA0',
            type: 'task',
            time: {
              start: GSTC.api.date('2021-03-31').valueOf(),
              end: GSTC.api.date('2021-04-01').valueOf(),
            },
          },
          "17": {
            id: '17',
            //label: itemLabelContent,
            rowId: '11',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
            description: '出游季预热',
          },
          "18": {
            id: '18',
            //label: itemLabelContent,
            rowId: '12',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          },
          "19": {
            id: '19',
            //label: itemLabelContent,
            rowId: '13',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          },
          "20": {
            id: '20',
            //label: itemLabelContent,
            rowId: '14',
            type: 'task',
            fill: '#7E349D',
            time: {
              start: GSTC.api.date('2021-04-01').valueOf(),
              end: GSTC.api.date('2021-04-03').valueOf(),
            },
          }
          // "2": {
          //   id:'2',
          //   label: `Item ${2}`,
          //   rowId:'0',
          //   time: {
          //       start: GSTC.api.date('2020-11-26 01:00:00').valueOf(),
          //       end:  GSTC.api.date('2020-11-26 02:30:00').valueOf(),
          //   },
          // },
          // "3": {
          //   id:'3',
          //   label: `Item ${3}`,
          //   rowId:'0',
          //   time: {
          //       start: GSTC.api.date('2020-11-26 01:00:00').valueOf(),
          //       end:  GSTC.api.date('2020-11-26 02:30:00').valueOf(),
          //   },
          // },
        }
      });
    }

  }, [])

  // Item slot
  function itemSlot(vido, props) {
    const { onChange, update, html, api, getElement } = vido;

    // Get element and initialize tippy instance
    function initialize(el) {
      // element = el;
      // @ts-ignore
      // if (!tippyInstance) tippyInstance = tippy(element);
      // if(!tippyInstance) tippyInstance = createSingleton()
      tippy(el, {
        content: `${props.item.description}`,
      })
    }

    return (content) =>
      html`<div
        directive=${getElement(initialize)}
        class="my-item"
        style="width:100%;display:flex;line-height:${props.item.height}px; margin-left:2px"
        @click=${() =>
          onItemClick(
            props.item
          )}
      >
        ${props.item.description}
      </div>`;
  }

  function initializeGSTC(element) {
    /**
     * @type { import("gantt-schedule-timeline-calendar").Config }
     */
    const config = {
      licenseKey:
        '====BEGIN LICENSE KEY====\nXOfH/lnVASM6et4Co473t9jPIvhmQ/l0X3Ewog30VudX6GVkOB0n3oDx42NtADJ8HjYrhfXKSNu5EMRb5KzCLvMt/pu7xugjbvpyI1glE7Ha6E5VZwRpb4AC8T1KBF67FKAgaI7YFeOtPFROSCKrW5la38jbE5fo+q2N6wAfEti8la2ie6/7U2V+SdJPqkm/mLY/JBHdvDHoUduwe4zgqBUYLTNUgX6aKdlhpZPuHfj2SMeB/tcTJfH48rN1mgGkNkAT9ovROwI7ReLrdlHrHmJ1UwZZnAfxAC3ftIjgTEHsd/f+JrjW6t+kL6Ef1tT1eQ2DPFLJlhluTD91AsZMUg==||U2FsdGVkX1/SWWqU9YmxtM0T6Nm5mClKwqTaoF9wgZd9rNw2xs4hnY8Ilv8DZtFyNt92xym3eB6WA605N5llLm0D68EQtU9ci1rTEDopZ1ODzcqtTVSoFEloNPFSfW6LTIC9+2LSVBeeHXoLEQiLYHWihHu10Xll3KsH9iBObDACDm1PT7IV4uWvNpNeuKJc\npY3C5SG+3sHRX1aeMnHlKLhaIsOdw2IexjvMqocVpfRpX4wnsabNA0VJ3k95zUPS3vTtSegeDhwbl6j+/FZcGk9i+gAy6LuetlKuARjPYn2LH5Be3Ah+ggSBPlxf3JW9rtWNdUoFByHTcFlhzlU9HnpnBUrgcVMhCQ7SAjN9h2NMGmCr10Rn4OE0WtelNqYVig7KmENaPvFT+k2I0cYZ4KWwxxsQNKbjEAxJxrzK4HkaczCvyQbzj4Ppxx/0q+Cns44OeyWcwYD/vSaJm4Kptwpr+L4y5BoSO/WeqhSUQQ85nvOhtE0pSH/ZXYo3pqjPdQRfNm6NFeBl2lwTmZUEuw==\n====END LICENSE KEY====',
      // plugins: [TimelinePointer(), Selection(), ItemResizing(), HighlightWeekends(),ItemMovement()],
      innerHeight: 800,
      plugins: [
        TimelinePointer(),
        Selection(),
        ItemTypes(),
      ],
      list: {
        columns: {
          data: {
            [GSTC.api.GSTCID('id')]: {
              id: GSTC.api.GSTCID('id'),
              width: 60,
              data: ({ row }) => GSTC.api.sourceID(row.id),
              header: {
                content: 'ID',
              },
            },
            [GSTC.api.GSTCID('project')]: {
              id: GSTC.api.GSTCID('project'),
              width: 300,
              data: 'project',
              expander: true,
              header: {
                content: '项目',
              },
            },
          },
        },
        rows: rows,
      },
      chart: {
        items
      },

      slots: {
        'chart-timeline-items-row-item': { inner: [itemSlot] },
      },

    };

    state = GSTC.api.stateFromConfig(config);

    gstc = GSTC({
      element,
      state,
    });
  }

  // useEffect(() => {
  //   return () => {
  //     if (gstc) {
  //       gstc.destroy();
  //     }
  //   };
  // });

  const callback = useCallback((element) => {
    if (element) initializeGSTC(element);
  }, []);

  useEffect(() => {
    // 初始化的时候
    let obj = document.getElementById('gstc')
    obj.addEventListener('gstc-loaded', () => {
      // gstc.api.scrollToTime(gstc.api.time.date().valueOf()); // 默认当前日期
      gstc.api.scrollToTime(GSTC.api.date('2021-05-14').valueOf())  // 指定日期
    });
  }, [document.getElementById('gstc')])




  return (
    <div className="App" >
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Button onClick={() => searchData()} style={{ marginLeft: '10px' }}>查询</Button>
      </div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '80vw', height: 800 }}>
          <div style={{ width: '100%', height: 800 }} className="gstc-wrapper" ref={callback} id="gstc"></div>
        </div>
      </div>

      <div id="shareLeft" class="shareLeft" style={{ display: 'none' }}>
        <div>
          <div style={{ display: 'flex', marginTop: "5px", justifyContent: "space-between" }}>
            <div>
              <Title level={4} style={{ marginLeft: '10px' }}>事件详情</Title>
            </div>
            <div>
              <CloseOutlined style={{ fontSize: '15px', marginRight: '50px', lineHeight: 1.4 }} onClick={() => {
                cookie.save('data', [])
                document.getElementById("shareLeft").setAttribute('style', 'display: none ')
              }} />
            </div>
          </div>
          <p>
            {cookie.load('data') == null ? '' :
              <Form form={form} {...layout1} labelAlign='left' style={{ marginLeft: '10px' }}>
                <Row>
                  <Col span={12}>
                    <Form.Item label="操作名称">
                      <Text type="secondary">素材维护：新品运营中心/银河素材库等</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作描述">
                      <Text type="secondary">描述这个操作是做了什么</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作负责人">
                      <Text type="secondary">雷鸣</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作生效时间">
                      <Text type="secondary">2021-03-29</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作生效截止时间">
                      <Text type="secondary">2021-03-31</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作上线时间">
                      <Text type="secondary">2021-04-01</Text>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item label="操作截止时间">
                      <Text type="secondary">2021-03-31</Text>
                    </Form.Item>
                  </Col>
                </Row>
                <Button type="primary">文件上传</Button>
              </Form>
            }
          </p>
        </div>
      </div>
    </div>

  );
}

export default App;
