import SearchView from './SearchView';
import HistoryView from './HistoryView';
export default Backbone.View.extend({
    el: $("#main"),

    initialize: function(){
        console.log("Main view init");

        let searchView = new SearchView();
        let historyView = new HistoryView();

        console.log(searchView.el);
        console.log(historyView.el);
    }
});

