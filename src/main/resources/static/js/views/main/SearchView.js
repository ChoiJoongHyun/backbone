import SearchModel from '../../models/main/SearchModel';
import SearchCollection from '../../collections/main/SearchCollection';
import ListView from './ListView';
export default Backbone.View.extend({

    el: $("#search"),

    events:{
        "click #search": "search"
    },

    initialize: function(){
        console.log("SearchView view init");
        this.collection = new SearchCollection();
        this.listenTo(this.collection, 'sync', this.render);
        this.listView = new ListView();

        this.render();
    },

    search: function(e){
        e.preventDefault();
        let content = this.$('#content').val();
        console.log("search content : " + content);
        this.collection.fetch({ data: { q: content} });
    },

    render:function () {
        console.log("render gogo");
        console.log("search content : " + this.collection.length);
        this.$el.append(this.listView.render(this.collection).el);
        return this;
    }
});