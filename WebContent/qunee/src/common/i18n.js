var i18n = {
    'zh-cn': {
        'Name': '名称',
        'Arrow To': '显示箭头',
        'Render Color': '渲染色',
        'Border': '边框',
        'Border Color': '边框颜色',
        'Location': '坐标',
        'Size': '尺寸',
        'Rotate': '旋转',
        'Label Position': '文本位置',
        'Label Anchor Position': '文本锚点位置',
        'Label Color': '文本颜色',
        'Background Color': '背景色',
        'Font Size': '字体大小',
        'json file is empty': 'JSON文件为空',
        'Save Error': '保存错误',
        'Save Success': '保存成功',
        'Update': '更新',
        'Submit': '提交',
        'Export JSON': '导出JSON',
        'Load File ...': '加载文件 ...',
        'Download File': '下载文件',
        'Save': '保存',
        'Rename': '重命名',
        'Input Element Name': '输入图元名称',
        'Solid Line': '实线样式',
        'Dashed Line': '虚线样式',
        'Line Width': '连线宽度',
        'Input Line Width': '输入连线宽度',
        'Line Color': '连线颜色',
        'Input Line Color': '输入连线颜色',
        'Out of Group': '脱离分组',
        'Send to Top': '置顶显示',
        'Send to Bottom': '置底显示',
        'Reset Layer': '恢复默认层',
        'Clear Graph': '清空画布',
        'Zoom In': '放大',
        'Zoom Out': '缩小',
        '1:1': '1:1',
        'update' : '编辑',
        'delete' : '删除',
        'Pan Mode': '平移模式',
        'Rectangle Select': '框选模式',
        'Text': '文字',
        'Basic Nodes': '基本节点',
        'Register Images': '定制形状',
        'Default Shapes': '基本形状',
        'oval': '圆形',
        'rect': '矩形',
        'roundrect': '圆角矩形',
        'star': '五角星',
        'triangle': '三角形',
        'pantagon': '五边形',
        'hexagon': '六边形',
        'diamond': '菱形',
        'heart': '心形',
        'trapezium': '梯形',
        'rhombus': '斜方形',
        'parallelogram': '平行四边形',
        'cross': '十字形',
        'arrow.standard': '箭头1',
        'arrow.1': '箭头2',
        'arrow.2': '箭头3',
        'arrow.3': '箭头4',
        'arrow.4': '箭头5',
        'arrow.5': '箭头6',
        'arrow.6': '箭头7',
        'arrow.7': '箭头8',
        'arrow.8': '箭头9',
        'arrow.open': '箭头10'
    }
}

var lang = navigator.language || navigator.browserLanguage;
lang = lang.toLowerCase();

function getI18NString(key) {
    if (!i18n[lang]) {
        return key;
    }
    var result = i18n[lang][key];
    if (result === undefined) {
        return key;
    }
    return result;
}