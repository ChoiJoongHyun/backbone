import SearchModel from '../../models/main/SearchModel';
import SearchCollection from '../../collections/main/SearchCollection';
import ListView from './ListView';
import HistoryView from './HistoryView';
import HistoryAddView from './HistoryAddView';
import HistoryCollection from '../../collections/main/HistoryCollection';
import HistoryModel from '../../models/main/HistoryModel';
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
        this.historyView = new HistoryView();

        this.render();
    },


    search: function(e){
        e.preventDefault();
        let content = this.$('#content').val();

        if(content === '') {
            return;
        }

        console.log("search content : " + content);
        this.collection.fetch({ data: { q: content} });


        var yyyymmdd = moment().format('YYYY-MM-DD hh:mm:ss')

        this.historyView.addHistory(new HistoryModel({
            content: content,
            date: yyyymmdd}));
    },

    render:function () {
        console.log("render gogo");
        console.log("search content : " + this.collection.length);
        this.$el.append(this.listView.render(this.collection).el);
        return this;
    }
});