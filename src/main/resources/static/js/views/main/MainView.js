import SearchView from './SearchView';
import ListView from './ListView';
import HistoryView from './HistoryView';
export default Backbone.View.extend({
    el: $("#main"),

    initialize: function(){
        console.log("Main view init");

        let searchView = new SearchView();
        let listView = new ListView();
        let historyView = new HistoryView();

        console.log(searchView.el);
        console.log(listView.el);
        console.log(historyView.el);
    }
});

