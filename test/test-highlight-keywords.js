
var tf = new TableFilter('demo', {
    base_path: '../dist/tablefilter/',
    highlight_keywords: true
});
tf.init();

var highlightKeyword = tf.Cpt.highlightKeyword;
module('Sanity checks');
test('HighlightKeyword component', function() {
    deepEqual(typeof highlightKeyword, 'object', 'Instanciated');
    deepEqual(highlightKeyword.highlightedNodes instanceof Array, true, 'Property check');
});

test('Highlighted keywords', function() {
    tf.setFilterValue(1, 'Perth');
    tf.setFilterValue(3, '3.1');
    tf._filter();
    deepEqual(highlightKeyword.highlightedNodes.length, 2, 'Number of highlighted words');

    tf._clearFilters();
    tf._filter();
    deepEqual(highlightKeyword.highlightedNodes.length, 0, 'Number of highlighted words');
});
