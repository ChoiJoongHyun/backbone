import SearchView from './SearchView';
import ListView from './ListView';
export default Backbone.View.extend({
    el: $("#main"),

    initialize: function(){
        console.log("Main view init");

        let searchView = new SearchView();
        let listView = new ListView();

        console.log(searchView.el);
        console.log(listView.el);
    }
});

