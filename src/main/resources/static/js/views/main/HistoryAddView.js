import HistoryTemplate from '../../../../templates/main/historyTemplate.hbs'
import HistoryCollection from '../../collections/main/HistoryCollection'
import HistoryView from './HistoryView'
export default Backbone.View.extend({

    el: $("#history"),

    initialize: function(){
        console.log("History view init");
        this.template = HistoryTemplate;
        this.collection = new HistoryCollection();
//        this.listenTo(this.collection, 'add', this.render);
    },

    render:function () {
        console.log("History render");
        //this.$el.append(this.template());
        return;
    },

    addHistory:function (model) {
        console.log("addHistory");
        this.collection.add(model);
        let historyView = new HistoryView(model);
        this.$el.append(historyView.render().el);
    }
});

