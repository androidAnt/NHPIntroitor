!function (Q) {
    var createElement = function (options) {
        options = options || {};
        var element = document.createElement(options.tagName || 'div');
        if (options.class) {
            $(element).addClass(options.class);
        }
        if (options.parent) {
            options.parent.appendChild(element);
        }
        if (options.style) {
            element.setAttribute('style', options.style);
        }
        if (options.css) {
            $(element).css(options.css);
        }
        if (options.html) {
            $(element).html(options.html);
        }
        //$(element).attr(options);
        return element;
    }
    Q.createElement = createElement;

    ///editors
    function StringEditor(property, parent, getter, setter, scope) {
        this.getter = getter;
        this.setter = setter;
        this.scope = scope;
        this.property = property;

        this.createHtml(parent);
    }

    StringEditor.prototype = {
        _getValue: function () {
            return this.getter.call(this.scope);
        },
        update: function () {
            this.value = this._getValue();
        },
        setValue: function (v) {
            this.input.value = valueToString(v, this.property.type);
        },
        getValue: function () {
            return stringToValue(this.input.value, this.property.type);
        },
        createHtml: function (parent) {
            var property = this.property;
            var input = Q.createElement({
                tagName: 'input',
                class: "form-control",
                parent: parent
            });
            this.input = input;

            if (property.readonly) {
                input.setAttribute('readonly', 'readonly');
            }
            this.update();
            $(input).on('input', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            } .bind(this));
        }
    }

    Object.defineProperties(StringEditor.prototype, {
        value: {
            get: function () {
                return this.getValue();
            },
            set: function (v) {
                this.ajdusting = true;
                this.setValue(v);
                this.ajdusting = false;
            }
        }
    })


    function SelectEditor() {
        Q.doSuperConstructor(this, SelectEditor, arguments);
    }

    SelectEditor.prototype = {
        setValue: function (v) {
            this.input.value = v;
        },
        getValue: function () {
            return this.input.value;
        },
        createHtml: function (parent) {
            var property = this.property;
            var input = Q.createElement({
                tagName: 'select',
                parent: parent
            });
            input.style.width = '100px';
            input.style.height = '30px';
            input.style.borderRadius = '3px';
            input.style.border = '1px solid #ccc';
            input.options.add(new Option("lt", "lt"));
            input.options.add(new Option("lm", "lm"));
            input.options.add(new Option("lb", "lb"));
            input.options.add(new Option("ct", "ct"));
            input.options.add(new Option("cm", "cm"));
            input.options.add(new Option("cb", "cb"));
            input.options.add(new Option("rt", "rt"));
            input.options.add(new Option("rm", "rm"));
            input.options.add(new Option("rb", "rb"));
            this.input = input;

            if (property.readonly) {
                input.setAttribute('readonly', 'readonly');
            }
            this.update();
            $(input).on('click', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            } .bind(this));
        }
    }

    Q.extend(SelectEditor, StringEditor);




    function BooleanEditor() {
        Q.doSuperConstructor(this, BooleanEditor, arguments);
    }

    BooleanEditor.prototype = {
        setValue: function (v) {
            if (v) {
                this.input.setAttribute('checked', 'checked')
            } else {
                this.input.removeAttribute('checked')
            }
            // this.input.setAttribute('checked', v ? 'checked' : false);
        },
        getValue: function () {
            return stringToValue(this.input.checked, this.property.type);
        },
        createHtml: function (parent) {
            var property = this.property;
            var input = Q.createElement({
                tagName: 'input',
                parent: parent
            });
            input.setAttribute('type', 'checkbox');
            this.input = input;

            if (property.readonly) {
                input.setAttribute('readonly', 'readonly');
            }
            this.update();
            $(input).on('click', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            } .bind(this));
        }
    }

    Q.extend(BooleanEditor, StringEditor);

    function ColorEditor() {
        Q.doSuperConstructor(this, ColorEditor, arguments);
    }

    ColorEditor.prototype = {
        createHtml: function (parent) {
            var input = Q.createElement({
                tagName: 'input',
                class: "form-control",
                parent: parent
            });
            Q.createElement({ tagName: 'span', parent: parent, class: "input-group-addon", html: '<i></i>' });
            this.input = input;

            this.update();

            $(parent).colorpicker({
                container: true
            }).on('changeColor', function (evt) {
                if (this.ajdusting) {
                    return;
                }
                this.setter.call(this.scope, this);
            } .bind(this));
        }
    }
    Q.extend(ColorEditor, StringEditor);

    var elementProperties = [{ name: 'name', displayName: 'Name' }, {
        style: Q.Styles.LABEL_FONT_SIZE,
        type: 'number',
        displayName: 'Font Size'
    }, { style: Q.Styles.LABEL_COLOR, type: 'color', displayName: 'Label Color' }, {
        style: Q.Styles.RENDER_COLOR,
        type: 'color',
        displayName: 'Render Color'
    }, { style: Q.Styles.LABEL_POSITION, type: 'select', displayName: 'Label Position'
    }, { style: Q.Styles.LABEL_ANCHOR_POSITION, type: 'select', displayName: 'Label Anchor Position'}];
    var nodeProperties = [ {
        name: 'location',
        type: 'point',
        displayName: 'Location'
    }, { name: 'rotate', type: 'number', displayName: 'Rotate' }, {
        style: Q.Styles.BORDER,
        type: 'number',
        displayName: 'Border'
    }, {
        style: Q.Styles.BORDER_COLOR,
        type: 'color',
        displayName: 'Border Color'
    }];
    var shapeProperties = [{
        style: Q.Styles.SHAPE_FILL_COLOR,
        type: 'color',
        displayName: '填充颜色'
    }, {
        style: Q.Styles.SHAPE_STROKE_STYLE,
        type: 'color',
        displayName: '边线颜色'
    }, {
        style: Q.Styles.SHAPE_STROKE,
        type: 'number',
        displayName: '边线宽度'
    }];
    var edgeProperties = [{ style: Q.Styles.BORDER, display: 'none' }, {
        style: Q.Styles.EDGE_WIDTH,
        type: 'number',
        displayName: 'Line Width'
    }, { style: Q.Styles.EDGE_COLOR, type: 'color', displayName: 'Line Color' }, { style: Q.Styles.ARROW_TO, type: 'boolean', displayName: 'Arrow To'}];
    var textProperties = [{ name: 'size', display: 'none' }, {
        style: Q.Styles.LABEL_SIZE,
        type: 'size',
        displayName: 'Size'
    }, {
        style: Q.Styles.RENDER_COLOR,
        display: 'none'
    }, { style: Q.Styles.LABEL_BACKGROUND_COLOR, type: 'color', displayName: 'Background Color'}];

    //var propertiesMap = {
    //    'Q.Element': {
    //        class: Q.Element,
    //        properties: {
    //            name: {name: 'name'},
    //            'S:edge.width': {name: 'edge.width', type: 'number', propertyType: 'style'},
    //            'S:edge.color': {name: 'edge.color', type: 'color', propertyType: 'style'}
    //        }
    //    }
    //};
    var DEFAULT_PROPERTY_MAP = {};

    var classIndex = 0;

    function getClassName(clazz) {
        var name = clazz._classPath || clazz._tempName;
        if (!name) {
            name = clazz._tempName = 'class-' + classIndex++;
        }
        return name;
    }
    function getPropertiesByTypeFrom(clazz, create, propertyMap) {
        var name = getClassName(clazz);
        if (!create) {
            return propertyMap[name];
        }
        return propertyMap[name] = { class: clazz, properties: {} };
    }

    function getPropertyKey(name, propertyType) {
        if (propertyType == Q.Consts.PROPERTY_TYPE_STYLE) {
            return 'S:' + name;
        }
        if (propertyType == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return 'C:' + name;
        }
        return name;
    }


    function registerDefaultProperties(options) {
        registerProperties(DEFAULT_PROPERTY_MAP, options)
    }
    function registerProperties(propertyMap, options) {
        var clazz = options.class;
        if (!clazz) {
            throw new Error('class property can not be null');
        }
        var properties = options.properties;

        var name = getClassName(clazz);
        if (!properties) {
            delete propertyMap[name];
            return;
        }
        var property = getPropertiesByTypeFrom(clazz, true, propertyMap);

        if (name in propertyMap) {
            property = propertyMap[name];
        } else {
            property = propertyMap[name] = { class: clazz, properties: {} };
        }

        formatProperties(options, property.properties);
    }

    function formatProperties(options, result) {
        result = result || {};
        var properties = options.properties;
        var groupName = options.group || 'Element'
        properties.forEach(function (item) {
            var key;
            if (item.style) {
                item.propertyType = Q.Consts.PROPERTY_TYPE_STYLE;
                item.name = item.style;
            } else if (item.client) {
                item.propertyType = Q.Consts.PROPERTY_TYPE_CLIENT;
                item.name = item.client;
            } else if (item.name) {
                item.propertyType = Q.Consts.PROPERTY_TYPE_ACCESSOR;
            } else {
                return;
            }
            var key = item.key = getPropertyKey(item.name, item.propertyType);
            if (!item.groupName) {
                item.groupName = groupName;
            }
            result[key] = item;
        })
        return result;
    }

    registerDefaultProperties({
        class: Q.Element,
        properties: elementProperties,
        group: '图元'
    })

    registerDefaultProperties({
        class: Q.Node,
        properties: nodeProperties,
        group: '节点'
    })

    registerDefaultProperties({
        class: Q.Edge,
        properties: edgeProperties,
        group: '连线'
    })

    registerDefaultProperties({
        class: Q.Text,
        properties: textProperties,
        group: '文本'
    })

    registerDefaultProperties({
        class: Q.ShapeNode,
        properties: shapeProperties,
        group: '形状'
    })

    // 删除图元的节点坐标
    function getProperties(data, properties, propertyMap) {
        if (!propertyMap) {
            propertyMap = DEFAULT_PROPERTY_MAP;
        }
        properties = properties || {};
        for (var name in propertyMap) {
            if (!(data instanceof propertyMap[name].class)) {
                continue;
            }
            var map = propertyMap[name].properties;
            for (var key in map) {
                var p = map[key];
                if (p.display == 'none') {
                    delete properties[key];
                } else {
                	if (name == "Q.Node" && (data._mxf.ShapeType == "ParentNode" || data._mxf.ShapeType == "ChildNodeRL" || data._mxf.ShapeType == "ChildNodeLL" || data._mxf.ShapeType == "ChildNodeTL" || data._mxf.ShapeType == "ChildNodeLL") && key == "location") {
                       delete properties[key];
                    }
                    else {
                        properties[key] = p;
                   }
                }
            }
        }
        return properties;
    }

    function PropertyGroup(properties) {
        this.properties = properties;
        var groups = {};
        var length = 0;
        for (var key in properties) {
            length++;
            var groupName = properties[key].groupName;
            var group = groups[groupName];
            if (!group) {
                group = groups[groupName] = {};
            }
            group[key] = properties[key];
        }
        this.group = groups;
        this.length = length;
    }

    PropertyGroup.prototype = {
        contains: function (name, propertyType) {
            var key = getPropertyKey(name, propertyType);
            return this.properties[key];
        },
        isEmpty: function () {
            return this.length == 0;
        }

    }

    var createCellEditor = function (item, parent, getter, setter, scope) {
        var type = item.type;
        if (type == 'color') {
            return new ColorEditor(item, parent, getter, setter, scope);
        }
        if (type == 'boolean') {
            return new BooleanEditor(item, parent, getter, setter, scope);
        }
        if (type == 'select') {
            return new SelectEditor(item, parent, getter, setter, scope);
        }
        return new StringEditor(item, parent, getter, setter, scope);
    }

    function getElementProperty(graph, element, name, type) {
        if (!type || type == Q.Consts.PROPERTY_TYPE_ACCESSOR) {
        	var value = element[name];
        	if(name=="rotate"){
        		value = element[name] * 180 / Math.PI;
        	}
        	return value;
        }
        if (type == Q.Consts.PROPERTY_TYPE_STYLE) {
            return graph.getStyle(element, name);
        }
        if (type == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return element.get(name);
        }
    }
    
    // 公共方法获取点到焊缝的距离
    function publicMethodMark1(element){
    	publicMethodMark(element);
    	var markName = element.get("markName");
    	var markLand = element.get("markLand");
    	var xCoordinate = element.$location.x.toFixed(2);
    	var yCoordinate = element.$location.y.toFixed(2);
    	var type = element.get("type");
    	if(type=="0"){  // 筒体打点打点
        	var xReference = element.get("xReference");
        	var xDirection = element.get("xDirection");
        	var xValue = element.get("xValue");
        	var yReference = element.get("yReference");
        	var yDirection = element.get("yDirection");
        	var yValue = element.get("yValue");
        	 // 设置tootip
    	    element.tooltip ="点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："+parseFloat(xCoordinate)+"<br/>y轴坐标："
    	           +parseFloat(yCoordinate)+"<br/>距离x轴最近的："+"<br/>焊缝是："+xReference+"<br/>方向是："+xDirection+"<br/>距离是："
                   +xValue+"<br/>距离y轴最近的："+"<br/>焊缝是："+yReference+"<br/>方向是："+yDirection+"<br/>距离是："+yValue;
    	}else if(type=="1"){
    		var referenceR = element.get("referenceR");
   			var distance = element.get("distance");
   			var angle = element.get("angle");
   			element.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："+parseFloat(xCoordinate)+"<br/>y轴坐标："+parseFloat(yCoordinate)
   			       +"<br/>封头参照物："+referenceR+"<br/>角度："+angle+"°"+"<br/>点到圆心距离："+distance;
    	}else if(type=="2"){
    		element.tooltip = "点位编号："+markName+"<br/>测点壁厚："+markLand+"<br/>x轴坐标："+parseFloat(xCoordinate)+"<br/>y轴坐标："+parseFloat(yCoordinate);
    	}
    }
    

    function setElementProperty(value, element, name, type) {
        if (!type || type == Q.Consts.PROPERTY_TYPE_ACCESSOR) {
        	if(name=="rotate"){
        		value = Math.PI * value / 180;
        	}
        	element[name] = value;
        	if (name == "location" && element.$image == "lamp") {
        		publicMethodMark1(element);
            }
            return; 
        }
        if (type == Q.Consts.PROPERTY_TYPE_STYLE) {
            return element.setStyle(name, value);
        }
        if (type == Q.Consts.PROPERTY_TYPE_CLIENT) {
            return element.set(name, value);
        }
    }

    function PropertyPane(graph, html, options) {
        this._propertyMap = {};
        this._formItems = [];
        this.html = this.container = html;
        this.dom = Q.createElement({ class: 'form-horizontal', parent: html, tagName: 'form' });
        this.graph = graph;

        graph.dataPropertyChangeDispatcher.addListener(function (evt) {
            this.onDataPropertyChange(evt);
        } .bind(this));

        graph.selectionChangeDispatcher.addListener(function (evt) {
            this.datas = this.graph.selectionModel.toDatas();
        } .bind(this));
    }

    function numberToString(number) {
        return number | 0;
        //return number.toFixed(2);
    }

    function valueToString(value, type) {
        if (!value) {
            return value;
        }
        if (type == 'point') {
            return numberToString(value.x) + ',' + numberToString(value.y);
        }
        if (type == 'size') {
            return numberToString(value.width) + ',' + numberToString(value.height);
        }
        if (type == 'degree') {
            return '' + (value * 180 / Math.PI) | 0;
        }
        return value.toString();
    }

    var positions = {};
    for (var name in Q.Position) {
        var p = Q.Position[name];
        if (name == "random" || !(p instanceof Q.Position)) {
            continue;
        }
        positions[p.toString()] = p;
    }
    function stringToValue(string, type) {
        if (type == 'position') {
            return positions[string];
        }
        if (type == 'number') {
            return parseFloat(string) || 0;
        }
        if (type == 'boolean') {
            return string ? true : false;
        }
        if (type == 'point') {
            var xy = string.split(',');
            if (xy.length == 2) {
                return { x: parseFloat(xy[0] || 0), y: parseFloat(xy[1]) || 0 };
            }
            return;
        }
        if (type == 'size') {
            var xy = string.split(',');
            if (xy.length == 2) {
                var w = parseFloat(xy[0]) || 0;
                var h = parseFloat(xy[1]) || 0;
                if (w && h) {
                    return { width: w, height: h };
                }
            }
            return;
        }
        if (type == 'degree') {
            return parseInt(string) * Math.PI / 180
        }
        return string;
    }

    PropertyPane.prototype = {
        _formItems: null,
        onValueChange: function (value, item) {
            this.setValue(value, item);
        },
        adjusting: false,
        _containsElement: function (data) {
            for (var d in this.datas) {
                if (d == data) {
                    return true;
                }
            }
        },
        _containsProperty: function (name, type) {
            return this.propertyGroup && this.propertyGroup.contains(name, type);
        },
        _cellEditors: null,
        _getCellEditors: function (name, propertyType) {
            if (!this._cellEditors) {
                return;
            }
            var key = getPropertyKey(name, propertyType);
            return this._cellEditors[key];
        },
        onDataPropertyChange: function (evt) {
            if (this.adjusting) {
                return;
            }
            if (!this.datas || !this.datas.length) {
                return null;
            }
            var data = evt.source;
            if (evt.kind == "location" && data.$image == "lamp") {
            	publicMethodMark1(data);
            }
            if (!this._containsElement(data)) {
                var editors = this._getCellEditors(evt.kind, evt.propertyType);
                if (!editors) {
                    return;
                }
                if (!Q.isArray(editors)) {
                    editors = [editors];
                }
                editors.forEach(function (editor) {
                    editor.update();
                })
            }
        },
        clear: function () {
            $('.colorpicker-element').colorpicker('hide');
            this.dom.innerHTML = '';
            this._formItems = [];
            this._cellEditors = null;
            this.setVisible(false);
        },
        setVisible: function (visible) {
            var display = visible ? 'block' : 'none';
            if (this.container) {
                this.container.style.display = display;
            } else {
                this.dom.style.display = display;
            }
        },
        createItem: function (parent, property) {
            var formItem = Q.createElement({ class: 'form-group', parent: parent });
            var label = Q.createElement({
                parent: formItem,
                tagName: 'label',
                class: 'col-sm-6 control-label font-small',
                html: getI18NString(property.displayName || property.name)
            });
            var inputDIV = Q.createElement({ parent: formItem, class: "input-group input-group-sm col-sm-6" });

            var cellEditor = createCellEditor(property, inputDIV, function () {
                return this.getValue(property);
            } .bind(this), function (editor) {
                this.onValueChange(editor.value, property);
            } .bind(this));

            var key = getPropertyKey(property.name, property.propertyType);
            if (!this._cellEditors) {
                this._cellEditors = {};
            }
            var editors = this._cellEditors[key];
            if (!editors) {
                this._cellEditors[key] = [cellEditor];
            } else {
                editors.push(cellEditor);
            }
            return formItem;
        },
        setValue: function (value, property) {
            if (!this.datas || !this.datas.length) {
                return null;
            }
            this.adjusting = true;

            if (property.type && property.type != 'string' && Q.isString(value)) {
                value = stringToValue(value, property.type);
            }

            this.datas.forEach(function (data) {
                var old = getElementProperty(this.graph, data, property.name, property.propertyType);
                if (old === value) {
                    return;
                }
                setElementProperty(value, data, property.name, property.propertyType);
            }, this)

            this.adjusting = false;

        },
        getValue: function (property) {
            if (!this.datas || !this.datas.length) {
                return null;
            }
            if (this.datas.length == 1) {
                return getElementProperty(this.graph, this.datas[0], property.name, property.propertyType) || '';
            }
        },
        /**
        *
        <form class="form-horizontal" style="">
        <div class="class-group">
        <h4>Element</h4>
        <div class="form-group">
        <label class="col-sm-6 control-label font-small">Name</label>
        <div class="input-group input-group-sm col-sm-6">
        <input type="text" value="" onchange="onvaluechange(event)" class="form-control"/>
        </div>
        </div>
        <div class="form-group">
        <label class="col-sm-6 control-label font-small" >Background Color</label>
        <div class="input-group input-group-sm color-picker col-sm-6">
        <input type="text" value="#EEE" class="form-control"/>
        <span class="input-group-addon"><i></i></span>
        </div>
        </div>
        <div class="form-group">
        <label class="col-sm-6 control-label font-small">Line Width</label>
        <div class="input-group input-group-sm col-sm-6">
        <input class="form-control" type="number" value="1" min="1" max="10"/>
        </div>
        </div>
        </div>
        </form>
        * @param name
        * @param properties
        */
        createItemGroup: function (name, properties) {
            var group = Q.createElement({ class: 'class-group', parent: this.dom });
            Q.createElement({ tagName: 'h4', parent: group, html: name });
            for (var name in properties) {
                this.createItem(group, properties[name]);
            }
        },
        register: function (options) {
            registerProperties(this._propertyMap, options);
        },
        showDefaultProperties: true,

        getCustomPropertyDefinitions: function (data) {
            return data.propertyDefinitions;
        },

        getProperties: function (data) {
            var properties = {};
            if (this.showDefaultProperties) {
                getProperties(data, properties);
            }
            if (this._propertyMap) {
                getProperties(data, properties, this._propertyMap);
            }
            var propertyDefinitions = this.getCustomPropertyDefinitions(data);
            if (propertyDefinitions) {
                var map = formatProperties(propertyDefinitions);
                for (var name in map) {
                    properties[name] = map[name];
                }
            }
            return properties;
        },
        _getProperties: function (data) {
            var properties = this.getProperties(data);
            return new PropertyGroup(properties);
        },
        isEditable: function (element) {
            return
        }
    }
    Object.defineProperties(PropertyPane.prototype, {
        datas: {
            get: function () {
                return this._datas;
            },
            set: function (datas) {
                if (this._datas == datas) {
                    return;
                }
                if (datas && !Q.isArray(datas)) {
                    datas = [datas];
                }
                this.clear();
                if (!datas.length) {
                    this._datas = null;
                    return;
                }
                this._datas = datas;
                if (datas.length == 1) {
                    this.setVisible(true);

                    this.propertyGroup = this._getProperties(datas[0]);

                    var group = this.propertyGroup.group;
                    for (var groupName in group) {
                        this.createItemGroup(groupName, group[groupName]);
                    }
                }
            }
        }
    })
    Q.PropertyPane = PropertyPane;
    Q.PropertyPane.register = registerDefaultProperties;
} (Q)