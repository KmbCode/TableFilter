webpackJsonp([1],{

/***/ 30:
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./array": 16,
		"./array.js": 16,
		"./const": 11,
		"./const.js": 11,
		"./cookie": 29,
		"./cookie.js": 29,
		"./date": 6,
		"./date.js": 6,
		"./dom": 3,
		"./dom.js": 3,
		"./emitter": 8,
		"./emitter.js": 8,
		"./event": 1,
		"./event.js": 1,
		"./extensions/advancedGrid/adapterEzEditTable": 31,
		"./extensions/advancedGrid/adapterEzEditTable.js": 31,
		"./extensions/advancedGrid/advancedGrid": 32,
		"./extensions/advancedGrid/advancedGrid.js": 32,
		"./extensions/colOps/colOps": 33,
		"./extensions/colOps/colOps.js": 33,
		"./extensions/colsVisibility/colsVisibility": 34,
		"./extensions/colsVisibility/colsVisibility.js": 34,
		"./extensions/filtersVisibility/filtersVisibility": 35,
		"./extensions/filtersVisibility/filtersVisibility.js": 35,
		"./extensions/sort/adapterSortabletable": 36,
		"./extensions/sort/adapterSortabletable.js": 36,
		"./extensions/sort/sort": 37,
		"./extensions/sort/sort.js": 37,
		"./feature": 10,
		"./feature.js": 10,
		"./helpers": 7,
		"./helpers.js": 7,
		"./modules/alternateRows": 24,
		"./modules/alternateRows.js": 24,
		"./modules/checkList": 18,
		"./modules/checkList.js": 18,
		"./modules/clearButton": 22,
		"./modules/clearButton.js": 22,
		"./modules/dropdown": 15,
		"./modules/dropdown.js": 15,
		"./modules/gridLayout": 9,
		"./modules/gridLayout.js": 9,
		"./modules/hash": 27,
		"./modules/hash.js": 27,
		"./modules/help": 23,
		"./modules/help.js": 23,
		"./modules/highlightKeywords": 13,
		"./modules/highlightKeywords.js": 13,
		"./modules/loader": 12,
		"./modules/loader.js": 12,
		"./modules/noResults": 25,
		"./modules/noResults.js": 25,
		"./modules/paging": 21,
		"./modules/paging.js": 21,
		"./modules/popupFilter": 14,
		"./modules/popupFilter.js": 14,
		"./modules/rowsCounter": 19,
		"./modules/rowsCounter.js": 19,
		"./modules/state": 26,
		"./modules/state.js": 26,
		"./modules/statusBar": 20,
		"./modules/statusBar.js": 20,
		"./modules/storage": 28,
		"./modules/storage.js": 28,
		"./root": 2,
		"./root.js": 2,
		"./sort": 17,
		"./sort.js": 17,
		"./string": 5,
		"./string.js": 5,
		"./types": 4,
		"./types.js": 4
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 30;


/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _feature = __webpack_require__(10);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _const = __webpack_require__(11);
	
	var _root = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var INSTANTIATION_ERROR = 'Failed to instantiate EditTable object.\n    \n"ezEditTable" dependency not found.';
	
	var AdapterEzEditTable = function (_Feature) {
	    _inherits(AdapterEzEditTable, _Feature);
	
	    /**
	     * Adapter module for ezEditTable, an external library providing advanced
	     * grid features (selection and edition):
	     * http://codecanyon.net/item/ezedittable-enhance-html-tables/2425123?ref=koalyptus
	     *
	     * @param {Object} tf TableFilter instance
	     */
	
	    function AdapterEzEditTable(tf, cfg) {
	        _classCallCheck(this, AdapterEzEditTable);
	
	        // ezEditTable config
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, cfg.name));
	
	        _this.initialized = false;
	        _this.desc = cfg.description || 'ezEditTable adapter';
	        _this.filename = cfg.filename || 'ezEditTable.js';
	        _this.vendorPath = cfg.vendor_path;
	        _this.loadStylesheet = Boolean(cfg.load_stylesheet);
	        _this.stylesheet = cfg.stylesheet || _this.vendorPath + 'ezEditTable.css';
	        _this.stylesheetName = cfg.stylesheet_name || 'ezEditTableCss';
	
	        // Enable the ezEditTable's scroll into view behaviour if grid layout on
	        cfg.scroll_into_view = cfg.scroll_into_view === false ? false : tf.gridLayout;
	
	        _this._ezEditTable = null;
	        _this.cfg = cfg;
	        _this.enable();
	        return _this;
	    }
	
	    /**
	     * Conditionally load ezEditTable library and set advanced grid
	     * @return {[type]} [description]
	     */
	
	
	    AdapterEzEditTable.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	        var tf = this.tf;
	        if (_root.root.EditTable) {
	            this._setAdvancedGrid();
	        } else {
	            var path = this.vendorPath + this.filename;
	            tf.import(this.filename, path, function () {
	                _this2._setAdvancedGrid();
	            });
	        }
	        if (this.loadStylesheet && !tf.isImported(this.stylesheet, 'link')) {
	            tf.import(this.stylesheetName, this.stylesheet, null, 'link');
	        }
	
	        // TODO: hack to prevent ezEditTable enter key event hijaking.
	        // Needs to be fixed in the vendor's library
	        this.emitter.on(['filter-focus', 'filter-blur'], function () {
	            return _this2._toggleForInputFilter();
	        });
	
	        this.initialized = true;
	    };
	
	    /**
	     * Instantiate ezEditTable component for advanced grid features
	     */
	
	
	    AdapterEzEditTable.prototype._setAdvancedGrid = function _setAdvancedGrid() {
	        var tf = this.tf;
	
	        //start row for EditTable constructor needs to be calculated
	        var startRow,
	            cfg = this.cfg,
	            thead = _dom2.default.tag(tf.tbl, 'thead');
	
	        //if thead exists and startRow not specified, startRow is calculated
	        //automatically by EditTable
	        if (thead.length > 0 && !cfg.startRow) {
	            startRow = undefined;
	        }
	        //otherwise startRow config property if any or TableFilter refRow
	        else {
	                startRow = cfg.startRow || tf.refRow;
	            }
	
	        cfg.base_path = cfg.base_path || tf.basePath + 'ezEditTable/';
	        var editable = cfg.editable;
	        var selectable = cfg.selection;
	
	        if (selectable) {
	            cfg.default_selection = cfg.default_selection || 'row';
	        }
	        //CSS Styles
	        cfg.active_cell_css = cfg.active_cell_css || 'ezETSelectedCell';
	
	        var _lastValidRowIndex = 0;
	        var _lastRowIndex = 0;
	
	        if (selectable) {
	            //Row navigation needs to be calculated according to TableFilter's
	            //validRowsIndex array
	            var onAfterSelection = function onAfterSelection(et, selectedElm, e) {
	                var slc = et.Selection;
	                //Next valid filtered row needs to be selected
	                var doSelect = function doSelect(nextRowIndex) {
	                    if (et.defaultSelection === 'row') {
	                        /* eslint-disable */
	                        slc.SelectRowByIndex(nextRowIndex);
	                        /* eslint-enable */
	                    } else {
	                            /* eslint-disable */
	                            et.ClearSelections();
	                            /* eslint-enable */
	                            var cellIndex = selectedElm.cellIndex,
	                                row = tf.tbl.rows[nextRowIndex];
	                            if (et.defaultSelection === 'both') {
	                                /* eslint-disable */
	                                slc.SelectRowByIndex(nextRowIndex);
	                                /* eslint-enable */
	                            }
	                            if (row) {
	                                /* eslint-disable */
	                                slc.SelectCell(row.cells[cellIndex]);
	                                /* eslint-enable */
	                            }
	                        }
	                    //Table is filtered
	                    if (tf.validRowsIndex.length !== tf.getRowsNb()) {
	                        var r = tf.tbl.rows[nextRowIndex];
	                        if (r) {
	                            r.scrollIntoView(false);
	                        }
	                        if (cell) {
	                            if (cell.cellIndex === tf.getCellsNb() - 1 && tf.gridLayout) {
	                                tf.tblCont.scrollLeft = 100000000;
	                            } else if (cell.cellIndex === 0 && tf.gridLayout) {
	                                tf.tblCont.scrollLeft = 0;
	                            } else {
	                                cell.scrollIntoView(false);
	                            }
	                        }
	                    }
	                };
	
	                //table is not filtered
	                if (!tf.validRowsIndex) {
	                    return;
	                }
	                var validIndexes = tf.validRowsIndex,
	                    validIdxLen = validIndexes.length,
	                    row = et.defaultSelection !== 'row' ? selectedElm.parentNode : selectedElm,
	
	                //cell for default_selection = 'both' or 'cell'
	                cell = selectedElm.nodeName === 'TD' ? selectedElm : null,
	
	                /* eslint-disable */
	                keyCode = e !== undefined ? et.Event.GetKey(e) : 0,
	
	                /* eslint-enable */
	                isRowValid = validIndexes.indexOf(row.rowIndex) !== -1,
	                    nextRowIndex,
	                    paging = tf.feature('paging'),
	
	                //pgup/pgdown keys
	                d = keyCode === 34 || keyCode === 33 ? paging && paging.pagingLength || et.nbRowsPerPage : 1;
	
	                //If next row is not valid, next valid filtered row needs to be
	                //calculated
	                if (!isRowValid) {
	                    //Selection direction up/down
	                    if (row.rowIndex > _lastRowIndex) {
	                        //last row
	                        if (row.rowIndex >= validIndexes[validIdxLen - 1]) {
	                            nextRowIndex = validIndexes[validIdxLen - 1];
	                        } else {
	                            var calcRowIndex = _lastValidRowIndex + d;
	                            if (calcRowIndex > validIdxLen - 1) {
	                                nextRowIndex = validIndexes[validIdxLen - 1];
	                            } else {
	                                nextRowIndex = validIndexes[calcRowIndex];
	                            }
	                        }
	                    } else {
	                        //first row
	                        if (row.rowIndex <= validIndexes[0]) {
	                            nextRowIndex = validIndexes[0];
	                        } else {
	                            var v = validIndexes[_lastValidRowIndex - d];
	                            nextRowIndex = v ? v : validIndexes[0];
	                        }
	                    }
	                    _lastRowIndex = row.rowIndex;
	                    doSelect(nextRowIndex);
	                } else {
	                    //If filtered row is valid, special calculation for
	                    //pgup/pgdown keys
	                    if (keyCode !== 34 && keyCode !== 33) {
	                        _lastValidRowIndex = validIndexes.indexOf(row.rowIndex);
	                        _lastRowIndex = row.rowIndex;
	                    } else {
	                        if (keyCode === 34) {
	                            //pgdown
	                            //last row
	                            if (_lastValidRowIndex + d <= validIdxLen - 1) {
	                                nextRowIndex = validIndexes[_lastValidRowIndex + d];
	                            } else {
	                                nextRowIndex = [validIdxLen - 1];
	                            }
	                        } else {
	                            //pgup
	                            //first row
	                            if (_lastValidRowIndex - d <= validIndexes[0]) {
	                                nextRowIndex = validIndexes[0];
	                            } else {
	                                nextRowIndex = validIndexes[_lastValidRowIndex - d];
	                            }
	                        }
	                        _lastRowIndex = nextRowIndex;
	                        _lastValidRowIndex = validIndexes.indexOf(nextRowIndex);
	                        doSelect(nextRowIndex);
	                    }
	                }
	            };
	
	            //Page navigation has to be enforced whenever selected row is out of
	            //the current page range
	            var onBeforeSelection = function onBeforeSelection(et, selectedElm) {
	                var row = et.defaultSelection !== 'row' ? selectedElm.parentNode : selectedElm;
	                if (tf.paging) {
	                    if (tf.feature('paging').nbPages > 1) {
	                        var paging = tf.feature('paging');
	                        //page length is re-assigned in case it has changed
	                        et.nbRowsPerPage = paging.pagingLength;
	                        var validIndexes = tf.validRowsIndex,
	                            validIdxLen = validIndexes.length,
	                            pagingEndRow = parseInt(paging.startPagingRow, 10) + parseInt(paging.pagingLength, 10);
	                        var rowIndex = row.rowIndex;
	
	                        if (rowIndex === validIndexes[validIdxLen - 1] && paging.currentPageNb !== paging.nbPages) {
	                            paging.setPage('last');
	                        } else if (rowIndex === validIndexes[0] && paging.currentPageNb !== 1) {
	                            paging.setPage('first');
	                        } else if (rowIndex > validIndexes[pagingEndRow - 1] && rowIndex < validIndexes[validIdxLen - 1]) {
	                            paging.setPage('next');
	                        } else if (rowIndex < validIndexes[paging.startPagingRow] && rowIndex > validIndexes[0]) {
	                            paging.setPage('previous');
	                        }
	                    }
	                }
	            };
	
	            //Selected row needs to be visible when paging is activated
	            if (tf.paging) {
	                tf.feature('paging').onAfterChangePage = function (paging) {
	                    var advGrid = paging.tf.extension('advancedGrid');
	                    var et = advGrid._ezEditTable;
	                    var slc = et.Selection;
	                    /* eslint-disable */
	                    var row = slc.GetActiveRow();
	                    /* eslint-enable */
	                    if (row) {
	                        row.scrollIntoView(false);
	                    }
	                    /* eslint-disable */
	                    var cell = slc.GetActiveCell();
	                    /* eslint-enable */
	                    if (cell) {
	                        cell.scrollIntoView(false);
	                    }
	                };
	            }
	
	            //Rows navigation when rows are filtered is performed with the
	            //EditTable row selection callback events
	            if (cfg.default_selection === 'row') {
	                var fnB = cfg.on_before_selected_row;
	                cfg.on_before_selected_row = function () {
	                    onBeforeSelection(arguments[0], arguments[1], arguments[2]);
	                    if (fnB) {
	                        fnB.call(null, arguments[0], arguments[1], arguments[2]);
	                    }
	                };
	                var fnA = cfg.on_after_selected_row;
	                cfg.on_after_selected_row = function () {
	                    onAfterSelection(arguments[0], arguments[1], arguments[2]);
	                    if (fnA) {
	                        fnA.call(null, arguments[0], arguments[1], arguments[2]);
	                    }
	                };
	            } else {
	                var fnD = cfg.on_before_selected_cell;
	                cfg.on_before_selected_cell = function () {
	                    onBeforeSelection(arguments[0], arguments[1], arguments[2]);
	                    if (fnD) {
	                        fnD.call(null, arguments[0], arguments[1], arguments[2]);
	                    }
	                };
	                var fnC = cfg.on_after_selected_cell;
	                cfg.on_after_selected_cell = function () {
	                    onAfterSelection(arguments[0], arguments[1], arguments[2]);
	                    if (fnC) {
	                        fnC.call(null, arguments[0], arguments[1], arguments[2]);
	                    }
	                };
	            }
	        }
	        if (editable) {
	            //Added or removed rows, TF rows number needs to be re-calculated
	            var fnE = cfg.on_added_dom_row;
	            cfg.on_added_dom_row = function () {
	                tf.nbFilterableRows++;
	                if (!tf.paging) {
	                    tf.emitter.emit('rows-changed', tf, this);
	                    //tf.feature('rowsCounter').refresh();
	                } else {
	                        tf.nbVisibleRows++;
	                        tf.nbFilterableRows++;
	                        tf.paging = false;
	                        tf.feature('paging').destroy();
	                        tf.feature('paging').reset();
	                    }
	                if (tf.alternateRows) {
	                    tf.feature('alternateRows').init();
	                }
	                if (fnE) {
	                    fnE.call(null, arguments[0], arguments[1], arguments[2]);
	                }
	            };
	            if (cfg.actions && cfg.actions['delete']) {
	                var fnF = cfg.actions['delete'].on_after_submit;
	                cfg.actions['delete'].on_after_submit = function () {
	                    tf.nbFilterableRows--;
	                    if (!tf.paging) {
	                        // tf.feature('rowsCounter').refresh();
	                        tf.emitter.emit('rows-changed', tf, this);
	                    } else {
	                        tf.nbVisibleRows--;
	                        tf.nbFilterableRows--;
	                        tf.paging = false;
	                        tf.feature('paging').destroy();
	                        tf.feature('paging').reset(false);
	                    }
	                    if (tf.alternateRows) {
	                        tf.feature('alternateRows').init();
	                    }
	                    if (fnF) {
	                        fnF.call(null, arguments[0], arguments[1]);
	                    }
	                };
	            }
	        }
	
	        try {
	            /* eslint-disable */
	            this._ezEditTable = new EditTable(tf.id, cfg, startRow);
	            this._ezEditTable.Init();
	            /* eslint-enable */
	        } catch (e) {
	            throw new Error(INSTANTIATION_ERROR);
	        }
	
	        this.initialized = true;
	    };
	
	    /**
	     * Reset advanced grid when previously removed
	     */
	
	
	    AdapterEzEditTable.prototype.reset = function reset() {
	        var ezEditTable = this._ezEditTable;
	        if (ezEditTable) {
	            if (this.cfg.selection) {
	                /* eslint-disable */
	                ezEditTable.Selection.Set();
	                /* eslint-enable */
	            }
	            if (this.cfg.editable) {
	                /* eslint-disable */
	                ezEditTable.Editable.Set();
	                /* eslint-enable */
	            }
	        }
	    };
	
	    /**
	     * Toggle behaviour
	     */
	
	
	    AdapterEzEditTable.prototype.toggle = function toggle() {
	        var ezEditTable = this._ezEditTable;
	        if (ezEditTable.editable) {
	            /* eslint-disable */
	            ezEditTable.Editable.Remove();
	            /* eslint-enable */
	        } else {
	                /* eslint-disable */
	                ezEditTable.Editable.Set();
	                /* eslint-enable */
	            }
	        if (ezEditTable.selection) {
	            /* eslint-disable */
	            ezEditTable.Selection.Remove();
	            /* eslint-enable */
	        } else {
	                /* eslint-disable */
	                ezEditTable.Selection.Set();
	                /* eslint-enable */
	            }
	    };
	
	    AdapterEzEditTable.prototype._toggleForInputFilter = function _toggleForInputFilter() {
	        var tf = this.tf;
	        if (!tf.getActiveFilterId()) {
	            return;
	        }
	        var colIndex = tf.getColumnIndexFromFilterId(tf.getActiveFilterId());
	        var filterType = tf.getFilterType(colIndex);
	        if (filterType === _const.INPUT) {
	            this.toggle();
	        }
	    };
	
	    /**
	     * Remove advanced grid
	     */
	
	
	    AdapterEzEditTable.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        var ezEditTable = this._ezEditTable;
	        if (ezEditTable) {
	            if (this.cfg.selection) {
	                /* eslint-disable */
	                ezEditTable.Selection.ClearSelections();
	                ezEditTable.Selection.Remove();
	                /* eslint-enable */
	            }
	            if (this.cfg.editable) {
	                /* eslint-disable */
	                ezEditTable.Editable.Remove();
	                /* eslint-enable */
	            }
	        }
	
	        this.emitter.off(['filter-focus', 'filter-blur'], function () {
	            return _this3._toggleForInputFilter();
	        });
	        this.initialized = false;
	    };
	
	    return AdapterEzEditTable;
	}(_feature.Feature);
	
	exports.default = AdapterEzEditTable;

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _adapterEzEditTable = __webpack_require__(31);
	
	var _adapterEzEditTable2 = _interopRequireDefault(_adapterEzEditTable);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _adapterEzEditTable2.default;

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _feature = __webpack_require__(10);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ColOps = function (_Feature) {
	    _inherits(ColOps, _Feature);
	
	    /**
	     * Column calculations
	     * @param {Object} tf TableFilter instance
	     */
	
	    function ColOps(tf, opts) {
	        _classCallCheck(this, ColOps);
	
	        //calls function before col operation
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, opts.name));
	
	        _this.onBeforeOperation = (0, _types.isFn)(opts.on_before_operation) ? opts.on_before_operation : null;
	        //calls function after col operation
	        _this.onAfterOperation = (0, _types.isFn)(opts.on_after_operation) ? opts.on_after_operation : null;
	
	        _this.opts = opts;
	        _this.enable();
	        return _this;
	    }
	
	    ColOps.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	        // subscribe to events
	        this.tf.emitter.on(['after-filtering'], function () {
	            return _this2.calc();
	        });
	
	        this.calc();
	        this.initialized = true;
	    };
	
	    /**
	     * Calculates columns' values
	     * Configuration options are stored in 'opts' property
	     * - 'id' contains ids of elements showing result (array)
	     * - 'col' contains the columns' indexes (array)
	     * - 'operation' contains operation type (array, values: 'sum', 'mean',
	     *   'min', 'max', 'median', 'q1', 'q3')
	     * - 'write_method' array defines which method to use for displaying the
	     *    result (innerHTML, setValue, createTextNode) - default: 'innerHTML'
	     * - 'tot_row_index' defines in which row results are displayed
	     *   (integers array)
	     *
	     * - changes made by Nuovella:
	     * (1) optimized the routine (now it will only process each column once),
	     * (2) added calculations for the median, lower and upper quartile.
	     */
	
	
	    ColOps.prototype.calc = function calc() {
	        var tf = this.tf;
	        if (!tf.hasGrid()) {
	            return;
	        }
	
	        if (this.onBeforeOperation) {
	            this.onBeforeOperation.call(null, tf);
	        }
	
	        var opts = this.opts,
	            labelId = opts.id,
	            colIndex = opts.col,
	            operation = opts.operation,
	            outputType = opts.write_method,
	            totRowIndex = opts.tot_row_index,
	            excludeRow = opts.exclude_row,
	            decimalPrecision = (0, _types.isUndef)(opts.decimal_precision) ? 2 : opts.decimal_precision;
	
	        //nuovella: determine unique list of columns to operate on
	        var ucolIndex = [],
	            ucolMax = 0;
	        ucolIndex[ucolMax] = colIndex[0];
	
	        for (var ii = 1; ii < colIndex.length; ii++) {
	            var saved = 0;
	            //see if colIndex[ii] is already in the list of unique indexes
	            for (var jj = 0; jj <= ucolMax; jj++) {
	                if (ucolIndex[jj] === colIndex[ii]) {
	                    saved = 1;
	                }
	            }
	            //if not saved then, save the index;
	            if (saved === 0) {
	                ucolMax++;
	                ucolIndex[ucolMax] = colIndex[ii];
	            }
	        }
	
	        if ((0, _types.isArray)(labelId) && (0, _types.isArray)(colIndex) && (0, _types.isArray)(operation)) {
	            var rows = tf.tbl.rows,
	                colvalues = [];
	
	            for (var ucol = 0; ucol <= ucolMax; ucol++) {
	                //this retrieves col values
	                //use ucolIndex because we only want to pass through this loop
	                //once for each column get the values in this unique column
	                colvalues.push(tf.getColValues(ucolIndex[ucol], false, true, excludeRow));
	
	                //next: calculate all operations for this column
	                var result,
	                    nbvalues = 0,
	                    temp,
	                    meanValue = 0,
	                    sumValue = 0,
	                    minValue = null,
	                    maxValue = null,
	                    q1Value = null,
	                    medValue = null,
	                    q3Value = null,
	                    meanFlag = 0,
	                    sumFlag = 0,
	                    minFlag = 0,
	                    maxFlag = 0,
	                    q1Flag = 0,
	                    medFlag = 0,
	                    q3Flag = 0,
	                    theList = [],
	                    opsThisCol = [],
	                    decThisCol = [],
	                    labThisCol = [],
	                    oTypeThisCol = [],
	                    mThisCol = -1;
	
	                for (var k = 0; k < colIndex.length; k++) {
	                    if (colIndex[k] === ucolIndex[ucol]) {
	                        mThisCol++;
	                        opsThisCol[mThisCol] = operation[k].toLowerCase();
	                        decThisCol[mThisCol] = decimalPrecision[k];
	                        labThisCol[mThisCol] = labelId[k];
	                        oTypeThisCol = (0, _types.isArray)(outputType) ? outputType[k] : null;
	
	                        switch (opsThisCol[mThisCol]) {
	                            case 'mean':
	                                meanFlag = 1;
	                                break;
	                            case 'sum':
	                                sumFlag = 1;
	                                break;
	                            case 'min':
	                                minFlag = 1;
	                                break;
	                            case 'max':
	                                maxFlag = 1;
	                                break;
	                            case 'median':
	                                medFlag = 1;
	                                break;
	                            case 'q1':
	                                q1Flag = 1;
	                                break;
	                            case 'q3':
	                                q3Flag = 1;
	                                break;
	                        }
	                    }
	                }
	
	                for (var j = 0; j < colvalues[ucol].length; j++) {
	                    //sort the list for calculation of median and quartiles
	                    if (q1Flag === 1 || q3Flag === 1 || medFlag === 1) {
	                        if (j < colvalues[ucol].length - 1) {
	                            for (k = j + 1; k < colvalues[ucol].length; k++) {
	                                /* eslint-disable */
	                                if (eval(colvalues[ucol][k]) < eval(colvalues[ucol][j])) {
	                                    /* eslint-enable */
	                                    temp = colvalues[ucol][j];
	                                    colvalues[ucol][j] = colvalues[ucol][k];
	                                    colvalues[ucol][k] = temp;
	                                }
	                            }
	                        }
	                    }
	                    var cvalue = parseFloat(colvalues[ucol][j]);
	                    theList[j] = parseFloat(cvalue);
	
	                    if (!isNaN(cvalue)) {
	                        nbvalues++;
	                        if (sumFlag === 1 || meanFlag === 1) {
	                            sumValue += parseFloat(cvalue);
	                        }
	                        if (minFlag === 1) {
	                            if (minValue === null) {
	                                minValue = parseFloat(cvalue);
	                            } else {
	                                minValue = parseFloat(cvalue) < minValue ? parseFloat(cvalue) : minValue;
	                            }
	                        }
	                        if (maxFlag === 1) {
	                            if (maxValue === null) {
	                                maxValue = parseFloat(cvalue);
	                            } else {
	                                maxValue = parseFloat(cvalue) > maxValue ? parseFloat(cvalue) : maxValue;
	                            }
	                        }
	                    }
	                } //for j
	                if (meanFlag === 1) {
	                    meanValue = sumValue / nbvalues;
	                }
	                if (medFlag === 1) {
	                    var aux = 0;
	                    if (nbvalues % 2 === 1) {
	                        aux = Math.floor(nbvalues / 2);
	                        medValue = theList[aux];
	                    } else {
	                        medValue = (theList[nbvalues / 2] + theList[nbvalues / 2 - 1]) / 2;
	                    }
	                }
	                var posa;
	                if (q1Flag === 1) {
	                    posa = 0.0;
	                    posa = Math.floor(nbvalues / 4);
	                    if (4 * posa === nbvalues) {
	                        q1Value = (theList[posa - 1] + theList[posa]) / 2;
	                    } else {
	                        q1Value = theList[posa];
	                    }
	                }
	                if (q3Flag === 1) {
	                    posa = 0.0;
	                    var posb = 0.0;
	                    posa = Math.floor(nbvalues / 4);
	                    if (4 * posa === nbvalues) {
	                        posb = 3 * posa;
	                        q3Value = (theList[posb] + theList[posb - 1]) / 2;
	                    } else {
	                        q3Value = theList[nbvalues - posa - 1];
	                    }
	                }
	
	                for (var i = 0; i <= mThisCol; i++) {
	                    switch (opsThisCol[i]) {
	                        case 'mean':
	                            result = meanValue;
	                            break;
	                        case 'sum':
	                            result = sumValue;
	                            break;
	                        case 'min':
	                            result = minValue;
	                            break;
	                        case 'max':
	                            result = maxValue;
	                            break;
	                        case 'median':
	                            result = medValue;
	                            break;
	                        case 'q1':
	                            result = q1Value;
	                            break;
	                        case 'q3':
	                            result = q3Value;
	                            break;
	                    }
	
	                    var precision = !isNaN(decThisCol[i]) ? decThisCol[i] : 2;
	
	                    //if outputType is defined
	                    if (oTypeThisCol && result) {
	                        result = result.toFixed(precision);
	
	                        if (_dom2.default.id(labThisCol[i])) {
	                            switch (oTypeThisCol.toLowerCase()) {
	                                case 'innerhtml':
	                                    if (isNaN(result) || !isFinite(result) || nbvalues === 0) {
	                                        _dom2.default.id(labThisCol[i]).innerHTML = '.';
	                                    } else {
	                                        _dom2.default.id(labThisCol[i]).innerHTML = result;
	                                    }
	                                    break;
	                                case 'setvalue':
	                                    _dom2.default.id(labThisCol[i]).value = result;
	                                    break;
	                                case 'createtextnode':
	                                    var oldnode = _dom2.default.id(labThisCol[i]).firstChild;
	                                    var txtnode = _dom2.default.text(result);
	                                    _dom2.default.id(labThisCol[i]).replaceChild(txtnode, oldnode);
	                                    break;
	                            } //switch
	                        }
	                    } else {
	                            try {
	                                if (isNaN(result) || !isFinite(result) || nbvalues === 0) {
	                                    _dom2.default.id(labThisCol[i]).innerHTML = '.';
	                                } else {
	                                    _dom2.default.id(labThisCol[i]).innerHTML = result.toFixed(precision);
	                                }
	                            } catch (e) {} //catch
	                        } //else
	                } //for i
	
	                // row(s) with result are always visible
	                var totRow = totRowIndex && totRowIndex[ucol] ? rows[totRowIndex[ucol]] : null;
	                if (totRow) {
	                    totRow.style.display = '';
	                }
	            } //for ucol
	        } //if typeof
	
	        if (this.onAfterOperation) {
	            this.onAfterOperation.call(null, tf);
	        }
	    };
	
	    ColOps.prototype.destroy = function destroy() {
	        var _this3 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        // unsubscribe to events
	        this.tf.emitter.off(['after-filtering'], function () {
	            return _this3.calc();
	        });
	        this.initialized = false;
	    };
	
	    return ColOps;
	}(_feature.Feature);
	
	exports.default = ColOps;

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _feature = __webpack_require__(10);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ColsVisibility = function (_Feature) {
	    _inherits(ColsVisibility, _Feature);
	
	    /**
	     * Columns Visibility extension
	     * @param {Object} tf TableFilter instance
	     * @param {Object} f Extension's configuration
	     */
	
	    function ColsVisibility(tf, f) {
	        _classCallCheck(this, ColsVisibility);
	
	        // Configuration object
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, f.name));
	
	        var cfg = tf.config();
	
	        _this.initialized = false;
	        _this.name = f.name;
	        _this.desc = f.description || 'Columns visibility manager';
	
	        //show/hide cols span element
	        _this.spanEl = null;
	        //show/hide cols button element
	        _this.btnEl = null;
	        //show/hide cols container div element
	        _this.contEl = null;
	
	        //tick to hide or show column
	        _this.tickToHide = f.tick_to_hide === false ? false : true;
	        //enables/disables cols manager generation
	        _this.manager = f.manager === false ? false : true;
	        //only if external headers
	        _this.headersTbl = f.headers_table || false;
	        //only if external headers
	        _this.headersIndex = f.headers_index || 1;
	        //id of container element
	        _this.contElTgtId = f.container_target_id || null;
	        //alternative headers text
	        _this.headersText = f.headers_text || null;
	        //id of button container element
	        _this.btnTgtId = f.btn_target_id || null;
	        //defines show/hide cols text
	        _this.btnText = f.btn_text || 'Columns&#9660;';
	        //defines show/hide cols button innerHtml
	        _this.btnHtml = f.btn_html || null;
	        //defines css class for show/hide cols button
	        _this.btnCssClass = f.btn_css_class || 'colVis';
	        //defines close link text
	        _this.btnCloseText = f.btn_close_text || 'Close';
	        //defines close button innerHtml
	        _this.btnCloseHtml = f.btn_close_html || null;
	        //defines css class for close button
	        _this.btnCloseCssClass = f.btn_close_css_class || _this.btnCssClass;
	        _this.stylesheet = f.stylesheet || 'colsVisibility.css';
	        //span containing show/hide cols button
	        _this.prfx = 'colVis_';
	        //defines css class span containing show/hide cols
	        _this.spanCssClass = f.span_css_class || 'colVisSpan';
	        _this.prfxCont = _this.prfx + 'Cont_';
	        //defines css class div containing show/hide cols
	        _this.contCssClass = f.cont_css_class || 'colVisCont';
	        //defines css class for cols list (ul)
	        _this.listCssClass = cfg.list_css_class || 'cols_checklist';
	        //defines css class for list item (li)
	        _this.listItemCssClass = cfg.checklist_item_css_class || 'cols_checklist_item';
	        //defines css class for selected list item (li)
	        _this.listSlcItemCssClass = cfg.checklist_selected_item_css_class || 'cols_checklist_slc_item';
	        //text preceding columns list
	        _this.text = f.text || (_this.tickToHide ? 'Hide: ' : 'Show: ');
	        _this.atStart = f.at_start || null;
	        _this.enableHover = Boolean(f.enable_hover);
	        //enables select all option
	        _this.enableTickAll = Boolean(f.enable_tick_all);
	        //text preceding columns list
	        _this.tickAllText = f.tick_all_text || 'Select all:';
	
	        //array containing hidden columns indexes
	        _this.hiddenCols = [];
	        _this.tblHasColTag = _dom2.default.tag(tf.tbl, 'col').length > 0;
	
	        //callback invoked just after cols manager is loaded
	        _this.onLoaded = (0, _types.isFn)(f.on_loaded) ? f.on_loaded : null;
	        //calls function before cols manager is opened
	        _this.onBeforeOpen = (0, _types.isFn)(f.on_before_open) ? f.on_before_open : null;
	        //calls function after cols manager is opened
	        _this.onAfterOpen = (0, _types.isFn)(f.on_after_open) ? f.on_after_open : null;
	        //calls function before cols manager is closed
	        _this.onBeforeClose = (0, _types.isFn)(f.on_before_close) ? f.on_before_close : null;
	        //calls function after cols manager is closed
	        _this.onAfterClose = (0, _types.isFn)(f.on_after_close) ? f.on_after_close : null;
	
	        //callback before col is hidden
	        _this.onBeforeColHidden = (0, _types.isFn)(f.on_before_col_hidden) ? f.on_before_col_hidden : null;
	        //callback after col is hidden
	        _this.onAfterColHidden = (0, _types.isFn)(f.on_after_col_hidden) ? f.on_after_col_hidden : null;
	        //callback before col is displayed
	        _this.onBeforeColDisplayed = (0, _types.isFn)(f.on_before_col_displayed) ? f.on_before_col_displayed : null;
	        //callback after col is displayed
	        _this.onAfterColDisplayed = (0, _types.isFn)(f.on_after_col_displayed) ? f.on_after_col_displayed : null;
	
	        //Grid layout compatibility
	        if (tf.gridLayout) {
	            _this.headersTbl = tf.feature('gridLayout').headTbl; //headers table
	            _this.headersIndex = 0; //headers index
	            _this.onAfterColDisplayed = function () {};
	            _this.onAfterColHidden = function () {};
	        }
	
	        //Loads extension stylesheet
	        tf.import(f.name + 'Style', tf.stylePath + _this.stylesheet, null, 'link');
	
	        _this.enable();
	        return _this;
	    }
	
	    ColsVisibility.prototype.toggle = function toggle() {
	        var contDisplay = this.contEl.style.display;
	        var onBeforeOpen = this.onBeforeOpen;
	        var onBeforeClose = this.onBeforeClose;
	        var onAfterOpen = this.onAfterOpen;
	        var onAfterClose = this.onAfterClose;
	
	        if (onBeforeOpen && contDisplay !== 'inline') {
	            onBeforeOpen.call(null, this);
	        }
	        if (onBeforeClose && contDisplay === 'inline') {
	            onBeforeClose.call(null, this);
	        }
	
	        this.contEl.style.display = contDisplay === 'inline' ? 'none' : 'inline';
	
	        if (onAfterOpen && contDisplay !== 'inline') {
	            onAfterOpen.call(null, this);
	        }
	        if (onAfterClose && contDisplay === 'inline') {
	            onAfterClose.call(null, this);
	        }
	    };
	
	    ColsVisibility.prototype.checkItem = function checkItem(lbl) {
	        var li = lbl.parentNode;
	        if (!li || !lbl) {
	            return;
	        }
	        var isChecked = lbl.firstChild.checked;
	        var colIndex = lbl.firstChild.getAttribute('id').split('_')[1];
	        colIndex = parseInt(colIndex, 10);
	        if (isChecked) {
	            _dom2.default.addClass(li, this.listSlcItemCssClass);
	        } else {
	            _dom2.default.removeClass(li, this.listSlcItemCssClass);
	        }
	
	        var hide = false;
	        if (this.tickToHide && isChecked || !this.tickToHide && !isChecked) {
	            hide = true;
	        }
	        this.setHidden(colIndex, hide);
	    };
	
	    ColsVisibility.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized || !this.manager) {
	            return;
	        }
	
	        this.emitter.on(['hide-column'], function (tf, colIndex) {
	            return _this2.hideCol(colIndex);
	        });
	
	        this.buildBtn();
	        this.buildManager();
	
	        this.initialized = true;
	        this.emitter.emit('columns-visibility-initialized', this.tf, this);
	
	        // Hide columns at start at very end of initialization
	        this._hideAtStart();
	    };
	
	    /**
	     * Build main button UI
	     */
	
	
	    ColsVisibility.prototype.buildBtn = function buildBtn() {
	        var _this3 = this;
	
	        if (this.btnEl) {
	            return;
	        }
	        var tf = this.tf;
	        var span = _dom2.default.create('span', ['id', this.prfx + tf.id]);
	        span.className = this.spanCssClass;
	
	        //Container element (rdiv or custom element)
	        if (!this.btnTgtId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.btnTgtId ? tf.rDiv : _dom2.default.id(this.btnTgtId);
	
	        if (!this.btnTgtId) {
	            var firstChild = targetEl.firstChild;
	            firstChild.parentNode.insertBefore(span, firstChild);
	        } else {
	            targetEl.appendChild(span);
	        }
	
	        if (!this.btnHtml) {
	            var btn = _dom2.default.create('a', ['href', 'javascript:;']);
	            btn.className = this.btnCssClass;
	            btn.title = this.desc;
	
	            btn.innerHTML = this.btnText;
	            span.appendChild(btn);
	            if (!this.enableHover) {
	                _event2.default.add(btn, 'click', function (evt) {
	                    return _this3.toggle(evt);
	                });
	            } else {
	                _event2.default.add(btn, 'mouseover', function (evt) {
	                    return _this3.toggle(evt);
	                });
	            }
	        } else {
	            //Custom html
	            span.innerHTML = this.btnHtml;
	            var colVisEl = span.firstChild;
	            if (!this.enableHover) {
	                _event2.default.add(colVisEl, 'click', function (evt) {
	                    return _this3.toggle(evt);
	                });
	            } else {
	                _event2.default.add(colVisEl, 'mouseover', function (evt) {
	                    return _this3.toggle(evt);
	                });
	            }
	        }
	
	        this.spanEl = span;
	        this.btnEl = this.spanEl.firstChild;
	
	        if (this.onLoaded) {
	            this.onLoaded.call(null, this);
	        }
	    };
	
	    /**
	     * Build columns manager UI
	     */
	
	
	    ColsVisibility.prototype.buildManager = function buildManager() {
	        var _this4 = this;
	
	        var tf = this.tf;
	
	        var container = !this.contElTgtId ? _dom2.default.create('div', ['id', this.prfxCont + tf.id]) : _dom2.default.id(this.contElTgtId);
	        container.className = this.contCssClass;
	
	        //Extension description
	        var extNameLabel = _dom2.default.create('p');
	        extNameLabel.innerHTML = this.text;
	        container.appendChild(extNameLabel);
	
	        //Headers list
	        var ul = _dom2.default.create('ul', ['id', 'ul' + this.name + '_' + tf.id]);
	        ul.className = this.listCssClass;
	
	        var tbl = this.headersTbl ? this.headersTbl : tf.tbl;
	        var headerIndex = this.headersTbl ? this.headersIndex : tf.getHeadersRowIndex();
	        var headerRow = tbl.rows[headerIndex];
	
	        //Tick all option
	        if (this.enableTickAll) {
	            (function () {
	                var li = _dom2.default.createCheckItem('col__' + tf.id, _this4.tickAllText, _this4.tickAllText);
	                _dom2.default.addClass(li, _this4.listItemCssClass);
	                ul.appendChild(li);
	                li.check.checked = !_this4.tickToHide;
	
	                _event2.default.add(li.check, 'click', function () {
	                    for (var h = 0; h < headerRow.cells.length; h++) {
	                        var itm = _dom2.default.id('col_' + h + '_' + tf.id);
	                        if (itm && li.check.checked !== itm.checked) {
	                            itm.click();
	                            itm.checked = li.check.checked;
	                        }
	                    }
	                });
	            })();
	        }
	
	        for (var i = 0; i < headerRow.cells.length; i++) {
	            var cell = headerRow.cells[i];
	            var cellText = this.headersText && this.headersText[i] ? this.headersText[i] : this._getHeaderText(cell);
	            var liElm = _dom2.default.createCheckItem('col_' + i + '_' + tf.id, cellText, cellText);
	            _dom2.default.addClass(liElm, this.listItemCssClass);
	            if (!this.tickToHide) {
	                _dom2.default.addClass(liElm, this.listSlcItemCssClass);
	            }
	            ul.appendChild(liElm);
	            if (!this.tickToHide) {
	                liElm.check.checked = true;
	            }
	
	            _event2.default.add(liElm.check, 'click', function (evt) {
	                var elm = _event2.default.target(evt);
	                var lbl = elm.parentNode;
	                _this4.checkItem(lbl);
	            });
	        }
	
	        //separator
	        var p = _dom2.default.create('p', ['align', 'center']);
	        var btn = void 0;
	        //Close link
	        if (!this.btnCloseHtml) {
	            btn = _dom2.default.create('a', ['href', 'javascript:;']);
	            btn.className = this.btnCloseCssClass;
	            btn.innerHTML = this.btnCloseText;
	            _event2.default.add(btn, 'click', function (evt) {
	                return _this4.toggle(evt);
	            });
	            p.appendChild(btn);
	        } else {
	            p.innerHTML = this.btnCloseHtml;
	            btn = p.firstChild;
	            _event2.default.add(btn, 'click', function (evt) {
	                return _this4.toggle(evt);
	            });
	        }
	
	        container.appendChild(ul);
	        container.appendChild(p);
	
	        this.btnEl.parentNode.insertBefore(container, this.btnEl);
	        this.contEl = container;
	    };
	
	    /**
	     * Hide or show specified columns
	     * @param {Numner} colIndex Column index
	     * @param {Boolean} hide    Hide column if true or show if false
	     */
	
	
	    ColsVisibility.prototype.setHidden = function setHidden(colIndex, hide) {
	        var tf = this.tf;
	        var tbl = tf.tbl;
	
	        if (this.onBeforeColHidden && hide) {
	            this.onBeforeColHidden.call(null, this, colIndex);
	        }
	        if (this.onBeforeColDisplayed && !hide) {
	            this.onBeforeColDisplayed.call(null, this, colIndex);
	        }
	
	        this._hideCells(tbl, colIndex, hide);
	        if (this.headersTbl) {
	            this._hideCells(this.headersTbl, colIndex, hide);
	        }
	
	        var hiddenCols = this.hiddenCols;
	        var itemIndex = hiddenCols.indexOf(colIndex);
	        if (hide) {
	            if (itemIndex === -1) {
	                this.hiddenCols.push(colIndex);
	            }
	        } else {
	            if (itemIndex !== -1) {
	                this.hiddenCols.splice(itemIndex, 1);
	            }
	        }
	
	        var gridLayout = void 0;
	        var headTbl = void 0;
	        var gridColElms = void 0;
	        if (hide) {
	            //This event is fired just after a column is displayed for
	            //grid_layout support
	            //TODO: grid layout module should be responsible for those
	            //calculations
	            if (tf.gridLayout) {
	                gridLayout = tf.feature('gridLayout');
	                headTbl = gridLayout.headTbl;
	                gridColElms = gridLayout.gridColElms;
	                var hiddenWidth = parseInt(gridColElms[colIndex].style.width, 10);
	
	                var headTblW = parseInt(headTbl.style.width, 10);
	                headTbl.style.width = headTblW - hiddenWidth + 'px';
	                tbl.style.width = headTbl.style.width;
	            }
	            if (this.onAfterColHidden) {
	                this.onAfterColHidden.call(null, this, colIndex);
	            }
	            this.emitter.emit('column-hidden', tf, this, colIndex, this.hiddenCols);
	        }
	
	        if (!hide) {
	            //This event is fired just after a column is displayed for
	            //grid_layout support
	            //TODO: grid layout module should be responsible for those
	            //calculations
	            if (tf.gridLayout) {
	                gridLayout = tf.feature('gridLayout');
	                headTbl = gridLayout.headTbl;
	                gridColElms = gridLayout.gridColElms;
	                var width = parseInt(gridColElms[colIndex].style.width, 10);
	                headTbl.style.width = parseInt(headTbl.style.width, 10) + width + 'px';
	                tf.tbl.style.width = headTbl.style.width;
	            }
	            if (this.onAfterColDisplayed) {
	                this.onAfterColDisplayed.call(null, this, colIndex);
	            }
	            this.emitter.emit('column-shown', tf, this, colIndex, this.hiddenCols);
	        }
	    };
	
	    /**
	     * Show specified column
	     * @param  {Number} colIndex Column index
	     */
	
	
	    ColsVisibility.prototype.showCol = function showCol(colIndex) {
	        if (colIndex === undefined || !this.isColHidden(colIndex)) {
	            return;
	        }
	        if (this.manager && this.contEl) {
	            var itm = _dom2.default.id('col_' + colIndex + '_' + this.tf.id);
	            if (itm) {
	                itm.click();
	            }
	        } else {
	            this.setHidden(colIndex, false);
	        }
	    };
	
	    /**
	     * Hide specified column
	     * @param  {Number} colIndex Column index
	     */
	
	
	    ColsVisibility.prototype.hideCol = function hideCol(colIndex) {
	        if (colIndex === undefined || this.isColHidden(colIndex)) {
	            return;
	        }
	        if (this.manager && this.contEl) {
	            var itm = _dom2.default.id('col_' + colIndex + '_' + this.tf.id);
	            if (itm) {
	                itm.click();
	            }
	        } else {
	            this.setHidden(colIndex, true);
	        }
	    };
	
	    /**
	     * Determine if specified column is hidden
	     * @param  {Number} colIndex Column index
	     */
	
	
	    ColsVisibility.prototype.isColHidden = function isColHidden(colIndex) {
	        if (this.hiddenCols.indexOf(colIndex) !== -1) {
	            return true;
	        }
	        return false;
	    };
	
	    /**
	     * Toggle visibility of specified column
	     * @param  {Number} colIndex Column index
	     */
	
	
	    ColsVisibility.prototype.toggleCol = function toggleCol(colIndex) {
	        if (colIndex === undefined || this.isColHidden(colIndex)) {
	            this.showCol(colIndex);
	        } else {
	            this.hideCol(colIndex);
	        }
	    };
	
	    /**
	     * Return the indexes of the columns currently hidden
	     * @return {Array} column indexes
	     */
	
	
	    ColsVisibility.prototype.getHiddenCols = function getHiddenCols() {
	        return this.hiddenCols;
	    };
	
	    /**
	     * Remove the columns manager
	     */
	
	
	    ColsVisibility.prototype.destroy = function destroy() {
	        var _this5 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        if (_dom2.default.id(this.contElTgtId)) {
	            _dom2.default.id(this.contElTgtId).innerHTML = '';
	        } else {
	            this.contEl.innerHTML = '';
	            _dom2.default.remove(this.contEl);
	            this.contEl = null;
	        }
	        this.btnEl.innerHTML = '';
	        _dom2.default.remove(this.btnEl);
	        this.btnEl = null;
	
	        this.emitter.off(['hide-column'], function (tf, colIndex) {
	            return _this5.hideCol(colIndex);
	        });
	
	        this.initialized = false;
	    };
	
	    ColsVisibility.prototype._getHeaderText = function _getHeaderText(cell) {
	        if (!cell.hasChildNodes) {
	            return '';
	        }
	
	        for (var i = 0; i < cell.childNodes.length; i++) {
	            var n = cell.childNodes[i];
	            if (n.nodeType === 3) {
	                return n.nodeValue;
	            } else if (n.nodeType === 1) {
	                if (n.id && n.id.indexOf('popUp') !== -1) {
	                    continue;
	                } else {
	                    return _dom2.default.getText(n);
	                }
	            }
	            continue;
	        }
	        return '';
	    };
	
	    ColsVisibility.prototype._hideCells = function _hideCells(tbl, colIndex, hide) {
	        for (var i = 0; i < tbl.rows.length; i++) {
	            var row = tbl.rows[i];
	            var cell = row.cells[colIndex];
	            if (cell) {
	                cell.style.display = hide ? 'none' : '';
	            }
	        }
	    };
	
	    ColsVisibility.prototype._hideAtStart = function _hideAtStart() {
	        var _this6 = this;
	
	        if (!this.atStart) {
	            return;
	        }
	        this.atStart.forEach(function (colIdx) {
	            _this6.hideCol(colIdx);
	        });
	    };
	
	    return ColsVisibility;
	}(_feature.Feature);
	
	exports.default = ColsVisibility;

/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _feature = __webpack_require__(10);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _types = __webpack_require__(4);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FiltersVisibility = function (_Feature) {
	    _inherits(FiltersVisibility, _Feature);
	
	    /**
	     * Filters Row Visibility extension
	     * @param {Object} tf TableFilter instance
	     * @param {Object} f Config
	     */
	
	    function FiltersVisibility(tf, f) {
	        _classCallCheck(this, FiltersVisibility);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, f.name));
	
	        _this.name = f.name;
	        _this.desc = f.description || 'Filters row visibility manager';
	
	        // Path and image filenames
	        _this.stylesheet = f.stylesheet || 'filtersVisibility.css';
	        _this.icnExpand = f.expand_icon_name || 'icn_exp.png';
	        _this.icnCollapse = f.collapse_icon_name || 'icn_clp.png';
	
	        //expand/collapse filters span element
	        _this.contEl = null;
	        //expand/collapse filters btn element
	        _this.btnEl = null;
	
	        _this.icnExpandHtml = '<img src="' + tf.themesPath + _this.icnExpand + '" alt="Expand filters" >';
	        _this.icnCollapseHtml = '<img src="' + tf.themesPath + _this.icnCollapse + '" alt="Collapse filters" >';
	        _this.defaultText = 'Toggle filters';
	
	        //id of container element
	        _this.targetId = f.target_id || null;
	        //enables/disables expand/collapse icon
	        _this.enableIcon = f.enable_icon === false ? false : true;
	        _this.btnText = f.btn_text || '';
	
	        //defines expand/collapse filters text
	        _this.collapseBtnHtml = _this.enableIcon ? _this.icnCollapseHtml + _this.btnText : _this.btnText || _this.defaultText;
	        _this.expandBtnHtml = _this.enableIcon ? _this.icnExpandHtml + _this.btnText : _this.btnText || _this.defaultText;
	
	        //defines expand/collapse filters button innerHtml
	        _this.btnHtml = f.btn_html || null;
	        //defines css class for expand/collapse filters button
	        _this.btnCssClass = f.btn_css_class || 'btnExpClpFlt';
	        //defines css class span containing expand/collapse filters
	        _this.contCssClass = f.cont_css_class || 'expClpFlt';
	        _this.filtersRowIndex = !(0, _types.isUndef)(f.filters_row_index) ? f.filters_row_index : tf.getFiltersRowIndex();
	
	        _this.visibleAtStart = !(0, _types.isUndef)(f.visible_at_start) ? Boolean(f.visible_at_start) : true;
	
	        // Prefix
	        _this.prfx = 'fltsVis_';
	
	        //callback before filters row is shown
	        _this.onBeforeShow = (0, _types.isFn)(f.on_before_show) ? f.on_before_show : null;
	        //callback after filters row is shown
	        _this.onAfterShow = (0, _types.isFn)(f.on_after_show) ? f.on_after_show : null;
	        //callback before filters row is hidden
	        _this.onBeforeHide = (0, _types.isFn)(f.on_before_hide) ? f.on_before_hide : null;
	        //callback after filters row is hidden
	        _this.onAfterHide = (0, _types.isFn)(f.on_after_hide) ? f.on_after_hide : null;
	
	        //Loads extension stylesheet
	        tf.import(f.name + 'Style', tf.stylePath + _this.stylesheet, null, 'link');
	
	        _this.enable();
	        return _this;
	    }
	
	    /**
	     * Initialise extension
	     */
	
	
	    FiltersVisibility.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	
	        this.buildUI();
	        this.initialized = true;
	        this.emitter.on(['show-filters'], function (tf, visible) {
	            return _this2.show(visible);
	        });
	        this.emitter.emit('filters-visibility-initialized', this.tf, this);
	    };
	
	    /**
	     * Build UI elements
	     */
	
	
	    FiltersVisibility.prototype.buildUI = function buildUI() {
	        var _this3 = this;
	
	        var tf = this.tf;
	        var span = _dom2.default.create('span', ['id', this.prfx + tf.id]);
	        span.className = this.contCssClass;
	
	        //Container element (rdiv or custom element)
	        if (!this.targetId) {
	            tf.setToolbar();
	        }
	        var targetEl = !this.targetId ? tf.rDiv : _dom2.default.id(this.targetId);
	
	        if (!this.targetId) {
	            var firstChild = targetEl.firstChild;
	            firstChild.parentNode.insertBefore(span, firstChild);
	        } else {
	            targetEl.appendChild(span);
	        }
	
	        var btn = void 0;
	        if (!this.btnHtml) {
	            btn = _dom2.default.create('a', ['href', 'javascript:void(0);']);
	            btn.className = this.btnCssClass;
	            btn.title = this.btnText || this.defaultText;
	            btn.innerHTML = this.collapseBtnHtml;
	            span.appendChild(btn);
	        } else {
	            //Custom html
	            span.innerHTML = this.btnHtml;
	            btn = span.firstChild;
	        }
	
	        _event2.default.add(btn, 'click', function () {
	            return _this3.toggle();
	        });
	
	        this.contEl = span;
	        this.btnEl = btn;
	
	        if (!this.visibleAtStart) {
	            this.toggle();
	        }
	    };
	
	    /**
	     * Toggle filters visibility
	     */
	
	
	    FiltersVisibility.prototype.toggle = function toggle() {
	        var tf = this.tf;
	        var tbl = tf.gridLayout ? tf.feature('gridLayout').headTbl : tf.tbl;
	        var fltRow = tbl.rows[this.filtersRowIndex];
	        var isDisplayed = fltRow.style.display === '';
	
	        this.show(!isDisplayed);
	    };
	
	    /**
	     * Show or hide filters
	     *
	     * @param {boolean} [visible=true] Visibility flag
	     */
	
	
	    FiltersVisibility.prototype.show = function show() {
	        var visible = arguments.length <= 0 || arguments[0] === undefined ? true : arguments[0];
	
	        var tf = this.tf;
	        var tbl = tf.gridLayout ? tf.feature('gridLayout').headTbl : tf.tbl;
	        var fltRow = tbl.rows[this.filtersRowIndex];
	
	        if (this.onBeforeShow && visible) {
	            this.onBeforeShow.call(this, this);
	        }
	        if (this.onBeforeHide && !visible) {
	            this.onBeforeHide.call(null, this);
	        }
	
	        fltRow.style.display = visible ? '' : 'none';
	        if (this.enableIcon && !this.btnHtml) {
	            this.btnEl.innerHTML = visible ? this.collapseBtnHtml : this.expandBtnHtml;
	        }
	
	        if (this.onAfterShow && visible) {
	            this.onAfterShow.call(null, this);
	        }
	        if (this.onAfterHide && !visible) {
	            this.onAfterHide.call(null, this);
	        }
	
	        this.emitter.emit('filters-toggled', tf, this, visible);
	    };
	
	    /**
	     * Destroy the UI
	     */
	
	
	    FiltersVisibility.prototype.destroy = function destroy() {
	        var _this4 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	
	        this.emitter.off(['show-filters'], function (tf, visible) {
	            return _this4.show(visible);
	        });
	
	        this.btnEl.innerHTML = '';
	        _dom2.default.remove(this.btnEl);
	        this.btnEl = null;
	
	        this.contEl.innerHTML = '';
	        _dom2.default.remove(this.contEl);
	        this.contEl = null;
	        this.initialized = false;
	    };
	
	    return FiltersVisibility;
	}(_feature.Feature);
	
	exports.default = FiltersVisibility;

/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _feature = __webpack_require__(10);
	
	var _types = __webpack_require__(4);
	
	var _dom = __webpack_require__(3);
	
	var _dom2 = _interopRequireDefault(_dom);
	
	var _event = __webpack_require__(1);
	
	var _event2 = _interopRequireDefault(_event);
	
	var _date = __webpack_require__(6);
	
	var _date2 = _interopRequireDefault(_date);
	
	var _helpers = __webpack_require__(7);
	
	var _const = __webpack_require__(11);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AdapterSortableTable = function (_Feature) {
	    _inherits(AdapterSortableTable, _Feature);
	
	    /**
	     * SortableTable Adapter module
	     * @param {Object} tf TableFilter instance
	     */
	
	    function AdapterSortableTable(tf, opts) {
	        _classCallCheck(this, AdapterSortableTable);
	
	        var _this = _possibleConstructorReturn(this, _Feature.call(this, tf, opts.name));
	
	        _this.name = opts.name;
	        _this.desc = opts.description || 'Sortable table';
	
	        //indicates if table previously sorted
	        _this.sorted = false;
	
	        _this.sortTypes = (0, _types.isArray)(opts.types) ? opts.types : [];
	        _this.sortColAtStart = (0, _types.isArray)(opts.sort_col_at_start) ? opts.sort_col_at_start : null;
	        _this.asyncSort = Boolean(opts.async_sort);
	        _this.triggerIds = (0, _types.isArray)(opts.trigger_ids) ? opts.trigger_ids : [];
	
	        // edit .sort-arrow.descending / .sort-arrow.ascending in
	        // tablefilter.css to reflect any path change
	        _this.imgPath = opts.images_path || tf.themesPath;
	        _this.imgBlank = opts.image_blank || 'blank.png';
	        _this.imgClassName = opts.image_class_name || 'sort-arrow';
	        _this.imgAscClassName = opts.image_asc_class_name || 'ascending';
	        _this.imgDescClassName = opts.image_desc_class_name || 'descending';
	        //cell attribute storing custom key
	        _this.customKey = opts.custom_key || 'data-tf-sortKey';
	
	        // callback invoked after sort is loaded and instanciated
	        _this.onSortLoaded = (0, _types.isFn)(opts.on_sort_loaded) ? opts.on_sort_loaded : null;
	        // callback invoked before table is sorted
	        _this.onBeforeSort = (0, _types.isFn)(opts.on_before_sort) ? opts.on_before_sort : null;
	        // callback invoked after table is sorted
	        _this.onAfterSort = (0, _types.isFn)(opts.on_after_sort) ? opts.on_after_sort : null;
	
	        _this.enable();
	        return _this;
	    }
	
	    AdapterSortableTable.prototype.init = function init() {
	        var _this2 = this;
	
	        if (this.initialized) {
	            return;
	        }
	        var tf = this.tf;
	        var adpt = this;
	
	        // SortableTable class sanity check (sortabletable.js)
	        if ((0, _types.isUndef)(SortableTable)) {
	            throw new Error('SortableTable class not found.');
	        }
	
	        this.overrideSortableTable();
	        this.setSortTypes();
	
	        //Column sort at start
	        var sortColAtStart = adpt.sortColAtStart;
	        if (sortColAtStart) {
	            this.stt.sort(sortColAtStart[0], sortColAtStart[1]);
	        }
	
	        if (this.onSortLoaded) {
	            this.onSortLoaded.call(null, tf, this);
	        }
	
	        /*** SortableTable callbacks ***/
	        this.stt.onbeforesort = function () {
	            if (adpt.onBeforeSort) {
	                adpt.onBeforeSort.call(null, tf, adpt.stt.sortColumn);
	            }
	
	            /*** sort behaviour for paging ***/
	            if (tf.paging) {
	                tf.feature('paging').disable();
	            }
	        };
	
	        this.stt.onsort = function () {
	            adpt.sorted = true;
	
	            //sort behaviour for paging
	            if (tf.paging) {
	                var paginator = tf.feature('paging');
	                // recalculate valid rows index as sorting may have change it
	                tf.getValidRows(true);
	                paginator.enable();
	                paginator.setPage(paginator.getPage());
	            }
	
	            if (adpt.onAfterSort) {
	                adpt.onAfterSort.call(null, tf, adpt.stt.sortColumn, adpt.stt.descending);
	            }
	
	            adpt.emitter.emit('column-sorted', tf, adpt.stt.sortColumn, adpt.stt.descending);
	        };
	
	        this.emitter.on(['sort'], function (tf, colIdx, desc) {
	            return _this2.sortByColumnIndex(colIdx, desc);
	        });
	
	        this.initialized = true;
	        this.emitter.emit('sort-initialized', tf, this);
	    };
	
	    /**
	     * Sort specified column
	     * @param {Number} colIdx Column index
	     * @param {Boolean} desc Optional: descending manner
	     */
	
	
	    AdapterSortableTable.prototype.sortByColumnIndex = function sortByColumnIndex(colIdx, desc) {
	        this.stt.sort(colIdx, desc);
	    };
	
	    AdapterSortableTable.prototype.overrideSortableTable = function overrideSortableTable() {
	        var adpt = this,
	            tf = this.tf;
	
	        /**
	         * Overrides headerOnclick method in order to handle th event
	         * @param  {Object} e [description]
	         */
	        SortableTable.prototype.headerOnclick = function (evt) {
	            if (!adpt.initialized) {
	                return;
	            }
	
	            // find Header element
	            var el = evt.target || evt.srcElement;
	
	            while (el.tagName !== _const.CELL_TAG && el.tagName !== _const.HEADER_TAG) {
	                el = el.parentNode;
	            }
	
	            this.sort(SortableTable.msie ? SortableTable.getCellIndex(el) : el.cellIndex);
	        };
	
	        /**
	         * Overrides getCellIndex IE returns wrong cellIndex when columns are
	         * hidden
	         * @param  {Object} oTd TD element
	         * @return {Number}     Cell index
	         */
	        SortableTable.getCellIndex = function (oTd) {
	            var cells = oTd.parentNode.cells,
	                l = cells.length,
	                i = void 0;
	            for (i = 0; cells[i] !== oTd && i < l; i++) {}
	            return i;
	        };
	
	        /**
	         * Overrides initHeader in order to handle filters row position
	         * @param  {Array} oSortTypes
	         */
	        SortableTable.prototype.initHeader = function (oSortTypes) {
	            var stt = this;
	            if (!stt.tHead) {
	                if (tf.gridLayout) {
	                    stt.tHead = tf.feature('gridLayout').headTbl.tHead;
	                } else {
	                    return;
	                }
	            }
	
	            stt.headersRow = tf.headersRow;
	            var cells = stt.tHead.rows[stt.headersRow].cells;
	            stt.sortTypes = oSortTypes || [];
	            var l = cells.length;
	            var img = void 0,
	                c = void 0;
	
	            for (var i = 0; i < l; i++) {
	                c = cells[i];
	                if (stt.sortTypes[i] !== null && stt.sortTypes[i] !== 'None') {
	                    c.style.cursor = 'pointer';
	                    img = _dom2.default.create('img', ['src', adpt.imgPath + adpt.imgBlank]);
	                    c.appendChild(img);
	                    if (stt.sortTypes[i] !== null) {
	                        c.setAttribute('_sortType', stt.sortTypes[i]);
	                    }
	                    _event2.default.add(c, 'click', stt._headerOnclick);
	                } else {
	                    c.setAttribute('_sortType', oSortTypes[i]);
	                    c._sortType = 'None';
	                }
	            }
	            stt.updateHeaderArrows();
	        };
	
	        /**
	         * Overrides updateHeaderArrows in order to handle arrows indicators
	         */
	        SortableTable.prototype.updateHeaderArrows = function () {
	            var stt = this;
	            var cells = void 0,
	                l = void 0,
	                img = void 0;
	
	            // external headers
	            if (adpt.asyncSort && adpt.triggerIds.length > 0) {
	                var triggers = adpt.triggerIds;
	                cells = [];
	                l = triggers.length;
	                for (var j = 0; j < triggers.length; j++) {
	                    cells.push(_dom2.default.id(triggers[j]));
	                }
	            } else {
	                if (!this.tHead) {
	                    return;
	                }
	                cells = stt.tHead.rows[stt.headersRow].cells;
	                l = cells.length;
	            }
	            for (var i = 0; i < l; i++) {
	                var cellAttr = cells[i].getAttribute('_sortType');
	                if (cellAttr !== null && cellAttr !== 'None') {
	                    img = cells[i].lastChild || cells[i];
	                    if (img.nodeName.toLowerCase() !== 'img') {
	                        img = _dom2.default.create('img', ['src', adpt.imgPath + adpt.imgBlank]);
	                        cells[i].appendChild(img);
	                    }
	                    if (i === stt.sortColumn) {
	                        img.className = adpt.imgClassName + ' ' + (this.descending ? adpt.imgDescClassName : adpt.imgAscClassName);
	                    } else {
	                        img.className = adpt.imgClassName;
	                    }
	                }
	            }
	        };
	
	        /**
	         * Overrides getRowValue for custom key value feature
	         * @param  {Object} oRow    Row element
	         * @param  {String} sType
	         * @param  {Number} nColumn
	         * @return {String}
	         */
	        SortableTable.prototype.getRowValue = function (oRow, sType, nColumn) {
	            var stt = this;
	            // if we have defined a custom getRowValue use that
	            var sortTypeInfo = stt._sortTypeInfo[sType];
	            if (sortTypeInfo && sortTypeInfo.getRowValue) {
	                return sortTypeInfo.getRowValue(oRow, nColumn);
	            }
	            var c = oRow.cells[nColumn];
	            var s = SortableTable.getInnerText(c);
	            return stt.getValueFromString(s, sType);
	        };
	
	        /**
	         * Overrides getInnerText in order to avoid Firefox unexpected sorting
	         * behaviour with untrimmed text elements
	         * @param  {Object} oNode DOM element
	         * @return {String}       DOM element inner text
	         */
	        SortableTable.getInnerText = function (oNode) {
	            if (!oNode) {
	                return;
	            }
	            if (oNode.getAttribute(adpt.customKey)) {
	                return oNode.getAttribute(adpt.customKey);
	            } else {
	                return _dom2.default.getText(oNode);
	            }
	        };
	    };
	
	    AdapterSortableTable.prototype.addSortType = function addSortType() {
	        var args = arguments;
	        SortableTable.prototype.addSortType(args[0], args[1], args[2], args[3]);
	    };
	
	    AdapterSortableTable.prototype.setSortTypes = function setSortTypes() {
	        var _this3 = this;
	
	        var tf = this.tf,
	            sortTypes = this.sortTypes,
	            _sortTypes = [];
	
	        for (var i = 0; i < tf.nbCells; i++) {
	            var colType = void 0;
	
	            if (sortTypes[i]) {
	                colType = sortTypes[i].toLowerCase();
	                if (colType === _const.NONE) {
	                    colType = 'None';
	                }
	            } else {
	                // resolve column types
	                if (tf.hasColNbFormat && tf.colNbFormat[i] !== null) {
	                    colType = tf.colNbFormat[i].toLowerCase();
	                } else if (tf.hasColDateType && tf.colDateType[i] !== null) {
	                    colType = tf.colDateType[i].toLowerCase() + 'date';
	                } else {
	                    colType = 'String';
	                }
	            }
	            _sortTypes.push(colType);
	        }
	
	        //Public TF method to add sort type
	
	        //Custom sort types
	        this.addSortType('number', Number);
	        this.addSortType('caseinsensitivestring', SortableTable.toUpperCase);
	        this.addSortType('date', SortableTable.toDate);
	        this.addSortType('string');
	        this.addSortType('us', usNumberConverter);
	        this.addSortType('eu', euNumberConverter);
	        this.addSortType('dmydate', dmyDateConverter);
	        this.addSortType('ymddate', ymdDateConverter);
	        this.addSortType('mdydate', mdyDateConverter);
	        this.addSortType('ddmmmyyyydate', ddmmmyyyyDateConverter);
	        this.addSortType('ipaddress', ipAddress, sortIP);
	
	        this.stt = new SortableTable(tf.tbl, _sortTypes);
	
	        /*** external table headers adapter ***/
	        if (this.asyncSort && this.triggerIds.length > 0) {
	            (function () {
	                var triggers = _this3.triggerIds;
	                for (var j = 0; j < triggers.length; j++) {
	                    if (triggers[j] === null) {
	                        continue;
	                    }
	                    var trigger = _dom2.default.id(triggers[j]);
	                    if (trigger) {
	                        trigger.style.cursor = 'pointer';
	
	                        _event2.default.add(trigger, 'click', function (evt) {
	                            var elm = evt.target;
	                            if (!_this3.tf.sort) {
	                                return;
	                            }
	                            _this3.stt.asyncSort(triggers.indexOf(elm.id));
	                        });
	                        trigger.setAttribute('_sortType', _sortTypes[j]);
	                    }
	                }
	            })();
	        }
	    };
	
	    /**
	     * Destroy sort
	     */
	
	
	    AdapterSortableTable.prototype.destroy = function destroy() {
	        var _this4 = this;
	
	        if (!this.initialized) {
	            return;
	        }
	        var tf = this.tf;
	        this.emitter.off(['sort'], function (tf, colIdx, desc) {
	            return _this4.sortByColumnIndex(colIdx, desc);
	        });
	        this.sorted = false;
	        this.initialized = false;
	        this.stt.destroy();
	
	        var ids = tf.getFiltersId();
	        for (var idx = 0; idx < ids.length; idx++) {
	            var header = tf.getHeaderElement(idx);
	            var img = _dom2.default.tag(header, 'img');
	
	            if (img.length === 1) {
	                header.removeChild(img[0]);
	            }
	        }
	        this.initialized = false;
	    };
	
	    return AdapterSortableTable;
	}(_feature.Feature);
	
	//Converters
	
	
	exports.default = AdapterSortableTable;
	function usNumberConverter(s) {
	    return (0, _helpers.removeNbFormat)(s, 'us');
	}
	function euNumberConverter(s) {
	    return (0, _helpers.removeNbFormat)(s, 'eu');
	}
	function dateConverter(s, format) {
	    return _date2.default.format(s, format);
	}
	function dmyDateConverter(s) {
	    return dateConverter(s, 'DMY');
	}
	function mdyDateConverter(s) {
	    return dateConverter(s, 'MDY');
	}
	function ymdDateConverter(s) {
	    return dateConverter(s, 'YMD');
	}
	function ddmmmyyyyDateConverter(s) {
	    return dateConverter(s, 'DDMMMYYYY');
	}
	
	function ipAddress(value) {
	    var vals = value.split('.');
	    for (var x in vals) {
	        var val = vals[x];
	        while (3 > val.length) {
	            val = '0' + val;
	        }
	        vals[x] = val;
	    }
	    return vals.join('.');
	}
	
	function sortIP(a, b) {
	    var aa = ipAddress(a.value.toLowerCase());
	    var bb = ipAddress(b.value.toLowerCase());
	    if (aa === bb) {
	        return 0;
	    } else if (aa < bb) {
	        return -1;
	    } else {
	        return 1;
	    }
	}

/***/ },

/***/ 37:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _adapterSortabletable = __webpack_require__(36);
	
	var _adapterSortabletable2 = _interopRequireDefault(_adapterSortabletable);
	
	var _root = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (!_root.root.SortableTable) {
	    __webpack_require__(38);
	}
	
	exports.default = _adapterSortabletable2.default;

/***/ },

/***/ 38:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(39)(__webpack_require__(40)+"\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///C:/Users/max.guglielmi/Documents/dev/perso/javascript/GitHub/TableFilter/libs/sortabletable.js")

/***/ },

/***/ 39:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },

/***/ 40:
/***/ function(module, exports) {

	module.exports = "/*----------------------------------------------------------------------------\\\r\n|                            Sortable Table 1.12                              |\r\n|-----------------------------------------------------------------------------|\r\n|                         Created by Erik Arvidsson                           |\r\n|                  (http://webfx.eae.net/contact.html#erik)                   |\r\n|                      For WebFX (http://webfx.eae.net/)                      |\r\n|-----------------------------------------------------------------------------|\r\n| A DOM 1 based script that allows an ordinary HTML table to be sortable.     |\r\n|-----------------------------------------------------------------------------|\r\n|                  Copyright (c) 1998 - 2006 Erik Arvidsson                   |\r\n|-----------------------------------------------------------------------------|\r\n| Licensed under the Apache License, Version 2.0 (the \"License\"); you may not |\r\n| use this file except in compliance with the License.  You may obtain a copy |\r\n| of the License at http://www.apache.org/licenses/LICENSE-2.0                |\r\n| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |\r\n| Unless  required  by  applicable law or  agreed  to  in  writing,  software |\r\n| distributed under the License is distributed on an  \"AS IS\" BASIS,  WITHOUT |\r\n| WARRANTIES OR  CONDITIONS OF ANY KIND,  either express or implied.  See the |\r\n| License  for the  specific language  governing permissions  and limitations |\r\n| under the License.                                                          |\r\n|-----------------------------------------------------------------------------|\r\n| 2003-01-10 | First version                                                  |\r\n| 2003-01-19 | Minor changes to the date parsing                              |\r\n| 2003-01-28 | JScript 5.0 fixes (no support for 'in' operator)               |\r\n| 2003-02-01 | Sloppy typo like error fixed in getInnerText                   |\r\n| 2003-07-04 | Added workaround for IE cellIndex bug.                         |\r\n| 2003-11-09 | The bDescending argument to sort was not correctly working     |\r\n|            | Using onclick DOM0 event if no support for addEventListener    |\r\n|            | or attachEvent                                                 |\r\n| 2004-01-13 | Adding addSortType and removeSortType which makes it a lot     |\r\n|            | easier to add new, custom sort types.                          |\r\n| 2004-01-27 | Switch to use descending = false as the default sort order.    |\r\n|            | Change defaultDescending to suit your needs.                   |\r\n| 2004-03-14 | Improved sort type None look and feel a bit                    |\r\n| 2004-08-26 | Made the handling of tBody and tHead more flexible. Now you    |\r\n|            | can use another tHead or no tHead, and you can chose some      |\r\n|            | other tBody.                                                   |\r\n| 2006-04-25 | Changed license to Apache Software License 2.0                 |\r\n|-----------------------------------------------------------------------------|\r\n| Created 2003-01-10 | All changes are in the log above. | Updated 2006-04-25 |\r\n\\----------------------------------------------------------------------------*/\r\n\r\n\r\nfunction SortableTable(oTable, oSortTypes) {\r\n\r\n\tthis.sortTypes = oSortTypes || [];\r\n\r\n\tthis.sortColumn = null;\r\n\tthis.descending = null;\r\n\r\n\tvar oThis = this;\r\n\tthis._headerOnclick = function (e) {\r\n\t\toThis.headerOnclick(e);\r\n\t};\r\n\r\n\tif (oTable) {\r\n\t\tthis.setTable( oTable );\r\n\t\tthis.document = oTable.ownerDocument || oTable.document;\r\n\t}\r\n\telse {\r\n\t\tthis.document = document;\r\n\t}\r\n\r\n\r\n\t// only IE needs this\r\n\tvar win = this.document.defaultView || this.document.parentWindow;\r\n\tthis._onunload = function () {\r\n\t\toThis.destroy();\r\n\t};\r\n\tif (win && typeof win.attachEvent != \"undefined\") {\r\n\t\twin.attachEvent(\"onunload\", this._onunload);\r\n\t}\r\n}\r\n\r\nSortableTable.gecko = navigator.product == \"Gecko\";\r\nSortableTable.msie = /msie/i.test(navigator.userAgent);\r\n// Mozilla is faster when doing the DOM manipulations on\r\n// an orphaned element. MSIE is not\r\nSortableTable.removeBeforeSort = SortableTable.gecko;\r\n\r\nSortableTable.prototype.onsort = function () {};\r\n\r\n// default sort order. true -> descending, false -> ascending\r\nSortableTable.prototype.defaultDescending = false;\r\n\r\n// shared between all instances. This is intentional to allow external files\r\n// to modify the prototype\r\nSortableTable.prototype._sortTypeInfo = {};\r\n\r\nSortableTable.prototype.setTable = function (oTable) {\r\n\tif ( this.tHead )\r\n\t\tthis.uninitHeader();\r\n\tthis.element = oTable;\r\n\tthis.setTHead( oTable.tHead );\r\n\tthis.setTBody( oTable.tBodies[0] );\r\n};\r\n\r\nSortableTable.prototype.setTHead = function (oTHead) {\r\n\tif (this.tHead && this.tHead != oTHead )\r\n\t\tthis.uninitHeader();\r\n\tthis.tHead = oTHead;\r\n\tthis.initHeader( this.sortTypes );\r\n};\r\n\r\nSortableTable.prototype.setTBody = function (oTBody) {\r\n\tthis.tBody = oTBody;\r\n};\r\n\r\nSortableTable.prototype.setSortTypes = function ( oSortTypes ) {\r\n\tif ( this.tHead )\r\n\t\tthis.uninitHeader();\r\n\tthis.sortTypes = oSortTypes || [];\r\n\tif ( this.tHead )\r\n\t\tthis.initHeader( this.sortTypes );\r\n};\r\n\r\n// adds arrow containers and events\r\n// also binds sort type to the header cells so that reordering columns does\r\n// not break the sort types\r\nSortableTable.prototype.initHeader = function (oSortTypes) {\r\n\tif (!this.tHead) return;\r\n\tvar cells = this.tHead.rows[0].cells;\r\n\tvar doc = this.tHead.ownerDocument || this.tHead.document;\r\n\tthis.sortTypes = oSortTypes || [];\r\n\tvar l = cells.length;\r\n\tvar img, c;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\tc = cells[i];\r\n\t\tif (this.sortTypes[i] != null && this.sortTypes[i] != \"None\") {\r\n\t\t\timg = doc.createElement(\"IMG\");\r\n\t\t\timg.src = \"images/blank.png\";\r\n\t\t\tc.appendChild(img);\r\n\t\t\tif (this.sortTypes[i] != null)\r\n\t\t\t\tc._sortType = this.sortTypes[i];\r\n\t\t\tif (typeof c.addEventListener != \"undefined\")\r\n\t\t\t\tc.addEventListener(\"click\", this._headerOnclick, false);\r\n\t\t\telse if (typeof c.attachEvent != \"undefined\")\r\n\t\t\t\tc.attachEvent(\"onclick\", this._headerOnclick);\r\n\t\t\telse\r\n\t\t\t\tc.onclick = this._headerOnclick;\r\n\t\t}\r\n\t\telse\r\n\t\t{\r\n\t\t\tc.setAttribute( \"_sortType\", oSortTypes[i] );\r\n\t\t\tc._sortType = \"None\";\r\n\t\t}\r\n\t}\r\n\tthis.updateHeaderArrows();\r\n};\r\n\r\n// remove arrows and events\r\nSortableTable.prototype.uninitHeader = function () {\r\n\tif (!this.tHead) return;\r\n\tvar cells = this.tHead.rows[0].cells;\r\n\tvar l = cells.length;\r\n\tvar c;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\tc = cells[i];\r\n\t\tif (c._sortType != null && c._sortType != \"None\") {\r\n\t\t\tc.removeChild(c.lastChild);\r\n\t\t\tif (typeof c.removeEventListener != \"undefined\")\r\n\t\t\t\tc.removeEventListener(\"click\", this._headerOnclick, false);\r\n\t\t\telse if (typeof c.detachEvent != \"undefined\")\r\n\t\t\t\tc.detachEvent(\"onclick\", this._headerOnclick);\r\n\t\t\tc._sortType = null;\r\n\t\t\tc.removeAttribute( \"_sortType\" );\r\n\t\t}\r\n\t}\r\n};\r\n\r\nSortableTable.prototype.updateHeaderArrows = function () {\r\n\tif (!this.tHead) return;\r\n\tvar cells = this.tHead.rows[0].cells;\r\n\tvar l = cells.length;\r\n\tvar img;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\tif (cells[i]._sortType != null && cells[i]._sortType != \"None\") {\r\n\t\t\timg = cells[i].lastChild;\r\n\t\t\tif (i == this.sortColumn)\r\n\t\t\t\timg.className = \"sort-arrow \" + (this.descending ? \"descending\" : \"ascending\");\r\n\t\t\telse\r\n\t\t\t\timg.className = \"sort-arrow\";\r\n\t\t}\r\n\t}\r\n};\r\n\r\nSortableTable.prototype.headerOnclick = function (e) {\r\n\t// find TD element\r\n\tvar el = e.target || e.srcElement;\r\n\twhile (el.tagName != \"TD\")\r\n\t\tel = el.parentNode;\r\n\r\n\tthis.sort(SortableTable.msie ? SortableTable.getCellIndex(el) : el.cellIndex);\r\n};\r\n\r\n// IE returns wrong cellIndex when columns are hidden\r\nSortableTable.getCellIndex = function (oTd) {\r\n\tvar cells = oTd.parentNode.childNodes\r\n\tvar l = cells.length;\r\n\tvar i;\r\n\tfor (i = 0; cells[i] != oTd && i < l; i++)\r\n\t\t;\r\n\treturn i;\r\n};\r\n\r\nSortableTable.prototype.getSortType = function (nColumn) {\r\n\treturn this.sortTypes[nColumn] || \"String\";\r\n};\r\n\r\n// only nColumn is required\r\n// if bDescending is left out the old value is taken into account\r\n// if sSortType is left out the sort type is found from the sortTypes array\r\n\r\nSortableTable.prototype.sort = function (nColumn, bDescending, sSortType) {\r\n\tif (!this.tBody) return;\r\n\tif (sSortType == null)\r\n\t\tsSortType = this.getSortType(nColumn);\r\n\r\n\t// exit if None\r\n\tif (sSortType == \"None\")\r\n\t\treturn;\r\n\r\n\tif (bDescending == null) {\r\n\t\tif (this.sortColumn != nColumn)\r\n\t\t\tthis.descending = this.defaultDescending;\r\n\t\telse\r\n\t\t\tthis.descending = !this.descending;\r\n\t}\r\n\telse\r\n\t\tthis.descending = bDescending;\r\n\r\n\tthis.sortColumn = nColumn;\r\n\r\n\tif (typeof this.onbeforesort == \"function\")\r\n\t\tthis.onbeforesort();\r\n\r\n\tvar f = this.getSortFunction(sSortType, nColumn);\r\n\tvar a = this.getCache(sSortType, nColumn);\r\n\tvar tBody = this.tBody;\r\n\r\n\ta.sort(f);\r\n\r\n\tif (this.descending)\r\n\t\ta.reverse();\r\n\r\n\tif (SortableTable.removeBeforeSort) {\r\n\t\t// remove from doc\r\n\t\tvar nextSibling = tBody.nextSibling;\r\n\t\tvar p = tBody.parentNode;\r\n\t\tp.removeChild(tBody);\r\n\t}\r\n\r\n\t// insert in the new order\r\n\tvar l = a.length;\r\n\tfor (var i = 0; i < l; i++)\r\n\t\ttBody.appendChild(a[i].element);\r\n\r\n\tif (SortableTable.removeBeforeSort) {\r\n\t\t// insert into doc\r\n\t\tp.insertBefore(tBody, nextSibling);\r\n\t}\r\n\r\n\tthis.updateHeaderArrows();\r\n\r\n\tthis.destroyCache(a);\r\n\r\n\tif (typeof this.onsort == \"function\")\r\n\t\tthis.onsort();\r\n};\r\n\r\nSortableTable.prototype.asyncSort = function (nColumn, bDescending, sSortType) {\r\n\tvar oThis = this;\r\n\tthis._asyncsort = function () {\r\n\t\toThis.sort(nColumn, bDescending, sSortType);\r\n\t};\r\n\twindow.setTimeout(this._asyncsort, 1);\r\n};\r\n\r\nSortableTable.prototype.getCache = function (sType, nColumn) {\r\n\tif (!this.tBody) return [];\r\n\tvar rows = this.tBody.rows;\r\n\tvar l = rows.length;\r\n\tvar a = new Array(l);\r\n\tvar r;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\tr = rows[i];\r\n\t\ta[i] = {\r\n\t\t\tvalue:\t\tthis.getRowValue(r, sType, nColumn),\r\n\t\t\telement:\tr\r\n\t\t};\r\n\t};\r\n\treturn a;\r\n};\r\n\r\nSortableTable.prototype.destroyCache = function (oArray) {\r\n\tvar l = oArray.length;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\toArray[i].value = null;\r\n\t\toArray[i].element = null;\r\n\t\toArray[i] = null;\r\n\t}\r\n};\r\n\r\nSortableTable.prototype.getRowValue = function (oRow, sType, nColumn) {\r\n\t// if we have defined a custom getRowValue use that\r\n\tif (this._sortTypeInfo[sType] && this._sortTypeInfo[sType].getRowValue)\r\n\t\treturn this._sortTypeInfo[sType].getRowValue(oRow, nColumn);\r\n\r\n\tvar s;\r\n\tvar c = oRow.cells[nColumn];\r\n\tif (typeof c.innerText != \"undefined\")\r\n\t\ts = c.innerText;\r\n\telse\r\n\t\ts = SortableTable.getInnerText(c);\r\n\treturn this.getValueFromString(s, sType);\r\n};\r\n\r\nSortableTable.getInnerText = function (oNode) {\r\n\tvar s = \"\";\r\n\tvar cs = oNode.childNodes;\r\n\tvar l = cs.length;\r\n\tfor (var i = 0; i < l; i++) {\r\n\t\tswitch (cs[i].nodeType) {\r\n\t\t\tcase 1: //ELEMENT_NODE\r\n\t\t\t\ts += SortableTable.getInnerText(cs[i]);\r\n\t\t\t\tbreak;\r\n\t\t\tcase 3:\t//TEXT_NODE\r\n\t\t\t\ts += cs[i].nodeValue;\r\n\t\t\t\tbreak;\r\n\t\t}\r\n\t}\r\n\treturn s;\r\n};\r\n\r\nSortableTable.prototype.getValueFromString = function (sText, sType) {\r\n\tif (this._sortTypeInfo[sType])\r\n\t\treturn this._sortTypeInfo[sType].getValueFromString( sText );\r\n\treturn sText;\r\n\t/*\r\n\tswitch (sType) {\r\n\t\tcase \"Number\":\r\n\t\t\treturn Number(sText);\r\n\t\tcase \"CaseInsensitiveString\":\r\n\t\t\treturn sText.toUpperCase();\r\n\t\tcase \"Date\":\r\n\t\t\tvar parts = sText.split(\"-\");\r\n\t\t\tvar d = new Date(0);\r\n\t\t\td.setFullYear(parts[0]);\r\n\t\t\td.setDate(parts[2]);\r\n\t\t\td.setMonth(parts[1] - 1);\r\n\t\t\treturn d.valueOf();\r\n\t}\r\n\treturn sText;\r\n\t*/\r\n\t};\r\n\r\nSortableTable.prototype.getSortFunction = function (sType, nColumn) {\r\n\tif (this._sortTypeInfo[sType])\r\n\t\treturn this._sortTypeInfo[sType].compare;\r\n\treturn SortableTable.basicCompare;\r\n};\r\n\r\nSortableTable.prototype.destroy = function () {\r\n\tthis.uninitHeader();\r\n\tvar win = this.document.parentWindow;\r\n\tif (win && typeof win.detachEvent != \"undefined\") {\t// only IE needs this\r\n\t\twin.detachEvent(\"onunload\", this._onunload);\r\n\t}\r\n\tthis._onunload = null;\r\n\tthis.element = null;\r\n\tthis.tHead = null;\r\n\tthis.tBody = null;\r\n\tthis.document = null;\r\n\tthis._headerOnclick = null;\r\n\tthis.sortTypes = null;\r\n\tthis._asyncsort = null;\r\n\tthis.onsort = null;\r\n};\r\n\r\n// Adds a sort type to all instance of SortableTable\r\n// sType : String - the identifier of the sort type\r\n// fGetValueFromString : function ( s : string ) : T - A function that takes a\r\n//    string and casts it to a desired format. If left out the string is just\r\n//    returned\r\n// fCompareFunction : function ( n1 : T, n2 : T ) : Number - A normal JS sort\r\n//    compare function. Takes two values and compares them. If left out less than,\r\n//    <, compare is used\r\n// fGetRowValue : function( oRow : HTMLTRElement, nColumn : int ) : T - A function\r\n//    that takes the row and the column index and returns the value used to compare.\r\n//    If left out then the innerText is first taken for the cell and then the\r\n//    fGetValueFromString is used to convert that string the desired value and type\r\n\r\nSortableTable.prototype.addSortType = function (sType, fGetValueFromString, fCompareFunction, fGetRowValue) {\r\n\tthis._sortTypeInfo[sType] = {\r\n\t\ttype:\t\t\t\tsType,\r\n\t\tgetValueFromString:\tfGetValueFromString || SortableTable.idFunction,\r\n\t\tcompare:\t\t\tfCompareFunction || SortableTable.basicCompare,\r\n\t\tgetRowValue:\t\tfGetRowValue\r\n\t};\r\n};\r\n\r\n// this removes the sort type from all instances of SortableTable\r\nSortableTable.prototype.removeSortType = function (sType) {\r\n\tdelete this._sortTypeInfo[sType];\r\n};\r\n\r\nSortableTable.basicCompare = function compare(n1, n2) {\r\n\tif (n1.value < n2.value)\r\n\t\treturn -1;\r\n\tif (n2.value < n1.value)\r\n\t\treturn 1;\r\n\treturn 0;\r\n};\r\n\r\nSortableTable.idFunction = function (x) {\r\n\treturn x;\r\n};\r\n\r\nSortableTable.toUpperCase = function (s) {\r\n\treturn s.toUpperCase();\r\n};\r\n\r\nSortableTable.toDate = function (s) {\r\n\tvar parts = s.split(\"-\");\r\n\tvar d = new Date(0);\r\n\td.setFullYear(parts[0]);\r\n\td.setDate(parts[2]);\r\n\td.setMonth(parts[1] - 1);\r\n\treturn d.valueOf();\r\n};\r\n\r\n\r\n// add sort types\r\nSortableTable.prototype.addSortType(\"Number\", Number);\r\nSortableTable.prototype.addSortType(\"CaseInsensitiveString\", SortableTable.toUpperCase);\r\nSortableTable.prototype.addSortType(\"Date\", SortableTable.toDate);\r\nSortableTable.prototype.addSortType(\"String\");\r\n// None is a special case\r\n"

/***/ }

});
//# sourceMappingURL=tf-1.js.map